import React from "react";
import classes from "./Table.module.css"
import Header from "./Header";
import ListOfPosts from "./ListOfPosts";
import SinglePost from "./SinglePost";
import Paginator from "./Paginator";


const Table = (props) => {


    const CreatePostMenu = (props) => {

        let bodyRef = React.createRef()
        let titleRef = React.createRef()

        return <div className={classes.createPostForm + " " + classes.flexContainer}>
            <textarea className={classes.newPostTextArea + " " + classes.textarea}
                      ref={bodyRef}
                      placeholder={"Enter Post Body"}/>
            <textarea className={classes.newTitleTextArea + " " + classes.textarea}
                      ref={titleRef}
                      placeholder={"Enter Post Title"}/>
            <button className={classes.addPostButton}
                    onClick={() => props.createPost(
                        titleRef.current.value,
                        bodyRef.current.value,
                        "newUserId",
                        props.postsList.length + 1)}>
                Create new post
            </button>
        </div>
    }

    const EditPostMenu = (props) => {
        return <>
            <SinglePost changePost={props.changePost} currentPost={props.currentPost} postsList={props.postsList}/>
            <div className={classes.button}>
                <button className={classes.leaveButton + " " + classes.removeButton}
                        onClick={() => props.handleEditMode()}>
                    Leave to main menu
                </button>
            </div>
            <div className={classes.button}>
                <button className={classes.deleteButton + " " + classes.removeButton}
                        onClick={() => props.deletePost(props.currentPost)}>
                    Delete this post
                </button>
            </div>


        </>
    }


    return <div className={classes.table}>

        <Paginator currentPage={props.currentPage}
                   totalPostsCount={props.totalPostsCount}
                   pageSize={props.pageSize}
                   changePage={props.changePage}
                   editMode={props.editMode}
        />

        <CreatePostMenu createPost={props.createPost} postsList={props.postsList}/>

        <Header/>

        {!props.editMode

            ?

            <ListOfPosts choosePost={props.choosePost}
                         postsList={props.postsList}
                         currentPage={props.currentPage}/>
            :

            <EditPostMenu changePost={props.changePost}
                          currentPost={props.currentPost}
                          postsList={props.postsList}
                          handleEditMode={props.handleEditMode}
                          deletePost={props.deletePost}/>}
    </div>
}

export default Table