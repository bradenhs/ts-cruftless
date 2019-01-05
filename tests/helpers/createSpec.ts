import { getFileList } from "./getFileList";
import path from "path";
import { Configuration } from "tslint";
import fs from "fs";
import { getTestCaseName } from "./getTestCaseName";
import { createLinter } from "./linter";
import { kebabCase } from "lodash";

export function createSpec(ruleName: string) {
  const testCaseFilenames = getFileList(
    path.resolve(__dirname, "../cases", ruleName)
  );

  describe(kebabCase(ruleName), () =>
    testCaseFilenames.forEach(testCaseFilename => {
      const testCaseName = getTestCaseName(ruleName, testCaseFilename);
      it(testCaseName, () => runTestCase(testCaseFilename, ruleName));
    })
  );
}

async function runTestCase(testCaseFilename: string, ruleName: string) {
  const fileContents = fs.readFileSync(testCaseFilename, "utf8");
  const configuration = Configuration.parseConfigFile({
    rules: { [kebabCase(ruleName)]: true }
  });

  const linter = createLinter();
  linter.lint(testCaseFilename, fileContents, configuration);
  const result = linter.getResult();

  expect(result.output).toMatchSnapshot();
}
