import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import Main from './pages/Main';
import Down from './pages/Down'
import Apostilas from './pages/Apostilas'
import Vestibular from './pages/Vestibular'
import Exatas from './pages/Exatas'
import Humanas from './pages/Humanas'
import Linguagens from './pages/Linguagens'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/downloads" exact component={Down} />
        <Route path="/downloads/apostilas" component={Apostilas} />
        <Route path="/downloads/vestibular" component={Vestibular} />
        <Route path="/downloads/exatas" component={Exatas} />
        <Route path="/downloads/linguagens" component={Linguagens} />
        <Route path="/downloads/humanas" component={Humanas} />
      </Switch>
    </BrowserRouter>
  );
}
