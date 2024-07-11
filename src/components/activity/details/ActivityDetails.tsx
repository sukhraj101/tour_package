import { Box, Container, Grid, Typography } from '@mui/material'
import Base from './Base'
import Bookingmd from './Bookingmd'


import logo from "./../../../assets/img/activity/activity-logo.png"

export default function ActivityDetails() {
  return (
    <>
        <Box>
            <Container maxWidth={false}>
                <Typography variant="body1" color="initial">
                    <Grid container spacing={4}>
                        <Grid item md={8}>
                            <Base logo={logo} />
                        </Grid>
                        <Grid item md={4}>
                            <Bookingmd />
                        </Grid>
                    </Grid>
                </Typography>
            </Container>
        </Box>
    </>
  )
}
