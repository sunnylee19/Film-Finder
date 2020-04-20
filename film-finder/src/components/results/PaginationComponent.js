import React from 'react';
import query from '../../common/query';
import {useLocation, Link} from 'react-router-dom';

export default ({numPages, page, totalPages = 20}) => {
    const queryParams = new URLSearchParams(useLocation().search);
    if (numPages === 0) return null;
    const pages = {};
    let count = totalPages;

    for (let i = 1; i <= Math.min(4, numPages); i++) {
        if (!pages[i]) {
            pages[i] = true;
            count--;
        }
    }
    for (let i = numPages; i >= Math.max(1, numPages - 3); i--) {
        if (!pages[i]) {
            pages[i] = true;
            count--;
        }
    }

    for (let i = 0; i < 2 * totalPages && count !== 0; i++) {
        let p = page + (i % 2 == 0 ? (i / 2) : -Math.floor(i / 2));
        if (p > 0 && p <= numPages && !pages[p]) {
            pages[p] = true;
            count--;
        }
    }
    
    const pageComponents = [];
    Object.keys(pages).sort((a, b) => a - b).forEach((i, idx) => {
        let classes = ["page-item"];
        if (parseInt(i) === page) {
            classes.push("active");
        }
        if (idx > 0 && !pages[i - 1]) {
            pageComponents.push(<li key={i + "extra"} className="page-item page-link">...</li>);
        }
        pageComponents.push(
            <li className={classes.join(" ")} key={i}>
                <Link className="page-link page-numbers" to={query('/search', {s: queryParams.get('s'), page: i})}>{i}<span className="sr-only">(current)</span></Link>
            </li>
        );
    });

    return (
        <ul className="pagination justify-content-center">
            {pageComponents}
        </ul>
    );
};
