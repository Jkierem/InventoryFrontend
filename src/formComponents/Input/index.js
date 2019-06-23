import React, { useState } from "react";
import styled from 'styled-components'
import { Utils } from 'juanform'
import { Colors } from "../../utils/Styles";
import { pick, omit } from "../../utils";

const StyledContainer = styled.div`
    display: block;
    position: relative;
    font-family: Roboto;
    margin: ${ props => props.fluid ? "16px 0px" : "16px"};
    box-sizing: border-box;
    width: ${ props => props.fluid ? "100%" : "initial"};

    & .j-input {
        width: ${props => props.fluid ? "100%" : "initial"};
        border-radius: 0px;
        box-sizing: border-box;
        color: black;
        font-size: 1rem;
        line-height: 1.75rem;
        padding: 20px 16px 6px 16px;
        background-color: ${Colors.LightGray};
        border: none;
        border-bottom: 1px solid ${Colors.Gray};
        border-radius: 4px 4px 0px 0px;
        &:focus {
            outline: none;
        }
        &::placeholder {
            display: none;
        }

    }
    
    & .j-input-label {
        position: absolute;
        line-height: 1.75rem;
        color: ${Colors.Gray};
        left: 16px;
        top: 16px;
        font-size: 1rem;
        user-select: none;
        cursor: text;
        transition: top 0.2s ease-in-out;
    }

    & .j-input:focus ~ .j-input-label {
        font-size: 0.75rem;
        top: 5%;
        left: 16px;
        color: ${Colors.LightBrown};
    }

    & .j-input:focus ~ .bar {
        width: 100%;
    }

    .j-input-label__off {
        font-size: 0.75rem;
        top: 5%;
        left: 16px;
    }

    .bar {
        transition: width 150ms cubic-bezier(0.4, 0, 0.2, 1);
        position: absolute;
        box-sizing: border-box;
        border-bottom: 1px solid ${Colors.LightBrown};
        border-top: 1px solid ${Colors.LightBrown};
        bottom: 0px;
        height: 0px;
        width: 0;
    }
`

const valueExists = (value) => {
    return value && value !== '' && (value.trim ? value.trim() !== '' : true)
}

export default Utils.createInput((props) => {
    const [value, setValue] = useState(props.defaultValue);

    const handleChange = (e) => {
        setValue(e.target.value);
        const { id, name } = props;
        props.onChange(e, {
            id,
            name,
            value: e.target.value,
        })
    }

    const getLabelClassName = () => `j-input-label ${valueExists(value) ? "j-input-label__off" : ""}`

    const containerProps = pick(["fluid"], props);
    const inputProps = omit(["fluid"], props)

    return <StyledContainer {...containerProps}>
        <input className="j-input" {...inputProps} onChange={handleChange} id={props.id || props.label} />
        <div className="bar"></div>
        {props.label &&
            <label
                htmlFor={props.id || props.label}
                className={getLabelClassName()}
            >
                {props.label}
            </label>
        }
    </StyledContainer>
});