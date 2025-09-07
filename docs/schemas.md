---
id: schemas
title: Schema Validation & Schema Generation
sidebar_label: Schemas
---

# Schema Validation & Schema Generation

Restlyn supports optional contract testing via JSON Schema validation. It also automatically generate JSON schema from live responses.

---

## 📌 Schema Validation...How It Works

When a Gherkin step includes:

```gherkin
Then response should match schema "userSchema"
```

Restlyn will:

1. Load the `userSchema.schema.json` from your `schemas/` folder
2. Validate the response using [AJV](https://ajv.js.org/)
3. Fail the test if the schema doesn’t match

---

## 📁 Default Schema Location

All schemas are expected under:

```
schemas/
```

You can override this using:

```bash
restlyn tests --schemas ./custom-folder
```
---

## 🧾 Schema Validation Errors

If validation fails during a test:

* ❌ Missing fields are listed
* ⚠️ Extra/unexpected fields are shown
* Detailed AJV error messages are printed

---

## 🧬 Generate a Schema Automatically

Use the CLI command:

```bash

restlyn schema --url /profile --method GET --output userProfile --env local

restlyn schema --url /profile --method GET --output userProfile --env local \
--headers '{"Authorization":"Bearer mocked-token-123"}'
```

Optional flags:

* `--method`, `--headers`, `--body`, `--env`

Restlyn will:

* Fetch the live API response
* Convert it to a basic JSON schema
* Save to `schemas/userProfile.schema.json`

* Small notes:

    By default, schemas are looked up under paths.schemas in your .restlynrc (falls back to ./schemas). The restlyn tests command also lets you override with --schemas `dir`.

    The schema CLI builds the full URL from .restlynrc’s baseUrls.local or baseUrls.prod depending on --env. If you pass an absolute --url, it will use it as-is.

---


## 🔍 Strict vs Lenient (Upcoming)

Future versions will support `--strict` flag to:

* Fail on extra fields (currently allowed)
* Enforce exact schema match

---

Use schemas to ensure your API contracts don’t silently break!

➡️ Next: [Data-Driven Testing](./data-driven.md)
