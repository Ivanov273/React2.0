import React from 'react'
import s from "./Paginator.module.css";

let Paginator = (props) => {
    let page = []
    let colPages = Math.ceil(props.TotalCount / props.pagesize)
    for (let i = 1; i <= 20; i++) {
        page.push(i)
    }
    return <div>
        <div>
            {page.map(p =>
                <span onClick={() => props.SetUserPage(p)}
                      className={props.currentPage === p && s.active}>{p}</span>
            )}
        </div>
    </div>
}
export default Paginator