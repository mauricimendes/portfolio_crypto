import styled from 'styled-components/native'

export const Container = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    background-color: ${props => props.theme.colors.background};
`

export const ChangeTheme = styled.TouchableOpacity`
    height: 60px;
    width: 120px;
    background-color: ${props => props.theme.colors.postive};

    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
`