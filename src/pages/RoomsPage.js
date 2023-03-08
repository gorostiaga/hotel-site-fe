import React from 'react';
import { useLoaderData, json } from 'react-router-dom';
import RoomsList from '../components/RoomsList';

function RoomsPage(props) {

    const data = useLoaderData(); 
    const rooms = data.rooms; 

    return (
        <>
           <RoomsList rooms={rooms} />
        </>
    );
}

export default RoomsPage;

export async function loader() {
    
    const response = await fetch("http://localhost:8080/rooms");
  
    if (!response.ok) {
      // throw{message: 'Could not fetch events.'};
      // throw new Response(JSON.stringify({message: 'Could not fetch events.'}),
      // {status: 500});
      throw json({ message: "Could not fetch rooms" }, { status: 500 });
    } else {
      // const resData = await response.json();
      // return resData.events;
      return response;
    }
  }