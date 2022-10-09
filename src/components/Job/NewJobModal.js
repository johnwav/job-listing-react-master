import React, { useState } from 'react'
import {
    Box,
    Grid,
    FilledInput,
    Select,
    MenuItem,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
    makeStyles,
    Button,
    IconButton,
    CircularProgress
} from '@material-ui/core'

import { Close as CloseIcon } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    skillChip: {
        margin: theme.spacing(0.75),
        padding: theme.spacing(0.75),
        fontSize: '14.5px',
        borderRadius: '5px',
        transition: '.3s',
        cursor: 'pointer',
        fontWeight: 600,
        border: `1px solid ${theme.palette.secondary.main}`,
        color: theme.palette.secondary.main,

        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            color: '#fff'
        },
    },
    included: {
        backgroundColor: theme.palette.secondary.main,
        color: '#fff'
    }
}))


const initState = {
    companyName: "",
    companyUrl: "",
    link: "",
    location: "Remote",
    skills: [],
    title: "",
    type: "Full time",
    description: ""
}


export default props => {
    const [loading, setLoading] = useState(false)

    const [jobDetails, setJobDetails] = useState(initState)

    const handleChange = (e) => {
        e.persist();
        setJobDetails((oldState) => ({
            ...oldState,
            [e.target.name]: e.target.value
        }))
    }

    const addRemoveSkill = skill => jobDetails.skills.includes(skill)
        ? setJobDetails(oldState => ({
            ...oldState,
            skills: oldState.skills.filter(skillProp => skill != skill)
        }))
        // removing
        : setJobDetails(oldState => ({
            ...oldState,
            skills: oldState.skills.concat(skill)
        }))

    const handleSubmit = async () => {
        setLoading(true);
        await props.postJob(jobDetails);
        closeModal();
    }

    const closeModal = () => {
        setJobDetails(initState);
        setLoading(false);
        props.closeModal();
    }



    const classes = useStyles()
    const skills = [
        'Javascript',
        'React',
        'Node',
        'Vue',
        'Firebase',
        'MongoDB'
    ]

    console.log(jobDetails)

    return (
        <Dialog open={props.newJobModal} fullWidth>
            <DialogTitle>
                <Box

                    display="flex"
                    justifyContent='space-between'
                    alignItems='center'>
                    Post job
                    <IconButton  onClick={closeModal}>
                        <CloseIcon>

                        </CloseIcon>
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput
                            onChange={handleChange}
                            name='title'
                            value={jobDetails.title}
                            autoComplete='off'
                            placeholder='Job title *'
                            disableUnderline
                            fullWidth></FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                        <Select
                            onChange={handleChange}
                            name='type'
                            value={jobDetails.type}
                            fullWidth
                            variant='filled'
                            disableUnderline>
                            <MenuItem value='Full time'>Full time</MenuItem>
                            <MenuItem value='part time'>Part time</MenuItem>
                            <MenuItem value='Contract'>Contract</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                            onChange={handleChange}
                            name='companyName'
                            value={jobDetails.companyName}
                            autoComplete='off'
                            placeholder='Company name *'
                            disableUnderline
                            fullWidth></FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                            onChange={handleChange}
                            name='companyUrl'
                            value={jobDetails.companyUrl}
                            autoComplete='off'
                            placeholder='Company url'
                            disableUnderline
                            fullWidth></FilledInput>
                    </Grid>

                    <Grid item xs={6}>
                        <Select
                            onChange={handleChange}
                            name='location'
                            value={jobDetails.location}
                            fullWidth
                            variant='filled'
                            disableUnderline>
                            <MenuItem value='Remote'>Remote</MenuItem>
                            <MenuItem value='In-Office'>In-Office</MenuItem>
                        </Select>
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput
                            onChange={handleChange}
                            name='link'
                            value={jobDetails.link}
                            autoComplete='off'
                            placeholder='Apply link or Email*'
                            disableUnderline
                            fullWidth></FilledInput>
                    </Grid>

                    <Grid item xs={12}>
                        <FilledInput
                            onChange={handleChange}
                            name='description'
                            value={jobDetails.description}
                            autoComplete='off'
                            placeholder='Job description*'
                            disableUnderline
                            fullWidth
                            multiline
                            rows={4}
                        ></FilledInput>
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Typography>
                        Skills
                    </Typography>
                    <Box display='flex'>
                        {skills.map((skill) => (
                            <Box onClick={() => addRemoveSkill(skill)}
                                className={`${classes.skillChip} ${jobDetails.skills.includes(skill) && classes.included}`}
                                key={skill}>
                                {skill}
                            </Box>
                        ))}
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Box
                    color='red'
                    width='100%'
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'>
                    <Typography>*Required Feilds</Typography>
                    <Button
                        onClick={handleSubmit}
                        variant="contained"
                        disableElevation
                        color="primary"
                        disabled={loading}
                    >
                        {loading ? (<CircularProgress color='secondary' size={22}>

                        </CircularProgress>)
                            :
                            ("Post a Job")
                        }
                    </Button>
                </Box>
            </DialogActions>
        </Dialog>
    )
}