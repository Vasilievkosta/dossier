import s from './Header.module.scss'
import stylesApp from '../../common/styles/StylesApp.module.scss'

export function Header() {
    return (
        <section className={s.header}>
            <div className={stylesApp.container}>
                <nav className={s.nav}>
                    <ul className={s.list}>
                        <li ><a href='#footer'>Home</a></li>
                        <li><a href='#skils'>Skils</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='#contact'>Contacts</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}