import React from 'react'
import SearchBar from '../components/SearchBar'
import UserCard from '../components/UserCard'

function Home({user}) {
    return (
        <div>
            <SearchBar  />
            <UserCard data={user}/>
        </div>
    )
}

export default Home
