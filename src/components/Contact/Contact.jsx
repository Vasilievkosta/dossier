import s from './Contact.module.scss'
import stylesApp from '../../common/styles/StylesApp.module.scss'
import { Title } from '../../common/Parts/Title/Title'
import { SuperButton } from '../UI/SuperButton/SuperButton'

export function Contact() {
    return (
        <section className={s.contact} id='contact'>
            <div className={stylesApp.container}>

                <Title text={'Contact'} />

                <div className={s.info}>
                    <form className={s.form}>
                        <label htmlFor="name" hidden>Name</label>
                        <input className={s.input} id="name" type="text" placeholder="Name" />

                        <label htmlFor="email" hidden>Email</label>
                        <input className={s.input} id="email" type="email" placeholder="Email" />

                        <label htmlFor="message" hidden>Сообщение</label>
                        <textarea className={`${s.input} ${s.msg}`} id="message"
                            placeholder="Leave a message and I will contact you"></textarea>

                        <div>
                            <SuperButton className={s.btn} type={'submit'} xType={'secondary'} children>
                                send
                            </SuperButton>
                            <span className={stylesApp.srOnly}>Send data</span>
                        </div>
                    </form>
                </div>
            </div>
        </section >
    )
}