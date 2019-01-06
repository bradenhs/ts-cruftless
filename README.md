## Introduction

> Lint away TypeScript's evolutionary cruft

Use the [TSLint](https://palantir.github.io/tslint/) rules in `ts-cruftless` to prevent introducing problematic and dated language features to your codebase. Find links to articles detailing the reasons for each rule below:

### Rules

**no-class-access-modifiers** - [explanatory article](https://medium.com/@bradenhs/typescripts-evolutionary-cruft-class-access-modifiers-412f9749f050)

**no-enums** \*

**no-angle-bracket-type-assertions** \*

**no-abstract-classes-and-methods** \*

**no-namespaces-and-internal-modules** \*

Do you think another rule should be included, disagree with with one of the rules listed, or have an idea for a better explanation? [File an issue](https://github.com/bradenhs/ts-cruftless/issues/new) to start a discussion about it.

_\*Blog post coming soon... if I get the time :)_

## Getting Started

Install `ts-cruftless` just like you would any other dev dependency:

```
npm install ts-cruftless --save-dev
```

Then in your `tslint.json` file extend `ts-cruftless`:

```json
{
  "extends": ["ts-cruftless"]
}
```

You can disable individual rules as follows:

```json
{
  "extends": ["ts-cruftless"],
  "rules": {
    // Name of rule you'd like to disable, for example:
    "no-class-access-modifiers": false
  }
}
```
