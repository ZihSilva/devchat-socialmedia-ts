import React, { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"


export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount (state => state + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Zimarlen Silva</strong>
                            <time title="February 28th at 3:09" dateTime="02-28-23 3:09pm">Published 1 hour ago </time>
                        </div>

                        <button onClick={handleDeleteComment} title="Delete comment">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Like <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>

    )
}