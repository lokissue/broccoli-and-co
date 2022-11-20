import React from 'react';

import './App.scss';
import { Header, Footer, Content } from 'components/Layout/';
import Home from 'views/Home';
import { BRAND_NAME } from 'constants/data';

function App() {
  return (
    <div className='App'>
      <Header className={'header'}>
        <div className={'header-wrapper'}>
          <a href='/'>
            <span className={'header-title'}>{BRAND_NAME}</span>
          </a>
        </div>
      </Header>
      <Content className='content'>
        <div className={'content-wrapper'}>
          <Home />
        </div>
      </Content>
      <Footer>
        <div className={'footer-wrapper'}>
          <p>Made by Luoming Zhang</p>
          <p>&reg;{` ${new Date().getFullYear()} ${BRAND_NAME}. All rights reserved.`}</p>
        </div>
      </Footer>
    </div>
  );
}

export default App;
