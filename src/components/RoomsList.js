import React from "react";
import classes from "./RoomsList.module.css";
import { Link } from "react-router-dom";

function RoomsList({ rooms }) {

   

  return (
    <div className={classes.rooms}>
      <h1>Todas las Cabañar y Habitaciones</h1>
      <ul className={classes.list}>
        {rooms.map((room) => (            
          <li key={room.id} className={classes.item}>          
            <Link to={room.id.toString()}>
              <img src={room.mainImage} alt={room.name} />
              <div className={classes.content}>
                <h2>{room.name}</h2>
                <h2> Numero de personas {room.amountPeople}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoomsList;
