---
id: reporting
title: Reporting
sidebar_label: Reporting
---

# Reporting

Restlyn provides detailed test execution reports in both **HTML** and **PDF** formats.

---

## 📄 How Reports Are Generated

After running your tests using:

```bash
restlyn verify --report
```

Restlyn will:

1. Run `.test.js` files using Mocha
2. Collect results, logs, metadata
3. Write a JSON summary to:

   ```
   generated/report/verify-report.json
   ```
4. Create:

   * `report.html` (interactive, collapsible view)
   * `report.pdf` (flat printable version)

Both are saved to:

```
generated/report/
```

---

## ✨ What’s Included in the Report

Each scenario in the report includes:

* ✅ **Status** (pass/fail)
* ⌛ **Duration** (ms)
* 📝 **Feature**, **Scenario**, and optional **Title**
* 🔖 **Tags** like `@debug`, `@retry`, `@skip`
* 🪜 **Steps** from `.feature`
* 📋 **Full Log Output**
* 🧾 **Schema validation errors** (if any)

---

## 🧾 HTML Report

* Auto-opens in browser after `--report`
* Fully collapsible per test case
* Log section expandable via `<details>`

---

## 📄 PDF Report

* Automatically saved alongside `report.html`
* Non-collapsible, always expanded for printing

---

## 🕒 Timestamp

Each report includes the test run timestamp (e.g., `2025-08-03T21:45:00Z`) under the header.

---

## 🔁 Retry Insights

If scenarios include `@retry(n)` tags:

* Retry count is visible in the test metadata
* Mocha's `.retries()` is applied

---

## 🧩 Behind the Scenes

* Generated using custom `verifyAllTests()` + `generateReport()`
* Uses `open` and `puppeteer` to open and export
* Supports inline logs, schema diffs, token capture traces

---

Use `restlyn verify --report` after every test run to stay informed!

➡️ Next: [Schema Validation](./schemas.md)
