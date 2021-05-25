import './App.css';
import 'aos/dist/aos.css';
import Features from './components/Features';
import Header from './components/Header.component';
import HeroBlock from './HeroBlock';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBlock />
      <Features />
    </div>
  );
}

export default App;
