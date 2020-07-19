import React from 'react';
import { Footer, Header, Main, Page } from "../src/components";
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Layout',
  component: Page,
};

export const PageStory = () => <BrowserRouter>
  <Page>
    <Header>
      Header
    </Header>
    <Main>
      Main
    </Main>
    <Footer/>
  </Page>
</BrowserRouter>;

PageStory.story = {
  name: 'Page',
};
