import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import MasterDevice from './devices/MasterDevice';

const Room = ({ room, onDeviceUpdateHandler }) => {

    return (
        <Grid container alignItems="flex-start" className="room-container">
            {room.devices.map((device, i) =>
            (<Grid item xs={12} sm={6} md={4} lg={3} sx={{ padding: "1rem" }} key={i}>
                <MasterDevice data={device} onDeviceUpdateHandler={onDeviceUpdateHandler} roomId={room.id} />
            </Grid>))}
        </Grid>
    )
}

Room.propTypes = {
    room: PropTypes.shape({
        "id": PropTypes.number.isRequired,
        "name": PropTypes.string.isRequired,
        "devices": PropTypes.array.isRequired
    }),
    onDeviceUpdateHandler: PropTypes.func.isRequired
};

export default Room