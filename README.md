## TypeScript: the good parts (WIP)

> Lint away TypeScript's evolutionary cruft

TypeScript is a fantastic tool but as it has evolved it's accumulated a fair amount of evolutionary cruft. For instance, built-in modules weren't part of JavaScript when TypeScript was first released. In order to bridge the gap, a useful feature called namespaces was included in the language. Today, however, namespaces aren't necessary - in fact, they're an ugly artifact and confuse newcomers. `ts-gp` is a collection of tslint rules that warn when TypeScript specific features falling under the "evolutionary cruft" umbrella are used.

## Rules

No class access modifiers

No enums

No angle bracket type assertions

No abstract classes

No `export =`

No `import =`

No namespaces

No internal modules

No triple slash directives
