import React from 'react'
import Row from "./Row";

const CoinsTable = ({tickers}) => {

    const rows = tickers.map(ticker =>
        <Row
            key={ticker.symbol || ticker.s}
            symbol={ticker.symbol || ticker.s}
            lastPrice={ticker.lastPrice || ticker.c}
            priceChange={ticker.priceChange || ticker.p}
            priceChangePercent={ticker.priceChangePercent || ticker.P}
            highPrice={ticker.highPrice || ticker.h}
            lowPrice={ticker.lowPrice || ticker.l}
            quoteVolume={ticker.quoteVolume || ticker.q}
        />
    )
    return (
        <>
            <div className="d-none d-sm-inline">
                <div className="row table-header small font-weight-bold py-1">
                    <div className="col">Pair</div>
                    <div className="col">Last Price</div>
                    <div className="col">24h Change</div>
                    <div className="col">24h High</div>
                    <div className="col">24h Low</div>
                    <div className="col">24h Volume</div>
                </div>
                { rows }
            </div>
        </>
    );
}

export default CoinsTable;