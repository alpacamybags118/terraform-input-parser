import TerraformVariableParser from '../../../src/parser/terraformVariableParser';

describe('terraform-variable-parser', () => {
  it('should parse a terraform input file', async () => {
    await TerraformVariableParser.ParseTerraformVariableFile('test/mocks/mockvariables.tf');
  })
})