import React from 'react'

export default function CategoryList(props) {
    let categories = [];
    props.categories.map((e, i, a) => {
        if (a.length - 1 === i) {
            if (props.activeCategory == e) {
                categories.push(
                    <span onClick={() => props.update(e)} className="category-link active-category">{e}</span>
                )
            } else {
                categories.push(
                    <span onClick={() => props.update(e)} className="category-link">{e}</span>
                )
            }

        } else {
            if (props.activeCategory == e) {
                categories.push(
                    <span>
                        <span onClick={() => props.update(e)} className="category-link active-category" >{e}</span>
                        <span> / </span>
                    </span>
                )
            } else {
                categories.push(
                    <span>
                        <span onClick={() => props.update(e)} className="category-link" >{e}</span>
                        <span> / </span>
                    </span>
                )
            }

        }
    })

    return (
        <div className="category-list">
            Sorty By: {categories}
        </div>
    )
}
