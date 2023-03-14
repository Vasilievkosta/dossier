import './App.css';
import photo from './access/images/photo.png'

const myPhoto = photo

function App() {
  return (
    <div className="App">
      <Header />
      <h1>My Portfolio</h1>
      <Main />
      <Skils />
      <Work />
      <Remote />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <section className="header">
      <div className="container">
        <nav>
          <ul style={{ display: 'flex', justifyContent: 'flex-end', listStyleType: 'none' }}>
            <li style={{ marginRight: '15px' }}><a href='https://www.google.com/' style={{ cursor: 'pointer' }}>Home</a></li>
            <li style={{ marginRight: '15px' }}><a href='https://www.google.com/' style={{ cursor: 'pointer' }}>Projects</a></li>
            <li style={{ marginRight: '15px' }}><a href='https://www.google.com/' style={{ cursor: 'pointer' }}>Contacts</a></li>
            <li style={{ marginRight: '15px' }}><a href='https://www.google.com/' style={{ cursor: 'pointer' }}>About</a></li>
          </ul>
        </nav>
      </div>
    </section>
  )
}
function Main() {
  return (
    <section className="main" style={{ backgroundColor: '#212529' }}>
      <div className="container">

        <div className="main__about">
          <div className="main__hello">
            <h2>Hello, I am </h2>
            <h3>Konstantin</h3>
            <p>I Am Passionate JS Developer</p>
            <p>I develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>

          </div>
          <div className="main__images">
            <img src={myPhoto} alt='myphoto' />
          </div>
        </div>
      </div>
    </section>
  )
}
function Skils() {
  return (
    <section className="skils" style={{ height: '300px', backgroundColor: '#eeffee' }}>
      <div className="container">
        <h2 className="title">Skils</h2>
      </div>
    </section>
  )
}
function Work() {
  return (
    <section className="work" style={{ height: '300px', backgroundColor: '#c3cdf7' }}>
      <div className="container">
        <h2 className="title">My Work</h2>
      </div>
    </section>
  )
}
function Remote() {
  return (
    <section className="remote" style={{ height: '150px', backgroundColor: '#eeffee' }}>
      <div className="container">
        <h2 className="title">Remote Work</h2>

      </div>
    </section>
  )
}
function Contact() {
  return (
    <section className="contact" style={{ height: '300px', backgroundColor: '#c3cdf7' }}>
      <div className="container">
        <h2 className="title">Contact</h2>
        <form>
          <input></input>
          <input></input>
          <button onClick={() => { alert('Yes!') }}>Enter</button>
        </form>
      </div>
    </section>
  )
}
function Footer() {
  return (
    <section className="footer" style={{ height: '150px', backgroundColor: '#eeffee' }}>
      <div className="container">
        <h2 className="title">Icons</h2>
        <nav>
          <ul style={{ display: 'flex', justifyContent: 'flex-end', listStyleType: 'none' }}>
            <li style={{ marginRight: '15px' }}><a href='https://www.google.com/' style={{ cursor: 'pointer' }}>Home</a></li>
            <li style={{ marginRight: '15px' }}><a href='https://www.google.com/' style={{ cursor: 'pointer' }}>Projects</a></li>
            <li style={{ marginRight: '15px' }}><a href='https://www.google.com/' style={{ cursor: 'pointer' }}>Contacts</a></li>
            <li style={{ marginRight: '15px' }}><a href='https://www.google.com/' style={{ cursor: 'pointer' }}>About</a></li>
          </ul>
        </nav>
        <p>&#169; Все права защищены</p>
      </div>
    </section>
  )
}

export default App;
