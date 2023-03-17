import './App.css';
import { Main } from './components/Main/Main'
import { Header } from './components/Header/Header'
import { Skils } from './components/Skils/Skils'
import { Projects } from './components/Projects/Projects'
import { Remote } from './components/Remote/Remore'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skils />
      <Projects />
      <Remote />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
