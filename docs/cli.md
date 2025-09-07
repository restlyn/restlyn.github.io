---
id: cli
title: CLI Commands
sidebar_label: CLI Commands
---

# CLI Commands

Restlyn provides a powerful CLI to help you generate tests, run them, and report results — all from Gherkin `.feature` files`.

---

## 📦 Installation

You can use Restlyn either globally or per‑project.

Global (recommended if you’ll use it across repos):

```bash
npm install -g restlyn
restlyn --help
```

Per‑project (dev dependency):

```bash
npm install --save-dev restlyn
npx restlyn --help
```

When installed globally, run commands as `restlyn ...`.
When installed locally, you can use `npx restlyn ...` (or add npm scripts).

---

## ✅ Code Generation

### `restlyn steps`
Generate `.stepMap.json` files from Gherkin `.feature` files.

**Options:**
- `--file <featurePath>`: Path to a `.feature` file or folder (default: `features/`)
- `--output <outputDir>`: Output directory for `.stepMap.json` files (default: `generated/stepmaps`)
- `--overwrite`: Overwrite existing `.stepMap.json` files

```bash
restlyn steps --file login.feature --overwrite
# or with a local install:
npx restlyn steps --file login.feature --overwrite
```

---

### `restlyn tests`
Generate runnable `.test.js` files from `.stepMap.json` files.

**Options:**
- `--file <stepMapPath>`: Path to a `.stepMap.json` file or folder (default: `generated/stepmaps`)
- `--output <outputDir>`: Output directory for test files (default: `generated/tests`)
- `--schemas <schemaDir>`: Folder containing JSON schema files (default: `schemas/`)
- `--overwrite`: Overwrite existing `.test.js` files
- `--env <env>`: Environment override (`local`, `mock`, `prod`)

```bash
restlyn tests --env local --overwrite
# or
npx restlyn tests --env local --overwrite
```

---

### `restlyn schema`
Generate a JSON schema file from a live API response.

**Required:**
- `--url <url>`: Endpoint URL to fetch
- `--output <name>`: Output schema filename (saved as `<name>.schema.json`)

**Optional:**
- `--method`: HTTP method (`GET`, `POST`, etc.)
- `--body`: Request body as JSON string
- `--headers`: Headers as JSON string
- `--env`: Environment to use (`local` or `prod`, default: `local`)

```bash
restlyn schema --url /users --method GET --output userSchema
# or
npx restlyn schema --url /users --method GET --output userSchema
```

---

## 🧪 Test Execution & Reporting

### `restlyn verify`
Run all `.test.js` files and generate a detailed report.

**Options:**
- `--generated <testDir>`: Path to a single `.test.js`, a folder, comma-separated list, or glob
- `--stepmaps <stepMapDir>`: Folder containing corresponding `.stepMap.json` files
- `--verbose`: Show full logs
- `--json`: Write JSON summary (`restlyn-report.json`)
- `--report`: Also generate HTML and PDF reports

```bash
restlyn verify --report
# or
npx restlyn verify --report
```

> The HTML report opens automatically. PDF is saved in the `generated/report/` folder.

---

## 🛠 Mock Server (Optional)

### `restlyn mock`
Start the built-in local mock API server at `http://localhost:4000`

```bash
restlyn mock
```

---

Use these CLI commands to go from Gherkin to test results and reports in seconds!

➡️ Next: [Reporting](./reporting.md)
