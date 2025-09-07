---
id: writing-gherkin
title: Writing Gherkin
sidebar_label: Writing Gherkin
---

# Writing Gherkin

Restlyn uses Gherkin `.feature` files as the source of truth for generating API tests.

---

## ✏️ Gherkin Syntax Basics

```gherkin
Feature: Title of the feature

  Scenario: Title of the test case
    Given base URL is "https://api.example.com"
    When I POST "/login" with:
      | email    | test@example.com |
      | password | secret           |
    Then response status should be 200
    And response body should contain key "token"
```

---

## 🧱 Supported Steps

### ✅ Base URL
```gherkin
Given base URL is "https://example.com"
```

### ✅ Request with body
```gherkin
When I POST "/login" with:
  | email    | test@example.com |
  | password | secret           |
```

### ✅ Status Assertion
```gherkin
Then response status should be 200
```

### ✅ Contains Assertion
```gherkin
And response body should contain key "token"
```

### ✅ Schema Validation
```gherkin
And response should match schema "userSchema"
```

---

## ♻️ Reusable Steps

Define reusable steps in `stepLibrary.js` like:
```js
module.exports = {
  'I am logged in': {
    steps: [
      { method: 'POST', endpoint: '/login', body: { email: 'test@example.com', password: 'secret' }, extract: ['token'] }
    ]
  }
}
```
Then reference in feature:
```gherkin
When I am logged in
```

➡️ Next: [CLI Commands](./cli.md)
