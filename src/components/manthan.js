import React from 'react';
import './manthan.css'; // Import your CSS file for styling
import Bit from './images/Bit.png'
import BSV from './images/BSV.png'
import ETH from './images/ETH.png'
import cardano from './images/cardano.png'
import BitcoinCash from './images/BitcoinCash.png'

function Manthan() {
  return (
    <>
    <div className="manthan">
    <h1>
      <span style={{ color: 'white' }}>MANTHAN</span>
      <span style={{ color: 'aqua' }}>   DEX</span>
    </h1>
    </div>

    <div className='dex-heading'>

    </div>

    <div className='text' ><p>eadable content of a page when looking at its  and </p></div>
    <div className='list-name'>
      <ul class='horizontal-list'>
        <li>
          <img src={Bit} alt=''/>
          <a style={{color:'white'}}> Bitcoin</a>
        </li>
        <li >
        <img src={BSV} alt ="" />
          <a style={{color:'white'}}> BSV</a>
        </li>
        <li>
        <img src={BitcoinCash} alt ="" />
          <a style={{color:'white'}}> Bitcoin Cash</a>
        </li>
        <li>
        <img src={ETH} alt ="" />
          <a style={{color:'white'}}> Ethereum</a>
        </li>
        <li>
        <img src={cardano} alt ="" />
          <a style={{color:'white'}}>   Cardano</a>
        </li>
      </ul>
    </div>
      <span className="navbar-text">
          <button className="vvd"><span>Trade Crypto</span></button>
      </span>
      <span className="signin">
          <button className="ccd"><span>Sign In</span></button>
      </span>
    </>
  );
}

export default Manthan;