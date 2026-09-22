# 🎭 Playwright E2E Test Suite

Automated end-to-end test suite for an e-commerce demo site ([saucedemo.com](https://www.saucedemo.com/)), built with [Playwright](https://playwright.dev/) and TypeScript.



![Playwright Tests](https://github.com/Prashant551195/Playwright_Project_003/actions/workflows/playwright.yml/badge.svg)



## 📋 Overview

This project demonstrates automated UI testing covering critical user flows on an e-commerce site — login, cart management, checkout, and product sorting — using industry-standard test automation practices.

## ✅ Test Coverage

| Feature      | Scenarios Covered                                      |
|--------------|----------------------------------------------------------|
| Login        | Valid login, invalid credentials, error handling         |
| Cart         | Add to cart, cart badge count validation                 |
| Checkout     | Full checkout flow, empty cart, missing form fields       |
| Sorting      | Sort by price (low-high, high-low), sort by name (A-Z)    |

## 🛠️ Tech Stack

- **Playwright** – Browser automation framework
- **TypeScript** – Type-safe test scripts
- **GitHub Actions** – Continuous Integration (tests run automatically on every push)

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed

### Installation

    git clone https://github.com/Prashant551195/Playwright_Project_003.git
    cd Playwright_Project_003
    npm install
    npx playwright install

### Running Tests

    npx playwright test

### View HTML Report

    npx playwright show-report

## 📁 Project Structure

    ├── tests/
    │   ├── Login.spec.ts       # Login flow tests
    │   ├── checkout.spec.ts    # Checkout flow tests
    │   └── sorting.spec.ts     # Product sorting tests
    ├── .github/workflows/      # CI pipeline config
    ├── playwright.config.ts    # Playwright configuration
    └── package.json

## 🔄 Continuous Integration

This project runs automatically on every push using GitHub Actions — see the **Actions** tab for live test runs.

## 📸 Sample Report

Run `npx playwright show-report` after tests complete to view a detailed HTML report with pass/fail status, screenshots, and traces.

## 👤 Author

**Prashant** — [GitHub](https://github.com/Prashant551195)