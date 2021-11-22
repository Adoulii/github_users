import { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import Home from './Pages/Home'

function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchvalue, setSearchValue] = useState();
  const searchRequest = async () => {

    try {
      setLoading(true);
      const result = await axios.get("https://api.github.com/users/adoulii");
      setUser(result.data);
      setLoading(false);
    } catch (err) {
      setError("no data found");
      setLoading(false);
      console.log(err);
    }
  };

  const dateFormatter = () => {
    const date = user.created_at
    console.log(date)
    //console.log(new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(date));
   //const date = user.created_at
   //console.log(date)

  }

  useEffect(() => {
    searchRequest();
    dateFormatter();
    console.log(user)
  }, [searchvalue]);

  return (
    <>
      {error ? <div>Error fetching data</div> : ''}
      {loading ? <div>loading...</div> : ''}
      {(!error && !loading)  ?<div></div> : ''}
      {/* <UserCard data={user}/> */}
      <SearchBar handleSearch={setSearchValue} search={searchvalue}  />
      <UserCard data={user} />
     
    </>
  );
}

export default App;
