import React from 'react';
import logo from './logo.svg';
import './App.css';
import RenderSubmitCard from './components/SubmitCard';

type transaction = {
  transaction_id: string;
  account_id: string;
  amount: number;
  created_at: string;
}

function App() {
    const [data, setData] = React.useState<transaction[]>([]);
    const [newd, setNewD] = React.useState('bhh');

    
    const fetchAPI = async () => {
      await fetch('http://localhost:5000/hey')
      .then((res) => res.json())
      .then((body) => { 
        console.log(body) 
        const api = body.map((data: any) => {
          return {
            transaction_id: data.transaction_id,
            account_id: data.account_id,
            amount: data.amount,
            created_at: data.created_at       
          }
        })  
        setData([...api])
        // console.log(...body)
        // const api = body.map((data: any) => {
          //   return {
            //     transaction_id: data.transaction_id,
            //     account_id: data.account_id,
        //     amount: data.amount,
        //     created_at: data.created_at
        //   }
        // })
        // setData([...api])
        // console.log(data)
      })
    };

    
    return (
     <RenderSubmitCard />
  );
  }

export default App;
