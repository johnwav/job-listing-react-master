import React from 'react'
import {
    Box,
    Grid,
    FilledInput,
    Select,
    MenuItem,
    Dialog,
    DialogTitle,
    DialogContent,
    DialongActions
} from '@material-ui/core'




export default props => {
    return (
        <Dialog open={false} fullWidth>
            <DialogTitle> Post a job</DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput
                            placeholder='Job title *'
                            disableUnderline
                            fullWidth></FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                        <Select
                            fullWidth
                            variant='filled'
                            disableUnderline
                            defaultValue='Full time'>
                            <MenuItem value='Full time'>Full time</MenuItem>
                            <MenuItem value='part time'>Part time</MenuItem>
                            <MenuItem value='Contract'>Contract</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                            placeholder='Company name *'
                            disableUnderline
                            fullWidth></FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                            placeholder='Company url'
                            disableUnderline
                            fullWidth></FilledInput>
                    </Grid>

                    <Grid item xs={6}>
                    <Select
                    fullWidth
                        variant='filled'
                        disableUnderline
                        defaultValue='Remote'>
                        <MenuItem value='Remote'>Remote</MenuItem>
                        <MenuItem value='In-Office'>In-Office</MenuItem>
                    </Select>
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput
                            placeholder='Apply link or Email*'
                            disableUnderline
                            fullWidth></FilledInput>
                    </Grid>

                    <Grid item xs={12}>
                    <FilledInput
                            placeholder='Job description*'
                            disableUnderline
                            fullWidth
                            multiline
                            rows={4}
                            ></FilledInput>
                    </Grid>






                </Grid>
            </DialogContent>
        </Dialog>
    )
}