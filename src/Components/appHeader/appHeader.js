import React from "react"
import "./appHeader.css"
const AppHeader = (props) => {
    return (
        <div className = "app-header d-flex">
            <h1>Пользователь: Владимир</h1>
            <h2>{props.allPosts} записи, лайкнули {props.liked}</h2>
        </div>
    )
}

export default AppHeader;