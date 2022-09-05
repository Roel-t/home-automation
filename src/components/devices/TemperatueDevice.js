import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Typography, Card, IconButton } from '@mui/material';
import { Thermostat, Remove, Add } from '@mui/icons-material';
import debounce from "lodash.debounce";

const TemperatueDevice = ({ data, roomId, onDeviceUpdateHandler }) => {

  const [value, setValue] = useState(data.status);
  const debounceUpdateTemp = useRef(debounce(onUpdateTemperature, 1000));

  useEffect(() => {
    setValue((prevState) => (data.status));
  }, [data.status]);

  const onUpdateValue = (newValue) => {
    setValue(prevState => (newValue));
    debounceUpdateTemp.current(newValue);
  }

  function onUpdateTemperature(value) {
    onDeviceUpdateHandler(roomId, { ...data, status: value });
  }

  return (
    <Card raised className="device-card">
      <Thermostat className="room-card-icon" />
      <span className="device-name">{data.name}</span>
      <div className="device-btn">
        <IconButton color="primary" aria-label="lower thermostat" component="label" onClick={() => { onUpdateValue(value - 1) }}>
          <Remove className="temperature-icon" />
        </IconButton>
        <Typography variant="body2">
          {value}
        </Typography>
        <IconButton color="primary" aria-label="increase thermostat" component="label" onClick={() => { onUpdateValue(value + 1) }}>
          <Add className="temperature-icon" />
        </IconButton>
      </div>
    </Card>
  )
}

TemperatueDevice.propTypes = {
  data: PropTypes.shape({
      "id": PropTypes.number.isRequired,
      "status": PropTypes.number.isRequired,
      "type": PropTypes.string.isRequired,
      "name": PropTypes.string.isRequired
  }),
  roomId: PropTypes.number.isRequired,
  onDeviceUpdateHandler: PropTypes.func.isRequired
};

export default TemperatueDevice