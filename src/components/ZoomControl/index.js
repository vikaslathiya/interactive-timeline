import React, { useContext } from 'react';
import { IconButton, Stack, Tooltip } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';

import TimelineContext from '../../context/TimelineContext';
import './zoomControl.scss'

const ZoomControl = () => {
    const { handleZoomOut, handleZoomIn } = useContext(TimelineContext);

    return (
        <Stack className='zoom_wrapper'>
            <Tooltip title="Zoon Out" arrow placement="top">
                <IconButton
                    onClick={handleZoomOut}
                >
                    <ZoomOutIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="Zoom In" arrow placement="top">
                <IconButton
                    onClick={handleZoomIn}
                >
                    <ZoomInIcon />
                </IconButton>
            </Tooltip>
        </Stack>
    );
};

export default ZoomControl;
