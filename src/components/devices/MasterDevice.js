import React from 'react';
import PropTypes from 'prop-types';
import CurtainDevice from './CurtainDevice';
import LightDevice from './LightDevice';
import TemperatueDevice from './TemperatueDevice';


const MasterDevice = ({ data, roomId, onDeviceUpdateHandler }) => {

    const deviceRender = () => {
        switch (data.type) {
            case "light":
                return <LightDevice data={data} roomId={roomId} onDeviceUpdateHandler={onDeviceUpdateHandler} />
            case "temperature":
                return <TemperatueDevice data={data} roomId={roomId} onDeviceUpdateHandler={onDeviceUpdateHandler} />
            case "curtain":
                return <CurtainDevice data={data} roomId={roomId} onDeviceUpdateHandler={onDeviceUpdateHandler} />
            default:
                break;
        }
    }

    return (
        <>
            {deviceRender()}
        </>
    )
}

MasterDevice.propTypes = {
    data: PropTypes.shape({
        "id": PropTypes.number.isRequired,
        "status": PropTypes.any.isRequired,
        "type": PropTypes.string.isRequired,
        "name": PropTypes.string.isRequired
    }),
    roomId: PropTypes.number.isRequired,
    onDeviceUpdateHandler: PropTypes.func.isRequired
};

export default MasterDevice