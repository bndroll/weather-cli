#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import { printError, printHelp, printSuccess } from './services/log.service.js'
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js'
import { getWeather } from './services/api.service.js'


/**
 * Saves token
 * */
const saveToken = async token => {
    if (!token.length) {
        printError(`token wasn't passed`)
        return
    }

    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSuccess('token is saved')
    } catch (error) {
        printError(error.message)
    }
}

const initCLI = async () => {
    const args = getArgs(process.argv)

    if (args.h) {
        printHelp()
    }

    if (args.s) {

    }

    if (args.t) {
        return saveToken(args.t)
    }

    getWeather('london')
}

initCLI()