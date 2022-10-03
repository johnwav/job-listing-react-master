import React, { useState, useEffect } from "react";
import { Box, ThemeProvider, Grid, CircularProgress } from "@material-ui/core";
import theme from "./theme/theme"
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import JobCard from "./components/Job/JobCard";
import Newjobmodal from "./components/Job/NewJobModal";
// import jobData from './dummyData';
import { firestore } from './firebase/config'


export default () => {

  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchJobs = async () => {
    const req = await firestore
      .collection('jobs')
      .orderBy('postedOn', 'desc')
      .get();
    const tempJobs = req.docs.map(job => ({...job.data(), id: job.id, postedOn: job.data().postedOn.toDate()}));
    setJobs(tempJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, [])

  return <ThemeProvider theme={theme}>

    <Header />
    <Newjobmodal />
    <Grid container justify='center'>

      <Grid item xs={10}>
        <Searchbar />
        {
          loading ? <Box display='flex' justifyContent='center' ><CircularProgress /> </Box>
          : jobs.map(job => <JobCard key={job.id}  {...job} />)
        }

        
      </Grid>
    </Grid>
  </ThemeProvider>

};
