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
      <div style={{ width: '100%' }}>
        <Features />
      </div>
      <Footer />
    </div>
  );
}

export default App;
