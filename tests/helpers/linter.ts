import { Linter } from "tslint";
import path from "path";
import { ColorlessCodeFrameFormatter } from "./formatter";

export function createLinter() {
  return new Linter({
    fix: false,
    rulesDirectory: path.resolve(__dirname, "../../rules"),
    formatter: ColorlessCodeFrameFormatter
  });
}
