import { CarrierName } from "../services/api";
import TK from "./logos/TK.png"
import SU from "./logos/SU.png"
import S7 from "./logos/S7.png"
import BA from "./logos/BA.png"

type CarrierLogosType = Record<CarrierName, { code: CarrierName, url: string, displayName: string }>

export const carrier: CarrierLogosType = {
  TK: {
    code: "TK",
    url: TK,
    displayName: "Turkish airlines"
  },
  S7: {
    code: "S7",
    url: S7,
    displayName: "S7 airlines"
  },
  SU: {
    code: "SU",
    url: SU,
    displayName: "Aeroflot airlines"
  },
  BA: {
    code: "BA",
    url: BA,
    displayName: "British airlines"
  }
}