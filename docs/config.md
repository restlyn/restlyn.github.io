---
id: config
title: Configuration
sidebar_label: Configuration
---

# Configuration

Restlyn reads its config from a `.restlynrc` file in the project root.

---

## 🛠 Supported Format

Use INI-style:
```ini
[paths]
features = features/
tests = generated/tests
stepmaps = generated/stepmaps
schemas = schemas/
data = data/
report = generated/report

[baseUrls]
local = http://localhost:4000
prod = https://api.example.com

[settings]
localMode = true
timeout = 5000

[headers]
Authorization = Bearer sample-token
```

---

## 🗂 Folder Structure

Default structure:
```
features/
  login.feature
schemas/
  user.schema.json
data/
  login.csv
generated/
  stepmaps/
  tests/
  report/
```
---

## 🌐 Environment

* `localMode`: If `true`, use `baseUrls.local` by default
* `baseUrls.local`: Base URL for local/mock testing
* `baseUrls.prod`: Base URL for production testing

---

## 📊 Reporting

* `report.path`: Output folder for report files

---

## 🕹 Runtime Override

You can override parts of the config via CLI flags:

```bash
restlyn tests --schemas schemas-prod/
restlyn verify --generated custom-tests/
```

> CLI overrides always take precedence.

---

## 🔁 Reloading
You can update `.restlynrc` without restarting anything — it’s read dynamically.
Use `.restlynrc` to streamline test generation and execution in all environments.

➡️ That’s it! You're ready to automate API tests from Gherkin to report 🚀
