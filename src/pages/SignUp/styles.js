import styled from "styled-components";



export const Container = styled.div`
    width: 100%;
    max-width: 110rem;
    
    margin: 0 auto;
    padding: 0 4.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
    > header {
        margin-top: 15.8rem;
        margin-bottom: 8.0rem;
    }

    

    > main {
        display: flex;
        flex-direction: column;
        width: 100%;

        button {
        margin-bottom: 3.2rem;
        }

        a {
            color: ${({theme}) => theme.COLORS.LIGHT_100};
            display: flex;
            justify-content: center;
            align-items: center;
            
            
        }

        h1 {
            font-size: 3.2rem;
            text-align: center;
        }

    
    }

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        grid-template-areas: "logo" "form";
        height: 100vh;
        > header {
            grid-area: 'logo';
            justify-content: center;
            align-items: center;
            margin: 0;
        }

        > main {
            grid-area: 'form';
            background-color: ${({theme}) => theme.COLORS.DARK_700};
            border-radius: 1.6rem;
            padding: 6.4rem;
            max-width: 47.6rem;
        }

    }
`