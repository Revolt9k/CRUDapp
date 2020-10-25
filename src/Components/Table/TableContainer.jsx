import React from "react";
import Table from "./Table";
import {connect} from "react-redux";
import {changePostThunkCreator,
    handleEditMode,
    getPostsThunkCreator,
    choosePost,
    deletePostThunkCreator,
    createPostThunkCreator,
    changePage} from "../../Redux/tableReducer";

class TableContainer extends React.Component {

    componentDidMount() {
        this.props.getPostsThunkCreator()
    }

    render() {
        return <Table postsList={this.props.posts}
                      currentPost={this.props.currentPost}
                      editMode={this.props.editMode}
                      totalPostsCount={this.props.totalPostsCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}

                      handleEditMode={this.props.handleEditMode}
                      changePost={this.props.changePostThunkCreator}
                      choosePost={this.props.choosePost}
                      deletePost={this.props.deletePostThunkCreator}
                      createPost={this.props.createPostThunkCreator}
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