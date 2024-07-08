import { FC, useState } from "react";
import { IUserInfo } from "../components/form";
import { useAppSelector } from "../store";
import { motion } from "framer-motion";
import { successSymbolBlock } from "../utils/animation/motion-variants";

import SuccessSymbol from "../components/ui/succcess-symbol";
import TextField from "../components/ui/text-field";
import Button from "../components/ui/button";

const CreateTargetPage: FC = () => {
  const [targetName, setTargetName] = useState<IUserInfo | string>("");
  const userName = useAppSelector((state) => state.user.userName);
  return (
    <div className="create-target">
      <motion.div
        className="create-target__status"
        variants={successSymbolBlock}
        initial="hidden"
        animate="visible"
      >
        <SuccessSymbol />
      </motion.div>

      <div className="create-target__information">
        <p className="create-target__title">
          Привет, <span className="create-target__name">{userName}</span>!
        </p>
        <p className="create-target__subtitle">
          Уже почти всё, осталось <br /> добавить первую цель
        </p>
        <div className="create-target__target-name">
          <TextField
            type={"text"}
            inputName={"target"}
            page={"create-target"}
            labelText={"Введи название цели"}
            userInfo={targetName}
            setUserInfo={setTargetName}
          />
        </div>
      </div>
      <div className="create-target__button">
        <Button text={"создать цель"} url={"something"} />
      </div>
    </div>
  );
};

export default CreateTargetPage;
