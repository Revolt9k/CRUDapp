import classes from "./Table.module.css";
import React from "react";

const ListOfPosts = (props) => {
    return <div>{props.postsList.filter(post => props.currentPage*5-5 < post.id && post.id < props.currentPage*5+1).map(post => {
        return <div key={post.id} className={classes.post + " " + classes.flexContainer} onClick={() => props.choosePost(post.id)}>
            <div className={classes.item}>{post.id}</div>
            <div className={classes.item}>{post.userId}</div>
            <div className={classes.item}>{post.title}</div>
            <div className={classes.item}>{post.body}</div>
        </div>
    })}  </div>

}

export default ListOfPosts