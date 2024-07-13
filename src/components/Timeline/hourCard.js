import { Box } from '@mui/material'
import React, { useContext } from 'react'

import TimelineContext from '../../context/TimelineContext';
// import Event from '../Event';

const HourCard = ({ hour }) => {
    const { events, zoomLevel, hourBlockWidth } = useContext(TimelineContext);

    // const currHoursEvents = events.filter(item => Number(item.start?.split(':')?.[0]) === Number(hour))

    return (
        <Box
            className="hour_marker"
            sx={{
                maxWidth: hourBlockWidth * zoomLevel
            }}
        >
            <Box className="hour_block">
                {hour.toString().padStart(2, '0')}:00
            </Box>

            <Box className="hour_block_events">
                {/* {currHoursEvents.map(event => (
                    <Event event={event} key={events.id} />
                ))} */}
            </Box>
        </Box>
    )
}

export default HourCard