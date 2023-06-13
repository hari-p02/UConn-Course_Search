import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
function App() {
  return (
   <>
    <Navbar />
    <div className='search-content'>
      <div>
        <SearchBar/>
        </div>
    </div>
    <Card />
   </>
  );
}

export default App;
