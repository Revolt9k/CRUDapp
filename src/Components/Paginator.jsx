import classes from "./Table.module.css";
import React from "react";


const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalPostsCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div className={classes.paginator}>
        {!props.editMode ? <>
            Page:
            {pages.map(page => {
                return <button key={page}
                               className={(props.currentPage === page && classes.selectButton) + " " + classes.pageButton}
                               onClick={() => {
                                   props.changePage(page)
                               }}> {page} </button>
            })}
        </> : <> </>}

    </div>

}

export default Paginator
