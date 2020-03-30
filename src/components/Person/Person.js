import React from 'react';
import styled from 'styled-components';
// import './Person.css';
// import Radium from 'radium';
const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
}`;

const Person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }
    const { name, age, click, changed } = props;
    return (
        // <div id={id} className="person">
        <StyledDiv>
            <p onClick={click} > My name is {name} and I am {age} years old.</p >
            <input type="text" onChange={changed} value={name} />
        </StyledDiv >
    )
};


export default Person;