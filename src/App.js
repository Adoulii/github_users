import { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import Home from "./Pages/Home";
import Spinner from "./components/ui/Spinner";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const searchRequest = async (search) => {
    try {
      setLoading(true);
      const result = await axios.get(`https://api.github.com/users/${search}`);
      console.log(result.data);
      setUser(result.data);
      setLoading(false);
    } catch (err) {
      setError("no data found");
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    searchRequest("adoulii");
    console.log(user);
  }, []);

  return (
    <div>
      <SearchBar searchRequest={searchRequest} />
      <UserCard data={user} loading={loading} />
    </div>
  );
}

export default App;
