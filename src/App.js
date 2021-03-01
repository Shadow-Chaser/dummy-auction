import userEvent from '@testing-library/user-event';
import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import Player from './Components/Player/Player';

function App() {

  const [players, setPlayers] = useState([]);
  const [addedPlayer, setAddedPlayer] = useState([]);

  const handleAddPlayer = (player)=> {
    const newAddedPlayer = [...addedPlayer, player];
    setAddedPlayer(newAddedPlayer);
  };

  const totalBudget = addedPlayer.reduce((sum,user)=>sum+user.salary, 0);


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
          <div className="col-md-8 col-sm-12 ">
            {
              players.map(player => <Player player={player} key={player.id} handleAddPlayer={handleAddPlayer} ></Player>)
            }
          </div>
        
        
        
        <div className="col-md-4 col-sm-12"> 
          <Cart addedPlayer={addedPlayer} totalBudget={totalBudget}></Cart>
        </div>
       
      </div>

    </div>
  );
}

export default App;
