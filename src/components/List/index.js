import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../utils/Styles'
import { Button } from '../../formComponents';

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
        width: ${ props => props.contentWidth || "70%"};
    }

    & .actions {
        display: flex;
        justify-content: flex-end;
        margin-left: ${ props => props.margin || "auto"};
        width: ${ props => props.actionsWidth || "auto"};
    }
`

const ActionStyle = styled(Button)`
    margin: 0px 4px;
    font-size: 1rem;
    padding: ${ props => props.padding || '4px 8px'};
`

export const Action = (props) => {
    const { onClick = () => { } } = props;
    const handleCliick = (e) => {
        onClick(e, props);
    }
    return <ActionStyle {...props} onClick={handleCliick} />
}

export const Field = styled.div`
    display: flex;
    justify-content: ${ props => props.flex || "flex-start"};
    align-items: center;
    width: ${ props => props.width || "50%"};
`

export const Item = (props) => {
    return <Row {...props}>
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