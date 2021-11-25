import { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import Home from "./Pages/Home";
import Spinner from "./components/ui/Spinner";

function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchvalue, setSearchValue] = useState();
  const searchRequest = async () => {
    try {
      setLoading(true);
      const result = await axios.get(`https://api.github.com/users/adoulii`);
      setUser(result.data);
      setLoading(false);
    } catch (err) {
      setError("no data found");
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    searchRequest();
    console.log(user);
  }, [searchvalue]);

  return (
    <div>
      <SearchBar handleSearch={setSearchValue} search={searchvalue} />
      <UserCard data={user} loading={loading} />
    </div>
  );
}

export default App;
