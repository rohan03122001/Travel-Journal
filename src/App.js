import './App.css';
import Nav from './Nav';
import Data from './Data';
import Cards from './Cards';

function App() {

  const card = Data.map(item=>{
    return(
        <Cards
        key = {item.id}
        {...item}
        />
    )
})

  return (
    <div className="App">
      <Nav/>
      <section>
        {card}
      </section>
    </div>
  );
}

export default App;
