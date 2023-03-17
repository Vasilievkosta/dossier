import React from 'react'
import s from './ProjectCard.module.css'
import { SuperButton } from '../UI/SuperButton/SuperButton'

export const ProjectCard = ({ bg, theme, description }) => {
    const bgimage = {
        backgroundImage: `url(${bg})`
    }
    return (
        <div className={s.card} >
            <div className={s.image} style={bgimage}>
                <div className={s.btn}>
                    <SuperButton xType={'view'} children>
                        view
                    </SuperButton>
                </div>
            </div>

            <p className={s.theme}>{theme}</p>
            <p className={s.description}>
                {description}
            </p>
        </div>
    )
}