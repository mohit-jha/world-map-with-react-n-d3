import React from 'react'

export default function Netflix(props) {
    return (
        <div>
            <div className="cards">
                <div className="card first hero">
                    <img src={props.imgsrc} alt="immg" className="card__img hero-profile-img" />
                    <div class="hero-description-bk"></div>
                    <div className="card__info">
                        <div class="hero-description">
                            {props.title}
                        </div>
                        <span className=" card__category">
                            <div class="hero-date">
                                <h3 className="card__title"> {props.series__name}</h3>
                            </div>
                            <div class="hero-btn">
                                <a href={props.link} target='_blank'>
                                    <button > Watch Now</button>
                                </a>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
