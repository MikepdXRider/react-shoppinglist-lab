import React from 'react'

export default function ListItem({listItem}) {
    return (
        <article>
            {/* render ListItem data here */}
            <h1>{listItem.item}</h1>
        </article>
    )
}
