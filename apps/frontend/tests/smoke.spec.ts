import { test, expect } from '@playwright/test';

const entries = [
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

test('dashboard and nav render, Leads shows table headers', async ({ page }) => {
  await page.goto('/dashboard');

  for (const label of entries) {
    await expect(page.getByRole('link', { name: label })).toBeVisible();
  }

  await page.getByRole('link', { name: 'Leads' }).click();

  for (const header of ['Name', 'Email', 'Phone', 'Source', 'Tags', 'Status', 'Created']) {
    await expect(page.getByRole('columnheader', { name: header })).toBeVisible();
  }
});
