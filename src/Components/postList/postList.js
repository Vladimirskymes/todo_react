import React from "react"
import PostListItem from "../postListItem/postListItem"
import "./postList.css"
const PostList = (props) => {
    const elements = props.posts.map((i) => {
        return (
            <li key={i.id} className = "list-group-item">
                <PostListItem label={i.label} important={i.important} like={i.like}
                onDelete = {() => props.onDelete(i.id)}
                onToggleImportant = {() => props.onToggleImportant(i.id)}
                onToggleLiked = {() => props.onToggleLiked(i.id)}

                />

            </li>
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;