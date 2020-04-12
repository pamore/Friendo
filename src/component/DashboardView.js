import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default function DashboardView() {
    return(
        <Grid
            xs={12}
            className="dashboard"
            style={{background: theme.ui, color: theme.syntax}}
        >
            <Paper elevation={7} className="note"/>
            <Paper elevation={7} className="note"/>
            <Paper elevation={7} className="note"/>
        </Grid>
    );
}