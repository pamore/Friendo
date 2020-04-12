import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {NoteComponent} from "./NoteComponent";

export default function DashboardView() {
    return(
        <Grid
            xs={12}
            className="dashboard"
        >
            <NoteComponent />
            <NoteComponent />
        </Grid>
    );
}