import React from 'react';
import PropTypes from 'prop-types';
import { Card, Switch } from '@mui/material';
import { CurtainsClosed, Curtains } from '@mui/icons-material';

const CurtainDevice = ({ data, roomId, onDeviceUpdateHandler }) => {

    return (
        <Card raised className={"device-card " + (data.status && "device-card-active")}>
            {data.status ? (<Curtains className="room-card-icon" />) : (<CurtainsClosed className="room-card-icon" />)}
            <span className="device-name">{data.name}</span>
            <div className="device-btn">
                <Switch className="device-switch" size="small"
                    checked={data.status} onChange={(e, value) => onDeviceUpdateHandler(roomId, { ...data, status: value })} />
            </div>
        </Card>
    )
}

CurtainDevice.propTypes = {
    data: PropTypes.shape({
        "id": PropTypes.number.isRequired,
        "status": PropTypes.bool.isRequired,
        "type": PropTypes.string.isRequired,
        "name": PropTypes.string.isRequired
    }),
    roomId: PropTypes.number.isRequired,
    onDeviceUpdateHandler: PropTypes.func.isRequired
};

export default CurtainDevice