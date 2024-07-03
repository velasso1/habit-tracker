import { FC, useState } from "react";
import { validator } from "../utils/textfield-validator";
import TextField from "./ui/text-field";
import config from "../../auxuliary.json";
import Button from "./ui/button";

interface userInfo {
  name: string;
  email: string;
  password: string;
}

const Form: FC = () => {
  const [userInfo, setUserInfo] = useState<userInfo>({
    name: "",
    email: "",
    password: "",
  });

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
