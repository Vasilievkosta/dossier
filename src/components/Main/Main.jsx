import s from './Main.module.scss'
import photo from '../../assets/images/photo.png';
import ReactTypingEffect from 'react-typing-effect';

export function Main() {
    return (
        <section className={s.main} id="main">
            <div className="container">

                <div className={s.about}>
                    <div className={s.hello}>
                        <h6>Hello, I am </h6>
                        <h1>Konstantin</h1>
                        <span>I Am Passionate </span>
                        <ReactTypingEffect
                            text={["  JS Developer", "  Front-end Developer"]}
                        />
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