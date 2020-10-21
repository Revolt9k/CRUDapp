import classes from "./CreatePostMenu.module.css";
import React from "react";


const CreatePostMenu = (props) => {


    return <div className={classes.createPostForm + " " + classes.container}>
            <textarea className={classes.newTitle + " " + classes.textarea}
                      ref={props.titleRef}
                      placeholder={"Enter Post Title"}/>
        <textarea className={classes.newPost + " " + classes.textarea}
                  ref={props.bodyRef}
                  placeholder={"Enter Post Body"}/>
        <button className={classes.addPostButton}
                onClick={() => props.createPost()}>
            Create new post
        </button>
    </div>
}

export default CreatePostMenu