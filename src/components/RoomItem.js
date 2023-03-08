import React from 'react';
import  classes from './RoomItem.module.css';


function RoomItem({room}) {  
    return (
        <article className={classes.room}>
          {room.images.map(image => {
            return <img src={image.path} alt={room.name} key={image.name} />
          })}
          
          <h1>{room.name}</h1>          
          <p>{room.description}</p>          
        </article>
      );
}

export default RoomItem;