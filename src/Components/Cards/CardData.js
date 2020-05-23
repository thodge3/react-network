import React, { Fragment } from 'react';
import { Card, CardContent, Collapse, CardHeader, CardFooter, Typography, Grid, StylesProvider, CardActions } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

const CardData = ({ data }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    return (
        <Fragment>
            <CardHeader title={`Header ${data}`} />
            <CardContent>
                Card Item {data}
            </CardContent>
            <CardActions>
                <IconButton 
                    onClick={handleExpandClick}
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                      })}
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                Hello {data}
            </Collapse>
        </Fragment>
    );
}

export default CardData;