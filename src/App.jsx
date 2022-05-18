// css
import './App.css'

// categories
import categories from './API/api';
// components
import Row from './components/Row'
import Banner from './components/Banner';

function App() {
  return <div className="App">
    {/*Navbar,
      destaque,
    */}
    <Banner/>
    {categories.map((category)=>{
      return (
        <Row 
          key={category.name} 
          title={category.title} 
          path={category.path}
          isLarge={category.isLarge}
        />
      );
    })}
  </div>
}

export default App;
