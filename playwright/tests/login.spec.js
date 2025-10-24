import { test, expect } from '@playwright/test';

test.describe('Login Kesemua Role', () => {
    const roles = {
        admin: { username: 'adriano', password: 'dosen123' },
        dosen_pembimbing: { username: 'evangeline', password: 'dosen123' },
        mahasiswa: { username: 'Arkana', password: 'mahasiswa123' },
    };

    for (const [role, creds] of Object.entries(roles)) {
        test(`${role} berhasil login`, async ({ page }) => {
            await page.goto('/login');

            await page.fill('input[name="username"]', creds.username);
            await page.fill('input[name="password"]', creds.password);
            await page.click('button[type="submit"]');

            await expect(page).toHaveURL(new RegExp(`/${role}/dashboard`));
        });
    }
});
