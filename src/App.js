import 'animate.css';
import './App.css';
import Introduction from './components/Introduction';
import Testimonials from './components/Testimonials';
import Models from './components/Models';
import SpecialDeal from './components/SpecialDeal';
import SignUp from './components/SignUp';

function App() {
  return (
    <div>
      <Introduction />
      <Testimonials />
      <Models />
      <SpecialDeal />
      <SignUp />
    </div>
  );
}

export default App;
