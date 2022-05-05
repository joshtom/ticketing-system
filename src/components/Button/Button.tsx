import Styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  label: string;
  handleClick?: () => void;
  type: "button" | "reset" | "submit";
  disabled?: boolean;
  loader?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  label,
  handleClick,
  disabled,
  loader,
}) => {
  return (
    <button
      onClick={handleClick}
      aria-label={label}
      type={type}
      className={Styles["button"]}
      disabled={disabled}
    >
      <span>{loader ? "..." : children}</span>
    </button>
  );
};

export default Button;
