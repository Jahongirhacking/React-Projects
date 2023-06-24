import PropTypes from "prop-types";
import "./Navbar.css";

function Navbar({ count }) {
  return (
    <nav className="nav">
      <h1 className="nav__logo">CUser</h1>
      <p className="nav__info">
        {count === 0 ? "No users found" : `You have: ${count}`}
      </p>
    </nav>
  );
}

Navbar.propTypes = {
  count: PropTypes.number,
};

export default Navbar;
