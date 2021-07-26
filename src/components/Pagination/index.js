import React from 'react';
import { Link } from "gatsby";

import {PaginationStyles} from './StyledComponent'


const Pagination = ({
    pageSize,
    totalCount,
    currentPage,
    base,
  }) =>{
    const totalPages = Math.ceil(totalCount / pageSize);
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;
    const hasNextPage = nextPage <= totalPages;
    const hasPrevPage = prevPage >= 1;
    // debugger
    return (
      <PaginationStyles>
        <Link
          title="Prev Page"
          disabled={!hasPrevPage}
          to={`${base}/${prevPage}`}
        >
          ← <span className="word">Prev</span>
        </Link>
        {/* {Array.from({ length: totalPages }).map((_, i) => (
          <Link
            className={currentPage === 1 && i === 0 ? 'current' : ''}
            to={`${base}/${i > 0 ? i + 1 : ''}`}
            key={`page${i}`}
          >
            {i + 1}
          </Link>
        ))} */}
        <Link
          title="Next Page"
          disabled={!hasNextPage}
          to={`${base}/${nextPage}`}
        >
          <span className="word">Next</span> →
        </Link>
      </PaginationStyles>
    );
  }

  export default Pagination;
  