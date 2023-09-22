import styled from "styled-components";


export const Container = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};

//    margin-bottom: 3.2rem;
    > label {
        font-size: 1.6rem;
        line-height: 100%;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        gap: 0.8rem;


        
    }
    > input {
        height: 4.8rem;
        
        background-color: ${({theme}) => theme.COLORS.DARK_900};
        border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
        border-radius: 0.5rem;
        
        padding: 1.4rem;

        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
            font-size: 1.6rem;
        }

    }
`