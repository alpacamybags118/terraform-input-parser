import * as fs from 'fs';
import readline from 'readline';

export class FileHelper {
  static async ReadFile(pathToFile: string): Promise<string> {
    const variableStartRegex = new RegExp('variable \"\\w*\"')
    let variableList: string[];
    const readStream = FileHelper.GetFileStream(pathToFile);

    for await (const line of readStream) {
      if(variableStartRegex.test(line)) {
        console.log(line);
      }
    }

    return Promise.resolve("");
  }

  private static GetFileStream(pathToFile: string): readline.Interface {
    return readline.createInterface({
      input: fs.createReadStream(pathToFile),
    });
  }
}