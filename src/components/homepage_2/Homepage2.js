import React from 'react'
import './Homepage2.css'

export default function Homepage2({items}){
    return(
        <div className="main__homepage2">
            <div className="card__main__head">
                <img src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}></img>
            </div>
            <div className="card__main__body">
                <div className="card__main__body__name">
                    <div>Name :</div>
                    <div>{items.original_title}</div>
                </div>
                <div className="card__main__body__language">
                    <div>language :</div>
                    <div>{items.original_language}</div>
                </div>
                <div className="card__main__body__date">
                    <div>date :</div>
                    <div>{items.release_date}</div>
                </div>
                <div className="card__main__body__title">
                    <div>title :</div>
                    <div>{items.overview}</div>
                </div>
            </div>
        </div>
    )
}