import React from 'react';
import './App.css';
import SearchNavBar from "./component/SearchNavBar";
import DashboardView from "./component/DashboardView";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
    return (
        <div className="App">
            <ThemeContextProvider>
                <SearchNavBar/>
                <DashboardView/>
            </ThemeContextProvider>
        </div>
    );
}

export default App;
