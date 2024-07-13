import React, { useContext } from 'react';
import { Stack } from '@mui/material';

import TimelineContext from '../../context/TimelineContext';
import HourCard from './hourCard';
import './timeline.scss'
import Event from '../Event';

const Timeline = () => {
  const { events, zoomLevel, setEvents, hourBlockWidth } = useContext(TimelineContext);

  // const currHoursEvents = events.filter(item => Number(item.start?.split(':')?.[0]) === Number(hour))


  const handleAddEvent = (e) => {
    const hour = Math.floor(e.nativeEvent.offsetY / (hourBlockWidth * zoomLevel));
    const newEvent = {
      id: Date.now(),
      name: `Event ${events.length + 1}`,
      start: hour + ':00',
      end: hour + 1 + ":00",
    };
    setEvents([...events, newEvent]);
  };

  return (
    <Stack
      className='timeline_wrapper'
      onClick={handleAddEvent}
    >
      {[...Array(24).keys()].map(hour => (
        <HourCard hour={hour} key={hour} />
      ))}

      {events.map(event => (
        <Event event={event} key={events.id} />
      ))}
    </Stack>
  );
};

export default Timeline;
