import * as React from 'react';

import Hello from './Hello';
import Greeting from "./Greeting";

class App extends React.Component {
    render() {
        const greetingName: string = 'World';

        return <>
            <Hello toWhat="World"/>
            <Greeting/>
        </>;
    }
}

export default App;
