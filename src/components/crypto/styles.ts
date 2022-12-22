import styled from "styled-components/native"

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    margin-top: 36px;
`

export const SymbolIcon = styled.Image`
    height: 48px;
    width: 48px;
`

export const DescriptionSection = styled.View`
    margin-left: 16px;
    flex:1;
`

export const Name = styled.Text`
    font-family: 'MontserratBold';
    font-size: 14px;
    color: ${props => props.theme.colors.primary};
`

export const Symbol = styled.Text`
    font-family: 'MontserratBold';
    font-size: 14px;
    color: ${props => props.theme.colors.secondary};
`

export const ValueSection = styled.View`
`

export const Value = styled.Text`
    font-size: 'MontserratBold';
    font-size: 14px;
    color: ${props => props.theme.colors.primary};
`

export const Percent = styled.Text`
    font-family: 'MontserratBold';
    font-size: 14px;
    color: ${props => props.theme.colors.postive};
`