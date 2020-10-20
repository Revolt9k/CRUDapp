import React from "react";
import Table from "./Table";
import {changePostThunkCreator,
    handleEditMode,
    getPostsThunkCreator,
    choosePost,
    deletePostThunkCreator,
    createPostThunkCreator,
    changePage} from "../Redux/tableReducer";
import {connect} from "react-redux";

class TableContainer extends React.Component {

    componentDidMount() {
        this.props.getPostsThunkCreator()
    }

    render() {
        return <Table postsList={this.props.posts}
                      changePost={this.props.changePostThunkCreator}
                      editMode={this.props.editMode}
                      handleEditMode={this.props.handleEditMode}
                      currentPost={this.props.currentPost}
                      choosePost={this.props.choosePost}
                      deletePost={this.props.deletePostThunkCreator}
                      createPost={this.props.createPostThunkCreator}
                      totalPostsCount={this.props.totalPostsCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      changePage={this.props.changePage}

        />
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.tablePage.posts,
        editMode: state.tablePage.editMode,
        currentPost: state.tablePage.currentPost,
        pageSize: state.tablePage.pageSize,
        totalPostsCount: state.tablePage.totalPostsCount,
        currentPage: state.tablePage.currentPage,

    }
}


export default connect(mapStateToProps, {getPostsThunkCreator,
    changePostThunkCreator,
    handleEditMode,
    choosePost,
    deletePostThunkCreator,
    createPostThunkCreator,
    changePage})(TableContainer)