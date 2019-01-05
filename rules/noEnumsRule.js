const Lint = require("tslint");
const ts = require("typescript");

class Rule extends Lint.Rules.AbstractRule {
  /**
   * @param {ts.SourceFile} sourceFile
   */
  apply(sourceFile) {
    // Only walk the syntax tree if "enum" is
    // is found in the source.
    if (/enum\s/.test(sourceFile.text)) {
      return this.applyWithWalker(
        new NodeWalker(sourceFile, this.getOptions())
      );
    }
  }
}

class NodeWalker extends Lint.RuleWalker {
  /**
   * @param {ts.EnumDeclaration} node
   */
  visitEnumDeclaration(node) {
    this.addFailureAtNode(node, "ts-cruftless: Enums are not allowed.");
  }
}

module.exports = { Rule };
