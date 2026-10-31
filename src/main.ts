import { getMetadata, renderPage } from './pages';
import { processStages } from './content';

const path = window.location.pathname.replace(/\/+$/, '') || '/';
const validRoutes = ['/', '/agencies', '/businesses', '/services', '/how-it-works'];
const pagePath = validRoutes.includes(path) ? path : '';
const app = document.querySelector<HTMLDivElement>('#app');
if (app) app.innerHTML = renderPage(pagePath);
const meta = getMetadata(pagePath);
document.title = meta.title;
document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const menu = document.querySelector<HTMLButtonElement>('.menu-toggle');
const navigation = document.querySelector<HTMLElement>('#primary-navigation');
const setMenu = (open: boolean) => {
  menu?.setAttribute('aria-expanded', String(open));
  menu?.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation?.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
};
menu?.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
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
