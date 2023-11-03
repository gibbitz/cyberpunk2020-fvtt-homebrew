import { getSheetUri } from "./uriUtils.js"
import { 
  SKILL_SPREADSHEET_ID,
  SKILL_ALL_SHEET_ID,
  GEAR_SPREADSHEET_ID,
  GEAR_EXPLOSIVES_SHEET_ID
} from './constants.js'

export default [
  {
    uri: getSheetUri(SKILL_SPREADSHEET_ID, SKILL_ALL_SHEET_ID),
    outfile: 'skills.db',
    modeler: ([
      skillName,
      attribute,
      modifier,
      ipMultiplier,
      specialAbility,
      description,
      notes,
      careerSkill
    ]) => ({
      skillName,
      attribute,
      modifier,
      ipMultiplier,
      specialAbility,
      description,
      notes,
      careerSkill
    })
  },
  {
    uri: getSheetUri(GEAR_SPREADSHEET_ID, GEAR_EXPLOSIVES_SHEET_ID),
    outfile: 'explosives.db',
    modeler: ([
      product,
      category,
      subcategory,
      cost,
      availability,
      weight,
      qty,
      image,
      imageLink,
      details,
      skill,
      accuracy,
      conceal,
      magazine,
      cartridge,
      damage,
      duration,
      blastRadius,
      rof,
      rel,
      range,
      reference,
      origin
    ]) => ({
      product,
      category,
      subcategory,
      cost,
      availability,
      weight,
      qty,
      image,
      imageLink,
      details,
      skill,
      accuracy,
      conceal,
      magazine,
      cartridge,
      damage,
      duration,
      blastRadius,
      rof,
      rel,
      range,
      reference,
      origin
    })
  }
]
