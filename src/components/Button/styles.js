import styled from "styled-components";


export const Container = styled.button`
    width: 100%;
    height: 4.8rem;
    background-color: ${({theme}) => theme.COLORS.TOMATO_200};
    color: ${({ theme }) => theme.COLORS.WHITE};
    height: 56px;
    border: none;
    padding: 0 16px;
    //margin-top: 16px;
    border-radius: 0.5rem;
    font-size: 1.4rem;
    font-weight: 500;

    display: ${({ isInvisible}) => isInvisible ? 'none': 'flex'};
    align-items: center;
    justify-content: center;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;

    }
`;
