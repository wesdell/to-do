import Link from './Link'
import { ReactComponent as ListSVG } from '../../assets/svg/list.svg'
import { ReactComponent as AddSVG } from '../../assets/svg/add.svg'
import styles from './main.module.css'

const Main = ({ children }) => {
  return (
    <div className={styles.principal}>
      <aside className={styles.aside_bar}>
        <Link to="/list" text="Goal list" Icon={ListSVG} />
        <Link to="/add-goal" text="Add goal" Icon={AddSVG} />
      </aside>
      <main className={styles.main_content}>{children}</main>
    </div>
  )
}

export default Main
