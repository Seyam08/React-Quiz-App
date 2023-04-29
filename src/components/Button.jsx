import Classes from "../styles/Button.module.css";

export default function Button({ children, className }) {
  return <div className={`${Classes.button} ${className}`}>{children}</div>;
}
