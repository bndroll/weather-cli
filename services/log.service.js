import chalk from 'chalk'
import dedent from 'dedent-js'

export const printError = error => {
    console.log(`${chalk.bgRed(' ERROR ')} ${error}`)
}

export const printSuccess = message => {
    console.log(`${chalk.bgGreen(' SUCCESS ')} ${message}`)
}

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