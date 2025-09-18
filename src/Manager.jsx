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
