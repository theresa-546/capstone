import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import {IoIosWater} from 'react-icons/io';

const Background = styled.div`
width: 600px;
height: 300vh;
background: rgba(0, 0, 0, 0.8);
position: fixed;
display: flex;
align-items: center;
margin-left: -15px;
`;

const ModalWrapper = styled.div`
  width: 410px;
  height: 300px;
  margin-left: 20px;  
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  border-radius: 20px;
`;

const ModalImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
  color: #141414;
  padding: 50px;


  p {
    margin-bottom: 16px;
    text-align: center;
  }

`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 40px;
  width: 32px;
  height: 32px;
  padding: 0;
  // z-index: 10;
`;

export const Modal3 = ({ showModal3, setShowModal3 }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 300
    },
    opacity: showModal3 ? 1 : 0,
    transform: showModal3 ? `translateY(-150%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal3(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal3) {
        setShowModal3(false);
        console.log('I pressed');
      }
    },
    [setShowModal3, showModal3]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal3 ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal3={showModal3}>
              <ModalContent>
               <div className='overlay-title'> <IoIosWater className='icons'/><p>Hydroponics</p></div>
                <p>Hydroponic grows plants in a water-based 
nutrient solution instead of soil. The water 
is filled with nutrients, circulated 
using pumps, and oxygenated.</p><img className='overlay-pic' src='images/hydroponics.png'/>

              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal3(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
