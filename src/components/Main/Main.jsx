import stylesApp from '../../common/styles/StylesApp.module.scss'
import s from './Main.module.scss'
import photo from '../../assets/images/photo.png';
export function Main() {
    return (
        <section className={s.main} >
            <div className={stylesApp.container}>

                <div className={s.about}>
                    <div className={s.hello}>
                        <h6>Hello, I am </h6>
                        <h1>Konstantin</h1>
                        <p>I Am Passionate JS Developer</p>
                        <p>I develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                    </div>
                    <div className={s.images}>
                        <img src={photo} alt='myphoto' />
                    </div>
                </div>
            </div>
        </section>
    )
}