import { FC, SetStateAction, Dispatch } from "react";
import { IUserInfo } from "../form";

interface IFieldProps {
  type: string;
  inputName: string;
  page: string;
  labelText: string;
  userInfo: IUserInfo | string;
  setUserInfo: Dispatch<SetStateAction<IUserInfo | string>>;
}

const TextField: FC<IFieldProps> = ({
  type,
  inputName,
  labelText,
  page,
  userInfo,
  setUserInfo,
}) => {
  const inputHandleChanger = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputName: string
  ): void => {
    if (userInfo && setUserInfo && typeof userInfo === "object") {
      setUserInfo({ ...userInfo, [inputName]: e.target.value });
      return;
    }

    setUserInfo(e.target.value);
  };

  return (
    <>
      <input
        className={`${page}__text-field`}
        type={type}
        name={inputName}
        value={typeof userInfo === "string" ? userInfo : userInfo[inputName]}
        onChange={(e) => inputHandleChanger(e, inputName)}
      />
      <label htmlFor={inputName}>{labelText}</label>
    </>
  );
};

export default TextField;
