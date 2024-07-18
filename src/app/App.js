import Header from '../components/header/header';
import Home from '../components/home/home';
import SubreditsList from '../components/subredits/subredditsList';

function App() {
  return (
    <div className='app'>
    <div class="container">
      <Header />
    <div className="row">
      <div className="col">
      <Home />
      </div>
      <div className="col">
        <SubreditsList />
      </div>
    </div>
  </div>
  </div>
  );
}

export default App;
