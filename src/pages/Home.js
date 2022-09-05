import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, CircularProgress, Button } from '@mui/material';
import { Bed } from '@mui/icons-material';
import axios from 'axios';
import Room from '../components/Room';
import '../styles/Home.css';

const Home = () => {

    const [roomList, setRoomList] = useState([]);
    const [roomNumber, setRoomNumber] = useState(0);
    const [requestData, setRequestData] = useState({ initStatus: "inProgress" });


    useEffect(() => {
        //get room data
        axios.get("http://localhost:3000/room/").then((res) => {
            setRoomList((prevState) => ([...res.data]));
            setRequestData((prevState) => ({ ...prevState, initStatus: "received" }))
        })
            .catch((err) => setRequestData((prevState) => ({ ...prevState, initStatus: "error" })));
    }, []);


    const onSelectRoom = (roomNum) => {
        setRoomNumber((prevState) => roomNum);
    }

    const onDeviceUpdate = (roomId, device) => {
        let newRoom = Object.assign({}, roomList[roomId]);
        newRoom.devices = newRoom.devices.map((ele) => (ele.id === device.id ? device : ele));
        axios.put("http://localhost:3000/room/" + roomId, newRoom).then((res) => {
            let { data } = res;
            setRoomList((prevState) => {
                let newRoomList = [...prevState];
                newRoomList = newRoomList.map((ele) => (ele.id === data.id ? data : ele));
                return newRoomList;
            });
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <Container maxWidth="xl">
            <Grid container className="grid-row-1" alignItems="flex-start">
                <Grid item xs={12} md={12} lg={12} textAlign="flex-start">
                    <Typography variant="h4" padding={2} fontWeight={800}>
                        Home
                    </Typography>
                </Grid>
            </Grid>

            {requestData.initStatus === "inProgress" &&
                <Grid container className="grid-row-1" alignItems="center">
                    <Grid item xs={12} md={12} lg={12} textAlign="center">
                        <CircularProgress />
                    </Grid>
                </Grid>
            }

            {requestData.initStatus === "error" &&
                <Grid container className="grid-row-1" alignItems="center">
                    <Grid item xs={12} md={12} lg={10}>
                        <Typography variant="h6">Error retrieving rooms</Typography>
                    </Grid>
                </Grid>
            }

            {requestData.initStatus === "received" &&
                <>
                    <Grid container wrap="nowrap" className="grid-row-1 room-list-container" alignItems="flex-start" columnSpacing={"1rem"}>
                        {roomList.map((room, i) =>
                            <Grid item xs={6} md={6} lg={4} textAlign="flex-start" key={i}>
                                <Button variant="contained" className={"room-card-btn " + (roomNumber === i ? "room-selected" : "")} onClick={() => onSelectRoom(i)}>
                                    <Bed className="room-card-icon" />
                                    {room.name}
                                </Button>
                            </Grid>)}
                    </Grid>
                    <Room room={roomList[roomNumber]} onDeviceUpdateHandler={onDeviceUpdate} />
                </>
            }
        </Container >
    )
}

export default Home