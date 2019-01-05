const Lint = require("tslint");
const ts = require("typescript");

class Rule extends Lint.Rules.AbstractRule {
  /**
   * @param {ts.SourceFile} sourceFile
   */
  apply(sourceFile) {
    // Only walk the syntax tree if one of the following
    // is found in the source.
    if (/public\s|private\s|protected\s/.test(sourceFile.text)) {
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
        if (modifier.kind === ts.SyntaxKind.PublicKeyword) {
          this.addFailureAtNode(modifier, getFailureMessage("public"));
        } else if (modifier.kind === ts.SyntaxKind.PrivateKeyword) {
          this.addFailureAtNode(modifier, getFailureMessage("private"));
        } else if (modifier.kind === ts.SyntaxKind.ProtectedKeyword) {
          this.addFailureAtNode(modifier, getFailureMessage("protected"));
        }
      }
    }

    super.visitNode(node);

    /**
     * @param {string} modifierName
     */
    function getFailureMessage(modifierName) {
      return `ts-cruftless: The class access modifier "${modifierName}" is not allowed.`;
    }
  }
}

module.exports = { Rule };
