import React, { useContext, useState } from 'react';
import TimelineContext from '../../context/TimelineContext';
import './event.scss'
import { splitTime } from '../../utils/common';
import { Popover, Typography } from '@mui/material';

const Event = ({ event }) => {
    const { events, setEvents, zoomLevel, hourBlockWidth } = useContext(TimelineContext);
    const [hover, setHover] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const startTime = splitTime(event.start)
    const endTime = splitTime(event.end)

    const findPosition = (hh, mm) => hh * zoomLevel * hourBlockWidth + (hh * 1.8) + (oneMinBlock * mm);

    const oneMinBlock = hourBlockWidth * zoomLevel * 0.017;
    const positionEventStart = findPosition(startTime.hh, startTime.mm)
    const positionEventEnd = findPosition(startTime.hh > endTime.hh ? 24 : endTime.hh, endTime.mm) - positionEventStart

    // const handleDelete = () => {
    //     setEvents(events.filter(e => e.id !== event.id));
    // };

    const handleDrag = (e) => {
        const newStart = Math.floor(e.clientY / (hourBlockWidth * zoomLevel));
        // setEvents(events.map(e => (e.id === event.id ? { ...e, start: newStart } : e)));
    };

    return (
        <>
            <div
                className='event_wrapper'
                start={startTime.hh}
                onMouseEnter={handlePopoverOpen}
                // onMouseLeave={handlePopoverClose}
                draggable
                onDragEnd={handleDrag}
                style={{
                    width: positionEventEnd,
                    left: positionEventStart
                }}
                aria-owns={event.id}
            >
                {/* <div
                className='tooltip'
                //   hover={hover}
                style={{ display: hover ? 'block' : 'none' }}
            >
                {event.name} ({event.start}:00 - {event.end}:00)
            </div> */}
                {event.name}
                {/* <button onClick={handleDelete}>Delete</button> */}
            </div>

            <Popover
                id={event.id}
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography variant='h6' component='h6'>{event.name}</Typography>
            </Popover>

        </>
    );
};

export default Event;
