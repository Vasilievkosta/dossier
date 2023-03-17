import s from './Remote.module.css'
import { SuperButton } from '../../components/UI/SuperButton/SuperButton'

export function Remote() {
    return (
        <section className={s.remote}>
            <div className="container">
                <h2 className="title">Considering remote work options</h2>
                <div className={s.btn}>
                    <SuperButton xType={'secondary'} children>
                        ready for suggestions
                    </SuperButton>
                </div>
            </div>
        </section >
    )
}