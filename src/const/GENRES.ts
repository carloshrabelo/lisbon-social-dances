export const ALIAS = {
  "QUEEN KIZOMBA PROJECT": "",
  "RODA DE SAMBA?":'',
  "AFRO-LATINAS":"SALSA BACHATA KIZOMBA SEMBA",
  "AFRO":"KIZOMBA SEMBA",
  "PISTA LATINAS":"SALSA BACHATA",
  "PISTA AFRICANA":"KIZOMBA SEMBA",
  "SBKZ": "SALSA BACHATA KIZOMBA ZOUK",
  "SBK": "SALSA BACHATA KIZOMBA",
  "WCS": "WEST COAST SWING",
  'GHETTO ZOUK': '',
  'ZOUK✅': '',  
  "SAMBA DE GAFIEIRA & VÁRIOS": "SAMBA", 
  "SAMBA DE GAFIEIRA": "SAMBA",
  "FORRO": "FORRÓ",
  "SWINGADO":'',
  "SHAG":'SWING'
};

export const GENRES = [
  "Zouk",
  "Forró",
  "Salsa",
  "Bachata",
  "Kizomba",
  "Semba",
  "Swing",
  "Tango",
  "West Coast Swing",
  "Bolero",
  "Samba"
] as const;

export type Genre = (typeof GENRES)[number];
export default GENRES
