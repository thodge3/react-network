import React from 'react';
import styled from 'styled-components';


const Highlight = styled.div`
    margin: 20px;
    font-size: 2em;
    &:hover{
        cursor: pointer;
        box-shadow: 0px 0px 2px 2px #5FFF17;
    }
`
const CenterDiv = styled.div`
    display: grid;
    justify-content: center;
`

class Plot extends React.Component{

    render(){
        return (
            <CenterDiv>
                <Highlight>PLOT</Highlight>
            </CenterDiv>  
        );
    }
}

export default Plot;