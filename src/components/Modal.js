import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import {AiOutlineStop} from 'react-icons/ai';

const Background = styled.div`
width: 100%;
height: 240vh;
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
  margin-left: 5px;
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
    margin-bottom: 16px;
    text-align: center;
  }

`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 50px;
  width: 32px;
  height: 32px;
  padding: 0;
  // z-index: 10;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 300
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(-75%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
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
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
               <div className='overlay-title'> <AiOutlineStop className='blue-icon'/><p>No Pesticides</p></div>
                <p>No pesticides are used at all which is 
even better than organic products. Some 
organic products may still use pesticides. 
Long-term exposure to toxic pesticides 
may increase risk for health problems 
such as asthma and diabetes. </p><img className='overlay-pic' src='images/pesticide.png'/>

              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
