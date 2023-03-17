import s from '../Footer/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons'

export function Footer() {
    return (
        <section className={s.footer}>
            <div className="container">
                <h2 className="title">Konstantin Vasiliev</h2>

                <div className={s.icons}>
                    <a href="#"><FontAwesomeIcon icon={faTelegram} /></a>
                    <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
                    <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
                <p className={s.copy}>&#169; 2023 All rights reserved</p>

            </div>
        </section>
    )
}