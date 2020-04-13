import React from "react";
import Grid from "@material-ui/core/Grid";
import {NoteComponent} from "./NoteComponent";

export default function DashboardView() {
    return (
        <Grid
            xs={12}
            className="dashboard"
        >
            {notes.map((note) => (
                <NoteComponent
                    note = {note}
                />
            ))}
        </Grid>
    );
}

const notes = [
    {
        id: 1,
        title: "Note 1",
        description: "Description is small.",
        complete: false
    },
    {
        id: 2,
        title: "Note 2",
        description: "Description is small too.",
        complete: true
    },
    {
        id: 3,
        title: "Note 3",
        description: "Description is what it is.",
        complete: false
    },
    {
        id: 4,
        title: "Note 4",
        description: "Description 4.",
        complete: false
    }
];