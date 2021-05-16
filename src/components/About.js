import React, { useState} from 'react';
import './About.css';
import styled from 'styled-components';
import { Modal } from './Modal';
import { Modal2 } from './Modal2';
import { Modal3 } from './Modal3';
import {FaSeedling} from 'react-icons/fa';
import {IoIosWater, IoMdInformationCircleOutline} from 'react-icons/io';
import {AiOutlineStop, AiOutlineCalendar} from 'react-icons/ai';

const Container = styled.div`
width: 100%;
height: 20px;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
align-content: space-around;
`;

const Button = styled.button`
  padding: 5px;
  border: none;
  background: white;
  font-size: 25px;
`;


function About({lightText, lightTextDesc, description, harvestTime}) {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const [showModal2, setShowModal2] = useState(false);

  const openModal2 = () => {
    setShowModal2(prev => !prev);
  };

  const [showModal3, setShowModal3] = useState(false);

  const openModal3 = () => {
    setShowModal3(prev => !prev);
  };
 

    return (    
    <>
            <div className='col'>
              
                <div className='top-line'>About</div>
                <p className='desc'>
                  {description}
                </p>
                <p className='infographic-text'>
                  <Container><AiOutlineStop className= 'icons'/> No pesticides <Button onClick={openModal}><IoMdInformationCircleOutline className='i-icon'/></Button><Modal showModal={showModal} setShowModal={setShowModal} /></Container>
                </p>
                <p className='infographic-text'>
                 <Container><div className='about-line-icon'><img className= 'iconssvg' src='images/vfarm.svg' alt='vertical farm icon'/> Vertical Farming <Button onClick={openModal2}><IoMdInformationCircleOutline className='i-icon'/></Button></div><Modal2 showModal2={showModal2} setShowModal2={setShowModal2} /></Container>
                </p> 
                <p className='infographic-text'>
                  <Container><div className='about-line-icon'><IoIosWater className= 'icons'/> Hydroponics <Button onClick={openModal3}><IoMdInformationCircleOutline className='i-icon'/></Button></div><Modal3 showModal3={showModal3} setShowModal3={setShowModal3} /></Container>
                </p> 
                <p
                  className='infographic-text'
                >
                  <FaSeedling className= 'icons'/> {harvestTime} to grow and harvest
                </p>
                <p className='infographic-text'>
                 
                 <AiOutlineCalendar className= 'icons'/> Grown year-round
                </p>
                
                
              
            </div>
       
    </>
    );
}

export default About;
