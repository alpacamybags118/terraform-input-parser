export interface TerraformInput {
  variables: TerraformVariable[];
}

export interface TerraformVariable {
  description: string,
  name: string,
  type: string,
  default: any
}