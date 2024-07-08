import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface IButtonProps {
  text: string;
  url: string;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
}

const Button: FC<IButtonProps> = ({
  text,
  url,
  disabled = false,
  type = "submit",
}) => {
  const navigate = useNavigate();
  return (
    <button
      className="button"
      onClick={() => navigate(`/${url}`)}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
