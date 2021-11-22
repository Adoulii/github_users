import React from 'react'
import SearchBox from './ui/SearchBox'
import UseDarkMode from '../hook/UseDarkMode'
function SearchBar(props) {
    return (
        <div className="grid grid-cols-7 pt-24 pb-3">
            <div className="col-start-3 col-span-3 bg-indigo-50 px-4 py-4 items-center rounded-xl dark:bg-gray-700 ">
               <SearchBox value={props.searchvalue} test= {props.handleSearch}/>
            </div>
            
        </div>
    )
}

export default SearchBar
