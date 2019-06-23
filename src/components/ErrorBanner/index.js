import React from 'react'
import styled from 'styled-components'
import { pick } from '../../utils';

const ErrorBannerStyle = styled.div`
    color: red;
    font-family: Roboto;
    font-size: 0.8rem;
    text-align: center;
    visibility: ${(props) => props.visible || props.error ? 'visible' : 'hidden'};
`

const ErrorBanner = (props) => {
    return <ErrorBannerStyle {...pick(['visible', 'error'], props)}>
        {props.children || props.error}
    </ErrorBannerStyle>
}

export default ErrorBanner;