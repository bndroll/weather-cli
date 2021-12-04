import chalk from 'chalk'
import dedent from 'dedent-js'

/**
 * Print an error message to the console
 * */
export const printError = error => {
    console.log(`${chalk.bgRed(' ERROR ')} ${error}`)
}

/**
 * Print a success message to the console
 * */
export const printSuccess = message => {
    console.log(`${chalk.bgGreen(' SUCCESS ')} ${message}`)
}

/**
 * Print an existing commands to the console
 * */
export const printHelp = () => {
    console.log(dedent
        `
        ${chalk.bgCyan(' HELP ')}
        without params - log weather
        -s [CITY] set city
        -t [API_KEY] set token
        -h log help
        `
    )
}