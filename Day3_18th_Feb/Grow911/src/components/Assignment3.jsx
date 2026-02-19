import { useState,useEffect } from "react"
function Assignment(){
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  justifyContent: 'flex-start'
};

const cardStyle = {
  width: '280px',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  textAlign: 'left'
};

const avatarStyle = {
  width: '50px',
  height: '50px',
  backgroundColor: '#007bff',
  color: 'white',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '18px',
  fontWeight: 'bold'
};

const infoStyle = {
  fontSize: '14px',
  margin: '4px 0',
  color: '#555'
};

const addressStyle = {
  fontSize: '12px',
  color: '#888',
  lineHeight: '1.4'
};

  useEffect(() => {
    setError(null);

    fetch('https://fakestoreapi.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Product not found');
        return res.json();
      })
      .then(data => {
        setUsers(data);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

    return(
        <div>
            <h1>
                Assignment 3:
                Display All Users
            </h1>
        <div>

        {
                   <div style={containerStyle}>
        {users.map((user) => (
          <div key={user.id} style={cardStyle}>
            <div style={avatarStyle}>
              {user.name.firstname[0].toUpperCase()}{user.name.lastname[0].toUpperCase()}
            </div>
            
            <h3 style={{ margin: '10px 0 5px 0', textTransform: 'capitalize' }}>
              {user.name.firstname} {user.name.lastname}
            </h3>
            
            <p style={infoStyle}><strong>Username:</strong> {user.username}</p>
            <p style={infoStyle}><strong>Email:</strong> {user.email}</p>
            <p style={infoStyle}><strong>Phone:</strong> {user.phone}</p>
            
            <hr style={{ border: '0.5px solid #eee', margin: '10px 0' }} />
            
            <p style={addressStyle}>
              <strong>Location:</strong><br />
              {user.address.number} {user.address.street}, {user.address.city}
            </p>
          </div>
        ))}
      </div>
           
          
        }

        </div>
        </div>
    )
}

export default Assignment;