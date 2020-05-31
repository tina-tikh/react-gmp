/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import * as React from 'react';
import {ReactNode} from 'react';

const style = css({
    fontWeight: "bold"
});

class App extends React.Component {
    render(): ReactNode {
        return <span css={style}>
            Hello World
        </span>;
    }
}

export default App;
