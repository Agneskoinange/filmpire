import {useEffect} from "react";

import "./App.css"
// import SearchIcon from "./search.svg"


// http://www.omdbapi.com/?i=tt3896198&apikey=6c8566af

const API_URL = "http://www.omdbapi.com?apikey=6c8566af";

const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);

        const data = await response.json();

        console.log(data.Search)

    }

    useEffect (()=> {

        searchMovies("Spiderman");
    }, []);

    return (
        <h1>App</h1>
    );
}

export default App;