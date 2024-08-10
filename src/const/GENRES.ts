export const ALIAS = {
  "QUEEN KIZOMBA PROJECT": "",
  SBKZ: "SALSA BACHATA KIZOMBA ZOUK",
  SBK: "SALSA BACHATA KIZOMBA",
  "WCS": "WEST COAST SWING",
  "AFRO":"KIZOMBA SEMBA",
  'GHETTO ZOUK': '',
  'ZOUK✅': '',  
  "SAMBA DE GAFIEIRA & VÁRIOS": "SAMBA", 
  "SAMBA DE GAFIEIRA": "SAMBA",
  "PISTA AFRICANA":"KIZOMBA SEMBA",
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
