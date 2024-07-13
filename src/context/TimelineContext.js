import React, { createContext, useState } from 'react';

const TimelineContext = createContext();

const hourBlockWidth = 74;

const initialEvents = [
    {
        id: Date.now(),
        name: 'BirthDay',
        start: '07:05',
        end: '11:00',
    },
    {
        id: Date.now(),
        name: 'New Car',
        start: '12:30',
        end: '15:00',
    },
    {
        id: Date.now(),
        name: 'Sleep Time',
        start: '23:00',
        end: "06:00",
    }
]

export const TimelineProvider = ({ children }) => {
    const [events, setEvents] = useState([...initialEvents]);
    const [zoomLevel, setZoomLevel] = useState(1);

    const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.5, 5));

    const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.5, 1));


    return (
        <TimelineContext.Provider
            value={{
                events,
                zoomLevel,
                hourBlockWidth,
                setEvents,
                handleZoomIn,
                handleZoomOut
            }}
        >
            {children}
        </TimelineContext.Provider>
    );
};

export default TimelineContext;
