import * as React from 'react';
import {ReactElement} from 'react';

function Greeting(): ReactElement {
    const greetings: Array<string> = ['Hi', 'Hey', 'Hoy', 'Hello'];

    return <div>{greetings[randomIndex(greetings.length)]}!</div>;
}

function randomIndex(length): number {
    return Math.floor(Math.random() * length);
}

export default Greeting;
