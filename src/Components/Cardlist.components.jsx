
import Card from "./Card.components";

import './cardlist.style.css';

function Cardlist({monsters}) {
  return (
    <div className="card-list">
{monsters.map( eachMonster => <Card key={eachMonster.id} robot={eachMonster}/> ) }
    </div>
  )
}

export default Cardlist;
