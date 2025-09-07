---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

# Getting Started

Welcome to **Restlyn**, the Gherkin-powered test generation framework for REST API and contract testing.

---

## ✨ Why Restlyn?

- ✅ Write tests using simple Gherkin `.feature` files
- ✅ Auto-generate Mocha-based test code
- ✅ Supports schema validation, token handling, retries
- ✅ HTML + PDF reports out of the box

---

## 📦 Installation

```bash
npm install -g restlyn
```

> You can also install locally and use `npx restlyn ...`

---

## 🧪 Quick Example

**`features/login.feature`**
```gherkin
Feature: Login API

  Scenario: Valid login
    Given base URL is "https://reqres.in/api"
    When I POST "/login" with:
      | email    | eve.holt@reqres.in |
      | password | cityslicka         |
    Then response status should be 200
    And response body should contain key "token"
```

Then run:
```bash
restlyn steps --file features/login.feature
restlyn tests
restlyn verify --report
```

---

## 📂 Folder Structure

```bash
my-project/
├── features/             # Your Gherkin feature files
├── generated/
│   ├── stepmaps/         # Auto-generated .stepMap.json files
│   └── tests/            # Auto-generated test files
├── schemas/              # Optional JSON schemas for contract testing
└── .restlynrc            # Optional config file
```

➡️ Next: [Writing Gherkin](./writing-gherkin.md)
