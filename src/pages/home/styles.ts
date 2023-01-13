import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.colors.background};
    padding: 56px 16px 16px 16px;
`

export const Hello = styled.Text`
    font-family: 'MontserratBold';
    font-size: 14px;
    color: ${props => props.theme.colors.postive};
`

export const TitleSection = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const Title = styled.Text`
    font-family: 'MontserratBold';
    font-size: 36px;
    color: ${props => props.theme.colors.primary};
`

export const Icon = styled(Feather)`
    color: ${props => props.theme.colors.primary};
`

export const Subtitle = styled.Text`
    font-size: 24px;
    font-family: 'MontserratBold';
    color: ${props => props.theme.colors.secondary};
`

export const ListTitleSection = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    margin-top: 36px;
`

export const ListTitle = styled.Text`
    font-size: 20px;
    font-family: 'MontserratBlack';
    color: ${props => props.theme.colors.primary};
`

export const ListSubtitle = styled.Text`
    font-size: 16px;
    font-family: 'MontserratRegular';
    color: ${props => props.theme.colors.secondary};
`