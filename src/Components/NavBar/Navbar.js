import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import styled from 'styled-components';

const MarginDiv = styled.div`
    margin: 20px 20px;
`

const Navbar = () => {

    return(
        <MarginDiv>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
        </MarginDiv>
    );
}

export default Navbar;