import { Box, Drawer, Typography } from '@mui/material';
import React from 'react';

const SideProductModal = ({drawer, toggleDrawer}) => {
    return (
        <Box>
            <Drawer anchor={`right`}
            open={drawer} onClose={toggleDrawer(false)} sx={{width:'30vw'}}>
                <Box sx={{width:350}}>
                <Typography variant="body2">
                    lorem ipsum dolor sit amet, consectetur adip
                    lorem ipsum dolor sit amet, consectetur adip
                </Typography>
                </Box>
            </Drawer>
        </Box>
    );
};

export default SideProductModal;