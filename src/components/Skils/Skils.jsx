import s from './Skils.module.scss'
import { Title } from '../../common/Parts/Title/Title'
import { arrSkils } from '../../assets/data/data-skils'
import { SkilCard } from '../SkilCard/SkilCard'

export function Skils() {
    return (
        <section className={s.skils} id='skils'>
            <div className="container">

                <Title text={'Skils'} />

                <div className={s.wrap}>
                    {
                        arrSkils.map((el) => (
                            <SkilCard key={el.id} icon={el.icon} tech={el.tech} description={el.description} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}