import { FileHelper } from "../helpers/fileHelper";

export default class TerraformVariableParser {
  static async ParseTerraformVariableFile(pathToFile: string) {
    let fileContents: string;

    try {
      fileContents = await FileHelper.ReadFile(pathToFile);
    } catch(err) {
      throw err;
    };

    const variableList = TerraformVariableParser.SplitVariableBlocks(fileContents);

    console.log(variableList);
  }

  private static SplitVariableBlocks(input: string): string[] {
    const regex = new RegExp('/variable "\w*" {/g')
    const variables = input.split(regex)

    return variables;
  }
}