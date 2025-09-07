---
id: quick-example
title: Quick Example
description: Minimal end-to-end example from Gherkin to generated tests and report.
---

This page shows a minimal flow from a `.feature` file to a generated `.stepMap.json`, to executables `.test.js` files, and a final report.

## 0) Install

Global:

```bash
npm install -g restlyn
```

Or per‑project:

```bash
npm install --save-dev restlyn
```

Then use `restlyn ...` (global) or `npx restlyn ...` (local).

## 1) Create `features/user.feature`:

```gherkin
Feature: Users

  Scenario: Get user by id
    Given base URL is "https://reqres.in/api"
    When I GET "/users/2"
    Then response status should be 200
    And response body should contain key "data"
```

## 2) Generate step maps:

Global install:

```bash
restlyn steps --output generated/stepmaps --overwrite
```

Local install:

```bash
npx restlyn steps --output generated/stepmaps --overwrite
```

Example step map (`generated/stepmaps/user.stepMap.json`):

```json
{
  "feature": "Users",
  "scenarios": [
    {
      "name": "Get user by id",
      "baseUrl": "https://reqres.in/api",
      "requests": [{ "method": "GET", "endpoint": "/users/2" }],
      "assertions": [
        { "type": "status", "expected": 200, "requestIndex": 0 },
        { "type": "contains", "key": "data", "requestIndex": 0 }
      ]
    }
  ]
}
```

## 3) Generate tests:

Global:

```bash
restlyn tests --output generated/tests --overwrite
```

Local:

```bash
npx restlyn tests --output generated/tests --overwrite
```

Trimmed generated test (`generated/tests/user.test.js`):

```js
describe('Users', () => {
  it('Get user by id', async function () {
    const baseUrl = 'https://reqres.in/api';
    let res1;
    let config1 = { headers: { 'Content-Type': 'application/json' } };
    try {
      res1 = await retryRequest(() => get(`${baseUrl}/users/2`, config1));
    } catch (err) { res1 = err.response; }
    expect(res1.status).to.equal(200);
    expect(res1.data).to.have.property("data");
  });
});
```

## 4) Run and generate a report:

Global:

```bash
restlyn verify --report
```

Local:

```bash
npx restlyn verify --report
```

You’ll see a console summary and an HTML report (PDF is optional if `puppeteer` is installed).
