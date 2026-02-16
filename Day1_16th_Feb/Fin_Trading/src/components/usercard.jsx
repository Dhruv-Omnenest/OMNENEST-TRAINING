function UserCard({ name, balance, profilePicture }) {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "16px",
                width: "250px",
                textAlign: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}
        >
            <img
                src={profilePicture}
                alt={name}
                style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    objectFit: "cover"
                }}
            />

            <h3>{name}</h3>
            <p>Balance: ${balance}</p>
        </div>
    );
}

export default UserCard;
