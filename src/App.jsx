import './App.css';
import Reasons from './components/Reasons/Reasons';
import Hero from './components/hero/Hero';
import Join from './components/join/Join';
import Plams from './components/plans/Plams';
import Programs from './components/programs/Programs';
import Testimonials from './components/testimonials/Testimonials';
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plams />
      <Testimonials />
      <Join/>
    </div>
  );
}

export default App;
