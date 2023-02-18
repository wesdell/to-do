import styles from "./link.module.css";
import { NavLink } from "react-router-dom";
const Link = ({ Icon, text, to }) => {
  return (
    <NavLink end to={to} className={styles.link}>
      <Icon className={styles.icon} />
      {text && <span className={styles.link_text}>{text}</span>}
    </NavLink>
  );
};
export default Link;
