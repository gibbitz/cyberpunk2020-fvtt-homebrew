import {GOOGLE_SHEETS_URL, SHEETS_API_KEY} from './constants.js'
const getSheetsUri = (strings, spreadSheetId, sheetId = '') => {
  const [endpoint, sheetpath] = strings
  return `${GOOGLE_SHEETS_URL}${endpoint}${spreadSheetId}${sheetpath}${sheetId}?key=${SHEETS_API_KEY}`
}

export const getSpreadsheetUri = (spreadsheetId) => 
  getSheetsUri`v4/spreadsheets/${spreadsheetId}`
export const getSheetUri = (spreadsheetId, sheetId) => 
  getSheetsUri`v4/spreadsheets/${spreadsheetId}/values/${sheetId}`
