import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import CloseButton from '../../../assets/close.svg';

const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
`;

const BackDrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: none;
  ${({ backdrop }) => backdrop && css`
    background: rgba(0, 0, 0, .7);
  `}
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  width: 80%;
  height: 100%;
  max-width: 80rem;
  max-height: 30rem;
  margin: 20rem auto;
  background: #000;
  opacity: 0;
  transform: translateY(20rem) scale(0.2);
  transform-origin: center;
  transition: transform .3s ease-in-out, opacity .3s ease;
  @media(min-width: 720px) {
    max-height: 50rem;
  }
  ${({ mounted }) => mounted && css`
    opacity: 1;
    transform: translate(0) scale(1);
  `}
  > *{
    width: 100%;
    height: 100%;
  }
  svg{
    position: absolute;
    width: 4rem;
    height: 4rem;
    top: -4rem;
    right: 0;
    fill: #fff;
    cursor: pointer;
  }
`;

class Modal extends Component {
  state = { mounted: false }

  componentWillReceiveProps() {
    const { onOpen } = this.props;
    const { mounted } = this.state;
    onOpen();
    setTimeout(() => this.setState({ mounted: !mounted }), 10);
  }

  render() {
    const {
      show,
      backdrop,
      onRequestClose,
      closeBtn,
      children
    } = this.props;
    const { mounted } = this.state;
    if(!show) return null;
    return (
      <ModalStyle>
        <BackDrop backdrop={backdrop} onClick={onRequestClose} />
        <Content mounted={mounted}>
          { closeBtn ? <CloseButton onClick={onRequestClose} /> : '' }
          {children}
        </Content>
      </ModalStyle>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onOpen: PropTypes.func,
  onRequestClose: PropTypes.func.isRequired,
  backdrop: PropTypes.bool,
  closeBtn: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  onOpen: () => null,
  backdrop: false,
  closeBtn: false,
};

export default Modal;
