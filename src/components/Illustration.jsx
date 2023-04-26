
import Classes from "../styles/illustration.module.css";

export default function Illustration({image}) {
  return (
    <div className={Classes.illustration}>
      <img src={image} alt="Signup" />
    </div>
  );
}
