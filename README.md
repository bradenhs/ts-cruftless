## Introduction

> Lint away TypeScript's evolutionary cruft

Use the [TSLint](https://palantir.github.io/tslint/) rules in `ts-cruftless` to prevent introducing problematic and dated language features to your codebase. Find links to blog posts detailing the reasons for each rule below:

### Rules

**no-class-access-modifiers** [Blog Post](https://medium.com/@bradenhs/typescripts-evolutionary-cruft-class-access-modifiers-412f9749f050)

**no-enums** (blog post coming soon\*)

**no-angle-bracket-type-assertions** (blog post coming soon\*)

**no-abstract-classes-and-methods** (blog post coming soon\*)

**no-namespaces-and-internal-modules** (blog post coming soon\*)

Do you think another rule should be included, disagree with with one of the rules listed, or have an idea for a better explanation? [File an issue](https://github.com/bradenhs/ts-cruftless/issues/new) to start a discussion about it.

\*Maybe... if I find the time :)

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
