import classes from "../styles/illustration.module.css";

export default function Illustration({ image }) {
  return (
    <div className={classes.illustration}>
      <img src={image} alt="Signup" />
    </div>
  );
}
