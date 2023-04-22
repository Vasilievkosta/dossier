import s from './Footer.module.scss'
import { Title } from '../../common/Parts/Title/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons'
// import Slide from 'react-reveal/Slide';


export function Footer() {
    return (
        <section className={s.footer} id='footer'>
            <div className="container">

                <Title text={'Konstantin Vasiliev'} />

                {/* <Slide left> */}
                <div className={s.icons}>
                    <a href="#main"><FontAwesomeIcon icon={faTelegram} /></a>
                    <a href="#skils"><FontAwesomeIcon icon={faEnvelope} /></a>
                    <a href="#skils"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="#skils"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
                {/* </Slide> */}
                <p className={s.copy}>&#169; 2023 All Rights Reserved.</p>

            </div>
        </section>
    )
}