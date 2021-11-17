import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "../styles/nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <nav>
      <div className="logo"><h3>ZIMPLE</h3></div>
      <ul className={isOpen ? "sm-hide active-tab" : "sm-hide"}>
        <li>Overikt</li>
        <li>Priser</li>
        <li>Kontakt</li>
        <li>Testa gratis</li>
      </ul>
      <FontAwesomeIcon icon={faBars} className="lg-hide" onClick={toggleNav} />
    </nav>
  )
}

export default Nav;
