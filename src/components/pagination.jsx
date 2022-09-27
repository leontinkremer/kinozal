import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = (props) => {
    const { itemsCount, pageSize, currentPage, onPageChange } = props;
    const pageCount = Math.ceil(itemsCount / pageSize);
    // console.log({ pageCount }); // 2
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);

    Pagination.propTypes = {
        itemsCount: PropTypes.number.isRequired,
        pageSize: PropTypes.number.isRequired,
        onPageChange: PropTypes.func.isRequired,
        currentPage: PropTypes.number.isRequired
    };

    return (
        <nav>
            <ul className="pagination justify-content-center">
                {pages.map((page) => (
                    <li
                        key={page}
                        className={
                            "page-item" +
                            (currentPage === page ? " active" : "")
                        }
                    >
                        <button
                            className="page-link"
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
