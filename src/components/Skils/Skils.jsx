import s from './Skils.module.scss'
import stylesApp from '../../common/styles/StylesApp.module.scss'
import { Title } from '../../common/Parts/Title/Title'
import { arrSkils } from '../../assets/data/data-skils'
import { SkilCard } from '../SkilCard/SkilCard'

export function Skils() {
    return (
        <section className={s.skils} id='skils'>
            <div className={stylesApp.container}>

                <Title text={'Skils'} />

                <div className={s.wrap}>
                    {
                        arrSkils.map((s) => (
                            <SkilCard key={s.id} icon={s.icon} tech={s.tech} description={s.description} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}