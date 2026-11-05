import { getMetadata, renderPage } from './pages';
import { processStages, routes } from './content';

const path = window.location.pathname.replace(/\/+$/, '') || '/';
const validRoutes: readonly string[] = routes;
const pagePath = validRoutes.includes(path) ? path : '';
const offerSlug = new URLSearchParams(window.location.search).get('offer') ?? undefined;
const app = document.querySelector<HTMLDivElement>('#app');
if (app) app.innerHTML = renderPage(pagePath, offerSlug);
const meta = getMetadata(pagePath);
document.title = meta.title;
document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const menu = document.querySelector<HTMLButtonElement>('.menu-toggle');
const navigation = document.querySelector<HTMLElement>('#primary-navigation');
const previewItems = [...document.querySelectorAll<HTMLElement>('[data-nav-preview]')];
const previewButton = (item: HTMLElement) => item.querySelector<HTMLButtonElement>('[data-nav-preview-toggle]');
const previewVisible = (item: HTMLElement) => item.classList.contains('is-open')
  || item.classList.contains('is-focus-open')
  || (!item.classList.contains('is-dismissed') && item.matches(':hover'));
const syncPreview = (item: HTMLElement) => {
  const button = previewButton(item);
  if (!button) return;
  const expanded = previewVisible(item);
  button.setAttribute('aria-expanded', String(expanded));
  button.setAttribute('aria-label', `${expanded ? 'Hide' : 'Show'} preview of ${button.dataset.previewLabel ?? 'page'}`);
};
const closePreview = (item: HTMLElement, dismiss = false) => {
  item.classList.remove('is-open', 'is-focus-open');
  item.classList.toggle('is-dismissed', dismiss);
  syncPreview(item);
};
const closeOtherPreviews = (current: HTMLElement) => previewItems.forEach((item) => {
  if (item === current) return;
  closePreview(item, item.matches(':hover') || item.contains(document.activeElement));
});
const closeAllPreviews = () => previewItems.forEach((item) => closePreview(item));

previewItems.forEach((item) => {
  const button = previewButton(item);
  item.addEventListener('pointerenter', () => {
    closeOtherPreviews(item);
    item.classList.remove('is-dismissed');
    syncPreview(item);
  });
  item.addEventListener('pointerleave', () => {
    item.classList.remove('is-dismissed');
    syncPreview(item);
  });
  item.addEventListener('focusin', () => {
    closeOtherPreviews(item);
    if (!item.classList.contains('is-dismissed')) item.classList.add('is-focus-open');
    syncPreview(item);
  });
  item.addEventListener('focusout', (event) => {
    if (event.relatedTarget instanceof Node && item.contains(event.relatedTarget)) return;
    item.classList.remove('is-open', 'is-focus-open', 'is-dismissed');
    syncPreview(item);
  });
  button?.addEventListener('click', () => {
    if (item.classList.contains('is-open')) {
      closePreview(item, true);
      return;
    }
    closeOtherPreviews(item);
    item.classList.remove('is-dismissed', 'is-focus-open');
    item.classList.add('is-open');
    syncPreview(item);
  });
});

const setMenu = (open: boolean) => {
  menu?.setAttribute('aria-expanded', String(open));
  menu?.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation?.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
  if (!open) closeAllPreviews();
};
menu?.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('pointerdown', (event) => {
  const target = event.target;
  if (target instanceof Element && target.closest('[data-nav-preview]')) return;
  previewItems.forEach((item) => closePreview(item, item.matches(':hover') || item.contains(document.activeElement)));
});
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  const openPreview = previewItems.find(previewVisible);
  if (openPreview) {
    closePreview(openPreview, true);
    const button = previewButton(openPreview);
    const focusTarget = button && window.getComputedStyle(button).display !== 'none'
      ? button
      : openPreview.querySelector<HTMLAnchorElement>(':scope > a');
    focusTarget?.focus();
    event.preventDefault();
    return;
  }
  if (menu?.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menu.focus();
  }
});

const panel = document.querySelector<HTMLElement>('[data-stage-panel]');
const stageButtons = [...document.querySelectorAll<HTMLButtonElement>('[data-journey-step]')];
const title = document.querySelector<HTMLElement>('[data-stage-title]');
const description = document.querySelector<HTMLElement>('[data-stage-description]');
const artifact = document.querySelector<HTMLElement>('[data-stage-artifact]');
const detail = document.querySelector<HTMLElement>('[data-stage-detail]');
const stageName = document.querySelector<HTMLElement>('[data-stage-name]');

stageButtons.forEach((button) => button.addEventListener('click', () => {
  const index = Number(button.dataset.journeyStep);
  const stage = processStages[index];
  if (!stage) return;
  stageButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
  const update = () => {
    if (title) title.textContent = stage.title;
    if (description) description.textContent = stage.description;
    if (artifact) artifact.textContent = stage.artifact;
    if (detail) detail.textContent = stage.detail;
    if (stageName) stageName.textContent = `0${index + 1} / ${stage.name}`;
  };
  if (!panel || reducedMotion.matches) { update(); return; }
  import('gsap').then(({ gsap }) => {
    gsap.to(panel, { opacity: 0.45, y: 3, duration: 0.12, onComplete: () => {
      update();
      gsap.to(panel, { opacity: 1, y: 0, duration: 0.18, ease: 'power1.out' });
    } });
  }).catch(update);
}));
