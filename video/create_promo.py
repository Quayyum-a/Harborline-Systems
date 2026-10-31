#!/usr/bin/env python3
"""Render a silent 19 second Harborline Systems motion graphics promo."""
from __future__ import annotations

import math
import io
import subprocess
import sys
from pathlib import Path
import cairosvg
from PIL import Image, ImageDraw, ImageFont, ImageOps

PROJECT = Path(__file__).resolve().parents[1]
ASSETS = Path(__file__).resolve().parent / "assets"
OUTPUT = Path(__file__).resolve().parent / "harborline-promo.mp4"
WIDTH, HEIGHT, FPS = 1920, 1080, 30
SCENE_SECONDS = 5.0
TRANSITION_SECONDS = 0.4
TOTAL_SECONDS = len(range(4)) * SCENE_SECONDS - 3 * TRANSITION_SECONDS

PAPER = "#F5F2E9"
BRIGHT = "#FBFAF6"
INK = "#18302D"
SLATE = "#5E7068"
SEA = "#146A67"
PALE = "#E7EEE5"
CLAY = "#BC7653"
WHITE = "#FFFEFA"

FONT_SANS = ASSETS / "DM-Sans-400.ttf"
FONT_MEDIUM = ASSETS / "DM-Sans-500.ttf"
FONT_BOLD = ASSETS / "DM-Sans-700.ttf"
FONT_DISPLAY = ASSETS / "DM-Serif-Display.ttf"
BRAND_ICON = Image.open(io.BytesIO(cairosvg.svg2png(url=str(PROJECT / "public/favicon.svg"), output_width=58, output_height=58))).convert("RGBA")

photos = [
    Image.open(PROJECT / "public/images/designer-at-work.webp").convert("RGB"),
    Image.open(PROJECT / "public/images/designer-at-work.webp").convert("RGB"),
    Image.open(PROJECT / "public/images/warehouse-conversation.webp").convert("RGB"),
]

def font(path: Path, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(path), size)

def fit_lines(text: str, typeface: ImageFont.FreeTypeFont, max_width: int) -> list[str]:
    lines: list[str] = []
    for paragraph in text.split("\n"):
        line = ""
        for word in paragraph.split():
            candidate = (line + " " + word).strip()
            if line and ImageDraw.Draw(Image.new("RGB", (1, 1))).textlength(candidate, font=typeface) > max_width:
                lines.append(line)
                line = word
            else:
                line = candidate
        lines.append(line)
    return lines

def add_wrapped(draw: ImageDraw.ImageDraw, xy: tuple[int, int], text: str,
                typeface: ImageFont.FreeTypeFont, fill: str, max_width: int,
                spacing: int = 10, line_override: list[str] | None = None) -> int:
    x, y = xy
    lines = line_override or fit_lines(text, typeface, max_width)
    for line in lines:
        draw.text((x, y), line, font=typeface, fill=fill)
        y += typeface.size + spacing
    return y

def wordmark(canvas: Image.Image, draw: ImageDraw.ImageDraw, x: int, y: int, inverse: bool = False) -> None:
    mark_size = 58
    canvas.paste(BRAND_ICON, (x, y), BRAND_ICON)
    color = WHITE if inverse else INK
    mute = "#B9C7BB" if inverse else SLATE
    label_font = font(FONT_BOLD, 34)
    secondary = font(FONT_SANS, 34)
    draw.text((x + mark_size + 20, y + 4), "Harborline", font=label_font, fill=color)
    offset = int(draw.textlength("Harborline ", font=label_font))
    draw.text((x + mark_size + 20 + offset, y + 4), "Systems", font=secondary, fill=mute)

def ease(value: float) -> float:
    value = min(1.0, max(0.0, value))
    return value * value * (3 - 2 * value)

def photo_crop(image: Image.Image, box: tuple[int, int, int, int], t: float,
               reverse: bool = False) -> Image.Image:
    x, y, width, height = box
    amount = min(1.0, max(0.0, t / SCENE_SECONDS))
    zoom = 1.015 + 0.027 * ease(amount)
    scaled = ImageOps.fit(image, (int(width * zoom), int(height * zoom)),
                          method=Image.Resampling.LANCZOS, centering=(0.51, 0.49))
    max_x = max(0, scaled.width - width)
    max_y = max(0, scaled.height - height)
    drift = int(math.sin(amount * math.pi / 2) * min(14, max_x / 2))
    left = max(0, min(max_x, (max_x - drift) if reverse else (max_x / 2 + drift)))
    top = max(0, min(max_y, max_y / 2))
    return scaled.crop((int(left), int(top), int(left) + width, int(top) + height))

def draw_photo(canvas: Image.Image, image: Image.Image, box: tuple[int, int, int, int],
               t: float, reverse: bool = False) -> None:
    x, y, w, h = box
    layer = ImageDraw.Draw(canvas)
    layer.rectangle((x + 20, y + 20, x + w + 20, y + h + 20), fill="#E3DED1")
    canvas.paste(photo_crop(image, box, t, reverse), (x, y))
    layer = ImageDraw.Draw(canvas)
    layer.line((x, y + h + 17, x + w, y + h + 17), fill=CLAY, width=2)

def label(draw: ImageDraw.ImageDraw, x: int, y: int, text: str) -> None:
    draw.rectangle((x, y + 10, x + 44, y + 12), fill=SEA)
    draw.text((x + 62, y), text, font=font(FONT_BOLD, 20), fill=SEA, stroke_width=0)

def scene_frame(index: int, local_t: float) -> Image.Image:
    base_colors = [PAPER, BRIGHT, PALE, INK]
    canvas = Image.new("RGB", (WIDTH, HEIGHT), base_colors[index])
    if index == 0:
        draw = ImageDraw.Draw(canvas)
        wordmark(canvas, draw, 130, 65)
        label(draw, 130, 188, "LAGOS, NIGERIA")
        draw.text((130, 229), "SEVEN YEARS AND COUNTING", font=font(FONT_BOLD, 19), fill=SLATE)
        h1 = font(FONT_DISPLAY, 92)
        add_wrapped(draw, (130, 300), "We turn complex technology problems into working solutions.", h1, INK, 1510, 7,
                    ["We turn complex", "technology problems into", "working solutions."])
        add_wrapped(draw, (130, 640), "Engineering delivery for agencies. Practical software, AI and automation for businesses.",
                    font(FONT_SANS, 31), SLATE, 1370, 9,
                    ["Engineering delivery for agencies.", "Practical software, AI and automation for businesses."])
        draw.text((130, 860), "Two clear ways to work together", font=font(FONT_MEDIUM, 23), fill=SEA)
    elif index == 1:
        draw_photo(canvas, photos[1], (110, 248, 760, 506), local_t, True)
        draw = ImageDraw.Draw(canvas)
        wordmark(canvas, draw, 130, 65)
        label(draw, 990, 202, "FOR AGENCIES")
        h1 = font(FONT_DISPLAY, 66)
        add_wrapped(draw, (990, 280), "Your agency can take on more work. Without hiring another developer.", h1,
                    INK, 760, 8, ["Your agency can", "take on more work.", "Without hiring another", "developer."])
        add_wrapped(draw, (990, 584), "Confidential engineering capacity, working behind your brand.",
                    font(FONT_SANS, 25), SLATE, 720, 7,
                    ["Confidential engineering", "capacity, behind your brand."])
        draw.text((990, 755), "Paid pilot   $750 once", font=font(FONT_DISPLAY, 38), fill=SEA)
        draw.text((990, 815), "Two weeks, up to 30 hours", font=font(FONT_MEDIUM, 24), fill=INK)
        draw.text((110, 786), "Illustrative stock photography", font=font(FONT_SANS, 16), fill=SLATE)
        draw.text((990, 935), "harborlinesystems.ltd/agencies", font=font(FONT_MEDIUM, 21), fill=SEA)
    elif index == 2:
        draw_photo(canvas, photos[2], (1040, 242, 760, 506), local_t)
        draw = ImageDraw.Draw(canvas)
        wordmark(canvas, draw, 130, 65)
        label(draw, 130, 196, "FOR BUSINESSES")
        h1 = font(FONT_DISPLAY, 68)
        add_wrapped(draw, (130, 276), "Tell us what is slowing your business down.", h1, INK, 850, 8,
                    ["Tell us what is", "slowing your", "business down."])
        add_wrapped(draw, (130, 552), "Practical software, AI and automation for the work that repeats, blocks or takes too long.",
                    font(FONT_SANS, 25), SLATE, 805, 7,
                    ["Practical software, AI and", "automation for the work that", "repeats, blocks or takes too long."])
        draw.text((130, 755), "Automation audit   $200", font=font(FONT_DISPLAY, 38), fill=SEA)
        draw.text((130, 815), "Custom software receives a written quotation.", font=font(FONT_MEDIUM, 21), fill=INK)
        draw.text((1040, 786), "Illustrative stock photography", font=font(FONT_SANS, 16), fill=SLATE)
        draw.text((130, 935), "harborlinesystems.ltd/businesses", font=font(FONT_MEDIUM, 21), fill=SEA)
    else:
        draw = ImageDraw.Draw(canvas)
        draw.rectangle((0, 0, 24, HEIGHT), fill=SEA)
        wordmark(canvas, draw, 130, 92, inverse=True)
        draw.text((130, 270), "Start with what", font=font(FONT_DISPLAY, 86), fill=WHITE)
        draw.text((130, 374), "needs to move.", font=font(FONT_DISPLAY, 86), fill="#A8CFBC")
        draw.rectangle((130, 530, 260, 534), fill=CLAY)
        draw.text((130, 604), "hello@harborlinesystems.ltd", font=font(FONT_MEDIUM, 34), fill=WHITE)
        draw.text((130, 678), "harborlinesystems.ltd", font=font(FONT_SANS, 29), fill="#D0DAD2")
        draw.text((130, 860), "Harborline Systems", font=font(FONT_BOLD, 20), fill="#B9C7BB")
        draw.text((130, 900), "Lagos, Nigeria", font=font(FONT_SANS, 18), fill="#B9C7BB")

    # A quiet editorial progress rule links the four information states.
    draw = ImageDraw.Draw(canvas)
    track_x, track_y, track_w = 130, 1020, 1660
    draw.rectangle((track_x, track_y, track_x + track_w, track_y + 2), fill="#AAB7AD" if index != 3 else "#40534B")
    progress = min(1.0, max(0.0, local_t / SCENE_SECONDS))
    draw.rectangle((track_x, track_y, track_x + int(track_w * progress), track_y + 4), fill=SEA if index != 3 else "#A8CFBC")
    return canvas

def frame_at(t: float) -> Image.Image:
    stride = SCENE_SECONDS - TRANSITION_SECONDS
    index = min(3, int(t / stride))
    local_t = t - index * stride
    if index < 3 and local_t >= SCENE_SECONDS - TRANSITION_SECONDS:
        mix = ease((local_t - (SCENE_SECONDS - TRANSITION_SECONDS)) / TRANSITION_SECONDS)
        current = scene_frame(index, local_t)
        next_frame = scene_frame(index + 1, mix * 0.65)
        frame = Image.blend(current, next_frame, mix)
    else:
        frame = scene_frame(index, min(local_t, SCENE_SECONDS))
    if t < 0.25:
        frame = Image.blend(Image.new("RGB", (WIDTH, HEIGHT), INK), frame, ease(t / 0.25))
    if t > TOTAL_SECONDS - 0.3:
        frame = Image.blend(frame, Image.new("RGB", (WIDTH, HEIGHT), INK), ease((t - (TOTAL_SECONDS - 0.3)) / 0.3))
    return frame

def main() -> None:
    for path in (FONT_SANS, FONT_MEDIUM, FONT_BOLD, FONT_DISPLAY):
        if not path.exists():
            raise FileNotFoundError(f"Missing video font: {path}")
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    cmd = [
        "ffmpeg", "-y", "-f", "rawvideo", "-vcodec", "rawvideo", "-pix_fmt", "rgb24",
        "-s", f"{WIDTH}x{HEIGHT}", "-r", str(FPS), "-i", "-", "-an", "-c:v", "libx264",
        "-preset", "medium", "-crf", "18", "-pix_fmt", "yuv420p", "-movflags", "+faststart",
        str(OUTPUT),
    ]
    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE)
    assert proc.stdin is not None
    frame_count = round(TOTAL_SECONDS * FPS)
    for frame_no in range(frame_count):
        t = frame_no / FPS
        frame = frame_at(t).convert("RGB")
        proc.stdin.write(frame.tobytes())
        if frame_no % (FPS * 3) == 0:
            print(f"Rendered {frame_no}/{frame_count} frames", flush=True)
    proc.stdin.close()
    status = proc.wait()
    if status != 0:
        raise SystemExit(status)
    print(f"Saved {OUTPUT} ({TOTAL_SECONDS:.2f}s, {WIDTH}x{HEIGHT}, {FPS}fps, silent)")

if __name__ == "__main__":
    main()
