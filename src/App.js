import React from 'react';
import './App.scss';
import { TimelineProvider } from './context/TimelineContext';
import ZoomControl from './components/ZoomControl';
import Timeline from './components/Timeline';
import { Container } from '@mui/material';

function App() {
  return (
    <TimelineProvider>
      <div className="App">
        <Container maxWidth="xl">
          <ZoomControl />
          <Timeline />
        </Container>
      </div>
    </TimelineProvider>
  );
}

export default App;
