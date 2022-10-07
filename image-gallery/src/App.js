import data from './helper/data';
import Card from './components/Card';


function App() {
  return (
    <div className="App">
      {data.map((item, index) => <Card item={item} />)}
    </div>
  );
}

export default App;
