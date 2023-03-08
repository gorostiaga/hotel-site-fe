import React from 'react';
import { useParams, json, redirect } from 'react-router-dom';

function PaymentPage(props) {

    const params = useParams(); 

    const submitHandler = async () => {        
        const response = await fetch('http://localhost:8080/payment/'+ params.userId
        + '/'+params.roomId);
        if(!response.ok) {
    
            throw json({message: 'Algo paso al momento del pago :('}, {status: 500})
          }
          console.log('done');
          return redirect('/'); 

    }; 

    return (
        <>
        <div>
            Payment!
        </div>
        <button type='submit' onClick={submitHandler}>Save</button>
        </>
    );
}

export default PaymentPage;

export async function action ({params}) {
    console.log('actions from payment!'); 

}