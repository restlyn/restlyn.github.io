---
id: advanced
title: Advanced Tags & Control
sidebar_label: Advanced Tags
---

# Advanced Tags & Control

Restlyn supports fine-grained test control using scenario-level tags.

---

## 🏷️ Available Tags

### `@only`
Run this scenario only:
```gherkin
@only
Scenario: Login happy path
```

### `@skip`
Skip this scenario:
```gherkin
@skip
Scenario: Broken case
```

### `@debug`
Enable debug logging (e.g., print full response):
```gherkin
@debug
Scenario: Print full response
```

### `@retry(n)`
Retry failed test `n` times:
```gherkin
@retry(2)
Scenario: Retry if flaky
```
---

## 📋 Tag Output
Tags appear in:
- `verify-report.json`
- HTML & PDF reports

---

## ⚠️ Invalid Tags
Typos like `@onlyy` are ignored with a warning.


### `@title:"My Custom Title"`

Overrides the default scenario title in test reports.

```gherkin
@title:"User Login Flow"
Scenario: Log in and check profile
```

---

## ✅ Where to Place Tags

Tags must be placed **above the `Scenario:` line** in your `.feature` file.

```gherkin
Feature: Authentication

@retry(2) @debug @title:"Login API Check"
Scenario: Validate login
  Given base URL is "https://api.example.com"
  When I POST "/login" with:
    | email | user@example.com |
    | password | secret |
  Then response status should be 200
```

---

## 🧪 Combining Tags

You can combine multiple tags as needed — Restlyn will interpret them correctly.

---

## 🧩 Future Support (Planned)

* `@group:` for grouping tests
* `@env:` for inline environment overrides

---

Tags make Restlyn flexible for real-world workflows and CI pipelines!

➡️ Next: [Configuration](./config.md)
