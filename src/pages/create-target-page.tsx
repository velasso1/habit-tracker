import { FC } from "react";
import SuccessSymbol from "../components/ui/succcess-symbol";
import TextField from "../components/ui/text-field";
import Button from "../components/ui/button";

const CreateTargetPage: FC = () => {
  return (
    <div className="create-target">
      <div className="create-target__status">
        <SuccessSymbol />
      </div>

      <div className="create-target__information">
        <p className="create-target__title">Привет, $NAME</p>
        <p className="create-target__subtitle">
          Уже почти всё, осталось <br /> добавить первую цель
        </p>
        <TextField
          type={"text"}
          name={"target"}
          labelText={"Введи название цели"}
        />
      </div>
      <div className="create-target__button">
        <Button text={"создать цель"} url={"something"} />
      </div>
    </div>
  );
};

export default CreateTargetPage;
