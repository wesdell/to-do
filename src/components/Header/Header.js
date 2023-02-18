import { ReactComponent as ProfileSVG } from "../../assets/img/profile.svg";
import { ReactComponent as IconSVG } from "../../assets/img/icon.svg";
import styles from "./header.module.css";
import Link from "../Main/Link";

const Header = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.title}>
        <IconSVG className={styles.icon} />
        <h1>ToDo App</h1>
      </div>
      <nav>
        <Link to="/" Icon={ProfileSVG} />
      </nav>
    </header>
  );
};

export default Header;
