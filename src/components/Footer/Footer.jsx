import s from './Footer.module.scss'
import stylesApp from '../../common/styles/StylesApp.module.scss'
import { Title } from '../../common/Parts/Title/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons'

export function Footer() {
    return (
        <section className={s.footer} id='footer'>
            <div className={stylesApp.container}>

                <Title text={'Konstantin Vasiliev'} />

                <div className={s.icons}>
                    <a href="#skils"><FontAwesomeIcon icon={faTelegram} /></a>
                    <a href="#skils"><FontAwesomeIcon icon={faEnvelope} /></a>
                    <a href="#skils"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="#skils"><FontAwesomeIcon icon={faGithub} /></a>
                </div>

                <p className={s.copy}>&#169; 2023 All rights reserved</p>

            </div>
        </section>
    )
}