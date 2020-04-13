import React from 'react';
import './App.css';
import SearchNavBar from "./component/SearchNavBar";
import DashboardView from "./component/DashboardView";
import AppHeader from "./component/AppHeader";

function App() {
    return (
        <div className="App">
            <AppHeader/>
            <div className="appView">
                <SearchNavBar/>
                <DashboardView/>
            </div>
        </div>
    );
}

export default App;
