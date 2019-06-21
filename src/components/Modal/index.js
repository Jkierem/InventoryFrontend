import React from 'react'
import styled from 'styled-components';
import Card from '../Card'
import { pick } from '../../utils';

const Visibility = props => props.open ? 'visible' : 'hidden';

const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  visibility: ${Visibility};
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.article`
  position: relative;
  width: 50%;
  height: 50%;
`

const Modal = (props) => {
  const containerProps = pick(['open'], props);
  const cardProps = pick(['title'], props);
  return (
    <Container {...containerProps} onClick={props.onClickOutside}>
      <Content onClick={(e) => { e.stopPropagation() }}>
        <Card {...cardProps} depth={0}>
          {props.content}
        </Card>
      </Content>
    </Container>
  )
}

export default Modal;