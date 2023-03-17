import s from './Skils.module.css'
import { arrSkils } from '../../assets/data/data-skils'
import { SkilCard } from '../SkilCard/SkilCard'

export function Skils() {
    return (
        <section className={s.skils}>
            <div className="container">
                <h2 className="title">Skils</h2>
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