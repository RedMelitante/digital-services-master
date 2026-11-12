/**
 * Tiny interaction runtime.
 *
 * Elements rendered with a `data-b` marker carry their design templates:
 *   data-b-<attr>="… {{value}} …"  → attribute re-rendered on state change
 *   data-b-if="value"               → element hidden while value is falsy
 *   data-b-click="handler"          → handler called on click
 * Values come from the page logic in ./logic.ts, so the browser always shows
 * exactly what the server rendered for the same state.
 */
import { logics, type Logic, type LogicName, type State, type Values } from './logic';

const TPL = /\{\{\s*([\w.]+)\s*\}\}/g;

function lookup(v: Values, path: string): unknown {
  return path.split('.').reduce<unknown>((o, k) => (o == null ? undefined : (o as Values)[k]), v);
}

export function mount(name: string): void {
  const logic: Logic = logics[name as LogicName] ?? logics.base;
  let state: State = logic.init();
  let values: Values = {};

  const set = (patch: State) => {
    state = { ...state, ...patch };
    render();
  };

  function render() {
    values = logic.values(state, set);
    document.querySelectorAll<HTMLElement>('[data-b]').forEach((el) => {
      for (const { name: attr, value } of Array.from(el.attributes)) {
        if (!attr.startsWith('data-b-')) continue;
        const target = attr.slice(7);
        if (target === 'click') continue;
        if (target === 'if') {
          el.hidden = !lookup(values, value);
          continue;
        }
        const next = value.replace(TPL, (_, p: string) => String(lookup(values, p) ?? ''));
        if (el.getAttribute(target) !== next) el.setAttribute(target, next);
      }
    });
  }

  document.addEventListener('click', (event) => {
    const target = (event.target as Element | null)?.closest?.('[data-b-click]');
    if (!target) return;
    const handler = lookup(values, target.getAttribute('data-b-click') ?? '');
    if (typeof handler === 'function') handler();
  });

  // Close the mobile menu with Escape, or when one of its links is followed.
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && state.menuOpen) set({ menuOpen: false });
  });
  document.addEventListener('click', (event) => {
    const link = (event.target as Element | null)?.closest?.('nav[aria-label="Mobile menu"] a');
    if (link && state.menuOpen) set({ menuOpen: false });
  });

  // Other scripts (e.g. the audit form) can update state with this event.
  document.addEventListener('dc:set', (event) => set((event as CustomEvent<State>).detail));

  render();
}
