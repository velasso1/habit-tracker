export interface IValidatorProps {
  name: string;
  email: string;
  password: string;
}

export type ValidatorReturnValue = boolean | IValidatorProps;
