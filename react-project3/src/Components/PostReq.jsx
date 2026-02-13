import { useState } from "react";


function PostReq() {
    const [isFinished, setIsFinished] = useState(false)
    const [message, setMessage] = useState(null)
    const [error, setError] = useState(false)

    async function postData() {
        try {const res = await fetch('https://api.restful-api.dev/objects', {
            method: 'POST',
            body: {
                'name': 'Apple MacBook',
                'data': JSON.stringify({
                    'year': 2019,
                    'price': 1849.99,
                })
            },
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        if(res.ok) {
            setIsFinished(true);
            setMessage("Request is SuccessFull")
        } else {
            throw res;
        }
    } catch (error) {
        setIsFinished(true);
        setError(true);
        setMessage("Request Failed")
        }
    }
    return (
        <div>
            <h1>Making Post Request</h1>
            {isFinished && <h2>{error ? message : message}</h2>}
            <button onClick={}>Post Data</button>
        </div>
    )
}

export default PostReq;