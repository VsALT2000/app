import classes from "./Paginator.module.css";
import React from "react";
import cn from "classnames";

const Paginator = (props) => {
    const pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    const pages = [];
    if (pagesCount !== 0) {
        pages.push(1);
        if (pagesCount >= 2) {
            const min = Math.max(props.currentPage - 2, 2);
            const max = Math.min(props.currentPage + 2, pagesCount - 1);
            for (let i = min; i <= max; i++)
                pages.push(i);
            pages.push(pagesCount);
        }
    }
    return (
        <div className={classes.pages}>
            {
                pages.map((p, i) =>
                    <div key={i} className={cn({[classes.selectedPage]: props.currentPage === p})}
                         onClick={() => {
                             props.onPageChanged(p)
                         }}>
                        <span>{p}</span>
                    </div>)
            }
        </div>
    )
}

export default Paginator;