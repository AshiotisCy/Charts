import React from "react";
import styled from "styled-components/macro";
import { colors } from "../../config/ColorPalette";
import { motion, AnimatePresence } from "framer-motion";

const Backdrop = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
`;

const Wrapper = styled(motion.div)`
  position: fixed;
  width: 300px;
  height: 300px;
  background: ${colors.offWhite};
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 50px;
  border: 3px solid ${colors.babypink};
  border-radius: 5px;
`;

const ModalBody = styled(motion.div)`
  display: flex;
  width: 100%;
  flex-direction: column;

  & .month {
    font-size: 18px;
    font-weight: 800;
    color: ${colors.offNavyBlue};
  }

  & .value {
    display: flex;
  }
`;

const Modal = ({ isOpen, setIsOpen, data }) => {
  return (
    <>
      {isOpen && (
        <>
          <Backdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { delay: 0.3 } }}
            onClick={() => setIsOpen(false)}
          />
          <Wrapper
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.3 } }}
            exit={{ scale: 0, transition: { delay: 0.3 } }}
          >
            <ModalBody
              initial={{ x: 100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { delay: 0.3, duration: 0.3 },
              }}
              exit={{ x: 100, opacity: 0, transition: { duration: 0.3 } }}
            >
              <div className="month">{data.month}</div>
              <div className="label">{data.datasetLabel}</div>
              <div className="value">
                <div>{"Value:"}</div>
                <div>{data.value}</div>
              </div>
            </ModalBody>
          </Wrapper>
        </>
      )}
    </>
  );
};

export default Modal;
