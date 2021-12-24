import Movie from "./components/movie/Movie";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState(false);

  // Just for creating a user (Not best practice)
  useEffect(() => {
    const createUser = async () => {
      if (!user) {
        try {
        await axios.post("http://localhost:3001/user", {
            username: "User",
          });
          setUser(true);
        } catch (err) {
          console.log(err);
        }
      }
    };
    createUser();
  }, []);
  return (
    <div className="movies">
      <Movie />
    </div>
  );
}

export default App;
