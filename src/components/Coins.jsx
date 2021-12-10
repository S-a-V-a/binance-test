import React, {useEffect} from 'react';
import CoinsTable from "./CoinsTable";
import {useDispatch, useSelector} from "react-redux";
import {CoinActonCreators} from "../store/reducers/coins/action_creators";
import {BASE_URL} from "../config";
import Loader from "./Loader";

const socket = new WebSocket(`${BASE_URL}!ticker@arr`);

const Coins = () => {
    const dispatch = useDispatch();
    const {data, isLoaded, error} = useSelector(state => state.coins);
    const connectSocketStreams = () => {
        socket.onopen = (evt) => {
            console.log('WebSocket is open now')
        }
        socket.onmessage = evt => {
            const tickers = JSON.parse(evt.data).data;
            dispatch(CoinActonCreators.setPrices(tickers));
            dispatch(CoinActonCreators.isLoaded(true));
        }
        socket.onerror = evt => {
            dispatch(CoinActonCreators.setError(evt));
        }
    }
    const disconnectSocketStreams = () => {
        if (socket.readyState === WebSocket.OPEN) {
            socket.close();
        }
    }

    useEffect(() => {
        connectSocketStreams();
        return () => disconnectSocketStreams();
    }, [])

    if (!isLoaded) return <Loader />
    if (error) return <div>Error: {error}</div>
    return (
        data && <CoinsTable tickers={data}/>
    );
};

export default Coins;