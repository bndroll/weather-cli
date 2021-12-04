import { homedir } from 'os'
import { join } from 'path'
import { promises } from 'fs'

/**
 * Saves the path to the weather-data.json file
 * If the given path doesn't exist, creates weather-data.json file in the home directory and saves the path to it
 * */
const filePath = join(homedir(), 'weather-data.json')

/**
 * Saves the key in the file
 * */
export const saveKeyValue = async (key, value) => {
    let data = {}

    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath)
        data = JSON.parse(file)
    }

    data[key] = value
    await promises.writeFile(filePath, JSON.stringify(data))
}

/**
 * Checks for a key in the file
 * */
export const getKeyValue = async key => {
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath)
        const data = JSON.parse(file)
        return data[key]
    }

    return undefined
}

/**
 * Checks for the existence for a file at the given path
 * */
const isExist = async path => {
    try {
        await promises.stat(path)
        return true
    } catch (error) {
        return false
    }
}