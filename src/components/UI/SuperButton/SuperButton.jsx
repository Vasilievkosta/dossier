import React from 'react'
import s from './SuperButton.module.scss'

export const SuperButton = ({ type, xType, children, className, disabled }) => {
    const finalClassName = s.button
        + (disabled
            ? ' ' + s.disabled
            : xType === 'view'
                ? ' ' + s.view
                : xType === 'secondary'
                    ? ' ' + s.secondary
                    : ' ' + s.default)
        + (className ? ' ' + className : '')

    return (
        <button
            type={type}
            className={finalClassName}
            children={children}
        />
    )
}
