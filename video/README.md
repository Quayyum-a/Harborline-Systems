# Harborline Systems promo video

`harborline-promo.mp4` is a silent 18.8 second landscape promotional video for the existing Harborline Systems website. It is encoded as H.264 MP4 at 1920 × 1080 and 30 fps. It is intended as a website or presentation asset, not a published advertisement.

The four information states introduce the studio and Lagos location, explain the primary confidential agency engineering offer and its $750 paid pilot, present direct business software, AI and automation with the $200 audit entry point, then close on the approved website and email contact. The wording uses the supplied website content and does not add client claims. Photography is labeled as illustrative stock imagery, not client work.

## Re-render

From the website project root, run `python3 video/create_promo.py`. The script reads the supplied images in `public/images/`, the exact `public/favicon.svg` mark, the local DM font files in `video/assets/`, and writes `video/harborline-promo.mp4`. It requires Python 3, Pillow, CairoSVG and FFmpeg with H.264 encoding support. Install the Python requirements with `python3 -m pip install -r video/requirements.txt`.

The website's `IMAGE-CREDITS.md` contains the original stock image sources and license notes. The DM Sans and DM Serif Display font files are distributed under the SIL Open Font License; copies of both license files are included in `video/assets/`.

The video contains no audio track. The `review_frames/` folder used during QA is not required to regenerate it.
