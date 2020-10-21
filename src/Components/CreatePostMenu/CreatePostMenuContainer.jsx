import React from "react";
import CreatePostMenu from "./CreatePostMenu";


const CreatePostMenuContainer = (props) => {

    let bodyRef = React.createRef()
    let titleRef = React.createRef()

    let createPostWithNulling =  () =>  {
        props.createPost(
            titleRef.current.value,
            bodyRef.current.value,
            "newUserId",
            props.postsList.length + 1);
        bodyRef.current.value = null
        titleRef.current.value = null
        let lastPage = (Math.floor(props.postsList.length / 5)+1)
        props.changePage (lastPage)
    }

    return <CreatePostMenu bodyRef={bodyRef} titleRef={titleRef} createPost={createPostWithNulling} />
}

export default CreatePostMenuContainer