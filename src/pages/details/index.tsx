import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import Chart from "../../components/chart"
import { RouteProps } from "../../routes"
import { Container } from './styles'

const Details = ({ navigation, route }: RouteProps) => {

    const { symbol }: any = route.params

    return (
        <Container>
            <Text>
                {symbol}
            </Text>
            <TouchableOpacity onPress={navigation.goBack}>
                <Chart symbol={symbol} days={1} />
            </TouchableOpacity>
        </Container>
    )
}

export default Details