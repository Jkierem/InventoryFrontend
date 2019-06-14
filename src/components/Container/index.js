import styled from 'styled-components';

const Container = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${ props => props.color || 'white'};
`

export default Container