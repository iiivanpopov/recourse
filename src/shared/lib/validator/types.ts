export type ValidationResponse =
  | {
      isError: false
    }
  | {
      isError: true
      message: string
    }

export type Validator = (value: unknown, message?: string) => ValidationResponse
