import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { ChartPath, ChartPathProvider, monotoneCubicInterpolation } from '@rainbow-me/animated-charts';
import { api, apikey } from '../../service/api';
import { addDays } from 'date-fns'

export const { width: SIZE } = Dimensions.get('window');

export const details = [
    { x: 1453075200, y: '1.47' }, { x: 1453161600, y: 1.37 },
    { x: 1453248000, y: 1.53 }
];

interface IDetails {
    symbol: string
    days: number
}

interface IDetail {
    x: number
    y: number
}

interface ICrypto {
    time_close: string
    rate_close: number 
}

const Chart = ({ symbol, days }: IDetails) => {
    
    const [_, setInitial] = useState(false)
    const [data, setData] = useState<IDetail[]>()
    
    const points = monotoneCubicInterpolation({ data, range: 40 });
    // console.log('data', data)
    // console.log('points', points)

    useEffect(() => {
        setInitial(true)
        getDetails()
    }, [])

    const today = new Date();
    const range = addDays(today, -days)

    const getDetails = useCallback( async () => {
        const cryptos = [] as IDetail[]
        const details = (
            await api.get<ICrypto[]>(
                `/quotes/ITSTAMP_SPOT_${symbol}_USD/history?time_start=${range.toISOString().split("T")[0]}T00:00:00&time_end=${today.toISOString().split("T")[0]}T00:00:00`,
                {
                    headers: {'X-CoinAPI-Key': apikey}
                }
            )
        ).data

        console.log('teste', details)

        details.map(detail => {
            cryptos.push({ x: detail.rate_close, y: new Date(detail.time_close).getDate() })
        })
                    
        setData(cryptos)
    }, [])

    return (
        <View >
            <ChartPathProvider data={{ points, smoothingStrategy: 'bezier' }}>
                <ChartPath height={SIZE / 2} stroke="yellow" width={SIZE} />
            </ChartPathProvider>
        </View>
    )
}

export default Chart