import classes from "./Header.module.css";
import React from "react";

const Header = () => {
    return <div>
        <div className={classes.flexContainer}>
            <div className={classes.header}>Id</div>
            <div className={classes.header}>Userid</div>
            <div className={classes.header}>Title</div>
            <div className={classes.header}>Body</div>
        </div>

    </div>
}


export default Header