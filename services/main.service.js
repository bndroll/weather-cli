import { printError, printSuccess, printWeather } from './log.service.js'
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from './storage.service.js'
import { getWeather } from './api.service.js'
import { getIcon } from '../helpers/icon-code-parser.js'
import dedent from 'dedent-js'


/**
 * Saves token
 * */
export const saveToken = async token => {
    if (!token.length) {
        printError(`token wasn't passed`)
        return
    }

    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSuccess('token saved')
    } catch (error) {
        printError(error.message)
    }
}

/**
 * Gives city
 * */
export const saveCity = async city => {
    if (!city.length) {
        printError(`city wasn't passed`)
        return
    }

    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city)
        printSuccess(`city saved`)
    } catch (error) {
        printError(error.message)
    }
}

/**
 * Gives weather forecast
 * */
export const getForecast = async () => {
    try {
        const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city)
        const weather = await getWeather(city)

        printWeather(weather, getIcon(weather.weather[0].icon))
    } catch (error) {
        if (error?.response?.status === 400) {
            printError(dedent`
            wrong city
            current city - ${process.env.CITY}
            set city with command -s [CITY]
            `)
        } else if (error?.response?.status === 401) {
            printError(dedent`
            wrong token
            set token with command -t [API_KEY]
            `)
        } else {
            printError(dedent(error.message))
        }
    }
}