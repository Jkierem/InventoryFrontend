import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../utils/Styles'

const List = styled.div`
    height: 100%;
    margin-right: -50px; /* maximum width of scrollbar */
    padding-right: 50px; /* maximum width of scrollbar */
    overflow-y: scroll;

    &::-webkit-scrollbar { /* WebKit */
        width: 0;
        height: 0;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    line-height: 1.75rem;
    font-family: Roboto;
    font-size: 1rem;
    padding: 8px 16px;
    box-sizing: border-box;
    color: ${Colors.Gray};

    & .content {
        display: flex;
        width: 50%;
    }

    & .actions {
        display: flex;
        justify-content: flex-end;
        margin-left: auto;
    }
`

export const Item = (props) => {
    return <Row>
        <div className="content">
            {props.content}
        </div>
        <div className="actions">
            {props.actions}
        </div>
    </Row>
}

List.Item = Item;

export default List;