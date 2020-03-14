import React from 'react';
import './Pagination.css';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => {
                    if (number == currentPage) {
                        return (
                            <li key={number} className={"page-item"}>
                                <p onClick={() => paginate(number)} href="!#" className="page-link" style={{backgroundColor: "#dee2e6"}}>
                                    {number}
                                </p>
                            </li>
                        )
                    } else {
                        return (
                            <li key={number} className={"page-item"}>
                                <p onClick={() => paginate(number)} href="!#" className="page-link">
                                    {number}
                                </p>
                            </li>
                        )
                    }

                })}
            </ul>
        </nav>
    )
}

export default Pagination;
