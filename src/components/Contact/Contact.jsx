import s from './Contact.module.css'

export function Contact() {
    return (
        <section className={s.contact} >
            <div className="container">
                <h2 className="title">Contact</h2>
                <div className={s.info}>
                    <form className={s.form}>
                        <label for="name" hidden>Name</label>
                        <input class={s.input} id="name" type="text" placeholder="Name" />
                        <label for="email" hidden>Email</label>
                        <input class={s.input} id="email" type="email" placeholder="Email" />

                        <label for="message" hidden>Сообщение</label>
                        <textarea class={`${s.input} ${s.msg}`} id="message"
                            placeholder="Leave a message and I will contact you"></textarea>

                        <button class={s.btn} >
                            <span class="sr-only">Send data</span>
                            send
                        </button>
                        {/* type="submit" */}
                    </form>
                </div>

            </div>
        </section >
    )
}