import { useState } from "react"

export default function Welcome () {
    const [welcome, setWelcome] = useState(false)

    const welcomeHandler = () => setWelcome(!welcome)
    // console.log(welcomeHandler())

    return (
        <div className="section">
            <h1>Welcome Message show/hide</h1>
            <button onClick={welcomeHandler} style={welcome ? {backgroundColor: "red"} : {backgroundColor: "green"}}>
                {welcome ? 'Hide' : 'Show'}
            </button>

            {
                welcome && <h3>Welcome to React</h3>
            }

        </div>
    )
}