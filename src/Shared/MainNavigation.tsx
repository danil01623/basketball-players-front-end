import { NavLink } from "react-router-dom";
import classes from "../styles/MainNavigation.module.css";
const HEADER = "Euroleague";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/create-player"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Create Player
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
