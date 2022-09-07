import React from "react";

import s from "./Pagination.module.css"


type Props = {
    pageNumber: number;
    setPageNumber: (arg: (x: number) => number) => void;
}

const Pagination = ({pageNumber, setPageNumber}: Props): JSX.Element => {
    let next = () => {
        if (pageNumber === 42) return;
        setPageNumber(x => x + 1)
    }

    let prev = () => {
        if (pageNumber === 1) return;
        setPageNumber(x => x - 1)
    }

    return (<div className={s.container}>
        <button onClick={prev} className={s.btn}>Prev</button>
        <button onClick={next} className={s.btn}>Next</button>
    </div>)
}

export default Pagination;