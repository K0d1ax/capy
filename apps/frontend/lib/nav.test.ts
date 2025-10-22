import { describe, it, expect } from 'vitest';
import { NAV_ITEMS } from './nav';

const labels = [
  'Landing Pages',
  'Funnels',
  'Courses',
  'Popups',
  'Quizzes',
  'Bios',
  'Linktrees',
  'Templates',
  'Leads',
  'Settings',
  'Account',
];

describe('NAV_ITEMS', () => {
  it('contains all required labels', () => {
    const found = NAV_ITEMS.map((i) => i.label);
    for (const l of labels) expect(found).toContain(l);
  });
});
