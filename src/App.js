import React from 'react';
import "./App.css"
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";

const App = () => {
    return (
        <div className="app">
            <div className="wrapper">
                <Header />
                <Categories/>
            </div>
        </div>
    );
}

export default App;
