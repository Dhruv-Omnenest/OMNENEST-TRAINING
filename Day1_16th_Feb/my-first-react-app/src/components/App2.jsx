import Button from "./Button"
import Profile from "./profile";

function App2() {
  const user = {
    name: 'Dhruv Mehta',
    age: 30,
  };

  const fullUser = {
    ...user,
    city: 'Mumbai',
    email : 'dhruv@omnene.com',
    country: 'India',
  };

  return (
    <>
      <h1 style={{ color: 'blue', fontSize: '24px' }} className="styled-heading">
        {" "}
        Styled Heading with inline styles and CSS class
        {" "}
      </h1>
      <p style={{ backgroundColor: 'lightgray', padding: '10px' }}>
        This paragraph has a background color
      </p>

      <Button
        text="Click Me"
        style={{ backgroundColor: 'green', color: 'white' }}
        onClick={() => alert('Button Clicked!')}
        disabled={false}
      >
      </Button>


      <Profile
        {...fullUser}
        age={20}
        city={'Tp'}
      />

    </>
  )
}

export default App2
