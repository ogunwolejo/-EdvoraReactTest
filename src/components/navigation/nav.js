// react router
import { useLocation, NavLink } from "react-router-dom";

import styles from "./nav.module.css";
import { MdSort } from "react-icons/md";

// import utils
import Card from "../../utils/card";

// rides
import Ride from "../../utils/transport/rides";

/*** */
const Nav = (props) => {
  const location = useLocation();

  return (
    <div className={styles.nav__container}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={
                location.pathname === "/" ? styles.active : styles.link
              }
            >
              Nearest rides
            </NavLink>
          </li>

          <li>
            <NavLink
              exact
              to="/upcoming_rides"
              className={
                location.pathname === "/upcoming_rides"
                  ? styles.active
                  : styles.link
              }
            >
              Upcoming rides (4)
            </NavLink>
          </li>
          <li>
            <NavLink
              to="rides"
              className={
                location.pathname === "/rides" ? styles.active : styles.link
              }
            >
              Past rides (2)
            </NavLink>
          </li>
        </ul>
        {/** the filter icon below */}
        <div>
          <span>
            <MdSort size="22px" color="#f2f2f2" />
          </span>
          <p>Filter</p>
        </div>
      </nav>

      {/** the card to display the list */}
      {Ride.map((element) => (
        <Card contents={element} key={element.id} />
      ))}
    </div>
  );
};

export default Nav;
