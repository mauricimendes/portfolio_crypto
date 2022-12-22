import React, { useMemo } from "react"
import { 
    Container,
    SymbolIcon,
    DescriptionSection,
    Name,
    Symbol,
    ValueSection, 
    Value,
} from './styles'

import bitcoin from '../../assets/bitcoin.png'

export interface ICrypto {
    name: string
    asset_id: string
    price_usd: number
    icon: string
}

const Crypto: React.FC<ICrypto> = ({ name, asset_id, price_usd, icon }) => {
    
    const price = useMemo(() => {
        const formatted = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(price_usd)
        return !price_usd ? 'R$ 00.00' : formatted
    }, [price_usd])

    return (
        <Container>
            <SymbolIcon source={{ uri: icon }}/>
            <DescriptionSection>
                <Name>
                    {name}
                </Name>
                <Symbol>
                    {asset_id}
                </Symbol>
            </DescriptionSection>
            <ValueSection>
                <Value>
                    {price}
                </Value>
            </ValueSection>
        </Container>
    )
}

export default Crypto

