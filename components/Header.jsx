import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import styles from "./Header.module.css";

import logo from "../public/assets/logo-header.png";

function Header() {
  const [activateSideMenu, setActivateSideMenu] = useState(false);
  const burgerClick = () => {
    setActivateSideMenu(!activateSideMenu);
  };

  const [isTransparent, setIsTransparent] = useState(true);
  const location = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const isAtTop = window.scrollY === 0;
      setIsTransparent(isAtTop);
    };

    if (location.pathname === "/") {
      setIsTransparent(true);
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        setIsTransparent(false);
      };
    } else {
      setIsTransparent(false);
    }
  }, [location.pathname]);

  return (
    <header
      style={
        isTransparent
          ? { backgroundColor: "rgba(var(--main-1), 0)" }
          : {
              backgroundColor: "var(--main-1)",
              boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
            }
      }
    >
      <div className="container">
        <Link href="/">
          <img src={logo} className={styles.logoHeader} alt="logo" />
        </Link>

        <nav
          className={`${styles.navList} ${
            activateSideMenu ? styles.sideMenu : ""
          }`}
          onClick={(event) => {
            if (
              (typeof event.target.className === "string" &&
                event.target.className.includes("side-menu")) ||
              event.target.tagName === "A"
            ) {
              setActivateSideMenu(false);
            }
          }}
        >
          <button
            className={styles.closeSideMenuCross}
            onClick={() => {
              setActivateSideMenu(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg-icon"
              style={{
                width: "1em",
                height: "1em",
                verticalAlign: "middle",
                fill: "currentColor",
                overflow: "hidden",
              }}
              viewBox="0 0 1024 1024"
              version="1.1"
            >
              <path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z" />
            </svg>
          </button>
          <ul>
            <li className={styles.navListItem}>
              <Link
                href="/"
                style={
                  isTransparent && !activateSideMenu
                    ? { color: "var(--text-3)" }
                    : null
                }
              >
                Accueil
              </Link>
            </li>
            <li className={styles.navListItem}>
              <a
                href="https://www.airbnb.fr/users/479186120/listings"
                target="_blank"
                rel="noopener noreferrer"
                style={
                  isTransparent && !activateSideMenu
                    ? { color: "var(--text-3)" }
                    : null
                }
              >
                Nos Locations
              </a>
            </li>

            <li className={styles.navListItem}>
              <Link
                href="/contact"
                style={
                  isTransparent && !activateSideMenu
                    ? { color: "var(--text-3)" }
                    : null
                }
              >
                Déléguez la gestion de votre bien
              </Link>
            </li>

            <li className={styles.navListItem}>
              <Link
                href="/about"
                style={
                  isTransparent && !activateSideMenu
                    ? { color: "var(--text-3)" }
                    : null
                }
              >
                Qui sommes nous ?
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.burgerMenu} onClick={burgerClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path
              stroke={isTransparent ? "var(--text-3)" : "var(--text-1)"}
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M4 7h22M4 15h22M4 23h22"
            />
          </svg>
        </div>

        <a
          href="https://app.superhote.com/#/login"
          className={`btn ${styles.landlordPortal}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Espace propriétaire
        </a>
      </div>
    </header>
  );
}

export default Header;
