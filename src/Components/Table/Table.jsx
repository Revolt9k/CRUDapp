import React from "react";
import classes from "./Table.module.css"
import Header from "../Header/Header";
import ListOfPosts from "../ListOfPosts/ListOfPosts";
import Paginator from "../Paginator/Paginator";
import EditPostMenu from "../EditPostMenu/EditPostMenu";
import CreatePostMenuContainer from "../CreatePostMenu/CreatePostMenuContainer";

const Table = (props) => {
    return <div className={classes.table}>

        <Paginator currentPage={props.currentPage}
                   totalPostsCount={props.totalPostsCount}
                   pageSize={props.pageSize}
                   changePage={props.changePage}
                   editMode={props.editMode}
        />
        <CreatePostMenuContainer createPost={props.createPost}
                        postsList={props.postsList}
                        changePage={props.changePage}
        />
        <Header/>
        {!props.editMode ?
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