import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchNavBar() {
    return (
        <Paper component="form">
            <IconButton aria-label="menu">
                <MenuIcon />
            </IconButton>
            <InputBase
                placeholder="Search Google Maps"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="submit" aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}