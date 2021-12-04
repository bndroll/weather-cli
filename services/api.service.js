import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js'
import axios from 'axios'


/**
 * Getting weather from open-weather API
 * */
export const getWeather = async city => {
    const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token)

    if (!token) throw new Error(`token isn't set, set it with the command -t [API_KEY]`)

    const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
            q: city,
            appid: token,
            lang: 'en',
            units: 'metric'
        }
    })

    return data.data
}