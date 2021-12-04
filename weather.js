#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import { printHelp } from './services/log.service.js'
import { getForecast, saveCity, saveToken } from './services/main.service.js'


const initCLI = async () => {
    const args = getArgs(process.argv)

    if (args.h) {
        return printHelp()
    }

    if (args.s) {
        return saveCity(args.s)
    }

    if (args.t) {
        return saveToken(args.t)
    }

    return getForecast()
}

initCLI()