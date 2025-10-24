# Playwright E2E tests

Quick start

1. Install deps from this folder:

```bash
cd playwright
npm install
```

2. Start the Laravel app (in project root):

```bash
php artisan serve
```

3. Run tests:

```bash
cd playwright
npm test
```

4. Show report in browser(after tests run):

```bash
npm show-report
```

Environment
- PLAYWRIGHT_BASE_URL: base URL for the app (defaults to http://localhost:8000)

Notes
- Tests expect the app to be reachable at the configured base URL.
