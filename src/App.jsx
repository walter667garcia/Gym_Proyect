import './App.css';
import Reasons from './components/Reasons/Reasons';
import Hero from './components/hero/Hero';
import Plams from './components/plans/Plams';
import Programs from './components/programs/Programs';
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plams/>
    </div>
  );
}

export default App;
