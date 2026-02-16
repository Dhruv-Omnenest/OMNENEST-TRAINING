import { useState } from "react";
import Portfolio from "./portfolio";
import Footer from "./footer";
import Header from "./header";
import { useLocation } from "react-router-dom";

function Dashboard() {
    const uselocation = useLocation();
    const userData = {
        name: "Dhruv Mehta",
        balance: 10000,
        profilePicture: "https://images.pexels.com/photos/6367986/pexels-photo-6367986.jpeg?_gl=1*1k3iore*_ga*MTEwMzc0OTU1LjE3NzA4ODg5MTY.*_ga_8JE65Q40S6*czE3NzEyMzIzNTEkbzIkZzAkdDE3NzEyMzIzNTEkajYwJGwwJGgw",
        age: 30,
        location: "New York, USA",
    }
    const [showPortfolio, setShowPortfolio] = useState(false);


    if (showPortfolio) {

        return (<div className="dashboard">
            <h2>Welcome to the Financial Trading Dashboard</h2>
            <Portfolio
                name={userData.name}
                balance={userData.balance}
                profilePicture={userData.profilePicture}
                onBack={() => setShowPortfolio(false)}
            />
        </div>)
    }
    return (
        <>
        <Header />
        <p>Welcome to the Financial Trading Dashboard</p>
        <p>Email: {uselocation.state?.email || "Not available"}</p>
        <p>PassWord: {uselocation.state?.password || "Not available"}
        </p>
        <button onClick={() => setShowPortfolio(true)}>Show Profile</button>
        <Footer />
        </>
    )
}

export default Dashboard;