import React from 'react'
import s from './Title.module.scss'

export const Title = ({ text }) => (
    <h2 className={s.title}>{text}</h2>
)