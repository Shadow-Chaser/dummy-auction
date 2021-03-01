import userEvent from '@testing-library/user-event';
import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import Player from './Components/Player/Player';

function App() {

  const [players, setPlayers] = useState([]);

  useEffect(()=>{
    fetch(`https://api.mocki.io/v1/94140e49`)
    .then(response => response.json())
    .then(data => {
        setPlayers(data);
    })
    .catch(error=>error)

  },[])

  return (
    <div>

      <Header></Header>

      <div className="d-flex  row">
        <div className="col-md-8 col-sm-12">
          {
            players.map(player => <Player player={player} key={userEvent.id}></Player>)
          }
        </div>
        
        <div className="col-md-4 col-sm-12"> 
          <Cart></Cart>
        </div>
       
      </div>

    </div>
  );
}

export default App;
