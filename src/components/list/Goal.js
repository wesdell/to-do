import { NavLink } from "react-router-dom";
import styles from "./goal.module.css";

const Goal = ({ id, details, events, icon, period }) => {
  return (
    <NavLink to={`/list/${id}`} className={styles.goal_container + " card"}>
      <div className={styles.goal}>
        <div className={styles.goal_icon}>{icon}</div>
        <p className="mr-4">
          {events}
          <sub>/{period}</sub>
        </p>
        <p className="text-sm">{details}</p>
      </div>
    </NavLink>
  );
};
export default Goal;
