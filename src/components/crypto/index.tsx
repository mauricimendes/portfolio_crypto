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

export interface ICrypto {
    name: string
    asset_id: string
    price_usd: number
    icon: string
}

const Crypto: React.FC<ICrypto> = ({ name, asset_id, price_usd, icon }) => {
    
    const price = useMemo(() => {
        return Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(!price_usd ? 0.00 : price_usd)
    }, [price_usd])

    return (
        <Container>
            <SymbolIcon source={{ uri: icon }} />
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

