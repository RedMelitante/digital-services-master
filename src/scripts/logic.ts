/**
 * Page state logic, ported from the Claude Design components.
 *
 * Every page declares a logic name (BaseLayout `logic` prop). The values it
 * returns feed the `{{name}}` templates kept in `data-b-*` attributes:
 *  - at build time (`ssrValues`) to render the initial HTML, and
 *  - in the browser (src/scripts/bindings.ts) whenever state changes.
 */
import { FAQ_GROUPS } from '../data/faq';

export type State = Record<string, unknown>;
export type Values = Record<string, unknown>;
export type SetState = (patch: State) => void;

export interface Logic {
  init(): State;
  values(state: State, set: SetState): Values;
}

/** Shared by every page: mobile menu, share buttons and the article TOC. */
function withBase(v: Values, st: State, set: SetState): Values {
  v.menuOpen = !!st.menuOpen;
  v.toggleMenu = () => set({ menuOpen: !st.menuOpen });
  v.shareFb = () => {
    try {
      window.open(
        'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href),
        '_blank',
        'noopener',
      );
    } catch {
      /* ignore */
    }
  };
  v.copyLink = () => {
    try {
      navigator.clipboard?.writeText(window.location.href);
    } catch {
      /* ignore */
    }
    set({ copied: true });
    setTimeout(() => set({ copied: false }), 1600);
  };
  v.copyLabel = st.copied ? 'Link copied' : 'Copy link';
  v.tocOpen = !!st.tocOpen;
  v.toggleToc = () => set({ tocOpen: !st.tocOpen });
  v.tocCls = st.tocOpen ? 'toc open' : 'toc';
  v.tocBtnCls = st.tocOpen ? 'toc-btn open' : 'toc-btn';
  return v;
}

/** FAQ accordion with `count` items; the first item starts open. */
function accordion(v: Values, st: State, set: SetState, count: number): Values {
  const open = st.open;
  for (let i = 0; i < count; i++) {
    v['open' + i] = open === i;
    v['rot' + i] = open === i ? 'rotate(180deg)' : 'rotate(0deg)';
    v['toggle' + i] = () => set({ open: open === i ? -1 : i });
  }
  return v;
}

const base: Logic = {
  init: () => ({}),
  values: (st, set) => withBase({}, st, set),
};

const accordion4: Logic = {
  init: () => ({ open: 0 }),
  values: (st, set) => withBase(accordion({}, st, set, 4), st, set),
};

const accordion3: Logic = {
  init: () => ({ open: 0 }),
  values: (st, set) => withBase(accordion({}, st, set, 3), st, set),
};

const portfolio: Logic = {
  init: () => ({ filter: 'all' }),
  values: (st, set) => {
    const f = st.filter;
    const v: Values = {};
    const tabs: Record<string, string> = { All: 'all', A: 'aesthetic', D: 'dental', C: 'custom', E: 'ecommerce' };
    for (const k of Object.keys(tabs)) {
      const on = f === tabs[k];
      v['p' + k] = on;
      v['bg' + k] = on ? '#131A33' : 'transparent';
      v['fg' + k] = on ? '#FFFFFF' : '#3A4262';
      v['cb' + k] = on ? 'rgba(255,255,255,0.18)' : '#E3E8F4';
      v['set' + k] = () => set({ filter: tabs[k] });
    }
    v.showA = f === 'all' || f === 'aesthetic';
    v.showD = f === 'all' || f === 'dental';
    v.showC = f === 'all' || f === 'custom';
    v.showE = f === 'all' || f === 'ecommerce';
    return withBase(v, st, set);
  },
};

const blog: Logic = {
  init: () => ({ topic: 'All' }),
  values: (st, set) => {
    const t = st.topic;
    const v: Values = {};
    for (const k of ['All', 'CM', 'WD', 'SEO', 'AD', 'DM']) {
      const on = t === k;
      v['p' + k] = on;
      v['bg' + k] = on ? '#131A33' : 'transparent';
      v['fg' + k] = on ? '#FFFFFF' : '#3A4262';
      v['set' + k] = () => set({ topic: k });
      if (k !== 'All') v['s' + k] = t === 'All' || on;
    }
    v.sDT = t === 'All';
    return withBase(v, st, set);
  },
};

const contact: Logic = {
  init: () => ({ country: 'PH', web: true, seo: false, ads: false, ns: false, sent: false }),
  values: (s, set) => {
    const v: Values = { sent: !!s.sent, notSent: !s.sent };
    for (const c of ['PH', 'AU', 'OT']) {
      const on = s.country === c;
      v['c' + c] = on;
      v['bg' + c] = on ? '#FFFFFF' : 'transparent';
      v['fg' + c] = on ? '#131A33' : '#646B88';
      v['sh' + c] = on ? '0 2px 8px rgba(13,24,56,0.12)' : 'none';
      v['set' + c] = () => set({ country: c });
    }
    const chips: Record<string, string> = { Web: 'web', Seo: 'seo', Ads: 'ads', Ns: 'ns' };
    for (const k of Object.keys(chips)) {
      const key = chips[k];
      const on = !!s[key];
      v['s' + k] = on;
      v['bg' + k] = on ? '#3D66E4' : '#FFFFFF';
      v['fg' + k] = on ? '#FFFFFF' : '#3A4262';
      v['bd' + k] = on ? '#3D66E4' : '#DCE2EF';
      v['t' + k] = () => set({ [key]: !s[key] });
    }
    // Submission is handled by the form's submit listener (src/scripts/audit-form.ts).
    v.reset = () => set({ sent: false });
    return withBase(v, s, set);
  },
};

const pricing: Logic = {
  init: () => ({ svc: 'W', open: 0 }),
  values: (s, set) => {
    const k = s.svc === 'G' ? 'G' : 'W';
    const v: Values = {};
    for (const key of ['W', 'G']) {
      const on = k === key;
      v['p' + key] = on;
      v['bg' + key] = on ? '#131A33' : 'transparent';
      v['fg' + key] = on ? '#FFFFFF' : '#3A4262';
      v['set' + key] = () => set({ svc: key });
    }
    return withBase(accordion(v, s, set, 4), s, set);
  },
};

const faq: Logic = {
  init: () => ({ cat: 'All', open: 'g0' }),
  values: (s, set) => {
    const v: Values = {};
    const tabs = [{ key: 'All' }, ...FAQ_GROUPS.map((g) => ({ key: g.id }))];
    for (const t of tabs) {
      const on = s.cat === t.key;
      v[`tab_${t.key}_on`] = on;
      v[`tab_${t.key}_bg`] = on ? '#131A33' : 'transparent';
      v[`tab_${t.key}_fg`] = on ? '#FFFFFF' : '#3A4262';
      v[`pick_${t.key}`] = () => set({ cat: t.key });
    }
    for (const g of FAQ_GROUPS) {
      v[`show_${g.id}`] = s.cat === 'All' || s.cat === g.id;
      g.items.forEach((_, i) => {
        const id = g.id + i;
        const open = s.open === id;
        v[`open_${id}`] = open;
        v[`rot_${id}`] = open ? 'rotate(180deg)' : 'rotate(0deg)';
        v[`bg_${id}`] = open ? '#F6F8FE' : '#FFFFFF';
        v[`iconBg_${id}`] = open ? '#FFFFFF' : '#EEF3FF';
        v[`toggle_${id}`] = () => set({ open: open ? '' : id });
      });
    }
    return withBase(v, s, set);
  },
};

export const logics = {
  base,
  accordion3,
  accordion4,
  portfolio,
  blog,
  contact,
  pricing,
  faq,
} satisfies Record<string, Logic>;

export type LogicName = keyof typeof logics;

/** Values for the initial (server-rendered) state of a page. */
export function ssrValues(name: LogicName): Values {
  const logic: Logic = logics[name];
  return logic.values(logic.init(), () => {});
}
