import UserCard from "../cards/usercard";


function Portfolio({ name, balance, profilePicture, onBack }) {
    return (
        <div className="portfolio">
            <h2>Your Portfolio</h2>
            <p>Track your investments and performance here.</p>

            <UserCard
                name={name}
                balance={balance}
                profilePicture={profilePicture}
            />

            <button onClick={onBack}>Back to Dashboard</button>
        </div>
    );
}

export default Portfolio;
