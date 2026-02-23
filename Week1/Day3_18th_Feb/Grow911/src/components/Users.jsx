import { useState, useEffect } from "react";

function User({ onClose }) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch users');
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* HEADER SECTION */}
      <div style={styles.header}>
        <div>
          <h1 style={{ margin: 0 }}>Assignment 3:</h1>
          <p style={{ color: '#666', margin: '5px 0 0 0' }}>Displaying All Registered Users</p>
        </div>
        
        <button onClick={onClose} style={styles.backBtn}>
          ← Back to Shopping
        </button>
      </div>

      <hr style={{ border: '0.5px solid #eee', marginBottom: '30px' }} />

      {/* STATUS MESSAGES */}
      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {/* USERS GRID */}
      <div style={styles.container}>
        {!loading && users.map((user) => (
          <div key={user.id} style={styles.card}>
            <div style={styles.avatar}>
              {user.name.firstname[0].toUpperCase()}{user.name.lastname[0].toUpperCase()}
            </div>
            
            <h3 style={{ margin: '15px 0 5px 0', textTransform: 'capitalize' }}>
              {user.name.firstname} {user.name.lastname}
            </h3>
            
            <p style={styles.info}><strong>Username:</strong> {user.username}</p>
            <p style={styles.info}><strong>Email:</strong> {user.email}</p>
            <p style={styles.info}><strong>Phone:</strong> {user.phone}</p>
            
            <div style={styles.addressBox}>
              <strong>Location:</strong><br />
              {user.address.number} {user.address.street}, {user.address.city}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  },
  backBtn: {
  
            padding: '10px 20px',
            background: '#f0f0f0',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center'
  },
  card: {
    width: '280px',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    backgroundColor: '#fff',
    border: '1px solid #efefef',
    textAlign: 'left'
  },
  avatar: {
    width: '50px',
    height: '50px',
    backgroundColor: '#0066cc',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    fontWeight: 'bold'
  },
  info: {
    fontSize: '14px',
    margin: '6px 0',
    color: '#444'
  },
  addressBox: {
    marginTop: '15px',
    paddingTop: '10px',
    borderTop: '1px solid #eee',
    fontSize: '12px',
    color: '#777',
    lineHeight: '1.4'
  }
};

export default User;