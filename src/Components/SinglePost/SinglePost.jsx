import React from "react";
import classes from "./SinglePost.module.css";

const SinglePost = (props) => {

    let ref = React.createRef()

    let changePostWithNulling = (id) => {
        props.changePost(id, ref.current.value)
        ref.current.value = null
    }

    return props.postsList.slice(props.currentPost - 1, props.currentPost)
        .map(post => {
                return <div key={post.id}>
                    <div className={classes.container}>
                        <div className={classes.item}>{post.id}</div>
                        <div className={classes.item}>{post.userId}</div>
                        <div className={classes.item}>{post.title}</div>
                        <div className={classes.item}>{post.body}</div>
                    </div>
                    <div className={classes.container + " " + classes.formControl}>
                        <textarea placeholder={"Enter new post body"} className={classes.textarea} ref={ref}/>
                        <button className={classes.modifyButton}
                                onClick={() => changePostWithNulling(post.id)}>Change post
                        </button>
                    </div>

                </div>

            }
        )
}


export default SinglePost