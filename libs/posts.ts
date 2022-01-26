import fs from 'fs'
import path from 'path'

export function getSortedData(file : string) {
    const data = fs.readFileSync("../blog/" + file);
    return {
        data
    }
}