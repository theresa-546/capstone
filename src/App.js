import React, { useState } from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Products from './components/pages/Products/Products';
import Trace from './components/pages/Trace/Trace';
import Salads from './components/pages/Salads/Salads';
import LemonBalm from './components/pages/Plant/LemonBalm';
import RedMizuna from './components/pages/Plant/RedMizuna';
import RedMizunaT from './components/pages/PlantTrace/RedMizunaT';
import MizAmerica from './components/pages/Plant/MizAmerica';
import MustardRuby from './components/pages/Plant/MustardRuby';
import GreenSorrel from './components/pages/Plant/GreenSorrel';
import Farm from './components/pages/Farm/Farm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import YellowMicroGreens from './components/pages/Salads/YellowMicroGreens';
import RedBabyGreens from './components/pages/Salads/RedBabyGreens';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
  
    <Router>
      <>
      <ScrollToTop/>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/trace' component={Trace} />
        <Route path='/salads' component={Salads} />
        <Route path='/yellow-micro-greens' component={YellowMicroGreens} />
        <Route path='/red-baby-greens' component={RedBabyGreens} />
        <Route path='/lemon-balm' component={LemonBalm} />
        <Route path='/mustard-ruby' component={MustardRuby} />
        <Route path='/green-sorrel' component={GreenSorrel} />
        <Route path='/red-mizuna' component={RedMizuna} />
        <Route path='/red-mizuna-trace' component={RedMizunaT} />
        <Route path='/miz-america' component={MizAmerica} />
        <Route path='/farm' component={Farm} />
      </Switch>
      </>
    </Router>
  );
}

export default App;
