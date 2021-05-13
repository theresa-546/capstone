import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
width: 100%;
height: 300vh;
background: rgba(0, 0, 0, 0.8);
position: fixed;
display: flex;
align-items: center;
margin-left: -15px;
z-index: 9;
`;

const ModalWrapper = styled.div`
  width: 90%;
  height: 50%;
  margin-left: 15px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  border-radius: 20px;
`;


const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
  color: #141414;
  padding: 40px;


  p {
    margin-top: 8px;
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

export const Modal2 = ({ showModal2, setShowModal2 }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 300
    },
    opacity: showModal2 ? 1 : 0,
    transform: showModal2 ? `translateY(-100%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal2(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal2) {
        setShowModal2(false);
        console.log('I pressed');
      }
    },
    [setShowModal2, showModal2]
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
      {showModal2 ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal2={showModal2}>
              <ModalContent>
               <div className='hydroponics-overlay-title'> <img className= 'iconssvg' src='images/vfarm.svg'/><p>Vertical Farming</p></div>
                <p>Vertical farming is used to grow plants 
indoors, under artificial LED lights that 
mimic the sun. The plants are stacked in 
layers and grown using water-based 
method like hydroponics. </p><img className='overlay-pic' src='images/vertical-farm-overlay.png'/>

              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal2(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
