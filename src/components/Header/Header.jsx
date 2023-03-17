import s from './Header.module.css'

export function Header() {
    return (
        <section className={s.header}>
            <div className="container">
                <nav className={s.nav}>
                    <ul>
                        <li ><a href='https://www.google.com/'>Home</a></li>
                        <li><a href='https://www.google.com/'>Skils</a></li>
                        <li><a href='https://www.google.com/'>Projects</a></li>
                        <li><a href='https://www.google.com/'>Contacts</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}