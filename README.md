## Introduction (Work in Progress)

> Lint away TypeScript's evolutionary cruft

Use the [TSLint](https://palantir.github.io/tslint/) rules in `ts-cruftless` to prevent introducing problematic and dated language features to your codebase. Find links to blog posts detailing the reasons for each rule below:

### Rules

[**no-class-access-modifiers**](#TODO) (not yet published)

[**no-enums**](#TODO) (not yet published)

[**no-angle-bracket-type-assertions**](#TODO) (not yet published)

[**no-abstract-classes-and-methods**](#TODO) (not yet published)

[**no-namespaces-and-internal-modules**](#TODO) (not yet published)

Do you think another rule should be included, disagree with with one of the rules listed, or have an idea for a better explanation? [File an issue](https://github.com/bradenhs/ts-cruftless/issues/new) to start a discussion about it.

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
