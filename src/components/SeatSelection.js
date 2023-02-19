import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
// import JourneyContext from '../context/JourneyContext';
import '../styles/seat.css';

const SeatSelection = () => {

    const [selectedSeat, setSelectedSeat] = useState([]);
    // const {from, to} = useContext(JourneyContext);

    const seatNum = (i, j) => {
        return 8 * i + j + 1;
    }

    return (
        <Container className='bg-danger m-0 mw-100 p-4 d-flex justify-content-center align-items-center'>
            <div className='seats bg-white p-2 flex-column'>
                {[1, 2, 3].map((seatRow, i) => {
                    return <div className={`row mt-${Math.ceil(seatRow * 1.5)}`} key={seatRow}>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((seat, j) => {
                            return <div className={`seat ${selectedSeat.includes(seatNum(i, j)) ? "bg-success" : ""}`} key={seatNum(i, j)} onClick={() => {
                                const previousSeat = [...selectedSeat];
                                if(selectedSeat.includes(seatNum(i, j))){
                                    const allSeatsExceptCurrent = previousSeat.filter((currentSeat) =>{
                                        return currentSeat !== seatNum(i, j);
                                    })
                                    setSelectedSeat(allSeatsExceptCurrent);
                                }
                                else{
                                    setSelectedSeat([...previousSeat, seatNum(i, j)]);
                                }
                            }}>{seatNum(i, j)}</div>
                        })}</div>
                })}
                {selectedSeat.length ? <Button variant='success rounded-0 mt-4'>Book Tickets</Button> : null}
            </div>
        </Container>
    );
};

export default SeatSelection;