import data from './helper/data';
import Card from './components/Card';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {data.map((item, index) => <Card item={item} />)}
      </div>

    </div>
  );
}

export default App;
