import { Box, Link, Paper, Rating, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Icon1 from './../../../assets/img/activity/icon-1.png'
import Icon2 from './../../../assets/img/activity/icon-2.png'
import Icon3 from './../../../assets/img/activity/icon-3.png'

export default function Base({ logo, value = 4.5 }) {
    return (
        <>
            <Paper elevation={3} sx={{ padding: 3, borderRadius: 3 }}>
                <Box sx={{ maxWidth: "710px" }}>
                    <Typography variant="h4" color="initial" fontWeight={900} lineHeight={1.4} marginBottom={2}>
                        Jet Ski Tour of Jeddah: Red Sea, <br />
                        City Skyline, Palm Jumeirah
                    </Typography>
                    {logo && (
                        <img src={logo} />
                    )}
                    {value && (
                        <Box
                            sx={{
                                my: 1.75,
                                width: 200,
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Rating
                                name="text-feedback"
                                value={value}
                                readOnly
                                precision={0.5}
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                            <Box sx={{ ml: 1.5, fontWeight: 700 }}>{value} (233)</Box>
                        </Box>
                    )}
                    <Typography sx={{ fontSize: "16px", fontWeight: 700, }}>
                        The Rea Sea is a great vantage point for Jaddah skyline and landmarks—with nothing obstructing the sights. On this tour, get ample time to enjoy the scenery combined with the thrill of a Jet Ski ride.
                        Zip across the water to see Burj Al Arab, Palm Jumeirah, and the city skyline, and take Instagram-worthy photos en route. A choice of departures allows....  <Link>Read more</Link>
                    </Typography>

                </Box>
                <Box>
                    <List sx={{
                        mt: 2,
                        padding: 0,
                        display: "flex",
                        "& .MuiListItem-root": { 
                            paddingLeft: 0, 
                            "& .MuiTypography-root": { 
                                fontSize: "16px", 
                                fontWeight: "bold",
                                paddingBottom: 0,
                            } 
                        },
                        "& .MuiBox-root": {
                            marginRight: 2.25,
                            borderRadius: "50%",
                            boxShadow: "0px 5px 16px 0px rgb(67 67 67 / 30%)",
                        }
                    }}>
                        <ListItem>
                            <Box>
                                <img src={Icon1} />
                            </Box>
                            <ListItemText primary="Instant Confirmation" />
                        </ListItem>
                        <ListItem>
                            <Box>
                                <img src={Icon2} />
                            </Box>
                            <ListItemText primary="Refund Guarantee" />
                        </ListItem>
                        <ListItem>
                            <Box>
                                <img src={Icon3} />
                            </Box>
                            <ListItemText primary="Instant Cashback" />
                        </ListItem>
                    </List>
                </Box>
            </Paper>
        </>
    )
}
