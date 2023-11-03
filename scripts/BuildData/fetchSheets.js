// import fetch from 'node-fetch'
import { SHEETS_GET_OPTIONS } from './constants.js'

export default (manifest, callback, debug = false) => {
  return Promise.all(
    manifest.map(({ uri, modeler, outfile }) => {
      debug && console.log(`====> fetching: ${uri}\n`)
      fetch(uri, SHEETS_GET_OPTIONS)
        .then((response) => response.json()
          .then(({ values }) => {
            const dbString = values
              .map(row => JSON.stringify(modeler(row)))
              .join('\n')
            debug && console.log(`writing to ${outfile}\n${dbString}\\n`)
            callback(dbString, outfile)
          })
        )
    })
  )
}