import { FC } from "react";
import TextField from "./ui/text-field";
import config from "../../auxuliary.json";
import Button from "./ui/button";

const Form: FC = () => {
  return (
    <>
      {config.textFields.map((item, index) => {
        return (
          <TextField
            key={index}
            type={item.type}
            name={item.name}
            labelText={item.labelText}
          />
        );
      })}

      <div className="form__button">
        <Button text={"Дальше"} url={"create-target"} />
      </div>
    </>
  );
};

export default Form;
