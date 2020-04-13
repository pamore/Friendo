import React, {useState} from "react";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';

export default function SearchNavBar() {
    const [searchValue, setSearchValue] = useState("");
    return (
        <Paper component="form" className="navBar">
            <InputBase
                placeholder="Search..."
                className="searchInput"
                onChange={event => setSearchValue(event.target.value)}
            />
            <IconButton
                onClick={event => console.log(searchValue)}
                className="iconButton"
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}