import React from 'react'
import s from './SkilCard.module.css'

export const SkilCard = ({ icon, tech, description }) => {
    return (
        <div className={s.card}>
            <div className={s.icons}>
                <img src={icon} alt='iconTech' />
            </div>

            <p className={s.tech}>{tech}</p>
            <p className={s.description}>
                {description}
            </p>
        </div>
    )
}