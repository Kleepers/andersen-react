import React from "react";

import ReactPaginate from "react-paginate";
import {Info} from "../Cards/CardsInterfaces";

import s from "./Pagination.module.css"


type Props = {
    info: Info;
    pageNumber: number;
    setPageNumber: (arg: number) => void;
}

const Pagination = ({info, pageNumber, setPageNumber}: Props): JSX.Element => {

    return (
        <ReactPaginate pageCount={info.pages}
                       forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
                       containerClassName={s.container}
                       previousLabel="Prev"
                       nextClassName={s.btn}
                       previousClassName={s.btn}
                       pageClassName={s.page}
                       pageLinkClassName={s.page_link}
                       activeClassName={s.active}
                       breakClassName={s.break}
                       disabledClassName={s.disabled}
                       pageRangeDisplayed={3}
                       marginPagesDisplayed={3}
                       onPageChange={(data) => setPageNumber(data.selected + 1)}
        />
    )
}

export default Pagination;
