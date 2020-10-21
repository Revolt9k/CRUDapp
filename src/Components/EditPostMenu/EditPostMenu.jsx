import SinglePost from "../SinglePost/SinglePost";
import classes from "./EditPostMenu.module.css";
import React from "react";

const EditPostMenu = (props) => {
    return <>
        <SinglePost changePost={props.changePost} currentPost={props.currentPost} postsList={props.postsList}/>
        <div className={classes.buttonsWrapper}>
            <div className={classes.buttonContainer}>
                <button className={classes.leaveButton + " " + classes.button}
                        onClick={() => props.handleEditMode()}>
                    Leave to main menu
                </button>
            </div>
            <div className={classes.buttonContainer}>
                <button className={classes.deleteButton + " " + classes.button}
                        onClick={() => props.deletePost(props.currentPost)}>
                    Delete this post
                </button>
            </div>
        </div>
    </>
}


export default EditPostMenu