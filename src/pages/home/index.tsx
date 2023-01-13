import React, { useCallback, useEffect, useState } from "react"
import { FlatList, TouchableOpacity } from "react-native"

import {
    Container,
    Hello,
    TitleSection,
    Title,
    Icon,
    Subtitle,
    ListTitleSection,
    ListTitle,
    ListSubtitle
} from './styles'

import { useTheme } from '../../hooks/theme'
import Crypto, { ICrypto } from "../../components/crypto"

import { api, apikey } from '../../service/api'
import CryptoSkeleton from "../../components/crypto/components/skeleton"
import { RouteProps } from "../../routes"

interface IIcon {
    asset_id: string,
    url: string
}

const Home = ({ navigation }: RouteProps) => {
    
    const [cryptos, setCryptos] = useState<ICrypto[]>([])
    const [loading, setLoading] = useState(true)
    const { changeTheme, actualTheme } = useTheme()

    useEffect(() => {
       mountedCryptos()
    }, [])

    const mountedCryptos = useCallback( async () => {
        const cryptos: ICrypto[] = []
        // const cryptosApi = (await api.get<ICrypto[]>('/assets', { headers: {'X-CoinAPI-Key': apikey}})).data
        // const iconsApi = (await api.get<IIcon[]>('/assets/icons/36', { headers: {'X-CoinAPI-Key': apikey}})).data
        
        // cryptosApi.map(crypto => 
        //     iconsApi.map(icon => {
        //         if (crypto.asset_id === icon.asset_id) {
        //             cryptos.push({
        //                 name: crypto.name,
        //                 asset_id: crypto.asset_id,
        //                 icon: icon.url,
        //                 price_usd: crypto.price_usd
        //             })
        //         }
        //     })    
        // )

        cryptos.push({asset_id: 'BTC', icon: 'teste', name: 'Bitcoin', price_usd: 2122})

        setCryptos(cryptos)
        setLoading(false)
    }, [])
    
    return (
        <Container>
            <Hello>
                Olá Maurici
            </Hello>
            <TitleSection>
                <Title>
                    Seja bem vindo
                </Title>
                <TouchableOpacity activeOpacity={0.8} onPress={changeTheme}>
                    <Icon
                        name={actualTheme === 'light' ? 'moon' : 'sun'}
                        size={24}
                    />
                </TouchableOpacity>
            </TitleSection>
            <Subtitle>
                Lista
            </Subtitle>
            <ListTitleSection>
                <ListTitle>
                    CRYPTOS
                </ListTitle>
                <ListSubtitle>
                    minhas cryptos
                </ListSubtitle>
            </ListTitleSection>
            {loading ? <CryptoSkeleton /> : 
            <FlatList
                style={{
                    height: 'auto',
                    width: '100%',
                    marginTop: 24
                }} 
                showsVerticalScrollIndicator={false}
                data={cryptos}
                keyExtractor={item => item.asset_id}
                renderItem={({ item: crypto }) => (
                    <TouchableOpacity 
                        activeOpacity={0.8} 
                        onPress={() => navigation.navigate('Details', {
                            symbol: crypto.asset_id
                          })}
                    >
                        <Crypto
                            name={crypto.name}
                            asset_id={crypto.asset_id}
                            price_usd={crypto.price_usd}
                            icon={crypto.icon}
                        /> 
                    </TouchableOpacity>
                )}
            />}
        </Container>
    )
}

export default Home


