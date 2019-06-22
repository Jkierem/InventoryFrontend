import React from 'react'
import styled from 'styled-components';
import Card from '../Card'
import { pick } from '../../utils';

const Height = props => props.height || '50%'

const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
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
  height: ${Height};
`

const Hidden = styled.div`
  visibility: hidden;
`

const Modal = (props) => {
  const contentProps = pick(['height'], props)
  const cardProps = pick(['title'], props);
  return (props.open ?
    <Container onClick={props.onClickOutside}>
      <Content {...contentProps} onClick={(e) => { e.stopPropagation() }}>
        <Card {...cardProps} depth={0}>
          {props.content}
        </Card>
      </Content>
    </Container> :
    <Hidden />
  )
}

export default Modal;