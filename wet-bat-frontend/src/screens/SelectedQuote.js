import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FAIcon from '@fortawesome/free-solid-svg-icons';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import Paper from '@mui/material/Paper';

export default function SelectedQuote({ quote }) {

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <Paper style={{ marginBottom: 5 }} elevation={3}>
                    <ListItem>
                        <ListItemAvatar>

                            <Avatar>
                                <FontAwesomeIcon icon={FAIcon.faIdCard} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={quote.id} secondary="ID" />
                    </ListItem>
                </Paper>
                <Paper style={{ marginBottom: 5 }} elevation={3}>
                    <ListItem>
                        <ListItemAvatar>

                            <Avatar style={{ backgroundColor: "#5BBFBA" }}>
                                <FontAwesomeIcon icon={FAIcon.faPlaneDeparture} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={quote.departureLocation} secondary="Departure Location" />
                    </ListItem>
                </Paper>
                <Paper style={{ marginBottom: 5 }} elevation={3}>
                    <ListItem>
                        <ListItemAvatar>

                            <Avatar style={{ backgroundColor: "#5BBFBA" }}>
                                <FontAwesomeIcon icon={FAIcon.faPlaneArrival} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={quote.destinationLocation} secondary="Destination Location" />
                    </ListItem>
                </Paper>
                <Paper style={{ marginBottom: 5 }} elevation={3}>
                    <ListItem>
                        <ListItemAvatar>

                            <Avatar style={{ backgroundColor: "#5F6CAF" }}>
                                <FontAwesomeIcon icon={FAIcon.faCalendarDay} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={quote.departureDate} secondary="Departure Date" />
                    </ListItem>
                </Paper>
                <Paper style={{ marginBottom: 5 }} elevation={3}>
                    <ListItem>
                        <ListItemAvatar>

                            <Avatar style={{ backgroundColor: "#5F6CAF" }}>
                                <FontAwesomeIcon icon={FAIcon.faCalendarCheck} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={quote.returnDate} secondary="Return Date" />
                    </ListItem>
                </Paper>
                <Paper style={{ marginBottom: 5 }} elevation={3}>
                    <ListItem>
                        <ListItemAvatar>

                            <Avatar style={{ backgroundColor: "#E7F0C3" }}>
                                <FontAwesomeIcon icon={FAIcon.faPeopleGroup} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={quote.numberOfTravellers} secondary="Number of Travellers" />
                    </ListItem>
                </Paper>
                <Paper style={{ marginBottom: 5 }} elevation={3}>
                    <ListItem>
                        <ListItemAvatar>

                            <Avatar style={{ backgroundColor: "#F0CF85" }}>
                                <FontAwesomeIcon icon={FAIcon.faCar} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={quote.transportationDuringTravels} secondary="Transportation during travels" />
                    </ListItem>
                </Paper>
                <Paper style={{ marginBottom: 5 }} elevation={3}>
                    <ListItem>
                        <ListItemAvatar>

                            <Avatar style={{ backgroundColor: "#F0CF85" }}>
                                <FontAwesomeIcon icon={FAIcon.faAddressBook} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={quote.contactInformation} secondary="Contact Information" />
                    </ListItem>
                </Paper>
            </List>
        </div>
    );
}