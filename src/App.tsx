import * as React from 'react';
import {ReactNode} from 'react';

import Hello from './Hello';
import Greeting from './Greeting';

class App extends React.Component {
    render(): ReactNode {
        const greetingName: string = 'World';

        return <>
            <Hello toWhat={greetingName}/>
            <Greeting/>
        </>;
    }
}

export default App;
