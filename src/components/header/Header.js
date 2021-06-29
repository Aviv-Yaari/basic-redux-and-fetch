import styles from "./header.module.css";
import { NavLink, Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Link to="/" className={styles.logo}>
        <h3>Great Quotes</h3>
      </Link>
      <div className={styles.navlinks}>
        <NavLink
          exact
          to="/quotes"
          className={styles.navlink}
          activeClassName={styles.navlinkselected}
        >
          All Quotes
        </NavLink>
        <NavLink
          exact
          to="/quotes/add"
          className={styles.navlink}
          activeClassName={styles.navlinkselected}
        >
          Add a Quote
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
