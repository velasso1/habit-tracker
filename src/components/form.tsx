import { FC, useState } from "react";
// import { validator } from "../utils/textfield-validator";
import { useAppDispatch } from "../store";
import { getUserInfo } from "../store/slices/user";
import TextField from "./ui/text-field";
import Button from "./ui/button";

import config from "../../auxuliary.json";

export interface IUserInfo {
  [name: string]: string;
  email: string;
  pass: string;
}

const Form: FC = () => {
  const dispatch = useAppDispatch();
  const [userInfo, setUserInfo] = useState<IUserInfo | string>({
    name: "",
    email: "",
    pass: "",
  });

  const sendData = (): void => {
    if (typeof userInfo === "object") {
      dispatch(getUserInfo(userInfo));
      return;
    }
  };

  return (
    <>
      <div className="registration__text-field-group">
        <form className="registration__form" action="submit">
          {config.textFields.map((item, index) => {
            return (
              <TextField
                key={index}
                type={item.type}
                inputName={item.name}
                page={"registration"}
                labelText={item.labelText}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
            );
          })}
          <div className="registration__button" onClick={() => sendData()}>
            <Button text={"Дальше"} url={"create-target"} type={"button"} />
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
