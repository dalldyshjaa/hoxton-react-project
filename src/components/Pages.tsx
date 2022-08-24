import { AiOutlineLeft, AiOutlineRight } from "react-icons/Ai";
import "../components/styles/pagination.css";
import { LeftArrow, RightArrow } from "./Icons";

export function Pages({ pagesNumber, page, setPage }: any) {
  return (
    <div className="pagination-container">
      <span>
        {(page - 1) * 5 + 1} - {page * 5 > pagesNumber ? pagesNumber : page * 5}{" "}
        of {pagesNumber}
      </span>
      <span className="pagination-arrows">
        <div
          className="change-page-arrow"
          onClick={() => {
            if (page !== 1) {
              setPage(page - 1);
            }
          }}
        >
          <LeftArrow />
        </div>
        <div
          className="change-page-arrow"
          onClick={() => {
            if (page !== Math.ceil(pagesNumber / 5)) {
              setPage(page + 1);
            }
          }}
        >
          <RightArrow />
        </div>
      </span>
    </div>
  );
}
