import styled from "styled-components/native"

export const Container = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    background-color: ${props => props.theme.colors.background};
`
