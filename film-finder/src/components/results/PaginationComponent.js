import React from 'react';
import query from '../../common/query';
import {useLocation} from 'react-router-dom';

export default ({numPages, page}) => {
    const queryParams = new URLSearchParams(useLocation().search);
    const pageComponents = [];
    for (let i = 1; i <= numPages; i++) {
        let classes = ["page-item"];
        if (i === page) {
            classes.push("active");
        }
        pageComponents.push(
            <li className={classes.join(" ")} key={i}>
                <a className="page-link" href={query('/movies', {s: queryParams.get('s'), page: i})}>{i}<span className="sr-only">(current)</span></a>
            </li>
        );
    }
    return (
        <ul className="pagination">
            {pageComponents}
        </ul>
    );
};
