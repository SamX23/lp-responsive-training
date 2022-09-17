import "./Button.css";

interface props {
  buttonStyle?: "btn--primary" | "btn--outline";
  buttonSize?: "btn--medium" | "btn--large" | "btn--wide" | "btn--mobile";
  buttonColor?: "primary" | "blue" | "red" | "green";
  type?: "submit" | "reset" | "button";
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button = ({
  buttonStyle = "btn--primary",
  buttonSize = "btn--medium",
  buttonColor,
  type = "button",
  children,
  onClick,
}: props) => (
  <button
    type={type}
    className={`btn ${buttonStyle} ${buttonSize} ${buttonColor}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
