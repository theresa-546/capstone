import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Products from './components/pages/Products/Products';
import Trace from './components/pages/Trace/Trace';
import BlueHerbs from './components/pages/Salads/BlueHerbs';
import YellowMicroGreens from './components/pages/Salads/YellowMicroGreens';
import RedBabyGreens from './components/pages/Salads/RedBabyGreens';
import LemonBalm from './components/pages/Plant/LemonBalm';
import MicroLovage from './components/pages/Plant/MicroLovage';
import AssortedDianthus from './components/pages/Plant/AssortedDianthus';
import YarrowFlower from './components/pages/Plant/YarrowFlower';
import RedMizuna from './components/pages/Plant/RedMizuna';
import MizAmerica from './components/pages/Plant/MizAmerica';
import MustardRuby from './components/pages/Plant/MustardRuby';
import GreenSorrel from './components/pages/Plant/GreenSorrel';
import GreenMizuna from './components/pages/Plant/GreenMizuna';
import SummerSavory from './components/pages/Plant/SummerSavory';
import MicroCilantro from './components/pages/Plant/MicroCilantro';
import Pea from './components/pages/Plant/Pea';
import BlueBasil from './components/pages/Plant/BlueBasil';
import LemonBasil from './components/pages/Plant/LemonBasil';
import Parsley from './components/pages/Plant/Parsley';
import AboutPage from './components/pages/About/AboutPage'
import Farm from './components/pages/Farm/Farm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
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
        <Route path='/about' component={AboutPage} />
        <Route path='/trace' component={Trace} />
        <Route path='/farm' component={Farm} />
        <Route path='/blue-herbs-flowers' component={BlueHerbs} />
        <Route path='/yellow-micro-greens' component={YellowMicroGreens} />
        <Route path='/red-baby-greens' component={RedBabyGreens} />
        <Route path='/lemon-balm' component={LemonBalm} />
        <Route path='/micro-lovage' component={MicroLovage} />
        <Route path='/assorted-dianthus' component={AssortedDianthus} />
        <Route path='/yarrow-flower' component={YarrowFlower} />
        <Route path='/mustard-ruby' component={MustardRuby} />
        <Route path='/green-sorrel' component={GreenSorrel} />
        <Route path='/red-mizuna' component={RedMizuna} />
        <Route path='/miz-america' component={MizAmerica} />
        <Route path='/micro-mizuna-green' component={GreenMizuna} />
        <Route path='/summer-savory' component={SummerSavory} />
        <Route path='/micro-leisure-cilantro' component={MicroCilantro} />
        <Route path='/pea-afilla' component={Pea} />
        <Route path='/blue-spice-basil' component={BlueBasil} />
        <Route path='/lemon-basil' component={LemonBasil} />
        <Route path='/micro-parsley' component={Parsley} />
      </Switch>
      </>
    </Router>
  );
}

export default App;
