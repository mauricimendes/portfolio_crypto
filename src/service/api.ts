import axios from "axios"

const apikey = '08F86177-4DB2-498C-B527-84B4F2F989B3'

const api = axios.create({
    baseURL: 'https://rest.coinapi.io/v1/'
})

export {api, apikey}