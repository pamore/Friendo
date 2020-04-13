import Paper from "@material-ui/core/Paper";
import React from "react";
import Checkbox from '@material-ui/core/Checkbox';

export function NoteComponent(props) {
    const {id, title, description, complete} = props.note;
    return (
        <Paper
            elevation={7}
            className="note"
        >
            <p>id : {id}</p>
            <p>title : {title}</p>
            <p>description : {description}</p>
            <Checkbox
                checked={complete}
            />complete
        </Paper>
    );
}