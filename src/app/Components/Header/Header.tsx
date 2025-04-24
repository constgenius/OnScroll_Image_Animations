import React from "react";
import Arrow from "../../../../public/arrow.svg";
import Styles from "./Header.module.css";
import Image from "next/image";

const Header = () => {
    return (
        <main className={Styles.main}>
            <h1>image scroll effects</h1>
            <div className={Styles.tag}>
                <p>please scroll</p>
                <Image className={Styles.img} src={Arrow} alt="arrow"></Image>
            </div>
        </main>
    );
};

export default Header;
