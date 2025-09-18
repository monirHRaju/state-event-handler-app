export default function User ({user}) {
    const {name: userName, username, company: {name: companyName}, address: {city}} = user;
    return (
        <div className="section">
            <h2>{userName}</h2>
            <p>Username: {username}</p>
            <p>Company: {companyName}</p>
            <p>City: {city} </p>
        </div>
    )
}


// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//             "lat": "-37.3159",
//             "lng": "81.1496"
//         }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//     }
// }