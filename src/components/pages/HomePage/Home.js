import React from 'react';
import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';
import { Button} from '../../Button';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div className='homeButtons'>
      <div className='homeButtonItems'><Link to='/products'>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    View Products
                  </Button>
                </Link>
                </div>

    <div className= 'homeButtonItems'>
    <Link to='/trace'>
      <Button buttonSize='btn--wide' buttonColor='blue'>
        How to Trace
      </Button>
    </Link>
    </div>
    
    </div>
    </>
  );
}

export default Home;
