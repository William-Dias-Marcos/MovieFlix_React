// react
import { useEffect, useState } from "react";
// css
import styles from "./Nav.module.css";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      setShow(window.scrollY > 100);
    });
  }, [])

  return (
    <div className={show ? styles.containerBlack : styles.container}>
      <p className={styles.logo}>
        MOVIEFLIX
      </p>
      <img className={styles.profile} 
        src="https://ih0.redbubble.net/image.618363037.0853/flat,1000x1000,075,f.u2.jpg"
        alt="profile"/>
    </div>
  )
}

export default Nav;