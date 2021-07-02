variable "test1" {
  description = "test"
  type = "string"
}

variable "test2" {
  description = "another test"
  type = list(string)
  default = ["abc"]
}

