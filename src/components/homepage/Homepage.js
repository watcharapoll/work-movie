import React from 'react'
import './homepage.css'

export default function Homepage({items,eventClick}){
    return(
        <div className={items.length < 1 ? `main__home__nodata`: `main__home`}>
            <div className="main__home__title">รายการหนังอัพเดทล่าสุด</div>
            <div className="main__card">
                {items.map((el,index)=>{
                    return(
                        <div key={index} className="card__main" onClick={() => eventClick(el)}>
                            <div className="card__head">
                                <img src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}></img>
                            </div>
                            <div className="card__content">
                                <div className="card__content__name">{el.title}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}