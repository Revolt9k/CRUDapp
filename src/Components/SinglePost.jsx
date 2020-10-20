import React from "react";
import classes from "./Table.module.css";

const SinglePost = (props) => {
    let ref = React.createRef()
    return props.postsList.slice(props.currentPost - 1, props.currentPost)
        .map(post => {
                return <div key={post.id}>
                    <div className={classes.flexContainer + " " + classes.singlePost}>
                        <div className={classes.item + " " + classes.singleItem}>{post.id}</div>
                        <div className={classes.item + " " + classes.singleItem}>{post.userId}</div>
                        <div className={classes.item + " " + classes.singleItem}>{post.title}</div>
                        <div className={classes.item + " " + classes.singleItem}>{post.body}</div>
                    </div>
                    <div className={classes.flexContainer + " " + classes.formControl}>
                        <textarea placeholder={"Enter new post body"} className={classes.textarea} ref={ref}></textarea>
                        <button className={classes.modifyButton}
                                onClick={() => props.changePost(post.id, ref.current.value)}>Change post
                        </button>
                    </div>

                </div>

            }
        )
}


export default SinglePost