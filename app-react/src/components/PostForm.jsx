import React, { useState } from 'react'

export function PostForm() {
    const url = '';
    const [data, setData] = useState({
        account_id: '',
        amount: 0,
    })

    function handle(e){
        const newData = {...data}
        newData[e.target.id] = e.target.value
        console.log(newData)
        setData(newData)
        console.log(newData);
    }

    function submit(e) {
        e.preventDefault();
     console.log(data)

     fetch('http://localhost:5000/postSubmit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    //    fetch(`https://infra.devskills.app/api/transaction-management/transactions`, {
    //     method: 'POST',
    //     body: JSON.stringify(data),
    //     headers: { 'Content-Type': 'application/json' }
    //  }).then((res) => res.json())
    //     .then(json => console.log(json))

    }
    return (
        <div>
                <form onSubmit={(e) => submit(e)}> 
                    <label>AccountId:</label><br/>
                    <input onChange={(e) => handle(e)} id="account_id" value={data.account_id} data-type="account-id" type="text" /><br/>
                    <label>Amount:</label><br/>
                    <input onChange={(e) => handle(e)} id="amount" value={data.amount} data-type="amount" type="number" /><br/><br/>
                    <input data-type="transaction-submit" type="submit"/>
                </form>
        </div>
    )
}