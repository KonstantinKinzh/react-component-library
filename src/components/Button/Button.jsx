import classNames from "classnames";
import "./Button.css";

export const Button = ({ style, className, name, children, onClick }) => {
  return (
    <button
      style={style}
      className={classNames("button", className)}
      onClick={onClick}
    >
      {!children ? name : children}
    </button>
  );
};
