## Introduction

> Lint away TypeScript's evolutionary cruft

TypeScript is a fantastic tool but as it has evolved it's accumulated a fair amount of evolutionary cruft. For instance, built-in modules weren't part of JavaScript when TypeScript was first released. In order to bridge the gap, a useful feature called namespaces was included in the language. Today, however, namespaces aren't necessary - in fact, they're an ugly artifact and confuse newcomers. `ts-cruftless` is a collection of tslint rules that prevent you from using TypeScript specific features that fall under the "evolutionary cruft" umbrella. The goal is to keep your TypeScript code as close to idiomatic JavaScript as possible.

Some of these rules clearly fall under the banner of "evolutionary cruft" - for others the categorization is less obvious. Feel free to open an issue and start a discussion if you disagree or feel another rule should be included.

## Rules

**No class access modifiers**

**No enums**

**No angle bracket type assertions**

**No abstract classes**

**No `export =` and `import =`**

**No namespaces**

**No internal modules**

**No triple slash directives**
