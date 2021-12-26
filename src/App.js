import logo from './logo.svg';
import './App.css';

function App() {
  componentDidMount = async () => {
    try {
      const { data } = await dataApi.get('/products');
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="App">

    </div>
  );
}

export default App;
