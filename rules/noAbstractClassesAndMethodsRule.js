const Lint = require("tslint");
const ts = require("typescript");

class Rule extends Lint.Rules.AbstractRule {
  /**
   * @param {ts.SourceFile} sourceFile
   */
  apply(sourceFile) {
    // Only walk the syntax tree if abstract is found in the source.
    if (/abstract\s/.test(sourceFile.text)) {
      return this.applyWithWalker(
        new NodeWalker(sourceFile, this.getOptions())
      );
    }
  }
}

class NodeWalker extends Lint.RuleWalker {
  /**
   * @param {ts.Node} node
   */
  visitNode(node) {
    if (node.modifiers) {
      for (const modifier of node.modifiers) {
        if (modifier.kind === ts.SyntaxKind.AbstractKeyword) {
          this.addFailureAtNode(
            modifier,
            'The "abstract" keyword is not allowed'
          );
        }
      }
    }

    super.visitNode(node);
  }
}

module.exports = { Rule };
