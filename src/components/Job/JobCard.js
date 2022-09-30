import React from 'react';
import { Box, Grid, Typography, Button, makeStyles } from '@material-ui/core'
import theme from '../../theme/theme';

const skills = ["Javascript", "React.js", "Node.js"]

const useStyles = makeStyles(() => ({
    wrapper: {
        border: '1px solid #e8e8e8',
        transition: '.3s',

        '&:hover': {
            boxShadow: "0px 5px 25px rgba(0, 0, 0, 0.1)",
            borderLeft: "6px solid #4D64E4",
        }
    },
    comapanyName: {
        fontSize: '13.5px',
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(0.75),
        borderRadius: '5px',
        display: 'Inline-block',
        fontWeight: 600,
    },
    skillChip: {
        margin: theme.spacing(0.75),
        padding: theme.spacing(0.75),
        fontSize: '14.5px',
        borderRadius: '5px',
        transition: '.3s',
        cursor: 'pointer',
        fontWeight: 600,
        backgroundColor: theme.palette.secondary.main,
        color: '#fff'
    }
}))

export default props => {

    const classes = useStyles()

    return (
        <Box p={2} className={classes.wrapper}>
            <Grid container alignItems='center'>
                <Grid item xs>
                    <Typography
                        variant='subtitle1' >
                        Frontend dev</Typography>
                    <Typography
                        className={classes.comapanyName}
                        variant='subtitle2'>
                        Google</Typography>
                </Grid >

                <Grid 
                item container xs>
       
                    {skills.map(skill => (
                        <Grid key={skill} item          
                        className={classes.skillChip}>
                            {skill}
                        </Grid>
                    ))}
                </Grid>

                <Grid item container direction='column' alignItems='flex-end' xs>
                    <Grid item>
                        <Typography variant='caption'>
                            2577 min ago | fulltime | Remote
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Box mt={2}>
                            <Button variant='outlined'>Check</Button>
                        </Box>

                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};