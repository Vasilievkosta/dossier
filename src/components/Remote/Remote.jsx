import s from './Remote.module.scss'
import { Title } from '../../common/Parts/Title/Title'
import { SuperButton } from '../UI/SuperButton/SuperButton'

export function Remote() {
    return (
        <section className={s.remote} id='remote'>
            <div className="container">

                <Title text={'Considering remote work options'} />

                <div>
                    <SuperButton type={'button'} xType={'secondary'} children>
                        ready for suggestions
                    </SuperButton>
                    <span className="srOnly">Send data</span>
                </div>
            </div>
        </section >
    )
}