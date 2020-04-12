import React from 'react';
import './App.css';
import SearchNavBar from "./component/SearchNavBar";
import DashboardView from "./component/DashboardView";

function App() {
    return (
        <div className="App">
            <SearchNavBar/>
            <DashboardView/>
        </div>
    );
}

export default App;
