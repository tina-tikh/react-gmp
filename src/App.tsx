import * as React from 'react';
import {ReactNode} from 'react';
import {Switch, Route} from 'react-router-dom';

import Search from './search/Search';
import Footer from './common/components/Footer';
import Page from './common/components/Page';
import Film from './film/Film';
import {ErrorBoundary} from './common/components/ErrorBoundary';

class App extends React.Component<any, any> {
    render(): ReactNode {
        return <Page>
            <ErrorBoundary>
                <Switch>
                    <Route path='/film/:id' component={Film}/>
                    <Route path='/' component={Search}/>
                </Switch>
            </ErrorBoundary>
            <Footer></Footer>
        </Page>;
    }
}

export default App;
