import React from 'react'
import s from './SuperButton.module.css'

export const SuperButton = ({ xType, children, className, disabled }) => {
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

            className={finalClassName}
            children={children}
        />
    )
}
