import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import Network from '../Network/Network';
import Plot from '../Plot/Plot';

const TabsView = () => {
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) =>{
        setSelectedTab(newValue);
    }

    return (
        <Fragment>
            <Tabs
                indicatorColor="primary"
                textColor="primary"
                centered
                onChange={handleChange}
                >
                <Tab label="Network" />
                <Tab label="Plot" />
            </Tabs>
            {selectedTab === 0 && <Network />}
            {selectedTab === 1 && <Plot />}
        </Fragment>
    );
}

export default TabsView;