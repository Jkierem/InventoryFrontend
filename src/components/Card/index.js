import React from 'react'
import styled from 'styled-components'
import { Depth , Colors } from '../../utils/Styles';
import { pick } from '../../utils';

const pickColor = (props) => props.color ? props.color : "white";
const pickDepth = (props) => props.depth ? Depth(props.depth) : Depth(1)

const CardContainer = styled.article`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: ${pickColor};
    box-shadow: ${pickDepth};
    border-radius: 5px;
`

const Title = styled.section`
    font-family: Roboto;
    font-size: 1.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 16px 16px;
    color: ${Colors.Black};
    margin: 0px 8px;
    line-height: 1.75rem;
    border-bottom: 1px solid ${Colors.MiddleGray};
`

const ContentContainer = styled.section`
    height: calc(100% - (32px + 1.75rem) );
    overflow: hidden;
`

const Card = (props) => {
    const cardProps = pick(["color","depth"],props);
    return <CardContainer {...cardProps}>
        { props.title && <Title>{props.title}</Title>}
        <ContentContainer>
            { props.children }
        </ContentContainer>
    </CardContainer>
}

export default Card;