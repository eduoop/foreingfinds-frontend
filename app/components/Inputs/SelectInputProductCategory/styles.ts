import styled from "styled-components";
import * as Select from '@radix-ui/react-select';

interface Props {
    invalid?: boolean;
}

export const Portal = styled(Select.Portal)`
	z-index: 2;
    width: 100%;
    
`;

export const Trigger = styled(Select.Trigger)<Props>`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;

    height: 42px;
    
    background: ${props => props.invalid && props.invalid === true ? "#FEE2E2" : "#fff"};
    border: ${props => props.invalid && props.invalid === true ? "1px solid #DC2626" : "1px solid #D2D2D2"};
    border-radius: 0.125rem;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    outline: none;
    span {
        display: flex;
        gap: .5em;
        align-items: center;
    }
`;

export const Content = styled(Select.Content)`
	width: 100%;
	background: #F8F8F8;
    box-shadow: 1px 1px 12px #49494942;

    select {
        width: 100%;
    }
    span {
        display: flex;
        gap: .5em;
        align-items: center;
    }
`;

export const Viewport = styled(Select.Viewport)`
    width: 100%;
`;

export const SelectItem = styled(Select.SelectItem)`
	cursor: pointer;
	display: flex;
	justify-content: space-between;
    align-items: center;
	padding: .5em;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    transition: .3s;
    border: 1px solid transparent;

    &:hover {
        background-color: #DDDDDD;
        border: 1px solid black;
    }

`;

export const ItemSelectIndicator = styled(Select.ItemIndicator)`
	display: flex;
    align-items: center;
`;

export const ItemText = styled(Select.ItemText)`
	display: flex;
    align-items: center;
`;