import React from 'react';
import styles from '../styles/Pagination.module.css';
import { useAppDispatch } from '../app/hooks';

type Props = {
  paginationCount: number;
  pagiBaseUrl: string;
  action: any;
  previous: string | null;
  next: string | null;
  currentPage: number;
  currentPageAction: any;
};

// Pagination component takes {paginationCount ,pagiBaseUrl} as props
const Pagination = (props: Props) => {
  // paginationCount responsible of how many availabe page to be shown.
  const paginationCount = props.paginationCount;

  const dispatch = useAppDispatch();

  const handlePrevNextPage = (url: string) => {
    let domain = new URL(url);
    return `${domain.pathname}?${domain.searchParams}`;
  };

  return (
    <div className="d-flex align-items-center">
      <button
        type="button"
        className="btn btn-link text-decoration-none me-4 ms-4 myPrimary-Text"
        disabled={props.previous === null}
        onClick={() => {
          if (props.previous !== null) {
            dispatch(props.action(handlePrevNextPage(props.previous)));
            dispatch(props.currentPageAction(props.currentPage - 1));
          }
        }}>
        <span className="fw-semibold" data-trans="">
          Prev
        </span>
      </button>
      {[...Array(paginationCount)].map((elem, count) => (
        <a
          key={count}
          type="button"
          className={`d-flex align-items-center justify-content-center btn
            ${
              props.currentPage === count + 1
                ? 'myPrimary-outline-active'
                : 'myPrimary-outline'
            }
            text-decoration-none ${styles.paginationElem} me-1 ms-1`}
          onClick={() => {
            dispatch(
              props.action(
                `/operational_hours/operational-hours/all/days/?page=${
                  count + 1
                }&page_size=4`
              )
            );
            dispatch(props.currentPageAction(count + 1));
          }}>
          <span className="">
            {count + 1 < 10 ? `0${count + 1}` : `${count + 1}`}
          </span>
        </a>
      ))}
      <button
        type="button"
        className="btn btn-link text-decoration-none me-4 ms-4 myPrimary-Text"
        disabled={props.next === null}
        onClick={() => {
          if (props.next !== null) {
            dispatch(props.action(handlePrevNextPage(props.next)));
            dispatch(props.currentPageAction(props.currentPage + 1));
          }
        }}>
        <span className="fw-semibold" data-trans="">
          Next
        </span>
      </button>
    </div>
  );
};

export default Pagination;
