/* This script is used by the build system 
* to convert CSV files created in a spreadsheet application to Packs
*/
import { PACK_OUTPUT_PATH } from './BuildData/constants.js'
import fetchManifest from './BuildData/dataManifest.js'
import fetchSheets from './BuildData/fetchSheets.js'
import writeDbs from './BuildData/writeDbs.js'

fetchSheets(fetchManifest, writeDbs(PACK_OUTPUT_PATH), false)
