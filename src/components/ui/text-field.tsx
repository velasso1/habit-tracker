import { FC } from "react";

interface IFieldProps {
  type: string;
  name: string;
  labelText: string;
}

const TextField: FC<IFieldProps> = ({ type, name, labelText }) => {
  return (
    <div className="text-field-group">
      <input className="text-field" type={type} name={name} />
      <label htmlFor={name}>{labelText}</label>
    </div>
  );
};

export default TextField;
