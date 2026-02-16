
function Portfolio({ name, balance, profilePicture, onBack }) {
    return (
        <div className="portfolio">
            <h2>Your Portfolio</h2>
            <p>Track your investments and performance here.</p>
            <div className="user-info">
                <img   style={
                    {
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                    }
                }     src={profilePicture} alt={`${name}'s profile`} className="profile-picture" />
                <div className="user-details">
                    <h3>{name}</h3>
                    <p>Balance: ${balance}</p>
                </div>
            </div>
            <button onClick={onBack}>Back to Dashboard</button>
        </div>
    );
}

export default Portfolio;