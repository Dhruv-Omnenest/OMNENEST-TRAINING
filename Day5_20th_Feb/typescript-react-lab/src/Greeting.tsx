function Greeting({name,bio}:GreetingProps){
    return (
      <><h1>Hello , {name}!</h1>
      <p>{bio}</p></>
    )
    
  }

  // Hoisting is Flexible 
  interface GreetingProps{
    name: string
    bio? : string
  }

  export default Greeting;