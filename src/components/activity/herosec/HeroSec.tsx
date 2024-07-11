import React from 'react'
import Typography from '@mui/material/Typography'
import CutomBreadcrumbs from '../breadcrumbs/CutomBreadcrumbs'
import { Box, Container, Grid } from '@mui/material'
import ImgBanner from "./../../../assets/img/activity/activity-banner.png"

export default function HeroSec() {
  return (
    <>
        <CutomBreadcrumbs title={"Things to Do in Jeddah"} tag={"Jeddah Tours"} />
        <Box mb={3}>
            <Container maxWidth={false}>
            <Grid container>
                <Grid item md={12}>
                    <img src={ImgBanner} width={"100%"} />
                </Grid>
            </Grid>
            </Container>
        </Box>
    </>
  )
}
