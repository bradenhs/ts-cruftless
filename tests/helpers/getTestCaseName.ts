import { snakeCase } from "lodash";
import path from "path";

export function getTestCaseName(ruleName: string, testCaseFileName: string) {
  return testCaseFileName
    .replace(path.join(__dirname, "../cases", ruleName), "")
    .replace(/\..*$/, "")
    .split("/")
    .map(part =>
      snakeCase(part)
        .replace(/\_/g, " ")
        .trim()
    )
    .filter(part => part.length > 0)
    .join(" · ");
}
