import img from "../assets/images/success.png";
import classes from "../styles/Summary.module.css";

export default function Summary({ score, noq }) {
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        {/* progress bar will be placed here  */}
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      {loading && <div className={classes.badge}>loading your badge...</div>}

      {error && <div className={classes.badge}>Something went wrong!</div>}

      {!loading && !error && (
        <div className={classes.badge}>
          <img src={img} alt="Success" />
        </div>
      )}
    </div>
  );
}
