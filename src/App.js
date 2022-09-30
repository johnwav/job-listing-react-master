import React from "react";
import { Box, ThemeProvider, Grid } from "@material-ui/core";
import theme from "./theme/theme"
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import JobCard from "./components/Job/JobCard";
import Newjobmodal from "./components/Job/NewJobModal";


export default () => {
  return <ThemeProvider theme={theme}>

    <Header />
    <Newjobmodal />
    <Grid container justify='center'>

      <Grid item xs={10}>
        <Searchbar />
        <JobCard />
        <JobCard />
        <JobCard />
      </Grid>
    </Grid>
  </ThemeProvider>

};
