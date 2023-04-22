import s from './Header.module.scss'
import { CustomLink } from '../../common/Parts/CustomLink/CustomLink'
import { myLinks } from '../../assets/data/data-links'

export function Header() {

    return (
        <section className={s.header}>
            <div className="container">
                <nav className={s.nav}>
                    <ul className={s.list}>
                        {
                            myLinks.map((c, i) => {
                                return (
                                    <li key={i}>
                                        <CustomLink link={c.link}>{c.name}</CustomLink>
                                    </li>
                                )
                            })
                        }

                        {/* <li ><a href='#footer'>Home</a></li>
                        <li><a href='#skils'>Skils</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='#skils'>Contacts</a></li> */}
                    </ul>
                </nav>
            </div>
        </section>
    )
}