import * as React from 'react';

function Greeting(props) {
    const greetings: Array<string> = ["Hi", "Hey", "Hoy", "Hello"];

    return <div>{greetings[randomIndex(greetings.length)]}!</div>;
}

function randomIndex(length) {
    return Math.floor(Math.random() * length);
}

export default Greeting;
