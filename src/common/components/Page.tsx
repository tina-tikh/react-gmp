import * as React from 'react';
import {ReactNode} from 'react';
import {ThemeProvider} from 'emotion-theming';

import styled from '../styled';
import theme from '../theme';

const Article = styled.article`
	height: 100%;
    min-height: 100%;
	display: flex;
	flex-direction: column;
`;

class Page extends React.Component<any, any> {
    render(): ReactNode {
        return <Article>
            <ThemeProvider theme={theme}>
                {this.props.children}
            </ThemeProvider>
        </Article>;
    }
}

export default Page;
