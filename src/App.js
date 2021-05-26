import './App.css';
import 'aos/dist/aos.css';
import Features from './components/Features';
import Header from './components/Header.component';
import HeroBlock from './HeroBlock';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBlock />
      <div>
        <Features />
      </div>
      <Footer />
    </div>
  );
}

export default App;
