import React from "react"
import { 
    Container,
    ChangeTheme,
    Title
} from './styles'

import { useTheme } from '../hooks/theme'

const Home = () => {
    const { changeTheme } = useTheme()

    return (
        <Container>
            <ChangeTheme onPress={changeTheme}>
                <Title>
                    Change
                </Title>
            </ChangeTheme>
        </Container>
    )
}

export default Home