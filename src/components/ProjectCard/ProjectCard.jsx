import React from 'react'
import s from './ProjectCard.module.scss'

export const ProjectCard = ({ bg, theme, href, description }) => {
    const bgimage = {
        backgroundImage: `url(${bg})`
    }
    return (
        <div className={s.card} >
            <div className={s.image} style={bgimage}>
                <div className={s.link}>
                    <a href={href}>view</a>
                </div>
            </div>

            <p className={s.theme}>{theme}</p>
            <p className={s.description}>
                {description}
            </p>
        </div>
    )
}