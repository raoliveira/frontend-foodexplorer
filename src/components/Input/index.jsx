import { Container } from "./styles";


export function Input({title, type = "text", ...rest}) {
    return(
        <Container>
            <label htmlFor={title}>{title}</label>
            <input type={type} {...rest} />
        </Container>
    )
}