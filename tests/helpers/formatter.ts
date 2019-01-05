import { IFormatterMetadata, RuleFailure } from "tslint";
import codeFrame from "babel-code-frame";
import path from "path";

export class ColorlessCodeFrameFormatter {
  static metadata: IFormatterMetadata = {
    formatterName: "colorlessCodeFrame",
    description: "Framed formatter which creates a frame of error code.",
    consumer: "human",
    sample: "No sample"
  };

  sortFailures(failures: RuleFailure[]): RuleFailure[] {
    return failures.slice().sort(RuleFailure.compare);
  }

  format(failures: RuleFailure[]): string {
    if (typeof failures[0] === "undefined") {
      return "";
    }

    failures = this.sortFailures(failures);

    const outputLines: string[] = [];

    let currentFile: string | undefined;

    for (const failure of failures) {
      const fileName = failure
        .getFileName()
        .replace(path.join(__dirname, "../../"), "/");

      // Output the name of each file once
      if (currentFile !== fileName) {
        outputLines.push("");
        outputLines.push(fileName);
        currentFile = fileName;
      }

      const failureString = failure.getFailure();
      const ruleName = failure.getRuleName();
      const lineAndCharacter = failure.getStartPosition().getLineAndCharacter();

      const frame = codeFrame(
        failure.getRawLines(),
        lineAndCharacter.line + 1, // babel-code-frame is 1 index
        lineAndCharacter.character
      );

      outputLines.push(`${failureString} ${ruleName}`);
      outputLines.push(frame);
    }

    return outputLines.join("\n").trim();
  }
}
