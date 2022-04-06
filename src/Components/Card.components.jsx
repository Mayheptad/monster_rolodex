
import './card.style.css';

function Card({robot}) {
    const {id, name, email} = robot
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="monsters" />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
  }
  
  export default Card;
  