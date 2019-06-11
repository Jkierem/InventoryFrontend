import styled from 'styled-components'

const ErrorBanner = styled.div`
    color: red;
    font-family: Roboto;
    font-size: 0.8rem;
    text-align: center;
    visibility: ${(props) => props.visible ? 'visible' : 'hidden'};
`

export default ErrorBanner;