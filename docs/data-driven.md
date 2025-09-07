---
id: data-driven
title: Data Driven Tests
sidebar_label: Data Driven
---

# Data-Driven Testing

Restlyn supports dynamic test generation from CSV or JSON files to cover multiple test cases in a single scenario.

---

## 🧪 Gherkin Format

Use this syntax in your `.feature` file:

```gherkin
When I POST "/login" using data from "loginData.csv"
```

> Restlyn will look inside the `data/` folder by default.

---

## 📁 Default Data Folder

```
data/
```

Override in `.restlynrc`:

```ini
[test]
data = my-test-data
```

---

## 📄 Supported Formats

### ✅ CSV

```csv
email,password,testName
user1@example.com,pass123,Valid user
user2@example.com,wrong,Invalid password
```

### ✅ JSON

```json
[
  { "email": "user1@example.com", "password": "pass123", "testName": "Valid user" },
  { "email": "user2@example.com", "password": "wrong", "testName": "Invalid password" }
]
```

---

## 🚀 Output Behavior

Restlyn will:

* Create a looped test block
* Use `testName` as the test case label if present
* Inject `row` data into the request body
* Support `row.skip = true` to skip specific entries

---

## 💡 Inline vs File-based

If both a Gherkin data table and file are specified:

* **File takes precedence**
* A warning will be logged to avoid confusion

---

## 🧬 Combining with Schema Validation

Each iteration will:

* Be validated against the expected response status
* Optionally validate against a `.schema.json` contract

---

Data-driven tests help you validate edge cases, boundaries, and regressions — fast!

➡️ Next: [Advanced Tags & Control](./advanced.md)


<!-- ---
id: data-driven
title: Data-Driven Tests
sidebar_label: Data-Driven
---

# Data-Driven Testing

Restlyn supports iterating test scenarios using CSV or JSON data.

---

## ✅ Feature Syntax

```gherkin
Scenario: Login using multiple accounts
  When I POST "/login" using data from "loginData.csv"
  Then response status should be 200
```

> Step should include: `using data from "..."`

---

## 📁 Supported Formats

- `data/loginData.csv`
- `data/loginData.json`

### Example: CSV
```csv
email,password,testName
alice@example.com,secret,Alice login
bob@example.com,pass123,Bob login
```

### Example: JSON
```json
[
  { "email": "alice@example.com", "password": "secret", "testName": "Alice login" },
  { "email": "bob@example.com", "password": "pass123", "testName": "Bob login" }
]
```

---

## 🚫 Skipping Rows
Add a `skip` column to your CSV/JSON row to skip it:
```json
{ "email": "bad@user", "password": "fail", "skip": true }
```

---

## ⚠️ Inline vs External Data
If both inline table and file are used, file takes precedence.

> Warning is logged when inline table is ignored

➡️ Next: [Advanced Tags & Control](./advanced.md) -->
