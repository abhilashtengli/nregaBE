export function findMaterialUnit(item: string) {
  return materialUnit.find((data) => data.item === item);
}

const materialUnit = [
  {
    "sl.no": 1,
    item: "10-Miscellaneous /Contingencies charges",
    unit: "Lumpsum "
  },
  {
    "sl.no": 2,
    item: "3-Display Board / CIB",
    unit: "nos"
  },
  {
    "sl.no": 3,
    item: "5-GST",
    unit: "Lumpsum "
  },
  {
    "sl.no": 4,
    item: "MR9757-Over Head & other Miscellaneous Charges",
    unit: "Lumpsum "
  },
  {
    "sl.no": 5,
    item: "20 mm Jelly",
    unit: "Cum"
  },
  {
    "sl.no": 6,
    item: "Cement",
    unit: "tonne"
  },
  {
    "sl.no": 7,
    item: "Sand",
    unit: "Cum"
  },
  {
    "sl.no": 8,
    item: "Steel",
    unit: "tonne"
  },
  {
    "sl.no": 9,
    item: "20 MM Metal",
    unit: "Cum"
  },
  {
    "sl.no": 10,
    item: "40 mm Metal",
    unit: "Cum"
  },
  {
    "sl.no": 11,
    item: "Bond Stone",
    unit: "Cum"
  },
  {
    "sl.no": 12,
    item: "Boulder",
    unit: "Cum"
  },
  {
    "sl.no": 13,
    item: "Cement",
    unit: "tonne"
  },
  {
    "sl.no": 14,
    item: "Rubber Stone",
    unit: "nos"
  },
  {
    "sl.no": 15,
    item: "Sand",
    unit: "Cum"
  },
  {
    "sl.no": 16,
    item: "Size Stone 20x20x25cm",
    unit: "nos"
  },
  {
    "sl.no": 17,
    item: "Stone Collection",
    unit: "nos"
  },
  {
    "sl.no": 18,
    item: "40 M M Jelly",
    unit: "Cum"
  },
  {
    "sl.no": 19,
    item: "supply of steel..",
    unit: "tonne"
  },
  {
    "sl.no": 20,
    item: "SUPPLY OF BOLDERS",
    unit: "Cum"
  },
  {
    "sl.no": 21,
    item: "supply of cement",
    unit: "tonne"
  },
  {
    "sl.no": 22,
    item: "Supply of Size stone",
    unit: "each"
  },
  {
    "sl.no": 23,
    item: "Tractor Hire Charges",
    unit: "Day"
  },
  {
    "sl.no": 24,
    item: "20 mm Jelly",
    unit: "Cum"
  },
  {
    "sl.no": 25,
    item: "40mm jelly",
    unit: "Cum"
  },
  {
    "sl.no": 26,
    item: "Rubble Stone(Uncoursed)",
    unit: "Cum"
  },
  {
    "sl.no": 27,
    item: "Sand",
    unit: "Cum"
  },
  {
    "sl.no": 28,
    item: "20 mm Jelly",
    unit: "Cum"
  },
  {
    "sl.no": 29,
    item: "40 mm jelly",
    unit: "Cum"
  },
  {
    "sl.no": 30,
    item: "Rubble Stone (Uncoursed)",
    unit: "Cum"
  },
  {
    "sl.no": 31,
    item: "Sand",
    unit: "Cum"
  },
  {
    "sl.no": 32,
    item: "MR9757-Transportation/loading and unloading of material/lifting of \nmaterial/centering charges wherever necessary /Over head/Wastage/Unforeseen \ncharges/Miscellaneous which are necessary during execution.",
    unit: "Lumpsum"
  },
  {
    "sl.no": 33,
    item: "MR9530-Hydraulic Excavator 0.9 cum bucket capacity @ 60 cum per hour",
    unit: "hour"
  },
  {
    "sl.no": 34,
    item: "20 mm Jelly",
    unit: "Cum"
  },
  {
    "sl.no": 35,
    item: "Cement",
    unit: "Cum"
  },
  {
    "sl.no": 36,
    item: "Name Board",
    unit: "nos"
  },
  {
    "sl.no": 37,
    item: "SAND....",
    unit: "Cum"
  },
  {
    "sl.no": 38,
    item: "Steel",
    unit: "Cum"
  },
  {
    "sl.no": 39,
    item: "SUPPLY OF BOULDERS..",
    unit: "Cum"
  },
  {
    "sl.no": 40,
    item: "20 MM Jally",
    unit: "Cum"
  },
  {
    "sl.no": 41,
    item: "40 mm Metal",
    unit: "Cum"
  },
  {
    "sl.no": 42,
    item: "Bricks(Nos)",
    unit: "Cum"
  },
  {
    "sl.no": 43,
    item: "Cement",
    unit: "Cum"
  },
  {
    "sl.no": 44,
    item: "morrum...",
    unit: "Cum"
  },
  {
    "sl.no": 45,
    item: "Name Board",
    unit: "Cum"
  },
  {
    "sl.no": 46,
    item: "Sand",
    unit: "Cum"
  },
  {
    "sl.no": 47,
    item: "TMT STEEL.......",
    unit: "tonne"
  },
  {
    "sl.no": 48,
    item: "Tractor Hire Charges",
    unit: "hour"
  },
  {
    "sl.no": 49,
    item: "Water Tanker",
    unit: "Cum"
  },
  {
    "sl.no": 50,
    item: "3-Display Board",
    unit: "nos"
  },
  {
    "sl.no": 51,
    item: "20MM Jelly",
    unit: "Cum"
  },
  {
    "sl.no": 52,
    item: "40 MM granite",
    unit: "Cum"
  },
  {
    "sl.no": 53,
    item: "Boulders(cum)",
    unit: "Cum"
  },
  {
    "sl.no": 54,
    item: "Bricks(Nos)",
    unit: "Nos"
  },
  {
    "sl.no": 55,
    item: "Cement",
    unit: "Cum"
  },
  {
    "sl.no": 56,
    item: "PVC PIPE",
    unit: "Meter"
  },
  {
    "sl.no": 57,
    item: "SAND....",
    unit: "Cum"
  },
  {
    "sl.no": 58,
    item: "20 MM Jelly (cum)",
    unit: "Cum"
  },
  {
    "sl.no": 59,
    item: "0001-Hire charges of Coaltar Boiler 900 to 1400 litres",
    unit: "Day"
  },
  {
    "sl.no": 60,
    item: "0002-Hire charges of Concrete Mixer 0.25 to 0.40 cum with Hopper",
    unit: "Day"
  },
  {
    "sl.no": 61,
    item: "0003-Hire charges of Diesel Road Roller- 8 to 10 tonne",
    unit: "Day"
  },
  {
    "sl.no": 62,
    item: "0004-Production cost of concrete by batch mix plant",
    unit: "cum"
  },
  {
    "sl.no": 63,
    item: "0005-Hire charges of Diesel Truck-9 tonne",
    unit: "Day"
  },
  {
    "sl.no": 64,
    item: "0006-Hire charges of sparaying machine including electric charges",
    unit: "Day"
  },
  {
    "sl.no": 65,
    item: "0007-Hire charges of coaltar Sprayer",
    unit: "Day"
  },
  {
    "sl.no": 66,
    item: "0008-Hire charges of Barber green, drying,mixing and Asphalt Plant, with accessories, capacity 30/45 tonne",
    unit: "Day"
  },
  {
    "sl.no": 67,
    item: "0009-Pumping charges of concrete including Hire charges of pump, piping work & accessories etc.",
    unit: "cum"
  },
  {
    "sl.no": 68,
    item: "0010-Hire charges of Derrick monkey rope",
    unit: "Day"
  },
  {
    "sl.no": 69,
    item: "0011-Hire charges of Pump set of capacity 4000 litres/hour",
    unit: "Day"
  },
  {
    "sl.no": 70,
    item: "0012-Vibrator (Needle type 40 mm)",
    unit: "Day"
  },
  {
    "sl.no": 71,
    item: "0013-Machine for rubbing of floors",
    unit: "Day"
  },
  {
    "sl.no": 72,
    item: "0014-Front end loader capacity 1.00 cum",
    unit: "Day"
  },
  {
    "sl.no": 73,
    item: "0015-Hire and running charges of Tripod and Mechanical Winch machine complete with power unit and accessories",
    unit: "Day"
  },
  {
    "sl.no": 74,
    item: "0016-Mastic Cooker",
    unit: "Day"
  },
  {
    "sl.no": 75,
    item: "0017-Hire and running charges of tipper",
    unit: "Day"
  },
  {
    "sl.no": 76,
    item: "0018-Hire and running charges of loader",
    unit: "Day"
  },
  {
    "sl.no": 77,
    item: "0019-Hand Grinder for mirror polish",
    unit: "Day"
  },
  {
    "sl.no": 78,
    item: "0020-Hydraulic Excavator (3D) with driver and fuel ",
    unit: "Day"
  },
  {
    "sl.no": 79,
    item: "0021-pin vibrator",
    unit: "Day"
  },
  {
    "sl.no": 80,
    item: "0022-Surface Vibrator",
    unit: "Day"
  },
  {
    "sl.no": 81,
    item: "0023-Hot Bitumen Mixer 0.5cum i/c hand cart",
    unit: "Day"
  },
  {
    "sl.no": 82,
    item: "0024-Hire and running charges of hydraulic piling with power unit etc. including complete accessories and shifting at site",
    unit: "Day"
  },
  {
    "sl.no": 83,
    item: "0025-Hire and running charges of light crane",
    unit: "Day"
  },
  {
    "sl.no": 84,
    item: "0026-Hire and running charges of bentonite pump",
    unit: "Day"
  },
  {
    "sl.no": 85,
    item: "0027-Hire and running charges of vibrating pile driving hammer complete with power unit and accessories",
    unit: "Day"
  },
  {
    "sl.no": 86,
    item: "0028-Hire and running charges of crane 20 tonne capacity ",
    unit: "Day"
  },
  {
    "sl.no": 87,
    item: "0029-Carriage of concrete by transit mixer",
    unit: "cum per km"
  },
  {
    "sl.no": 88,
    item: "0030-Generator 250 KVA",
    unit: "Day"
  },
  {
    "sl.no": 89,
    item: "0033-Paint applicator",
    unit: "Day"
  },
  {
    "sl.no": 90,
    item: "0037-Mobile crane",
    unit: "Day"
  },
  {
    "sl.no": 91,
    item: "0038-Tractor with ripper attachment",
    unit: "Day"
  },
  {
    "sl.no": 92,
    item: "0039-Tractor with trolley",
    unit: "Day"
  },
  {
    "sl.no": 93,
    item: "0040-Air compressor 250 cm with two leads for pneumatic cutters/hammers",
    unit: "Day"
  },
  {
    "sl.no": 94,
    item: "0041-joint cutting machine with 2-3 blades",
    unit: "Day"
  },
  {
    "sl.no": 95,
    item: "0042-C.C.batch mix plant",
    unit: "Day"
  },
  {
    "sl.no": 96,
    item: "0043-Road Sweeper",
    unit: "Day"
  },
  {
    "sl.no": 97,
    item: "0045-Slip form paver with sensor",
    unit: "Day"
  },
  {
    "sl.no": 98,
    item: "0046-Water tanker 5000 Ltr. Capacity",
    unit: "Day"
  },
  {
    "sl.no": 99,
    item: "0047-Concrete joint cutting machine",
    unit: "Day"
  },
  {
    "sl.no": 100,
    item: "0048-Texturing machine",
    unit: "Day"
  },
  {
    "sl.no": 101,
    item: "0049-Dozer D-80-A12",
    unit: "hour"
  },
  {
    "sl.no": 102,
    item: "0050-Motor Grade 3.35 meter blade",
    unit: "hour"
  },
  {
    "sl.no": 103,
    item: "0051-Hydraulic Excavator of 1 cum bucker",
    unit: "hour"
  },
  {
    "sl.no": 104,
    item: "0052-Front end loader 1 cum bucket capacity (incl POL)",
    unit: "hour"
  },
  {
    "sl.no": 105,
    item: "0053-Tipper -5 cum",
    unit: "tonne Km"
  },
  {
    "sl.no": 106,
    item: "0054-Vibratory roller 8 to 10 tonne",
    unit: "hour"
  },
  {
    "sl.no": 107,
    item: "0055-Smooth Wheeled Roller 8 to 10 tonne",
    unit: "hour"
  },
  {
    "sl.no": 108,
    item: "0056-Tandem Road Roller ",
    unit: "hour"
  },
  {
    "sl.no": 109,
    item: "0057-Water Tanker 5 to 6 KL Capacity",
    unit: "hour"
  },
  {
    "sl.no": 110,
    item: "0058-Air Compressor ",
    unit: "hour"
  },
  {
    "sl.no": 111,
    item: "0059-Wet Mix Plant 60 TPH",
    unit: "hour"
  },
  {
    "sl.no": 112,
    item: "0060-Mechanical Broom Hydraulic",
    unit: "hour"
  },
  {
    "sl.no": 113,
    item: "0061-Emulsion Pressure Distributor @1750 sqm per hour",
    unit: "hour"
  },
  {
    "sl.no": 114,
    item: "0062-Hot Mix Plant - 120 TPH capacity",
    unit: "hour"
  },
  {
    "sl.no": 115,
    item: "0063-Hot Mix Plant 100 TPH Capacity ",
    unit: "hour"
  },
  {
    "sl.no": 116,
    item: "0064-Paver finisher Hydrostatic with sensor control 100 TPH",
    unit: "hour"
  },
  {
    "sl.no": 117,
    item: "0065-Paver finisher Mechanical 100 TPH",
    unit: "hour"
  },
  {
    "sl.no": 118,
    item: "0066-Batching and Mixing Plant @75 cum per hour",
    unit: "hour"
  },
  {
    "sl.no": 119,
    item: "0068-Concrete Paver finisher with 40 HP Motor and sensor ",
    unit: "hour"
  },
  {
    "sl.no": 120,
    item: "0069-Generator 250 KVA",
    unit: "hour"
  },
  {
    "sl.no": 121,
    item: "0070-Generator 100 KVA/125",
    unit: "hour"
  },
  {
    "sl.no": 122,
    item: "0071-Truck 5.5 cum/ 10 tonnes",
    unit: "tonne Km"
  },
  {
    "sl.no": 123,
    item: "0075-Road sweeper (Mechamical Broom) @ 1250 sqm per hour",
    unit: "hour"
  },
  {
    "sl.no": 124,
    item: "0076-Drum Type HMP of 60-90 TPH Capacity @ 75 tonne per hour actual output",
    unit: "hour"
  },
  {
    "sl.no": 125,
    item: "0080-Hire and running charges of drill Machine up to 400 mm dia (including cost of mobile oil, disesel consumption in ordinary soil operator)",
    unit: "Day"
  },
  {
    "sl.no": 126,
    item: "0081-Pile integrity testing equipment ",
    unit: "Day"
  },
  {
    "sl.no": 127,
    item: "0082-Excavation of Diaphragm wall by Mechanical Grab",
    unit: "sqm"
  },
  {
    "sl.no": 128,
    item: "0083-Hire charges of TATA 407 or equivalent for local shifting",
    unit: "Day"
  },
  {
    "sl.no": 129,
    item: "0084-Hire charges of Diesel truck - 9 tonne (without POL)",
    unit: "Day"
  },
  {
    "sl.no": 130,
    item: "0085-Using cost of Ultra Voilet Radiation tube",
    unit: "hour"
  },
  {
    "sl.no": 131,
    item: "0086-Compressor, gun, rubber pipes & other accessories - hire charge of plant & machinery i/c necessary fuel",
    unit: "Day"
  },
  {
    "sl.no": 132,
    item: "0087-Hire Charges of Suction Jeting machine 2200 PSI machine i/c POL and operator",
    unit: "Day"
  },
  {
    "sl.no": 133,
    item: "0088-Hire Charges of Drill machine upto 30 mm dia",
    unit: "Day"
  },
  {
    "sl.no": 134,
    item: "0089-Hire charges of sand blasting equipment",
    unit: "Day"
  },
  {
    "sl.no": 135,
    item: "0090-Hire charges of compressor",
    unit: "Day"
  },
  {
    "sl.no": 136,
    item: "0091-Welding charges of shear key to existing reinforcement",
    unit: "each"
  },
  {
    "sl.no": 137,
    item: "0092-Hire charges of plant and machinery that can inject 350 kg/day",
    unit: "Day"
  },
  {
    "sl.no": 138,
    item: "Dsor Code-Dsor description",
    unit: "Unit"
  },
  {
    "sl.no": 139,
    item: "0100-Bandhani",
    unit: "Day"
  },
  {
    "sl.no": 140,
    item: "0101-Bhisti",
    unit: "Day"
  },
  {
    "sl.no": 141,
    item: "0102-Blacksmith 1st class",
    unit: "Day"
  },
  {
    "sl.no": 142,
    item: "0103-Blacksmith 2nd class",
    unit: "Day"
  },
  {
    "sl.no": 143,
    item: "0111-Carpender Ist Class",
    unit: "Day"
  },
  {
    "sl.no": 144,
    item: "0112-Carpenter 2nd class",
    unit: "Day"
  },
  {
    "sl.no": 145,
    item: "0113-Chowkidar",
    unit: "Day"
  },
  {
    "sl.no": 146,
    item: "0114-Beldar",
    unit: "Day"
  },
  {
    "sl.no": 147,
    item: "0115-Coolie",
    unit: "Day"
  },
  {
    "sl.no": 148,
    item: "0116-Fitter(grade1)",
    unit: "Day"
  },
  {
    "sl.no": 149,
    item: "0117-Assistant Fitter or 2nd class fitter",
    unit: "Day"
  },
  {
    "sl.no": 150,
    item: "0119-Glazier",
    unit: "Day"
  },
  {
    "sl.no": 151,
    item: "0122-Mason(for plaster of paris work) Ist class",
    unit: "Day"
  },
  {
    "sl.no": 152,
    item: "0123-Mason (brick layer) Ist class",
    unit: "Day"
  },
  {
    "sl.no": 153,
    item: "0124-Mason (brick layer )2nd class",
    unit: "Day"
  },
  {
    "sl.no": 154,
    item: "0125-Mason (for plain stone work) 2nd class",
    unit: "Day"
  },
  {
    "sl.no": 155,
    item: "0126-Mason (for Ornamental stone work) Ist class",
    unit: "Day"
  },
  {
    "sl.no": 156,
    item: "0127-Driver (for Road Roller, Concrete Mixer, Truck etc)",
    unit: "Day"
  },
  {
    "sl.no": 157,
    item: "0128-Mate",
    unit: "Day"
  },
  {
    "sl.no": 158,
    item: "0129-Sewer Man",
    unit: "Day"
  },
  {
    "sl.no": 159,
    item: "0130-Mistry",
    unit: "Day"
  },
  {
    "sl.no": 160,
    item: "0131-Painter",
    unit: "Day"
  },
  {
    "sl.no": 161,
    item: "0132-Rock Excavator ",
    unit: "Day"
  },
  {
    "sl.no": 162,
    item: "0133-Rock Breaker",
    unit: "Day"
  },
  {
    "sl.no": 163,
    item: "0134-Rock Hole Driller",
    unit: "Day"
  },
  {
    "sl.no": 164,
    item: "0135-Stone Chiseller",
    unit: "Day"
  },
  {
    "sl.no": 165,
    item: "0138-Sprayer (for bitumen, tar etc)",
    unit: "Day"
  },
  {
    "sl.no": 166,
    item: "0139-Skilled Beldar (for floor rubbing etc.)",
    unit: "Day"
  },
  {
    "sl.no": 167,
    item: "0141-White Washer",
    unit: "Day"
  },
  {
    "sl.no": 168,
    item: "0154-Nozzel man/ gun man",
    unit: "Day"
  },
  {
    "sl.no": 169,
    item: "0155-Mason (average)",
    unit: "Day"
  },
  {
    "sl.no": 170,
    item: "0156-Carpenter (average)",
    unit: "Day"
  },
  {
    "sl.no": 171,
    item: "0157-Operator (Pile/Special machine)",
    unit: "Day"
  },
  {
    "sl.no": 172,
    item: "0159-Skilled torch operator for laying tack",
    unit: "Day"
  },
  {
    "sl.no": 173,
    item: "0160-Technician",
    unit: "Day"
  },
  {
    "sl.no": 174,
    item: "0161-Helper (Technician)",
    unit: "Day"
  },
  {
    "sl.no": 175,
    item: "0162-Labour for fabrication of uPVC extruded casement/sliding windows and doors including drilling holes, fixing of fittings & hardwares, hire charges of drill machine and electricity charges etc.",
    unit: "sqm"
  },
  {
    "sl.no": 176,
    item: "0163-Labour for installation of uPVC extruded casement/ sliding windows and doors including scaffolding",
    unit: "sqm"
  },
  {
    "sl.no": 177,
    item: "0164-Security guard without gun (8 hours shift duty per day)",
    unit: "Day"
  },
  {
    "sl.no": 178,
    item: "0165-Security guard with gun (8 hours shift duty per day)",
    unit: "Day"
  },
  {
    "sl.no": 179,
    item: "0199-Mali (semi- Skilled)",
    unit: "Day"
  },
  {
    "sl.no": 180,
    item: "99991-Earth carriage 50 m head load 1.2.2",
    unit: "cum"
  },
  {
    "sl.no": 181,
    item: "99992-Manure/ Sludge Carriage 50 m head load 1.2.3",
    unit: "cum"
  },
  {
    "sl.no": 182,
    item: "Dsor Code-Dsor description",
    unit: "Unit"
  },
  {
    "sl.no": 183,
    item: "0222-Seam bolts and nuts 6 mm dia and 25 mm long",
    unit: "10 nos"
  },
  {
    "sl.no": 184,
    item: "0223-Fibre (high impact poly propelene reinforced) cement corrugated sheet 6 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 185,
    item: "0224-Fibre (high impact poly propelene reinforced) cement close fitting adjustable ridge",
    unit: "metre"
  },
  {
    "sl.no": 186,
    item: "0225-Fibre (high impact poly propelene reinforced) cement corrugate serrated adjustable ridge",
    unit: "metre"
  },
  {
    "sl.no": 187,
    item: "0226-Fibre (high impact poly propelene reinforced) cement plain wing adjustable ridge",
    unit: "metre"
  },
  {
    "sl.no": 188,
    item: "0227-Fibre (high impact poly propelene reinforced) cement unserrated adjustable ridge for hips",
    unit: "metre"
  },
  {
    "sl.no": 189,
    item: "0228-Fibre (high impact poly propelene reinforced) cement corrugated apron piece",
    unit: "metre"
  },
  {
    "sl.no": 190,
    item: "0229-Fibre (high impact poly propelene reinforced) cement eaves filler piece",
    unit: "each"
  },
  {
    "sl.no": 191,
    item: "0230-Fibre (high impact poly propelene reinforced) cement north light curves",
    unit: "metre"
  },
  {
    "sl.no": 192,
    item: "0231-Non-Asbestos fibre (high impact poly propelene reinforced) cement ventilator curves",
    unit: "each"
  },
  {
    "sl.no": 193,
    item: "0232-Fibre (high impact poly propelene reinforced) cement barge boards 6 mm thick",
    unit: "metre"
  },
  {
    "sl.no": 194,
    item: "0233-Fibre (high impact poly propelene reinforced) cement ridge finial",
    unit: "pair"
  },
  {
    "sl.no": 195,
    item: "0234-Fibre (high impact poly propelene reinforced) cement special north light curves",
    unit: "each"
  },
  {
    "sl.no": 196,
    item: "0235-Fibre (high impact poly propelene reinforced) cement S type louvers",
    unit: "each"
  },
  {
    "sl.no": 197,
    item: "0236-Multi purpose fibre (high impact poly propelene reinforced) cement board 6 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 198,
    item: "0237-Multi purpose fibre (high impact poly propelene reinforced) cement 8 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 199,
    item: "0238-6 mm thick heavy duty fiber cement board",
    unit: "sqm"
  },
  {
    "sl.no": 200,
    item: "0239-8 mm thick heavy duty fiber cement board",
    unit: "sqm"
  },
  {
    "sl.no": 201,
    item: "0240-9 mm thick heavy duty fiber cement board",
    unit: "sqm"
  },
  {
    "sl.no": 202,
    item: "0241-12.5 mm thick Gypsum plaster board",
    unit: "sqm"
  },
  {
    "sl.no": 203,
    item: "0242-6 mm thick multipurpose cement bonded wood particle board conforming to IS : 14276",
    unit: "sqm"
  },
  {
    "sl.no": 204,
    item: "0243-8 mm thick multipurpose cement bonded wood particle board conforming to IS : 14276",
    unit: "sqm"
  },
  {
    "sl.no": 205,
    item: "0285-Brick Aggregate (single size):63 mm nominal size",
    unit: "cum"
  },
  {
    "sl.no": 206,
    item: "0286-Brick Aggregate (single size):50 mm nominal size",
    unit: "cum"
  },
  {
    "sl.no": 207,
    item: "0287-Brick Aggregate (single size):40 mm nominal size",
    unit: "cum"
  },
  {
    "sl.no": 208,
    item: "0291-Stone Aggregate(single size):63 mm nominal size",
    unit: "cum"
  },
  {
    "sl.no": 209,
    item: "0292-Stone Aggregate(single size):50 mm nominal size",
    unit: "cum"
  },
  {
    "sl.no": 210,
    item: "0293-Stone Aggregate(single size): 40 mm nominal size",
    unit: "cum"
  },
  {
    "sl.no": 211,
    item: "0294-Stone Aggregate(single size):25 mm nominal size",
    unit: "cum"
  },
  {
    "sl.no": 212,
    item: "0295-Stone Aggregate(single size):20 mm nominal size",
    unit: "cum"
  },
  {
    "sl.no": 213,
    item: "0296-Stone Aggregate(single size): 12.5 mm nominal size",
    unit: "cum"
  },
  {
    "sl.no": 214,
    item: "0297-Stone Aggregate(single size): 10 mm nominal size",
    unit: "cum"
  },
  {
    "sl.no": 215,
    item: "0298-Stone Aggregate(single size): 06 mm nominal size",
    unit: "cum"
  },
  {
    "sl.no": 216,
    item: "0302-Safeda ballies 125 mm diameter",
    unit: "metre"
  },
  {
    "sl.no": 217,
    item: "0303-Cowdung",
    unit: "cum"
  },
  {
    "sl.no": 218,
    item: "0304-Bajiri",
    unit: "cum"
  },
  {
    "sl.no": 219,
    item: "0305-Bamboo 25 mm dia 2.5 meter long",
    unit: "score"
  },
  {
    "sl.no": 220,
    item: "0308-Bhusa",
    unit: "quintal"
  },
  {
    "sl.no": 221,
    item: "0309-Paving bitumen of grade VG 10 of approved quality",
    unit: "tonne"
  },
  {
    "sl.no": 222,
    item: "0310-Bitumen emulsion",
    unit: "tonne"
  },
  {
    "sl.no": 223,
    item: "0312-Bitumen grade PMB - 40",
    unit: "tonne"
  },
  {
    "sl.no": 224,
    item: "0313-Blown type petroleum bitumen of penetration 85/25 of approved quality ",
    unit: "tonne"
  },
  {
    "sl.no": 225,
    item: "0314-Bitumen hot sealing compound : grade A",
    unit: "kilogram"
  },
  {
    "sl.no": 226,
    item: "0316-Bitumen solution primer of approved quality",
    unit: "Litre"
  },
  {
    "sl.no": 227,
    item: "0317-Premoulded joing filler 12 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 228,
    item: "0318-Bitumen felt fibre base (vegetable or animal): Type 2 grade 1",
    unit: "sqm"
  },
  {
    "sl.no": 229,
    item: "0319-Bitumen felt as per IS 7193 Grade II",
    unit: "sqm"
  },
  {
    "sl.no": 230,
    item: "0322-Bitumen felt : Type 3 grade 1",
    unit: "sqm"
  },
  {
    "sl.no": 231,
    item: "0323-Separation Membrane of impermeable plastic sheeting 125 micron thick",
    unit: "sqm"
  },
  {
    "sl.no": 232,
    item: "0324-Coal Tar",
    unit: "Litre"
  },
  {
    "sl.no": 233,
    item: "0325-Blasting powder",
    unit: "kilogram"
  },
  {
    "sl.no": 234,
    item: "0326-Blasting fuse (fuse wire)",
    unit: "each"
  },
  {
    "sl.no": 235,
    item: "0328-White face insulating board : 12 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 236,
    item: "0332-Natural colour insulating board : 12 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 237,
    item: "0336-Flame retardant face insulating board : 12 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 238,
    item: "0339-Flame retardant face inslulating, impregnated fibre board 12 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 239,
    item: "0341-Flat pressed 3 layer particle board (medium density) Grade 1,12 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 240,
    item: "0346-Extra for veneered particle board with : Teak veneering on one side and commercial veneering on other side",
    unit: "sqm"
  },
  {
    "sl.no": 241,
    item: "0347-Extra for veneered particle board with Commercial veneering on both sides",
    unit: "sqm"
  },
  {
    "sl.no": 242,
    item: "0348-Extra for veneered particle board with Teak veneering both sides",
    unit: "sqm"
  },
  {
    "sl.no": 243,
    item: "0349-Curing compound",
    unit: "Litre"
  },
  {
    "sl.no": 244,
    item: "0351-Integral cystalline slurry",
    unit: "kilogram"
  },
  {
    "sl.no": 245,
    item: "0352-Integral crystalline admixture",
    unit: "kilogram"
  },
  {
    "sl.no": 246,
    item: "0353-Crystalline mortar",
    unit: "kilogram"
  },
  {
    "sl.no": 247,
    item: "0354-Integral cystalline dry shake",
    unit: "kilogram"
  },
  {
    "sl.no": 248,
    item: "0355-Swellable type water stop tape",
    unit: "metre"
  },
  {
    "sl.no": 249,
    item: "0356-Primer for swellable type wate stop tape",
    unit: "Litre"
  },
  {
    "sl.no": 250,
    item: "0357-Polymer modified adhesive mortar",
    unit: "kilogram"
  },
  {
    "sl.no": 251,
    item: "0362-Brick bats",
    unit: "cum"
  },
  {
    "sl.no": 252,
    item: "0364-Wire brush ",
    unit: "each"
  },
  {
    "sl.no": 253,
    item: "0365-Soft brush",
    unit: "each"
  },
  {
    "sl.no": 254,
    item: "0367-Portland Cement",
    unit: "tonne"
  },
  {
    "sl.no": 255,
    item: "0368-White cement ",
    unit: "tonne"
  },
  {
    "sl.no": 256,
    item: "0369-Plastic sheath,1.25 mm thick for dowel bars",
    unit: "sqm"
  },
  {
    "sl.no": 257,
    item: "0370-Coal (steam)",
    unit: "quintal"
  },
  {
    "sl.no": 258,
    item: "0371-Sealant primer",
    unit: "kg"
  },
  {
    "sl.no": 259,
    item: "0373-Cramp Gun metal 25x6x300 mm",
    unit: "each"
  },
  {
    "sl.no": 260,
    item: "0374-Pre moulded joint filler, 25mm thick for expansion joint",
    unit: "sqm"
  },
  {
    "sl.no": 261,
    item: "0378-Brass butt hinges (light /ordinary type):125x70x4 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 262,
    item: "0379-Brass butt hinges (light /ordinary type) : 100x70x4 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 263,
    item: "0380-Brass butt hinges (light /ordinary type) : 75x40x2.5 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 264,
    item: "0381-Brass butt hinges (light /ordinary type) : 50x40x2.5 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 265,
    item: "0382-Brass butt hinges (heavy type) :125x85x5.5 mm(0.70 kg)",
    unit: "10 nos"
  },
  {
    "sl.no": 266,
    item: "0383-Brass butt hinges (heavy type) : 100x85x5.5 mm (0.56kg)",
    unit: "10 nos"
  },
  {
    "sl.no": 267,
    item: "0384-Brass butt hinges (heavy type): 75x65x4.0 mm (0.20 kg)",
    unit: "10 nos"
  },
  {
    "sl.no": 268,
    item: "0385-Brass parliamentary hinges 150x125x27x5 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 269,
    item: "0386-Brass parliamentary hinges 125x125x27x5 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 270,
    item: "0387-Brass parliamentary hinges 100x125x27x5 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 271,
    item: "0388-Brass parliamentary hinges 75x100x20x3.2 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 272,
    item: "0389-Brass single acting spring hinges 150 mm",
    unit: "each"
  },
  {
    "sl.no": 273,
    item: "0390-Brass single acting spring hinges 125 mm",
    unit: "each"
  },
  {
    "sl.no": 274,
    item: "0391-Brass single acting spring hinges 100 mm",
    unit: "each"
  },
  {
    "sl.no": 275,
    item: "0392-Brass double acting spring hinges 150 mm",
    unit: "each"
  },
  {
    "sl.no": 276,
    item: "0393-Brass double acting spring hinges 125 mm",
    unit: "each"
  },
  {
    "sl.no": 277,
    item: "0394-Brass double acting spring hinges 100 mm ",
    unit: "each"
  },
  {
    "sl.no": 278,
    item: "0400-Brass tower bolt (barrel type) 250x10 mm",
    unit: "each"
  },
  {
    "sl.no": 279,
    item: "0401-Brass tower bolt (barrel type) 200x10 mm",
    unit: "each"
  },
  {
    "sl.no": 280,
    item: "0402-Brass tower bolt (barrel type) 150 x 10 mm",
    unit: "each"
  },
  {
    "sl.no": 281,
    item: "0403-Brass tower bolt (barrel type) 100 x 10 mm",
    unit: "each"
  },
  {
    "sl.no": 282,
    item: "0404-Brass flush bolt 250 mm",
    unit: "each"
  },
  {
    "sl.no": 283,
    item: "0405-Brass flush bolt 150 mm",
    unit: "each"
  },
  {
    "sl.no": 284,
    item: "0406-Brass flush bolt 100 mm ",
    unit: "each"
  },
  {
    "sl.no": 285,
    item: "0408-Brass handles 125 mm with plate 175x32 mm",
    unit: "each"
  },
  {
    "sl.no": 286,
    item: "0409-Brass handles 100 mm with plate 150x32 mm mm",
    unit: "each"
  },
  {
    "sl.no": 287,
    item: "0410-Brass handles 75 mm with plate 125x32 mm",
    unit: "each"
  },
  {
    "sl.no": 288,
    item: "0411-Brass door latch 300x16x5x mm (0.380 kg)",
    unit: "each"
  },
  {
    "sl.no": 289,
    item: "0412-Brass door latch 250x16x5 mm (0.350 kg)",
    unit: "each"
  },
  {
    "sl.no": 290,
    item: "0413-Brass mortice latch and lock 100 x 65 mm with6 levers and  a pair of brass lever handles ",
    unit: "each"
  },
  {
    "sl.no": 291,
    item: "0414-Brass mortice latch 100x65 mm with a pair of brass lever handles ",
    unit: "each"
  },
  {
    "sl.no": 292,
    item: "0417-Brass 150 mm floor door stopper (0.357 kg)",
    unit: "each"
  },
  {
    "sl.no": 293,
    item: "0418-Brass hard drawn hooks and eyes 300 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 294,
    item: "0419-Brass hard drawn hooks and eyes 250 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 295,
    item: "0420-Brass hard drawn hooks and eyes 200 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 296,
    item: "0421-Brass hard drawn hooks and eyes 150 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 297,
    item: "0422-Brass hard drawn hooks and eyes 100 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 298,
    item: "0423-Brass casement window fastener",
    unit: "each"
  },
  {
    "sl.no": 299,
    item: "0424-Brass casement stays (straight peg type ) 300 mm weighing not less than 0.33 kg",
    unit: "each"
  },
  {
    "sl.no": 300,
    item: "0425-Brass casement stays (straight peg type) 250 mm weighing not less than 0.28 kg",
    unit: "each"
  },
  {
    "sl.no": 301,
    item: "0426-Brass casement stays (straight peg type) 200 mm weighing not less than 0.24 kg",
    unit: "each"
  },
  {
    "sl.no": 302,
    item: "0427-Brass quadrant stays 300 mm",
    unit: "each"
  },
  {
    "sl.no": 303,
    item: "0428-Brass fanlight catch",
    unit: "10 nos"
  },
  {
    "sl.no": 304,
    item: "0429-Brass fanlight pivot",
    unit: "10 nos"
  },
  {
    "sl.no": 305,
    item: "0430-Brass chain with hook for fan light catch",
    unit: "each"
  },
  {
    "sl.no": 306,
    item: "0431-Brass hasps and staples (safety type ) 150 mm ",
    unit: "10 nos"
  },
  {
    "sl.no": 307,
    item: "0432-Brass hasps and staples (safety type) 115 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 308,
    item: "0433-Brass hasps and staples (safety type) 90 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 309,
    item: "0438-Brass Night latch",
    unit: "each"
  },
  {
    "sl.no": 310,
    item: "0442-Brass helical spring 150 mm",
    unit: "each"
  },
  {
    "sl.no": 311,
    item: "0444-Brass curtain rod 20 mm dia 1.25 mm thick",
    unit: "metre"
  },
  {
    "sl.no": 312,
    item: "0445-Brass curtain rod 25 mm dia 1.25 mm thick",
    unit: "metre"
  },
  {
    "sl.no": 313,
    item: "0446-Brass brackets (curtain rods) 20 mm",
    unit: "each"
  },
  {
    "sl.no": 314,
    item: "0447-Brass cupboard knob or wardrobe knob 50 mm",
    unit: "each"
  },
  {
    "sl.no": 315,
    item: "0449-brass screws 50 mm",
    unit: "100 nos"
  },
  {
    "sl.no": 316,
    item: "0450-Brass screws 40 mm",
    unit: "100 nos"
  },
  {
    "sl.no": 317,
    item: "0451-Brass screws 30 mm",
    unit: "100 nos"
  },
  {
    "sl.no": 318,
    item: "0452-Brass screws 25 mm",
    unit: "100 nos"
  },
  {
    "sl.no": 319,
    item: "0453-Brass screws 20 mm",
    unit: "100 nos"
  },
  {
    "sl.no": 320,
    item: "0524-Chromium plated Brass butt hinges (heavy) type 75x65x4 mm (200 gms)",
    unit: "10 nos"
  },
  {
    "sl.no": 321,
    item: "0525-Chromium plated Brass butt hinges (light/ordinary) type 125x70x4 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 322,
    item: "0526-Chromium plated Brass butt hinges (light/ordinary) type 100x70x4 mm ",
    unit: "10 nos"
  },
  {
    "sl.no": 323,
    item: "0527-Chromium plated Brass butt hinges (light/ordinary) type 75x40x2.5 mm ",
    unit: "10 nos"
  },
  {
    "sl.no": 324,
    item: "0528-Chromium plated Brass butt hinges (light/ordinary) type 50x40x2.5 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 325,
    item: "0552-75 mm SS fancy handles for kitchen cabinet",
    unit: "10 nos"
  },
  {
    "sl.no": 326,
    item: "0553-100 mm SS Fancy handles for kitchen cabinet",
    unit: "10 nos"
  },
  {
    "sl.no": 327,
    item: "0554-125 mm SS fancy handles for kitchen cabinet",
    unit: "10 nos"
  },
  {
    "sl.no": 328,
    item: "0555-Chromium plated Brass handles 125 mm with plate 175x32 mm",
    unit: "each"
  },
  {
    "sl.no": 329,
    item: "0556-Chromium plated Brass handles 100 mm with plate 150x32 mm",
    unit: "each"
  },
  {
    "sl.no": 330,
    item: "0557-Chromium plated Brass handles 75 mm with plate 125x32 mm",
    unit: "each"
  },
  {
    "sl.no": 331,
    item: "0558-Chromium plated Brass mortice latch and lock 100x65 mm with 6 levers and a pair of brass lever handles",
    unit: "each"
  },
  {
    "sl.no": 332,
    item: "0568-Chromium plated brass casement window fastener",
    unit: "each"
  },
  {
    "sl.no": 333,
    item: "0569-Chromium plated Brass casement stays (straight peg type) 300 mm weighing not less than 0.33 kg",
    unit: "each"
  },
  {
    "sl.no": 334,
    item: "0570-Chromium plated Brass casement stays (straight peg type) 250 mm weighing not less than 0.28",
    unit: "each"
  },
  {
    "sl.no": 335,
    item: "0571-Chromium plated Brass casement stays (straight peg type) 200 mm weighing not less than 0.24 kg",
    unit: "each"
  },
  {
    "sl.no": 336,
    item: "0583-Chromium plated Brass Night latch",
    unit: "each"
  },
  {
    "sl.no": 337,
    item: "0584-Chromium plated Brass Wardrobe Knob 50 mm",
    unit: "each"
  },
  {
    "sl.no": 338,
    item: "0585-Chromium plated Brass Screws 50 MM",
    unit: "100 nos"
  },
  {
    "sl.no": 339,
    item: "0586-Chromium plated Brass screw 40 mm",
    unit: "100 nos"
  },
  {
    "sl.no": 340,
    item: "0587-Chromium plated Brass screws 30 mm",
    unit: "100 nos"
  },
  {
    "sl.no": 341,
    item: "0588-Chromium plated Brass screws 25 mm",
    unit: "100 nos"
  },
  {
    "sl.no": 342,
    item: "0589-Chromium plated Brass screws 20 mm",
    unit: "100 nos"
  },
  {
    "sl.no": 343,
    item: "0590-Chromium plated Brass curtain rod 12 mm dia 1.25 mm thick",
    unit: "metre"
  },
  {
    "sl.no": 344,
    item: "0591-Chromium plated Brass curtain rod 20 mm dia 1.25 mm thick",
    unit: "metre"
  },
  {
    "sl.no": 345,
    item: "0592-Chromium plated Brass curtain rod 25 mm dia 1.25 mm thick",
    unit: "metre"
  },
  {
    "sl.no": 346,
    item: '0593-C. P. Brass Extension Nipple (1/2"x2" size)',
    unit: "each"
  },
  {
    "sl.no": 347,
    item: "0594-Bright finished or black enameled mild steel butt hinges 125x65x2.12 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 348,
    item: "0595-Bright finished or black enameled mild steel butt hinges 100x58x1.90 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 349,
    item: "0596-Bright finished or black enameled mild steel butt hinges 75x47x1.70 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 350,
    item: "0597-Bright finished or black enameled mild steel butt hinges 50x37x1.50 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 351,
    item: "0608-Nickel plated bright finished mild steel piano hinges 1 mm thick 25 mm wide",
    unit: "metre"
  },
  {
    "sl.no": 352,
    item: "0635-Bright finished or black enameled mild steel screws 50 mm",
    unit: "100 nos"
  },
  {
    "sl.no": 353,
    item: "0637-Bright finished or black enameled mild steel screws 40 mm",
    unit: "100 nos"
  },
  {
    "sl.no": 354,
    item: "0638-Bright finished or black enameled mild steel screws 30 mm",
    unit: "100 nos"
  },
  {
    "sl.no": 355,
    item: "0639-Bright finished or black enameled mild steel screws 25 mm ",
    unit: "100 nos"
  },
  {
    "sl.no": 356,
    item: "0640-Bright finished or black enameled mild steel screws 20 mm",
    unit: "100 nos"
  },
  {
    "sl.no": 357,
    item: "0641-Bright finished or black enameled mild steel bolts and nuts 50x6 mm",
    unit: "each"
  },
  {
    "sl.no": 358,
    item: "0642-Oxidised mild steel butt hinges 125x65x2.12 MM",
    unit: "10 nos"
  },
  {
    "sl.no": 359,
    item: "0643-Oxidised mild steel butt hinges 100x58x1.90 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 360,
    item: "0644-Oxidised mild steel butt hinges 75x47x1.70 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 361,
    item: "0645-Oxidised mild steel butt hinges 50x37x1.50 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 362,
    item: "0646-Oxidised mild steel parliamentary hinges 150x125x27x2.8 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 363,
    item: "0647-Oxidised mild steel parliamentary hinges 125x125x27x2.8 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 364,
    item: "0648-Oxidised mild steel parliamentary hinges 100x125x27x2.8 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 365,
    item: "0649-Oxidised mild steel parliamentary hinges 75x100x20x2.24 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 366,
    item: "0650-Oxidised mild steel single acting spring hinges 150 mm",
    unit: "each"
  },
  {
    "sl.no": 367,
    item: "0651-Oxidised mild steel single acting spring  hinges 125 mm",
    unit: "each"
  },
  {
    "sl.no": 368,
    item: "0652-Oxidised mild steel single acting spring  hinges 100 mm",
    unit: "each"
  },
  {
    "sl.no": 369,
    item: "0653-Oxidised mild steel single acting spring  hinges 150 mm",
    unit: "each"
  },
  {
    "sl.no": 370,
    item: "0654-Oxidised mild steel double acting spring hinges 125 mm",
    unit: "each"
  },
  {
    "sl.no": 371,
    item: "0655-Oxidised mild steel double acting spring hinges 100 mm",
    unit: "each"
  },
  {
    "sl.no": 372,
    item: "0656-Nickel  plated mild steel piano hinges 1 mm thick 35 mm wide",
    unit: "metre"
  },
  {
    "sl.no": 373,
    item: "0660-Oxidised mild steel sliding door bolt 300x16 mm",
    unit: "each"
  },
  {
    "sl.no": 374,
    item: "0661-Oxidised mild steel sliding door bolt 250x16 mm",
    unit: "each"
  },
  {
    "sl.no": 375,
    item: "0662-Oxidised mild steel door latch 300x20x6 mm",
    unit: "each"
  },
  {
    "sl.no": 376,
    item: "0663-Oxidised mild steel door latch 250x20x6 mm",
    unit: "each"
  },
  {
    "sl.no": 377,
    item: "0664-Oxidised mild steel tower bolt (barrel type) 250x10mm",
    unit: "each"
  },
  {
    "sl.no": 378,
    item: "0665-Oxidised mild steel tower bolt (barrel type) 200x10 mm",
    unit: "each"
  },
  {
    "sl.no": 379,
    item: "0666-Oxidised mild steel tower bolt (barrel type) 150x10 mm",
    unit: "each"
  },
  {
    "sl.no": 380,
    item: "0667-Oxidised mild steel tower bolt (barrel type) 100x10 mm",
    unit: "each"
  },
  {
    "sl.no": 381,
    item: "0668-Oxidised mild steel handles 125 mm",
    unit: "each"
  },
  {
    "sl.no": 382,
    item: "0669-Oxidised mild steel handles 100 mm",
    unit: "each"
  },
  {
    "sl.no": 383,
    item: "0670-Oxidised mild steel handles 75 mm",
    unit: "each"
  },
  {
    "sl.no": 384,
    item: "0679-Oxidised mild steel hasps and staples (safety type)150 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 385,
    item: "0680-Oxidised mild steel hasps and staples (safety type ) 115 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 386,
    item: "0681-Oxidised mild steel hasps and staples (safety type ) 90 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 387,
    item: "0682-Oxidised mild steel screws 50 mm",
    unit: "100 nos"
  },
  {
    "sl.no": 388,
    item: "0683-Oxidised mild steel screws 40 mm",
    unit: "100 nos"
  },
  {
    "sl.no": 389,
    item: "0684-Oxidised mild steel screws 30 mm",
    unit: "100 nos"
  },
  {
    "sl.no": 390,
    item: "0685-Oxidised mild steel screws 25 mm",
    unit: "100 nos"
  },
  {
    "sl.no": 391,
    item: "0686-Oxidised mild steel screws 20 mm",
    unit: "100 nos"
  },
  {
    "sl.no": 392,
    item: "0687-Anodised Aluminium butt hinges 125x75x4 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 393,
    item: "0688-Anodised Aluminium butt hinges 125x63x4xmm",
    unit: "10 nos"
  },
  {
    "sl.no": 394,
    item: "0689-Anodised Aluminium butt hinges 100x75x4 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 395,
    item: "0690-Anodised Aluminium butt hinges 100x63x3.2 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 396,
    item: "0691-Anodised Aluminium butt hinges 100x63x4 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 397,
    item: "0692-Anodised Aluminium butt hinges 75x63x4 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 398,
    item: "0693-Anodised Aluminium butt hinges 75x63x3.2 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 399,
    item: "0694-Anodised Aluminium butt hinges 75x45x3.2 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 400,
    item: "0696-Anodised Aluminium sliding door bolt 300x16 mm",
    unit: "each"
  },
  {
    "sl.no": 401,
    item: "0697-Anodised Aluminium sliding door bolt 250x16 mm",
    unit: "each"
  },
  {
    "sl.no": 402,
    item: "0698-Anodised Aluminium tower bolt (barrel type)300x10 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 403,
    item: "0699-Anodised Aluminium tower bolt (barrel type) 250 x 10 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 404,
    item: "0700-Anodised Aluminium tower bolt (barrel type) 200x10 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 405,
    item: "0701-Anodised Aluminium tower bolt (barrel type) 150x10 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 406,
    item: "0702-Anodised Aluminium tower bolt (barrel type) 100x10 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 407,
    item: "0703-Anodised Aluminium handles 125 mm with plate 175 x 32 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 408,
    item: "0704-Anodised Aluminium handles 100 mm with plate 150 x 32 mm ",
    unit: "10 nos"
  },
  {
    "sl.no": 409,
    item: "0705-Anodised Aluminium handles 75 mm with plate 125 x 32 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 410,
    item: "0706-Anodised Aluminium kicking plate 50 cm long 100x3.15 mm",
    unit: "each"
  },
  {
    "sl.no": 411,
    item: "0713-Block board construction flush door with teak wood ply on both faces 35 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 412,
    item: "0714-Block board construction flush door with teak wood play on both faces 30 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 413,
    item: "0715-Block board construction flush door with teak wood ply on both faces 25 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 414,
    item: "0717-Block board construction flush door with commercial ply on both faces",
    unit: "sqm"
  },
  {
    "sl.no": 415,
    item: "0718-Block board construction flush door with commercial ply on both faces 30 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 416,
    item: "0719-Block board construction flush door with commerciial ply on both faces 25 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 417,
    item: "0752-Block board construction flush door lipping ",
    unit: "sqm of door area"
  },
  {
    "sl.no": 418,
    item: "0753-Square vision panel (upto 0.10sqm) in Block board construction flush door",
    unit: "sqm of door area"
  },
  {
    "sl.no": 419,
    item: "0754-Circular vision panel (upto 0.10 sqm) in Block board construction flush door",
    unit: "sqm of door area"
  },
  {
    "sl.no": 420,
    item: "0755-Decorative type Louvers (upto 0.20 sqm) in Block board construction flush door",
    unit: "sqm of door area"
  },
  {
    "sl.no": 421,
    item: "0757-Rebate cutting in Block board construction flush door",
    unit: "sqm of door area"
  },
  {
    "sl.no": 422,
    item: "0759-Decorative plywood 4 mm",
    unit: "sqm"
  },
  {
    "sl.no": 423,
    item: "0761-Fuel wood",
    unit: "quintal"
  },
  {
    "sl.no": 424,
    item: "0763-Glue ",
    unit: "kilogram"
  },
  {
    "sl.no": 425,
    item: "0764-Calcium silicate base compound for jointing calcium silicate tiles",
    unit: "kilogram"
  },
  {
    "sl.no": 426,
    item: "0765-Hessian cloth",
    unit: "sqm"
  },
  {
    "sl.no": 427,
    item: "0768-Cement Concrete Jali 50 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 428,
    item: "0769-Cement Concrete Jali 40 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 429,
    item: "0770-Cement Concrete Jali 25 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 430,
    item: "0771-Kerosene oil",
    unit: "Litre"
  },
  {
    "sl.no": 431,
    item: "0772-White cement based polymer modified self curing compound in powder form",
    unit: "kg"
  },
  {
    "sl.no": 432,
    item: "0773-Unslaked lime",
    unit: "quintal"
  },
  {
    "sl.no": 433,
    item: "0775-Deharadun white lime",
    unit: "quintal"
  },
  {
    "sl.no": 434,
    item: "0776-Satna lime",
    unit: "quintal"
  },
  {
    "sl.no": 435,
    item: "0777-Dry hydrated lime (factory made)",
    unit: "quintal"
  },
  {
    "sl.no": 436,
    item: "0784-Marble dust/ powder",
    unit: "cum"
  },
  {
    "sl.no": 437,
    item: "0785-Marble chips up to 4 mm and downsize white &black",
    unit: "quintal"
  },
  {
    "sl.no": 438,
    item: "0788-Marble chips large size above 4 mm white & black",
    unit: "quintal"
  },
  {
    "sl.no": 439,
    item: "0801-Silicon and acrylic emulsion",
    unit: "Litre"
  },
  {
    "sl.no": 440,
    item: "0802-Acrylic distemper Ist quality, having VOC content less than 50 gm/litre",
    unit: "kg"
  },
  {
    "sl.no": 441,
    item: "0803-Acrylic emulsion, having VOC content less than 50 gm/litre",
    unit: "Litre"
  },
  {
    "sl.no": 442,
    item: "0804-Premium acrylic emulsion of interior grade, having VOC content less than 50 gm/litre",
    unit: "Litre"
  },
  {
    "sl.no": 443,
    item: "0805-Synthetic enamel paint, having VOC ( Volatile Organic Compound content less than 150 gm/liitre",
    unit: "Litre"
  },
  {
    "sl.no": 444,
    item: "0806-Ready mixed pink or grey primer on wood work(hard and softwood)  having VOC content less than 50 gms/litre",
    unit: "Litre"
  },
  {
    "sl.no": 445,
    item: "0807-Ready mixed red oxide zinc chromatic on steel/ iron work, having VOC content less than 250 gms/litre",
    unit: "Litre"
  },
  {
    "sl.no": 446,
    item: "0808-Water thinnable cement primer for interior wall surface, having VOC content less than 50 gms/litre",
    unit: "Litre"
  },
  {
    "sl.no": 447,
    item: "0809-Exterior primer ",
    unit: "kilogram"
  },
  {
    "sl.no": 448,
    item: "0810-Moorum",
    unit: "cum"
  },
  {
    "sl.no": 449,
    item: "0811-Mud (dry)",
    unit: "cum"
  },
  {
    "sl.no": 450,
    item: "0815-Dry distemper ",
    unit: "kilogram"
  },
  {
    "sl.no": 451,
    item: "0816-Oil bound washable distemper/ Acrylic distemper",
    unit: "kilogram"
  },
  {
    "sl.no": 452,
    item: "0818-Linseed oil (double boiled)",
    unit: "Litre"
  },
  {
    "sl.no": 453,
    item: "0820-Cement Primer ",
    unit: "Litre"
  },
  {
    "sl.no": 454,
    item: "0821-Distemper primer",
    unit: "Litre"
  },
  {
    "sl.no": 455,
    item: "0823-Pink primer (for wood)",
    unit: "Litre"
  },
  {
    "sl.no": 456,
    item: "0824-White cement based putty ",
    unit: "kg"
  },
  {
    "sl.no": 457,
    item: "0826-Aluminium paint ",
    unit: "Litre"
  },
  {
    "sl.no": 458,
    item: "0827-Acid proof paint (chocolate or black)",
    unit: "Litre"
  },
  {
    "sl.no": 459,
    item: "0828-Anticorrosive bituminous paint (black)",
    unit: "Litre"
  },
  {
    "sl.no": 460,
    item: "0829-Black Japan",
    unit: "Litre"
  },
  {
    "sl.no": 461,
    item: "0830-Enamel paint",
    unit: "Litre"
  },
  {
    "sl.no": 462,
    item: "0831-Floor enamel paint in all shades except green",
    unit: "Litre"
  },
  {
    "sl.no": 463,
    item: "0833-Synthetic enamel paint in black or chocolate shade",
    unit: "Litre"
  },
  {
    "sl.no": 464,
    item: "0834-Synthetic enamel paint in all shades except black or chocolate shade",
    unit: "Litre"
  },
  {
    "sl.no": 465,
    item: "0835-Plastic emulsion paint ",
    unit: "Litre"
  },
  {
    "sl.no": 466,
    item: "0845-Roofing paint for iron sheets in red colour",
    unit: "Litre"
  },
  {
    "sl.no": 467,
    item: "0850-White lead",
    unit: "kilogram"
  },
  {
    "sl.no": 468,
    item: "0851-water proofing cement paint",
    unit: "kilogram"
  },
  {
    "sl.no": 469,
    item: "0855-Wax polish (ready made)",
    unit: "kilogram"
  },
  {
    "sl.no": 470,
    item: "0856-Ordinary varnish",
    unit: "Litre"
  },
  {
    "sl.no": 471,
    item: "0857-Superior copal varnish",
    unit: "Litre"
  },
  {
    "sl.no": 472,
    item: "0858-Superior spar varnish",
    unit: "Litre"
  },
  {
    "sl.no": 473,
    item: "0859-Oil type wood preservative ",
    unit: "Litre"
  },
  {
    "sl.no": 474,
    item: "0863-Putty for wood work",
    unit: "kilogram"
  },
  {
    "sl.no": 475,
    item: "0865-pig lead",
    unit: "kilogram"
  },
  {
    "sl.no": 476,
    item: "0868-Premixed super white gypsum plaster",
    unit: "kilogram"
  },
  {
    "sl.no": 477,
    item: "0869-Plaster or paris",
    unit: "kilogram"
  },
  {
    "sl.no": 478,
    item: "0870-Plug",
    unit: "each"
  },
  {
    "sl.no": 479,
    item: "0873-Copper pins 6 mm dia 7.5 cm long",
    unit: "each"
  },
  {
    "sl.no": 480,
    item: "0874-Black colour dark shade pigment",
    unit: "kilogram"
  },
  {
    "sl.no": 481,
    item: "0875-Red chocolate, orange, buff or yellow (red oxide of iron) light shade",
    unit: "kilogram"
  },
  {
    "sl.no": 482,
    item: "0876-Green or blue medium shade pigment ",
    unit: "kilogram"
  },
  {
    "sl.no": 483,
    item: "0886-Standard holder bat clamps for sand cast iron or cast iron pipes 150 mm dia",
    unit: "each"
  },
  {
    "sl.no": 484,
    item: "0966-Sand cast iron plain shoe 150 mm dia",
    unit: "each"
  },
  {
    "sl.no": 485,
    item: "0967-Copper plate",
    unit: "kilogram"
  },
  {
    "sl.no": 486,
    item: "0969-Pulley 25 mm dia ",
    unit: "each"
  },
  {
    "sl.no": 487,
    item: "0973-Rolling shutter made of 80x1.25 mm machine rolled laths",
    unit: "sqm"
  },
  {
    "sl.no": 488,
    item: "0974-Top cover for rolling shutters 1.25 mm thick",
    unit: "metre"
  },
  {
    "sl.no": 489,
    item: "0975-27.5 cm long wire spring grade no 2 for rolling shutters",
    unit: "each"
  },
  {
    "sl.no": 490,
    item: "0976-Ball bearing for rolling shutters",
    unit: "each"
  },
  {
    "sl.no": 491,
    item: "0977-Extra for mechanical devices chain and cranked operation for operating rolling shutters: exceeding 16.80 sqm area of door ",
    unit: "sqm"
  },
  {
    "sl.no": 492,
    item: "0978-Extra for mechanical devices chain and cranked operation for operating rolling shutters: exceeding 16.80 sqm area of  door ",
    unit: "sqm"
  },
  {
    "sl.no": 493,
    item: "0979-Royalty for good earth",
    unit: "cum"
  },
  {
    "sl.no": 494,
    item: "0980-Royalty for sludge ",
    unit: "cum"
  },
  {
    "sl.no": 495,
    item: "0982-Coarse sand (zone III)",
    unit: "cum"
  },
  {
    "sl.no": 496,
    item: "0983-Fine sand (zone IV)",
    unit: "cum"
  },
  {
    "sl.no": 497,
    item: "0992-Galvanised steel plain sheets",
    unit: "quintal"
  },
  {
    "sl.no": 498,
    item: "0994-Standard quality hard board sheet 3 mm thick ",
    unit: "sqm"
  },
  {
    "sl.no": 499,
    item: "0996-Standard quality hard board sheet 4.5 mm thick ",
    unit: "sqm"
  },
  {
    "sl.no": 500,
    item: "0999-Shellac",
    unit: "kilogram"
  },
  {
    "sl.no": 501,
    item: "1000-Spirit",
    unit: "Litre"
  },
  {
    "sl.no": 502,
    item: "10001-Neelgiri grass turf with earth 50mm To 60mm thicknes",
    unit: "sqm"
  },
  {
    "sl.no": 503,
    item: "10003- Rolling or ramming of ground turf (Grass",
    unit: "sqm"
  },
  {
    "sl.no": 504,
    item: "10004- Selection No.1 grass turf with earth 50mm To 60mm thickness ",
    unit: "sqm"
  },
  {
    "sl.no": 505,
    item: "10005- Bermuda Grass or Doob Grass ",
    unit: "sqm"
  },
  {
    "sl.no": 506,
    item: '10007- River Pabbles size of 2" to 2.50" dia in natural colour',
    unit: "quintal"
  },
  {
    "sl.no": 507,
    item: "10008- Selection No.1 grass at site fresh & from weeds ",
    unit: "sqm"
  },
  {
    "sl.no": 508,
    item: "10009-PVC Hexagonal net (Tuflex or equivalent ",
    unit: "sqm"
  },
  {
    "sl.no": 509,
    item: "1001-Spun yarn",
    unit: "kilogram"
  },
  {
    "sl.no": 510,
    item: "10010- Bamboo 18 to 20cm grith and 90 cm Height",
    unit: "each"
  },
  {
    "sl.no": 511,
    item: "10011-Providing of Aglaonema Parrot Jungle plant (three in one), having ht. 30 cm and above with 20 to 25 leaves, well developed, fresh & healthy in 25 cm size of Earthen pot / Plastic pot.",
    unit: "each"
  },
  {
    "sl.no": 512,
    item: "10012- Providing of Aglaonema dove variety Plant, having ht. 30 cm to 45 cm with 8 to 10 leaves, well developed, fresh and healthy in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 513,
    item: "10013- Providing of Aglaonema Pseudo bractatum plants, having ht. 30 cm and above with 3 to 4 suckers & 20 to 25 leaves, well developed, fresh and healthy in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 514,
    item: "10014- Providing of Aglaonema Snow White hybrid plant (three in one), having ht. 30 cm & above with 6 to 8 leaves, bright colour, well developed, fresh and healthy in 25 cm size of Earthen pot / Plastic pot. (Specimen Plant). ",
    unit: "each"
  },
  {
    "sl.no": 515,
    item: "10015-Providing of Aglaonema Silver Queen plant, having ht. 30 cm to 45 cm. with 12 to 15 leaves, multi suckers, well developed, fresh and healthy in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 516,
    item: "10016-Providing of Aglaonema Ernesto Plant (three in one), having ht. 45 cm & above with 12 to 15 leaves,well developed, fresh and healthy in 25 cm size of Earthen pot / Plastic pot.",
    unit: "each"
  },
  {
    "sl.no": 517,
    item: "10017- Providing of Aglaonema marentifolium variety plant, having ht. 23 cm to 30 cm with 8 to 10 leaves, well developed, fresh and healthy with colourfull leaves in 20 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 518,
    item: "10018-Providing of Aglaonema Modestum plant, having ht. 23 cm to 30 cm with 3 to 4 suckers & 15 to 20 leaves,well developed, fresh and healthy in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 519,
    item: "10019- Providing of Aglaonema nitida plant, having ht. 30 cm to 45 cm with 8 to 10 leaves, well developed, fersh and healthy with attractive leaves in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 520,
    item: "1002-Mild steel round bar 12 mm dia and below",
    unit: "quintal"
  },
  {
    "sl.no": 521,
    item: "10020- Providing of Araucaria cookie plant, having ht. 60 cm to 75 cm, straight, well developed, fresh and healthy with lush green leaves from bottom to top in 20 cm size of Earthen pot / Plastic pot.",
    unit: "each"
  },
  {
    "sl.no": 522,
    item: "10021- Providing of Araucaria cookie plant, having ht. 75 cm to 90 cm, straight, well developed, fresh and healthy with lush green leaves from bottom to top in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 523,
    item: "10022- Providing of Araucaria cookii plant, having ht.1.20 m to 1.35 m, straight, well developed, fresh and healthy with lush green leaves from bottom to top in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 524,
    item: "10023- Providing of Araucaria cookii plant, having ht.1.80 m to 1.95 m, straight, well developed, fresh and healthy with lush green leaves from bottom to top in 30 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 525,
    item: "10024- Providing of Areca Palm plant, having ht. 90 cm to 1.20 m with 4 to 5 suckers, well developed, fresh and healthy with lush green foliage in 20 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 526,
    item: "10025- Providing of Areca Palm plant, having ht. 1.20 m to 1.50 m with 5 to 6 suckers, well developed, fresh and healthy with lush green foliage in 25 cm size of Earthen pot / Plastic pot",
    unit: "each"
  },
  {
    "sl.no": 527,
    item: "10026- Providing of Areca palm plant, having ht. 1.50 m to 1.80 m with 6 to 8 suckers, well developed, fresh and healthy with lush green foliage in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 528,
    item: "10027- Providing of Areca Palm plant, having ht. 1.80 m to 2.10 m with 8 to 10 suckers, well developed, fresh and healthy with lush green foliage in 30 cm size of Earthen pot / Plastic pot.",
    unit: "each"
  },
  {
    "sl.no": 529,
    item: "10028- Providing of Areca Palm plant, having ht. 2.40 m to 2.70 m with 12 to 14 suckers, well developed, fresh and healthy with lush green foliage in 35 cm size of Bucket type cement pots",
    unit: "each"
  },
  {
    "sl.no": 530,
    item: "10029-Providing of Brassia Varigated plant, having ht. 30 cm, well developed with fresh and healthy foliage in 20 cm size of Earthen pot / Plastic pot",
    unit: "each"
  },
  {
    "sl.no": 531,
    item: "1003-Mild Steel round bar above 12 mm dia",
    unit: "quintal"
  },
  {
    "sl.no": 532,
    item: "10030-Providing of Brassia Varigated plant, having ht. 30 cm to 45 cm, well developed with fresh and healthy foliage in 25 cm size of Earthen pot / Plastic pot.",
    unit: "each"
  },
  {
    "sl.no": 533,
    item: "10031- Providing of Chamaedorea elegans palm plant, having ht. 60 cm to 75 cm, well developed with fresh and healthy leaves in 25 cm size of Earthen pot / Plastic pot",
    unit: "each"
  },
  {
    "sl.no": 534,
    item: "10032- Providing of Croton Challanger variety plant, having ht. 30cm and above, well developed with full of fresh and healthy leaves in 20 cm size of Earthen pot / Plastic pot",
    unit: "each"
  },
  {
    "sl.no": 535,
    item: "10033- Providing of Croton baby golden variety plant, having ht.30 cm and above, well developed with full of fresh and healthy leaves in 20 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 536,
    item: "10034- Providing of Croton Baby Golden Punctatumaureum plant, having ht. 23 cm to 30 cm, well developed with fresh and healthy foliage in 15 cm size of Earthen pot / Plastic po",
    unit: "each"
  },
  {
    "sl.no": 537,
    item: "10035-Providing of Croton Golden plant, having ht. 45 cm to 60 cm with 2 to 3 branches, well developed, fresh and healthy foliage in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 538,
    item: "10036- Providing of Croton Baby Golden plant (three in one), having ht. 30cm, multi brancheses, well developed with fresh and healthy foliage in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 539,
    item: "10037-Providing of Croton golden (Broad Leaves) plant, having ht. 60 cm to 75 cm with 3 to 4 brancheses, well developed, fresh and healthy leaves in 25 cm size of Earthen pot / Plastic pot",
    unit: "each"
  },
  {
    "sl.no": 540,
    item: "10038- Providing of Croton Golden specimen plant, having ht. 90 cm to 1.05 cm with 5 to 6 branches, well developed, fresh and healthy foliage in 30 cm size of Earthen pot / Plastic pot.",
    unit: "each"
  },
  {
    "sl.no": 541,
    item: "10039- Providing of Croton Duck foot (Elite) plant, having ht. 45 cm and above with 3 to 4 branches, well developed, fresh and healthy leaves in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 542,
    item: "1004-Average rate of mild steel round bars for reinforcements",
    unit: "quintal"
  },
  {
    "sl.no": 543,
    item: "10040- Providing of Croton Duck Foot (Elite) plant, having ht. 60 cm to 75 cm with 4 to 5 branches, well developed, fresh and healthy colourfull leaves in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 544,
    item: "10041-Providing of Croton petra Banglore variety plant, having ht 45 cm & above, well develooped with fresh and healthy leaves in 20 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 545,
    item: "10042- Providing of Croton petra plant, having ht. 45 cm & above with 2 to 3 branches, well developed, fresh and healthy leaves in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 546,
    item: "10043-Providing of Croton petra Bangalore variety plant, having ht. 60 cm to 75 cm with 4 to 6 branches, well developed, fresh and healthy colourfull leaves in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 547,
    item: "10044- Providing of Speciman Croton Petra Banglore variety plant, having ht. 60 cm to 75 cm with 4 to 6 branches, well developed, fresh & healthy foliage approximately 60-65 leaves in 30 cm size of Earthen pot / Plastic pot.",
    unit: "each"
  },
  {
    "sl.no": 548,
    item: "10045- Providing of Diffenbachia Tropicsnow plant, having ht. 60 cm & above with 8 - 10 leaves, well developed, fresh & healthy in 25 cm size of Earthen pot / Plastic pot",
    unit: "each"
  },
  {
    "sl.no": 549,
    item: "10046- Providing of Diffenbachia mosaic plant, having ht. 30cm to 45 cm with 1012 leaves, well developed, fresh and healthy in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 550,
    item: "10047-Providing of Dieffenbachia (Meaclata) plant, having ht. 45 cm to 60 cm with 5 and above leaves, well developed, fresh and healthy & attractive varigated foliage in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 551,
    item: "10048- Providing of Dracaena Song of india plant (three in one), having ht. 30 cm and above, multibranched, well developed with fresh and healthy leaves in 25 cm size of Earthen pot / Plastic pot.",
    unit: "each"
  },
  {
    "sl.no": 552,
    item: "10049- Providing of Dracaena song of India specimen plant (three in one), having ht. 60 cm & above, well developed, fresh and healthy with good foliage in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 553,
    item: "1005-Twisted steel/deformed bars",
    unit: "quintal"
  },
  {
    "sl.no": 554,
    item: "10050-Providing of Draceana Song of India Green plant (three in one), having ht. 30 cm, well developed, fresh & healthy, lush green foliage from bottom to top in 20 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 555,
    item: "10051-Providing of Draceana Song of India Green plant (three in one), having ht. 30 cm, well developed, fresh & healthy, lush green foliage from bottom to top in 20 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 556,
    item: "10052-Providing of Dracaena Kedarnath plant, having ht. 30 cm & above, well developed with good colourful foliage in 20 cm size of Earthen pot / Plastic pot",
    unit: "each"
  },
  {
    "sl.no": 557,
    item: "10053- Providing of Dracaena margineta plant, having ht. 30 cm to 45 cm with colourfull leaves, fresh and healthy in 20 cm size of Earthen pot / Plastic pot",
    unit: "each"
  },
  {
    "sl.no": 558,
    item: "10054-Providing of Dracaena mahatma plant, having ht. 30 cm to 45 cm, well developed, fresh and healthy foliage in 20 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 559,
    item: "10055- Providing of Dracaena rosea plant, having ht. 30 cm & above with 8 to10 leaves, well developed, fresh and healthy in 20 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 560,
    item: "10056-Providing of Dracaena victoria plant, having ht. 30 cm & above, well developed with full of leaves, fresh and healthy in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 561,
    item: "10057-Providing of Dracaena fragrans”Massangeana’’ plant, having ht. 30 cm & above with full of leaves, well developed, fresh and healthy in 25 cm size of Earthen pot / Plastic pot.",
    unit: "each"
  },
  {
    "sl.no": 562,
    item: "10058-Providing of Draceana waranickii plant, having ht. 30 cm to 45 cm. with good colour foliage, well developed, fresh and healthy in 20 cm size of Earthen pot / Plastic pot",
    unit: "each"
  },
  {
    "sl.no": 563,
    item: "10059-Providing of Livistona palm plant, having ht. 30 cm to 45 cm, well developed with 5 to 6 leaves, fresh & healthy foliage in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 564,
    item: "1006-Mild steel square bars",
    unit: "quintal"
  },
  {
    "sl.no": 565,
    item: "10060- Providing of Livistona palm plant, having ht. 60 cm to 75 cm, well developed with 8 to 10 leaves, fresh & healthy foliage in 30 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 566,
    item: "10061- Providing of Monestaria plant mounted on moss stick 90 cm ht., 2 to 3 plant in one pot well developed with fresh & healthy foliage in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 567,
    item: "10062- Providing of Money Plant Broad Leaves mounted on moss stick 90 cm ht., 3 to 4 plants in each pot, well developed with full of fresh & healthy leaves in size of 25 cm Top dia x 18 cm Bottom dia x 25 cm Perpendicular height Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 568,
    item: "10063- Providing of Money Plant Broad Leaves mounted on moss stick 1.20 m ht., 5 to 6 plants in each pot, well developed with full of fresh & healthy leaves in size of 25 cm Top dia x 18 cm Bottom dia x 25 cm Perpendicular height Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 569,
    item: "10064- Providing of Money Plant Golden leaves mounted on moss stick 90cm ht., having 3 plants at equal distance, well developed with full of fresh, shinning and healthy leaves from bottom to top in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 570,
    item: "10065- Providing of Philodendron Burgundy plant mounted on moss stick 90 cm ht., well developed with full of fresh & healthy leaves from bottom to top in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 571,
    item: "10066-Providing of Philodendron emrald red colour plant, mounted on moss stick 90 cm ht., having 3 plants placed at equal distance, well developed with full of fresh & healthy leaves in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 572,
    item: "10067- Providing of Philodendron Envy plant, mounted on moss stick 90 cm ht., well developed with full of fresh & healthy leaves in 30 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 573,
    item: "10068- Providing of Philodendron Oxicodium plant, mounted on moss stick 90 cm ht., having 3 plants placed at equal distance, well developed with full of fresh & healthy leaves in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 574,
    item: "10069- Providing of Philodendron Oxicodium Golden Colour plant, Mounted on moss stick 90 cm ht., having 3 plants placed at equal distance, well developed with full of fresh & healthy leaves in 25 cm Top dia x 18 cm Bottom dia x 25 cm Perpendicular height Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 575,
    item: "1007-Structural steel such as tees, angles, channels and R.S. joists ",
    unit: "quintal"
  },
  {
    "sl.no": 576,
    item: "10070- Providing of Philodendron Oxicodium Golden Colour plant, Mounted on moss stick 1.20 m ht., having 3 to 4 plants placed at equal distance, well developed with full of fresh & healthy leaves in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 577,
    item: "10071-Providing of Philodendron Oxicodium plant, mounted on moss stick 1.20 m ht., having 3 plants placed at equal distance, well developed with full of fresh & healthy leaves in 25 cm size of Earthen pot / Plastic pot.",
    unit: "each"
  },
  {
    "sl.no": 578,
    item: "10072- Providing of Philodendron sellum plant, having ht. 30 cm to 45 cm with 8 to 10 leaves, well devleoped, fresh and healthy foliage in 25 cm size of Earthen pot / Plastic pot",
    unit: "each"
  },
  {
    "sl.no": 579,
    item: "10073- Providing of Philodendron sellum plant, having ht. 45 cm to 60 cm with 12 to 16 leaves, well developed, fresh and healthy foliage in 30 cm size of Earthen pot / Plastic pot.",
    unit: "each"
  },
  {
    "sl.no": 580,
    item: "10074- Providing of Philodendron ceylon gold plant, having ht. 30 cm to 45 cm with 8 to10 leaves, well developed, fresh & healthy bright colour leaves in 15 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 581,
    item: "10075- Providing of Philodendron ceylon gold plant, having ht. 30 cm to 45 cm with 8 to10 leaves, well developed, fresh & healthy bright colour leaves in 15 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 582,
    item: "10076-Providing of Philodendron moonlight plant, having ht. 30 cm to 45 cm with 10 to 12 leaves, well developed, fresh & healthy bright colour leaves in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 583,
    item: "10077- Providing of Phoenix palm plant, having ht. 75 cm to 90 cm with 10 to 15 or more leaves, well developed, fresh and healthy in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 584,
    item: "10078- Providing of Raphis palm plant, having ht. 45 cm to 60 cm with 5 to 7 suckers, well developed, full of fresh and healthy leaves in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 585,
    item: "10079- Providing of Raphis palm plant, having ht. 75 cm to 90 cm with 12 to 15 equal suckers, well developed, full of fresh & healthy leaves from bottom to top in 25 cm size Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 586,
    item: "1008-Flats up to 10 mm in thickness",
    unit: "quintal"
  },
  {
    "sl.no": 587,
    item: "10080- Providing of Raphis Palm plant, having ht. 75 cm to 90 cm with 15 to 18 equal suckers, well developed, full of fresh and healthy leaves from bottom to top in 35 cm PVC Pots/C.Pots. ",
    unit: "each"
  },
  {
    "sl.no": 588,
    item: "10081- Providing of Raphis palm specimen plant, having ht. 1.50 m to 1.65 m with 40 to 50 lush green suckers, well developed, fresh & healthy foliage leaves in 40 cm size of Earthen Pot / Chali / Tray. ",
    unit: "each"
  },
  {
    "sl.no": 589,
    item: "10082- Providing of Ceporthia Palm plant, having ht. 90cm to 1.20 m with 6-8 suckers, well developed, fresh and healthy lush green leaves from bottom to top in 20 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 590,
    item: "10083-Providing of Ceporthia Palm plant, having ht. 1.20 m. to 1.50 m. with 8-10 suckers, well developed, fresh and healthy lush green leaves from bottom to top in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 591,
    item: "10084- Providing of Ceporthia Palm plant, having ht. 1.50 m to 1.80 m with 12-15 suckers, well developed, fresh and healthy lush green leaves from bottom to top in 30 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 592,
    item: "10085-Providing of Sanchezia nobilis plant, having ht. 30 cm & above, well developed with fresh & healthy foliage in 20 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 593,
    item: "10086- Providing of Schefflera high colour plant, having ht. 23 cm to 30 cm, well developed with fresh & healthy foliage in 20 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 594,
    item: "10087-Providing ofSchefflera high colour plant (three in one), having ht. 23 cm to 30 cm, well developed with fresh and healthy foliage in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 595,
    item: "10088-Providing of Schefflera Green plant (three in one), mounted on moss stick 90 cm, well developed with full of fresh & healthy leaves from bottom to top with rich foliage in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 596,
    item: "10089-Providing of Schieflera Verigated plant, mounted on moss stick 90 cm ht., 3 to 4 plants placed in each pot at equal distance, well developed with full of fresh & healthy bright leaves from bottom to top in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 597,
    item: "1009-Flats exceeding 10 mm in thickness",
    unit: "quintal"
  },
  {
    "sl.no": 598,
    item: "10090-Providing of Syngonium golden plant, mounted on moss stick 90 cm ht., 3 to 4 plants placed in each pot at equal distance, well developed with full of fresh & healthy leaves from bottom to top in 25 cm size of Earthen pot / Plastic pot. ",
    unit: "each"
  },
  {
    "sl.no": 599,
    item: "10091-Providing of Syngonium Verigated plant, mounted on moss stick 90 cm ht., 3 to 4 plants placed in each pot at equal distance, well developed with full of fresh & healthy leaves from bottom to top in 25 cm size of Earthen pot / Plastic pot",
    unit: "each"
  },
  {
    "sl.no": 600,
    item: "10092- Providing Plant Allyssum white in full bloom well developed fresh & healthy Plant in 20 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 601,
    item: "10093- Providing Plant Anemone hybrid (3 in one) variety well developed with fresh & healthy Flower in full bloom in 25 cm Earthen Pot/Plastic Pot.",
    unit: "each"
  },
  {
    "sl.no": 602,
    item: "10094-Providing Plant Antirrhinum Hybrid Dwarf variety (3 in one) well developed with fresh & healthy Flower multi branch in full bloom in 25 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 603,
    item: "10095-Providing Plant Antirrhinum Hybrid dwarf variety, specimen (8-10 plants) with fresh & healthy foliage in full bloom well developed in 35 cm Earthen Tray/Challi Pot ",
    unit: "each"
  },
  {
    "sl.no": 604,
    item: "10096-Providing Plant Antirrhinum variety, well developed, fresh & healthy multi branched 30 to 45 cm ht, in full bloom with stacking in 30 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 605,
    item: "10097- Providing Plant Asiatic lilly hybrid variety (3 in one) plants in each pot having in full bloom 3 to 5 flowers 30 to 45 cm ht. well developed in 25 cm Earthen Pot/Plastic Pot",
    unit: "each"
  },
  {
    "sl.no": 606,
    item: "10098- Providing Plant Aster Hybrid variety in different colour, well developed with fresh & healthy foliage in full bloom 23 to 30 cm ht., in 20 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 607,
    item: "10099- Providing Plant Bigonia rex having 15 to 23 cm ht., well developed with fresh & healthy foliage with 10 to 12 flowers in bloom in 20 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 608,
    item: "1010-Mild steel plates",
    unit: "quintal"
  },
  {
    "sl.no": 609,
    item: "10100-Providing Plant Brachycome well developed with fresh & healthy foliage with 100 to 120 flowers stacking with green painted bamboo stick in 25 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 610,
    item: "10101- Providing Plant Calceolaria hybrid variety in full bloom well developed with fresh & healthy foliage in 20 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 611,
    item: "10102- Providing Plant Calendula double variety well developed with fresh & healthy foliage in full bloom in 20 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 612,
    item: "10103- Providing Plant Chrysenthemum double variety, well developed, having 45 to 60 cm ht., with 6 and above flowers with half blooming condition, fresh and healthy with bamboo stacking in 25 cm Earthen Pot",
    unit: "each"
  },
  {
    "sl.no": 613,
    item: "10104-Providing Plant Chrysenthemum single variety in different colour well developed having 45 to 60 cm ht., minimum 100 and above half bloom flowers open well stacked with bamboo stick having three layer tiding by thread fresh and healthy foliage in 25 cm Earthen Pot",
    unit: "each"
  },
  {
    "sl.no": 614,
    item: "10105- Providing Plant Chrysenthemum single named variety in different colour well developed, having 45 to 60 cm ht., minimum 150 and above half bloom flowers well stacked with bamboo stick having three layer tiding by thread fresh and healthy foliage in 30 cm Earthen Pot ",
    unit: "each"
  },
  {
    "sl.no": 615,
    item: "10106-Providing Plant Cineraria dwarf in different colour with fresh & healthy foliage well developed in 20 cm Earthen Pot/Plastic Pot",
    unit: "each"
  },
  {
    "sl.no": 616,
    item: "10107- Providing Plant Cineraria Hybrid dwarf variety in different colour well developed with fresh & healthy foliage in bloom in 25 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 617,
    item: "10108-Providing Plant Cinereria long 45 to 60 cm ht., 8 to 10 branch with full bloom specimen plant with green painted stacking in 30 cm Earthen Pot/Plastic Pot",
    unit: "each"
  },
  {
    "sl.no": 618,
    item: "10109-Providing Plant Clarkia well developed with fresh & healthy foliage, 5 to 6 branch in full bloom with stacking in 25 cm Earthen Pot/Plastic Pot",
    unit: "each"
  },
  {
    "sl.no": 619,
    item: "1011-Steel glazed door, window/ ventilator, all members viz, F7D, F4B, K11 and K12B etc.",
    unit: "kg"
  },
  {
    "sl.no": 620,
    item: "10110-Providing Plant Clianthus well developed,with fresh & healthy foliage in bloom 30 to 45 cm ht., with stacking in 25 cm Earthen Pot/Plastic Pot.",
    unit: "each"
  },
  {
    "sl.no": 621,
    item: "10111-Providing Plant Coleus broad leaves having 3 to 4 branches equal well developed with fresh & healthy foliage in different colour in 25 cm Earthen Pot/Plastic Pot.",
    unit: "each"
  },
  {
    "sl.no": 622,
    item: "10112-Providing Plant Coleus broad leaves having 5 to 6 branches equal well developed with fresh & healthy foliage in different colour in 25 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 623,
    item: "10113-Providing Plant Cyclemen hybrid variety fresh & healthy in full bloom well developed in 25 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 624,
    item: "10114-Providing Plant Cyclemen hybrid variety specimen 5-6 plants fresh & healthy in full bloom well developed in 35 cm Earthen Tray/ Nand.",
    unit: "each"
  },
  {
    "sl.no": 625,
    item: "10115-Providing Plant Dahlia double kenya variety in different colour well developed with 3 to 4 flowers in half bloom, good foliage stacked with Green painted Bamboo sticks, 45 to 60 cm height in 25 cm Earthen Pot/Plastic Pot",
    unit: "each"
  },
  {
    "sl.no": 626,
    item: "10116-Providing Plant Dahlia single in different colour with fresh & healthy foliage well developed with 6 to 8 half blooming buds in 20 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 627,
    item: "10117-Providing Plant Daisy well developed with fresh & healthy foliage in full bloom in 20 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 628,
    item: "10118-Providing Plant Dianthus dwarf in different colour fresh & healthy bloom in 20 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 629,
    item: "10119-Providing Plant Dianthus dwarf specimen 6-8 plants with fresh & healthy foliage in full bloom well developed in 35 cm Earthen Tray/Nand ",
    unit: "each"
  },
  {
    "sl.no": 630,
    item: "10120- Providing Plant Dianthus in different colour well developed with fresh & healthy foliage 30 cm ht., in full bloom with stacking in 25 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 631,
    item: "10121- Providing Plant Fressia hybrid 6 to 8 plants in full bloom, with fresh and healthy flower and foliage stacked with Green painted bamboo sticks in 25 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 632,
    item: "10122- Providing Plant Gazania hybrid in different colour well developed with fresh & healthy foliage with full bloom in 25 cm Earthen Pot/Plastic Pot",
    unit: "each"
  },
  {
    "sl.no": 633,
    item: "10123- Providing Plant Geranium double variety having 30 cm ht., in different colour well developed with fresh & healthy foliage (3 in one) well ",
    unit: "each"
  },
  {
    "sl.no": 634,
    item: "10124- Providing Plant Gerbera Hybrid, well developed, with fresh and healthy foliage, fully blooms in 25 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 635,
    item: "10125- Providing Plant Helianthus different colour with full bloom (3 in one) fresh & healthy in 25 cm Earthen Pot/Plastic Pot. well developed",
    unit: "each"
  },
  {
    "sl.no": 636,
    item: "10126- Providing Plant Impatiens in different colour well developed fresh and healthy (3 in one) well bloomed in 25 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 637,
    item: "10127-Providing Plant Marigold jaffri dwarf in different colour well developed with fresh & healthy foliage with 12 to 15 flowers in full bloom specimen plant 23 to 30 cm ht. in 20 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 638,
    item: "10128-Providing Plant Marigold jaffri orange/yellow/Russet colour well developed with fresh & healthy foliage with 40 to 50 flowers in bloom specimen plant 60 to 75 cm ht in 25 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 639,
    item: "10129- Providing Plant Marigold jaffri french orange/yellow/Russet colour well developed with fresh & healthy foliage with 60 to 75 flowers in bloom specimen plant 60 to 75 cm ht in 30 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 640,
    item: "1013-Mild steel sheets for tanks",
    unit: "quintal"
  },
  {
    "sl.no": 641,
    item: "10130-Providing Plant Kalanchoe Hybrid variety in different colour well developed with fresh & healthy foliage in full bloom in 20 cm Earthen pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 642,
    item: "10131-Providing Plant Marigold(Tagetes) inca hybrid different colour having 30 cm and above ht., with 6 to 8 flowers in bloom & blooming condition, well developed pot should be fully covered with fresh and healthy, foliage and flowers in 20 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 643,
    item: "10132-Providing Plant Mimulus multi branching bushy plant in different colour well developed fresh & healthy in full bloom in 20 cm Earthen Pot in 20 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 644,
    item: "10133- Providing Plant Missbranthemum in different colour well developed with fresh & healthy foliage in full bloom in 20 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 645,
    item: "10134- Providing Plant Nemasia well developed with fresh & healthy with good attractive foliage full blooming in 20 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 646,
    item: "10135- Providing Plant Nasturtium in different colour well developed with fresh & healthy foliage with full bloom in 25 cm Earthen Pot in 20 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 647,
    item: "10136- Providing Plant Ornamental Kale Hybrid variety in full bloom with fresh & healthy foliage well developed in 25 cm Earthen Pot in 20 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 648,
    item: "10137-Providing Plant Pansy Hybrid Sakata in different colour specimen 6-8 plants with fresh & healthy foliage in full bloom well developed in 35 cm Earthen Tray/ Nand ",
    unit: "each"
  },
  {
    "sl.no": 649,
    item: "10138- Providing Plant Pansy Hybrid Sakata well developed with fresh & healthy foliage with 3 to 4 flower in bloom in 20 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 650,
    item: "10139-Providing Plant Pansy hybrid sakata in different colour with fresh & healthy foliage well developed in 15 cm Earthen Pot/Plastic Pot.  ",
    unit: "each"
  },
  {
    "sl.no": 651,
    item: "10140- Providing Plant Petunia hybrid different colour single well developed in full bloom in 20 cm Earthen/Plastic Pot.",
    unit: "each"
  },
  {
    "sl.no": 652,
    item: "10141- Providing Plant Petunia hybrid different variety in different colour well developed with fresh and healthy foliage in full bloom in 25 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 653,
    item: "10142-Providing Plant Petunia hybrid in different colour with fresh & healthy foliage well developed in 15 cm Earthen Pot/Plastic Pot",
    unit: "each"
  },
  {
    "sl.no": 654,
    item: "10143- Providing Plant Petunia hybrid well developed with fresh & healthy foliage in full bloom 6-8 plants in 35 cm Earthen Tray/Nand ",
    unit: "each"
  },
  {
    "sl.no": 655,
    item: "10144-Providing Plant Phlox in different colour well developed with fresh & healthy foliage 30 cm ht., in full bloom with stacking in 25 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 656,
    item: "10145- Providing Plant Poincettia Dwarf variety different colour well developed 23 to 30 cm ht., 3 to 4 branch full bloom with fresh & healthy foliage in 15 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 657,
    item: "10146- Providing Plant Poincettia dwarf multi head, having upto 30 cm ht., with 3 to 4 branches with fully different coloured top with fresh & healthy foliage well developed in 20 cm Earthen Pot/Plastic Pot.",
    unit: "each"
  },
  {
    "sl.no": 658,
    item: "10147- Providing Plant Primula Hybrid variety specimen 5-6 plants in each Pot with fresh & healthy foliage in full bloom different colour well developed in 35 cm Earthen Tray/ Nand ",
    unit: "each"
  },
  {
    "sl.no": 659,
    item: "10148- Providing Plant Primula Hybrid variety well developed with fresh & healthy foliage with full bloom in 25 cm Earthen Pot/Plastic Pot.",
    unit: "each"
  },
  {
    "sl.no": 660,
    item: "10149- Providing Plant Primula Hybrid variety well developed with fresh & healthy foliage with full bloom in 25 cm Earthen Pot/Plastic Pot",
    unit: "each"
  },
  {
    "sl.no": 661,
    item: "1015-Mild steel expanded metal 20x60xmm strands",
    unit: "sqm"
  },
  {
    "sl.no": 662,
    item: "10150- Providing Plant Ranunculus Hybrid variety well developed with fresh & healthy foliage with 2-3 flower in bloom in 25 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 663,
    item: "10151- Providing Plant Salvia dwarf variety with fresh & healthy foliage well developed multi branching in blooming stage in 15 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 664,
    item: "10152-Providing Plant Salvia ht. 45 to 60 cm multi branches stacking with bamboo stick specimen plants type with full bloom well developed in 30 cm Earthen Pot/Plastic Pot",
    unit: "each"
  },
  {
    "sl.no": 665,
    item: "10153- Providing Plant Salvia ht. 45 to 60 cm multi branches stacking with bamboo stick specimen plants type with full bloom well developed in 25 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 666,
    item: "10154- Providing Plant Salvia red Hybrid dwarf variety having 15 cm to 23 cm ht., well developed with fresh & healthy foliage in bloom in 20 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 667,
    item: "10155- Providing Plant Salvia red Hybrid dwarf variety having 15 to 23 cm ht., specimen 6 plants with fresh & healthy foliage in full bloom well developed in 35 cm Earthen Tray/ Nand ",
    unit: "each"
  },
  {
    "sl.no": 668,
    item: "10156-Providing Plant Star of Bethlem (Chinchi - Rinchi), 5 to 6 plant in each Pot full bloom, with fresh and healthy foliage flower in 25 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 669,
    item: "10157- Providing Plant Stock Double Blue non-branching having 30 to 45 cm ht., with full bloom, well developed in 20 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 670,
    item: "10158- Providing Plant Stock double white colour dwarf variety with fresh and healthy foliage with bloom in 20 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 671,
    item: "10159- Providing Plant Stock double white colour dwarf variety with fresh and healthy foliage with bloom in 20 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 672,
    item: "10160- Providing Plant Stock double white colour dwarf variety with fresh and healthy foliage with bloom in 20 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 673,
    item: "10161- Providing Plant Stock double white colour dwarf variety with fresh and healthy foliage with bloom in 20 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 674,
    item: "10162- Providing Plant Celosia well developed fresh & healthy 20 to 25 cm ht. (attractive) multi branching at blooming stage in 20 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 675,
    item: "10163-Providing Plant Cladium Hybrid variety 3 to 4 plants well developed with fresh & healthy foliage 30 to 45 cm ht. in different colour 25 cm Earthen Pot/Plastic Pot.",
    unit: "each"
  },
  {
    "sl.no": 676,
    item: "10164- Providing Plant Cockscomb well developed fresh & healthy 20 to 25 cm ht. attractive colours fully bloomed in 20 cm Earthen Pot/Plastic Pot.",
    unit: "each"
  },
  {
    "sl.no": 677,
    item: "10165- Providing Plant Cosmos well developed fresh & healthy 20 to 25 cm ht. attractive colours multi branching at blooming stage in 20 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 678,
    item: "10166- Providing Plant Gaillardia double hybrid variety well developed 30 to 45 cm ht 20 to 30 fresh & healthy flower with green painted bamboo stick in 25 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 679,
    item: "10167- Providing Plant Gamphrina well developed fresh & healthy 30 to 45 cm ht. bushy plant 15 & above flower in 25 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 680,
    item: "10168- Providing Plant Kochia well developed fresh & healthy 30 to 45 cm ht. lush green well shaped in 25 cm Earthen Pot/Plastic Pot.",
    unit: "each"
  },
  {
    "sl.no": 681,
    item: "10169- Providing Plant Kochia well developed fresh & healthy 20 to 25 cm ht. lush green well shaped in 20 cm Earthen Pot/Plastic Pot.",
    unit: "each"
  },
  {
    "sl.no": 682,
    item: "10170- Providing Plant Portulaka hybrid in different colour with bloom well developed fresh & healthy in 20 cm Earthen Pot/Plastic Pot.",
    unit: "each"
  },
  {
    "sl.no": 683,
    item: "10171- Providing Plant Sunflower hybrid well developed 15 to 20 cm ht. with fresh & healthy foliage at blooming stage in 20 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 684,
    item: "10172- Providing Plant Sunflower single well developed 8 to 10 half bloom buds multi branched in fresh & healthy full stacked with green painted bamboo stick stacking in 25 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 685,
    item: "10173- Providing Plant Tapioca variegated (Manihot esculenta) well developed fresh & healthy 30 to 45 cm ht. in bright colour foliage in 25 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 686,
    item: "10174- Providing Plant Vinca different colour 6 to 8 well developed branch in full bloom stacked with green painted Bamboo stick in 25 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 687,
    item: "10175- Providing Plant Vinca different colour fresh & healthy 23 to 30 cm ht. with bloom multi branchy in 20 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 688,
    item: "10176-Providing Plant Vinca Hybrid in different colour fresh & healthy 20 to 25 cm ht. with bloom in 20 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 689,
    item: "10177- Providing Plant Zinnia hybrid double in different colour well developed fresh & healthy 30 to 45 cm ht. (3 to 4 plants in each pot) full bloom in 25 cm Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 690,
    item: "10178- Providing Plant Budded Rose (H.T. variety) 3 to 4 healthy branch 30 cm and above ht. well developed with one and above flower plant in 20 cm Earthen Pot, ",
    unit: "each"
  },
  {
    "sl.no": 691,
    item: "10179- Providing Plant Creeper Rose variety 3 to 4 healthy branch 60 cm and above ht. well developed with one and above flowers in 25 cm Earthen Pot, ",
    unit: "each"
  },
  {
    "sl.no": 692,
    item: "10180- Providing Plant Standard Rose (H.T. variety) 3 to 4 healthy branch 90 cm and above ht. well developed with one and above flowers in 25 cm Earthen Pot",
    unit: "each"
  },
  {
    "sl.no": 693,
    item: "10181- Acalypha Different colour well developed, fresh & healthy with good foliage, multi branch 30 to 45 cm ht. plant in 20 cm size of Earthen Pot/ Plastic ",
    unit: "each"
  },
  {
    "sl.no": 694,
    item: "10182- Acalypha green well developed, fresh & healthy with good foliage, multi branch 30 to 45 cm ht. plant in 20 cm size Earthen Pot/ Plastic ",
    unit: "each"
  },
  {
    "sl.no": 695,
    item: "10183- Acalypha red well developed with fresh & healthy 30 to 45 cm ht. plant in 20 cm size Earthen Pot/ Plastic Pot",
    unit: "each"
  },
  {
    "sl.no": 696,
    item: "10184-Acalypha twisted well developed with fresh & healthy 30 cm ht. plant in 20 cm size Earthen Pot/ Plastic Pot ",
    unit: "each"
  },
  {
    "sl.no": 697,
    item: "10185-Adenium Obesum grafted well developed with fresh & healthy 30 to 60 cm ht. plant in 25 cm size Earthen Pot/ Plastic Pot ",
    unit: "each"
  },
  {
    "sl.no": 698,
    item: "10186- Adenium Obesum well developed with fresh & healthy 4 to 5 branch 60 to 75 cm ht. plant in 40 cm size Earthen Pot/ Plastic Pot ",
    unit: "each"
  },
  {
    "sl.no": 699,
    item: "10187- Bamboo Buddha valley with fresh & healthy 3 to 4 suckers having 75 to 90 cm ht. plant in 25 cm size Earthen Pot/ Plastic Pot ",
    unit: "each"
  },
  {
    "sl.no": 700,
    item: "10188- Bamboo Buddha vally variety with umbrella shape plant having 120 to 135 ht. plant with fresh & healthy foliage well developed in 40 cm Cement pot multy branch, bushy plant ",
    unit: "each"
  },
  {
    "sl.no": 701,
    item: "10189- Bamboo Buddha Valley with fresh & healthy 5 to 6 suckers 1.80 m to 2.10m ht umbrella type plant well developed in 50 cm Cement Pot ",
    unit: "each"
  },
  {
    "sl.no": 702,
    item: "1019-Mild steel hooks",
    unit: "each"
  },
  {
    "sl.no": 703,
    item: "10190-Bird of paradise well developed with fresh & healthy 90 to 120 cm ht in 30 cm Earthen Pot/ Plastic Pot ",
    unit: "each"
  },
  {
    "sl.no": 704,
    item: "10191- Bismarkia Palm 115 to 180 cm ht. plant, well developed 12 and above good color fresh and healthy leaves in 40 cm Cement Pot.",
    unit: "each"
  },
  {
    "sl.no": 705,
    item: "10192- Bougainvillea named variety, Sobhra, Thima, Marry palmar, Cherry Blossom etc. well developed with fresh & healthy bushy plant in full bloom 75 to 90 cm ht. plant in 40 cm Cement Pot",
    unit: "each"
  },
  {
    "sl.no": 706,
    item: "10193- Cycus circinallis well developed with fresh & healthy 35 to 40 lush green leaves in 40 cm Cement Pot ",
    unit: "each"
  },
  {
    "sl.no": 707,
    item: "10194-Cycus revoluta in 35 cm challi, specimen plant, having 30 to 40 with fresh and healthy, leaves having 25cm to 30cm circumfrance of base stem well developed ",
    unit: "each"
  },
  {
    "sl.no": 708,
    item: "10195- Cycus revoluta specimen plant, having 45 to 50 fresh and healthy, leaves having 30cm to 35cm circumfrance of base stem well developed in 40 cm challi, ",
    unit: "each"
  },
  {
    "sl.no": 709,
    item: "10196-Cyprus Golden 30 to 45 cm ht. plant well developed good Golden colour foliage, Conial Shape in 25 cm Earthen Pots",
    unit: "each"
  },
  {
    "sl.no": 710,
    item: "10197- Cyprus golden well shaped developed with good colored foliage fresh & healthy 60 to 75 cm ht in 30 cm Earthen Pot ",
    unit: "each"
  },
  {
    "sl.no": 711,
    item: "10198- Cyprus Golden Conical Shape 150 to 165 cm ht. plant, with fresh and healthy Golden colour foliage in 35cm Cement Pot ",
    unit: "each"
  },
  {
    "sl.no": 712,
    item: "10199- Euphorbia milli hybrid variety with multi branch, full bloom, with fresh and healthy well developed having 30 to 45 cm ht. plant in 35 cm Cement Pots ",
    unit: "each"
  },
  {
    "sl.no": 713,
    item: "1020-Mild steel rivets",
    unit: "quintal"
  },
  {
    "sl.no": 714,
    item: "10200- Ficus black vivion piller Topairy (sylinder type) well developed with fresh & healthy 180 to 210 cm ht in 40 cm Cement Pot ",
    unit: "each"
  },
  {
    "sl.no": 715,
    item: "10201- Ficus Long Island Topairy well developed with fresh & healthy 5 to 6 ball specific size and shape 120 to 150 cm ht in 40 cm Cement Pot ",
    unit: "each"
  },
  {
    "sl.no": 716,
    item: "10202- Ficus Nuda Topairy well developed with fresh & healthy 5 to 6 big ball specific size and shape 180to 210cm ht in 40 cm Cement Pot ",
    unit: "each"
  },
  {
    "sl.no": 717,
    item: "10203- Ficus Nuda well developed with fresh & healthy foliage 45 to 60cm spread 75 to 90 cm ht. plant bushy plant in 35 cm Cement Pot ",
    unit: "each"
  },
  {
    "sl.no": 718,
    item: "10204- Ficus Retusa Topairy well developed with fresh & healthy 5 to 6 big ball specific size and shape 180 to 210cm ht in 40 cm Cement Pot ",
    unit: "each"
  },
  {
    "sl.no": 719,
    item: "10205- Ficus resnold well developed fresh & healthy foliage 60 to 75 cm spread 105 to 120 cm ht. plant, Bushy plant in 35 cm Cement Pot ",
    unit: "each"
  },
  {
    "sl.no": 720,
    item: "10206- Ficus resnold piller type Topairy well developed with fresh & healthy 210 to 240 cm ht in 40 cm Cement Pot ",
    unit: "each"
  },
  {
    "sl.no": 721,
    item: "10207- Ficus resnold Topairy well developed with fresh & healthy 6 to 7 big ball specific size 210 to 240 cm ht in 45 cm Cement Pot ",
    unit: "each"
  },
  {
    "sl.no": 722,
    item: "10208- Ficus Starlight with fresh, healthy and attractive foliage 45 to 60 cm spread 75 to 90 cm ht. plant, specimen bushy plant,in 35 cm Cement Pot ",
    unit: "each"
  },
  {
    "sl.no": 723,
    item: "10209- Fishtail palm well developed with fresh & healthy foliage leaves of ht 210 to 240cm Specimen plant in 35 cm Cement Pot ",
    unit: "each"
  },
  {
    "sl.no": 724,
    item: "1021-Hard drawn steel wire fabric",
    unit: "sqm"
  },
  {
    "sl.no": 725,
    item: "10210- Foxtail palm well developed with fresh & healthy foliage of ht. plant 210 to 240 cm in big 40 cm Cement Pot ",
    unit: "each"
  },
  {
    "sl.no": 726,
    item: "10211- Furcaira variegated well developed with fresh & healthy foliage 8 to 10 leaves in 30 cm Earthen Pot ",
    unit: "each"
  },
  {
    "sl.no": 727,
    item: "10212- Furcaria Variegated hybrid well developed with fresh & healthy foliage 20 and above attractive leaves in 35 cm Cement Pot ",
    unit: "each"
  },
  {
    "sl.no": 728,
    item: "10213- Golden Bottle brush Topairy well developed with fresh & healthy foliage 5 to 6 big ball 115 to 180 cm ht in 40 cm Cement Pot ",
    unit: "each"
  },
  {
    "sl.no": 729,
    item: "10214- Zamia palm well developed with fresh & healthy leaves 90 cm ht in 35 cm cement pot ",
    unit: "each"
  },
  {
    "sl.no": 730,
    item: "10215- Latania Rubra Palm well developed with fresh & healthy foliage 150 to 180 cm ht. plant with 6 to 7 leaves in big 35 cm Cement Pot ",
    unit: "each"
  },
  {
    "sl.no": 731,
    item: "10216- Mascarena palm well developed with fresh & healthy foliage leaves 150 to 180 cm ht in 35 cm Cement Pot ",
    unit: "each"
  },
  {
    "sl.no": 732,
    item: "10217- Phoenix roebelenii palm well developed having 20 to 25 fresh & healthy leaves 90 to 105 cm ht. plant in 30 cm Cement Pot ",
    unit: "each"
  },
  {
    "sl.no": 733,
    item: "10218-Topairy plant of Ficus Bush King well developed with fresh & healthy foliage from Top to Bottom with single piller 60 to 75 cm spread, 210 to 225 cm ht. plant, in 35 cm Cement Tray/Cement Pot ",
    unit: "each"
  },
  {
    "sl.no": 734,
    item: "10219-Topairy plant of Ficus Nuda well developed with fresh & healthy foliage from Top to Bottom with single piller 75 to 90 cm spread, 195 to 210 cm ht. plant in 35 cm Cement Tray /Cement Pot ",
    unit: "each"
  },
  {
    "sl.no": 735,
    item: "1022-Galvanised steel bolts & nuts 6 mm dia and 25 mm long round head with slots",
    unit: "10 nos"
  },
  {
    "sl.no": 736,
    item: "10220-Topairy plant of Ficus Panda well developed with fresh & healthy foliage with 3 to 4 Ball and 60 to 75 cm spread each Ball, 135 to 150 cm ht. plant, in 35 cm Cement Tray /Cement Pot ",
    unit: "each"
  },
  {
    "sl.no": 737,
    item: "10221-Topiary plant Casuarina plant fresh & healthy having 5 to 6 specific shape and size ball well developed 195 to 210 cm ht. plant in 40 cm Cement Pot ",
    unit: "each"
  },
  {
    "sl.no": 738,
    item: "10222- Traveller palm well developed with fresh & healthy foliage 120 to 150 cm ht. plant in 35 cm Cement Pot ",
    unit: "each"
  },
  {
    "sl.no": 739,
    item: "10223-Travellar palm well developed with fresh & healthy leaves foliage 210 to 240 cm ht specimen plant in 40 cm Cement Pot ",
    unit: "each"
  },
  {
    "sl.no": 740,
    item: "10224- Washingtonia filifera palm well developed 90 to 105 cm ht. plant having 5 to 6 straight fresh and healthy leaves in 35 cm Cement Pot ",
    unit: "each"
  },
  {
    "sl.no": 741,
    item: "10225-Alpinia Variegated (three in one) plant having ht. 30 cm and above, with fresh and healthy variegated foliage in 25 cm size of Earthen Pot / Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 742,
    item: "10226-Alternanthera species plant of height 15 cm to 20 cm, full of branches and foliage in 15 cm size of Earthen Pot / Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 743,
    item: "10227- Asparagus marrie plant, well developed 15 to 20 leaves, full of branches and foliage in 25 cm size of Earthen Pot / Plastic Pot.",
    unit: "each"
  },
  {
    "sl.no": 744,
    item: "10228-Topairy plant of Ficus Bush King well developed with fresh & healthy foliage from Top to Bottom with single piller 60 to 75 cm spread, 210 to 225 cm ht. plant, in 35 cm Cement Tray/Cement Pot ",
    unit: "each"
  },
  {
    "sl.no": 745,
    item: "10229- Aspidistra plant, having 10 to 15 leaves well developed with fresh & healthy in 25 cm size of Earthen Pot / Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 746,
    item: "1023-Galvanised steel J or L hooks 8 mm dia",
    unit: "10 nos"
  },
  {
    "sl.no": 747,
    item: "10230- Clerodendron inerme plant having ht. 25 cm to 32 cm multi branched in 20 cm size of Earthen Pot / Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 748,
    item: "10231-  Clerodendron inerme plant of ht. 30 cm to 40 cm multi branched in 25 cm size of Earthen Pot / Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 749,
    item: "10232- Chlorophytum (Green) plant, full of leafy suckers in 20 cm size of Earthen Pot / Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 750,
    item: "10233-Chlorophytum-variegated plant, full of leafy suckers in 15 cm size of Earthen Pot / Plastic Pot.",
    unit: "each"
  },
  {
    "sl.no": 751,
    item: "10234- Cuphea chinensis plant of ht. 30-45 cm full of branches and healthy foliage in 25 cm size of Earthen Pot / Plastic Pot.",
    unit: "each"
  },
  {
    "sl.no": 752,
    item: "10235- Dianella variegated plant, with 3 to 4 variegated leaves in 20 cm size of Earthen Pot / Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 753,
    item: "10236- Duranta Golden plant, having ht.15 to 20 cm bushty shape plant with fresh and healthy leaves in 20 cm size of Earthen Pot / Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 754,
    item: "10237- Euphorbia milli hybrid variety plant, having ht.30 cm to 45 cm with multi branch, full bloom, fresh and healthy leaves in 20 cm size of Earthen Pot / Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 755,
    item: "10238- Euphorbia milli hybrid variety plant, having ht. 30 cm to 45 cm with multi branch, full bloom, fresh and healthy leaves in 30 cm size of Earthen Pot / Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 756,
    item: "10239- Ipomea (Golden leaves) plant,with fresh and healthy leaves in 15 cm size of Earthen Pot / Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 757,
    item: "1024-Galvanished steel bolts & nuts 10 mm dia and 125 mm long round head with slots",
    unit: "each"
  },
  {
    "sl.no": 758,
    item: "10240- Iresine herbstii plant, of height 20-30 cm. full of branches well developed in 15 cm size of Earthen Pot / Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 759,
    item: "10241-Iresine herbstii plant, of height 20-30 cm., full of branches well developed in 20 cm size of Earthen Pot / Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 760,
    item: "10242- Juniperus prostrata plant with 5 to 6 latral branches and green foliage in 20 cm size of Earthen Pot / Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 761,
    item: "10243- Ophiopogon plant, Green/Black full of leaves in 20 cm size of Earthen Pot / Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 762,
    item: "10244- Ophiopogon jaburan (variegated ) plant, full of variegated leaves in 15 cm size of Earthen Pot / Plastic Pot ",
    unit: "each"
  },
  {
    "sl.no": 763,
    item: "10245- Ophiopogon jaburan ( variegated ) plant,full of variegated leaves in 20 cm Earthen Pot/Plastic Pot ",
    unit: "each"
  },
  {
    "sl.no": 764,
    item: "10246- Portulacaria afra (Jade plant) with 5 to 6 branches in 20 cm size of Earthen Pot / Plastic Pot",
    unit: "each"
  },
  {
    "sl.no": 765,
    item: "10247- Schflera green plant, having 3 to 4 branch, ht. 30 to 45 cm well developed with fresh & healthy in 20 cm size of Earthen Pot/Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 766,
    item: "10248- Setcreasea purpurea full of variegated leaves in 20 cm size of Earthen Pot/Plastic Pot.",
    unit: "each"
  },
  {
    "sl.no": 767,
    item: "10249- Syngonium (Butterfly) variegated with 2-3 suckers healthy foliage in Earthen Pot/Plastic Pot of size 20 cm. ",
    unit: "each"
  },
  {
    "sl.no": 768,
    item: "1025-Mild steel bolts 6 mm dia and 25 mm long with hexagonal head ",
    unit: "10 nos"
  },
  {
    "sl.no": 769,
    item: "10250-Syngonium golden of height 30-45 cm. with 2-3 suckers healthy foliage in Earthen Pot/Plastic Pot of size 20 cm. ",
    unit: "each"
  },
  {
    "sl.no": 770,
    item: "10251- Syngonium miniature dwarf plant, having height 30-45 cm. with 2-3 suckers healthy foliage in Earthen Pot/Plastic Pot of size 20 cm.",
    unit: "each"
  },
  {
    "sl.no": 771,
    item: "10252- Syngonium variegated plant,of height 30-45 cm. with 2-3 suckers healthy foliage in Earthen Pot/Plastic Pot of size 20 cm. ",
    unit: "each"
  },
  {
    "sl.no": 772,
    item: "10253- Tradiscantia plant, full of leaves in Earthen Pot/Plastic Pot of size 20 cm",
    unit: "each"
  },
  {
    "sl.no": 773,
    item: "10254- Wadelia trilobata plant,full of leaves in 15 cm size of Poly bags. ",
    unit: "each"
  },
  {
    "sl.no": 774,
    item: "10255- Zebrina Trades cantia plant having in 20 cm size of Earthen Pot / Plastic Pot. ",
    unit: "each"
  },
  {
    "sl.no": 775,
    item: "10256- Acacia auriculiformis of plants ht 150-165 cm in bag size of plants 25 cm",
    unit: "each"
  },
  {
    "sl.no": 776,
    item: "10257- Adansonia digitata (kalp vricksh) of plants ht 150-165 cm in bag size of plants 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 777,
    item: "10258-Albizzia lebbek of plants height 150-165 cm. in bag of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 778,
    item: "10259- Alstonia scholaris of plants height 150-165 cm. in bag of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 779,
    item: "10260- Azadirachta indica ( Neem ) of plants height 120-130cm in big polybag of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 780,
    item: "10261- Bassia latifolia (Mahua) of plants height 90-105 cm. in big polybag of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 781,
    item: "10262- Bauhinia blakeana (Kachnar) of plants height 120-150 cm. in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 782,
    item: "10263-Bauhinia purpurea (Kachnar) of plants height 150-165 cm. in big poly bags of plants size 25 cm",
    unit: "each"
  },
  {
    "sl.no": 783,
    item: "10264-Bombax ceiba of plants height 150-165 cm. in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 784,
    item: "10265- Bottle palm of plants ht. 150-180 cm bottom girth 20-25 cm well devedoped in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 785,
    item: "10266- Bottle palm of plants ht. 210-240 cm bottom girth 30-35 cm well devedoped in big HDPE bags. ",
    unit: "each"
  },
  {
    "sl.no": 786,
    item: "10267- Bottle palm of plants ht. 210-240 cm bottom girth 30-35 cm well devedoped in big HDPE bags. ",
    unit: "each"
  },
  {
    "sl.no": 787,
    item: "10268- Butea frondosa (Flame of plants Fores ikS/kkt) of plants height 60-75 cm. in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 788,
    item: "10269-Callistemon lanceolatus of plants height 150-165 cm. in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 789,
    item: "10270- Casuarina equisetifolia of plants height 150-165 cm in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 790,
    item: "10271-Cassia fistula (Amaltash) of plants height 120-135 cm. in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 791,
    item: "10272- Cassia siamea of plants height 150-165 cm. in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 792,
    item: "10273-Cassia javanica of plants height 120-150 cm. in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 793,
    item: "10274-Cassia nodosa of plants height 120-150 cm. in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 794,
    item: "10275- Ceiba pentandra of plants height 150-165 cm. in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 795,
    item: "10276- Chorisia speciosa of plants height 150-165 cm. in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 796,
    item: "10277- Chukrassia tabularis of plants height 150-165 cm. in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 797,
    item: "10278- Dalbergia sissoo (Seasam) of plants height 120-135 cm. in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 798,
    item: "10279-Delonix regia (Gulmohar) of plants height 150-165 cm. in big poly bags of plants size 25 cm",
    unit: "each"
  },
  {
    "sl.no": 799,
    item: "1028-Straining bolts ",
    unit: "each"
  },
  {
    "sl.no": 800,
    item: "10280- Erythrina indica of plants height 150-165 cm. in big polybag of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 801,
    item: "10281- Ficus benjamina (green) of plants height 120-135 cm. with 6-8 branches and lush green foliage in gunny bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 802,
    item: "10282- Ficus benjamina (green) of plants height 150-165 cm., bushy with healthy branches and lush green foliage in big size HDPE bags ",
    unit: "each"
  },
  {
    "sl.no": 803,
    item: "10283- Ficus bengalensis (Bargad) of plants height 120-135 cm. in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 804,
    item: "10284- Ficus bengalensis (varigated) of plants height 75-90 cm., multibranched in earthen pots of plants size 30 cm ",
    unit: "each"
  },
  {
    "sl.no": 805,
    item: "10285- Ficus bengalensis krishna of plants height 75-90 cm., multibranched in earthen pots of plants size 30 cm",
    unit: "each"
  },
  {
    "sl.no": 806,
    item: "10286-Ficus elastica Decora (Rubber plant) of plants height 45-60 cm. in earthen pots of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 807,
    item: "10287- Ficus infectoria (Pilkhan) of plants height 150-165 cm. in big polybag of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 808,
    item: "10288- Ficus Iyrata of plants height 45-60 cm. in earthen pots of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 809,
    item: "10289- Ficus nuda of plants height 120-135 cm. with 6-8 branches and lush green foliage in g. bags of plants size 25 cm",
    unit: "each"
  },
  {
    "sl.no": 810,
    item: "1029-Galvanished steel barbed wire",
    unit: "quintal"
  },
  {
    "sl.no": 811,
    item: "10290- Ficus nuda of plants height 150-165 cm., bushy with healthy branches and lush green foliage in big size HDPE bags",
    unit: "each"
  },
  {
    "sl.no": 812,
    item: "10291- Ficus religiosa (Pepal) of plants height 150-165 cm. in big poly bags of plants size 30 cm ",
    unit: "each"
  },
  {
    "sl.no": 813,
    item: "10292- Ficus retusa well branched of plants height 120-135 cm. in big poly bags of plants size of plants 30 cm ",
    unit: "each"
  },
  {
    "sl.no": 814,
    item: "10293- Ficus shiela of plants height 150-165 cm. in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 815,
    item: "10294- Fishtail palm of plants ht. 150-180 cm bottom girth 15-20 cm well developed in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 816,
    item: "10295-Fishtail palm of plants ht. 210-240 cm bottom girth 25-30 cm well developed in big size HDPE bags ",
    unit: "each"
  },
  {
    "sl.no": 817,
    item: "10296-Fishtail palm of plants ht. 270-300 cm bottom girth 40-50 cm well developed in big size HDPE bags ",
    unit: "each"
  },
  {
    "sl.no": 818,
    item: "10297- Foxtail palm of plants ht. 120-150 cm bottom girth 15-20 cm well developed in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 819,
    item: "10298- Foxtail palm of plants ht. 180-210 cm bottom girth 25-30 cm well developed in big size HDPE bags ",
    unit: "each"
  },
  {
    "sl.no": 820,
    item: "10299- Foxtail palm of plants ht. 240-270 cm bottom girth 35-40 cm well developed in big size HDPE bags ",
    unit: "each"
  },
  {
    "sl.no": 821,
    item: "1030-Galvanised steel turn buckles",
    unit: "each"
  },
  {
    "sl.no": 822,
    item: "10300- Grevillea robusta (Silver Oak) of plants height 150-165 cm. in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 823,
    item: "10301- Heterophragma adenophyllum (Marore fali) of plants height 150-165 cm. in Big poly bag of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 824,
    item: "10302-Ingla dulcis (Jungle Jalebi) of plants height 150-165 cm. in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 825,
    item: "10303- Jacaranda mimosifolia of plants height 150-165 cm. in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 826,
    item: "10304- Kigelia pinnata of plants height 150-165 cm. in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 827,
    item: "10305- Lagerstroemia flosreginae of plants height 150-165 cm.in big poly bag of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 828,
    item: "10306-Lagerstroemia thorelli of plants height 150-165 cm.in big poly bag of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 829,
    item: "10307-Magnolia grandiflora of plants height 150-165 cm. in big poly bag of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 830,
    item: "10308- Mangifera indica (Mango-grafted ) of plants height 60-75 cm. in big poly bag of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 831,
    item: "10309- Melia azedarach of plants height 120-135 cm. in big poly bag of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 832,
    item: "1031-Galvanised steel bolts & nuts 10 mm dia and 27 cm long both sides threaded with 4 galvanised steel nuts",
    unit: "each"
  },
  {
    "sl.no": 833,
    item: "10310- Michelia champa (Golden Champa) of plants height 90-105 cm. in earthen pots of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 834,
    item: "10311- Milletia ovalifolia of plants height 120-135 cm. in big poly bag of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 835,
    item: "10312-Millingtonia hortensis of plants height 150-165 cm. in big poly bag of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 836,
    item: "10313- Mimusops elengi (Maulsri) of plants height 150-165 cm. in big poly bag of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 837,
    item: "10314- Mimusops elengi (Maulsri) of plants height 180-195 cm., well developed with thick stem in big in big size HDPE bag ",
    unit: "each"
  },
  {
    "sl.no": 838,
    item: "10315- Nauclea cadamba (Kadam) of plants height 150-165 cm. in big poly bag of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 839,
    item: "10316- Parkinsonia species of plants height 120-135 cm. in big poly bag of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 840,
    item: "10317- Peltophorum speciesof plants height 150-165 cm. in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 841,
    item: "10318-Phoenix sylvestris Roxb. (Wild date palm/khajur) of plants height 150-165 cm. in Big HDPE Bag ",
    unit: "each"
  },
  {
    "sl.no": 842,
    item: "10319- Phyllanthus emblica (Amla) of plants height 150-165 cm. in Big HDPE Bag ",
    unit: "each"
  },
  {
    "sl.no": 843,
    item: "1032-Galvanised steel bolts 10 mm dia and 7 cm long with nuts",
    unit: "each"
  },
  {
    "sl.no": 844,
    item: "10320- Pinus longifolia (Pinus) of plants height 90-105 cm. in cement pots of plants size 35 cm ",
    unit: "each"
  },
  {
    "sl.no": 845,
    item: "10321- Pithecellobium dulce (Jungle Jalebi) of plants height 120-150 cm. in Big HDPE Bag ",
    unit: "each"
  },
  {
    "sl.no": 846,
    item: "10322- Plumeria acutifolia of plants height 120-135 cm. with 2-3 branches in HDPE bag of plants size 30 cm ",
    unit: "each"
  },
  {
    "sl.no": 847,
    item: "10323- Plumeria acutifolia of plants height 150-165 cm. with 3-4 branches in big size HDPE bag ",
    unit: "each"
  },
  {
    "sl.no": 848,
    item: "10324- Plumeria alba of plants height 120-135 cm. with 2-3 branches in bags of plants size 30 cm ",
    unit: "each"
  },
  {
    "sl.no": 849,
    item: "10325- Plumeria alba of plants height 165-180 cm. with 3-4 branches and thick stem in big size HDPE bags ",
    unit: "each"
  },
  {
    "sl.no": 850,
    item: "10326- Plumeria alba dwarf of plants height 90-105 cm. with 3-4 branches and thick stem in big size HDPE bags ",
    unit: "each"
  },
  {
    "sl.no": 851,
    item: "10327- Plumeria rubra of plants height 120-150 cm. with 3-4 branches and thick stem in big size HDPE bags ",
    unit: "each"
  },
  {
    "sl.no": 852,
    item: "10328-Pongamia glabra (Papri) of plants height 120-135 cm. in big poly bag of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 853,
    item: "10329- Polyalthia longifolia (Ashok) of plants height 150-165 cm. in earthen pots of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 854,
    item: "10330- Polyalthia longifolia (Ashok) of plants height 180-195 cm. in gunny bag of plants size 30 cm",
    unit: "each"
  },
  {
    "sl.no": 855,
    item: "10331- Polyalthia pendula (Ashok Pendula) of plants height 150-165 cm. in earthen pots of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 856,
    item: "10332- Polyalthia pendula (Ashok Pendula) of plants height 180-195 cm. in gunny bag of plants size 30 cm ",
    unit: "each"
  },
  {
    "sl.no": 857,
    item: "10333-Pterospermum acerifolium (Kanak Champa) of plants height 150-165 cm. in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 858,
    item: "10334- Putranjiva roxburghii of plants height 90-105 cm. in big polybag of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 859,
    item: "10335- Saraca indica (Sita Ashok) of plants height 105-120 cm. in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 860,
    item: "10336- Schleichera trijuga (Kusum) of plants height 150-165 cm. in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 861,
    item: "10337-Spathodea campanulata of plants height 150-165 cm. in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 862,
    item: "10338-Eugenia jambolana (Jamun) of plants height 150-165 cm. in big poly bags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 863,
    item: "10339-Tabebuia sp. of plants height 150-165 cm. in big polybags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 864,
    item: "1034-Bolts and nuts up to 300 mm in length",
    unit: "quintal"
  },
  {
    "sl.no": 865,
    item: "10340-Tamarindus indica (Imli) of plants height 120-150 cm. in big polybags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 866,
    item: "10341-Tecoma argentea of plants height 120-135 cm. in big poly bag of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 867,
    item: "10342-Tectona grandis (Teak) of plants height 150-165 cm. in big polybags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 868,
    item: "10343-Terminalia arjuna of plants height 150-165 cm. in big polybags of plants size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 869,
    item: "10344- Washingtonia filifea palm stem ht. 90-105 cm with 6-7 healthy leaves lush green leaves well developed in big size HDPE Bags ",
    unit: "each"
  },
  {
    "sl.no": 870,
    item: "10345-Washingtonia filifea palm stem ht. 120-135 cm with 8-10 healthy leaves lush green leaves well developed in big size HDPE Bags ",
    unit: "each"
  },
  {
    "sl.no": 871,
    item: "10346- Supply and stacking of plant Bauhinia acuminata height 60-75 cm. in earthen pots of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 872,
    item: "10347- Supply and stacking of plant Bauhinia acuminata height 60-75 cm. in earthen pots of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 873,
    item: "10348- Supply and stacking of plant Beloperone species of height 30-45 cm. in poly bags of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 874,
    item: "10349-Supply and stacking of plant Caesalpinia pulcherrima species of height 45-60 cm. in earthen pot of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 875,
    item: "1035-Bolts and nuts above 300 mm in length",
    unit: "quintal"
  },
  {
    "sl.no": 876,
    item: "10350- Supply and stacking of plant Calliandra, emarginata of height 45-60 cm. in earthen pot of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 877,
    item: "10351- Supply and stacking of plant Calliandra hybrida of height 75-90 cm. with 4-5 branches in bag of size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 878,
    item: "10352-Supply and stacking of plant Calliandra hybrida of height 105-120 cm., well branched, bushy in big size HDPE bag ",
    unit: "each"
  },
  {
    "sl.no": 879,
    item: "10353- Supply and stacking of plant Cassia biflora of height 45-60 cm. in earthen pots of size 20 cm",
    unit: "each"
  },
  {
    "sl.no": 880,
    item: "10354- Supply and stacking of plant Cassia biflora of height 60-75 cm. with 4-5 branches in poly bags of size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 881,
    item: "10355- Supply and stacking of plant Cassia biflora of height 90-105 cm., well branched, bushy in big size HDPE bag",
    unit: "each"
  },
  {
    "sl.no": 882,
    item: "10356- Supply and stacking of plant Cassia laevigata of height 45-60 cm. in earthen pots of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 883,
    item: "10357- Supply and stacking of plant Cassia laevigata of height 60-75 cm. with 4-5 branches in bag of size 25 cm",
    unit: "each"
  },
  {
    "sl.no": 884,
    item: "10358- Supply and stacking of plant Cestrum nocturnum (Raat ki Rani) of height 60-75 cm. with 4-5 branches in bag of size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 885,
    item: "10359- Supply and stacking of plant Dombeya mastersii of height 60-75 cm. with 4-5 branches in bag of size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 886,
    item: "1036-Iron pintels including weldded pin",
    unit: "each"
  },
  {
    "sl.no": 887,
    item: "10360- Supply and stacking of plant Euphorbia caracasana (bronze colour leaves) of height 60-75 cm. with 2-3 branches in earthen pots of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 888,
    item: "10361- Supply and stacking of plant Euphorbia caracasana (bronze colour leaves) of height 60-75 cm. with 4-5 branches in bag of size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 889,
    item: "10362- Supply and stacking of plant Euphorbia caracasana (bronze colour leaves) of height 90-105 cm., bushy in big size HDPE bag ",
    unit: "each"
  },
  {
    "sl.no": 890,
    item: "10363-Supply and stacking of plant Euphorbia pulcherrima (dark red double bracts) well branched of height 60-75 cm. in earthen pots of size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 891,
    item: "10364- Supply and stacking of plant Euphorbia pulcherrima (dark red) well branched (poinsettia Red Hegg) of height 60-75 cm. in earthen pots of size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 892,
    item: "10365-Supply and stacking of plant Excoecaria bicolor of height 45-60 cm. in earthen pots of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 893,
    item: "10366- Supply and stacking of plant Ficus blackii (F.vivion) of height 45-60 cm. with 6-8 branches healthy foliage in earthen pots of size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 894,
    item: "10367- Supply and stacking of plant Ficus blackii (F.vivion) (bushy) of height 150-165 cm. with 8-10 branches and healthy foliage in earthen pots of size 30 cm ",
    unit: "each"
  },
  {
    "sl.no": 895,
    item: "10368- Supply and stacking of plant Ficus blackii (F.vivion) (bushy) of height 150-165 cm. with 8-10 branches and healthy foliage in earthen pots of size 30 cm ",
    unit: "each"
  },
  {
    "sl.no": 896,
    item: "10369- Supply and stacking of plant Ficus panda of height 30-45 cm. with 3-4 branches and healthy foliage in p.bag of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 897,
    item: "10370- Supply and stacking of plant Ficus panda of height 45-60 cm. with 6-7 branches and healthy foliage in p.bag of size 25 cm",
    unit: "each"
  },
  {
    "sl.no": 898,
    item: "10371- Supply and stacking of plant Ficus panda of height 60-90 cm, with 8-10 branches, and healthy foliage, bushy in big size HDPE bag ",
    unit: "each"
  },
  {
    "sl.no": 899,
    item: "10372- Supply and stacking of plant Ficus panda of height 90-105 cm. with 10-12 branches and healthy foliage, well formed in cement pots of size 30 cm ",
    unit: "each"
  },
  {
    "sl.no": 900,
    item: "10373-Supply and stacking of plant Gardenia jasminoides of height 45-60 cm. with 3-4 branches in earthen pots of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 901,
    item: "10374- Supply and stacking of plant Hamelia patens of height 30-45 cm. with 3-4 branches in poly bags of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 902,
    item: "10375- Supply and stacking of plant Hamelia patens of height 60-75 cm. with 6-8 branches in poly bags of size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 903,
    item: "10376- Supply and stacking of plant Hamelia patens of height 90-105 cm. bushy in big size HDPE bags as per direction of the officer-in-charge",
    unit: "each"
  },
  {
    "sl.no": 904,
    item: "10377- Supply and stacking of plant Hamelia patens (Dwarf ) of height 30-45 cm. with 3-4 branches in earthen pots of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 905,
    item: "10378- Supply and stacking of plant Hibiscus rosasinensis of height 45-60 cm. with 3-4 branches in earthen pots of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 906,
    item: "10379-Supply and stacking of plant Hibiscus rosasinensis of height 60-75 cm. with 5-6 branches in p.bag of size 25 cm",
    unit: "each"
  },
  {
    "sl.no": 907,
    item: "10380- Supply and stacking of plant Hibiscus rosasinensis of height 90-105 cm., bushy in big size HDPE bag ",
    unit: "each"
  },
  {
    "sl.no": 908,
    item: "10381- Supply and stacking of plant Hibiscus variegated of height 45-60 cm. with 3-4 branches and healthy variegated foliage in earthen pots of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 909,
    item: "10382- Supply and stacking of plant Hibiscus variegated of height 60-75 cm. with 8-10 branches and healthy variegated foliage in cement pots of size 35 cm",
    unit: "each"
  },
  {
    "sl.no": 910,
    item: "10383- Supply and stacking of plant Hibiscus variegated of height 60-75 cm. with healthy variegated foliage in earthen pots size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 911,
    item: "10384- Supply and stacking of plant Jatropha multifida (red colour) of height 45-60 cm. with 2-3 branches in earthen pots of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 912,
    item: "10385- Supply and stacking of plant Jatropha multifida (red colour) of height 60-75 cm. multibranched in p.bag of size 25 cm",
    unit: "each"
  },
  {
    "sl.no": 913,
    item: "10386- Supply and stacking of plant Largerstroemia indica of height 90-105 cm. multibranched in poly bags of size 25 cm",
    unit: "each"
  },
  {
    "sl.no": 914,
    item: "10387- Supply and stacking of plant Largerstroemia indica of height 45-60 cm. in polybag of size 20 cm",
    unit: "each"
  },
  {
    "sl.no": 915,
    item: "10388-Supply and stacking of plant Malpighia coccigera of height 30-45 cm., multibranched in earthen pots of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 916,
    item: "10389- Supply and stacking of plant Murraya exotica of height 45-60 cm. in poly bags of size 15 cm ",
    unit: "each"
  },
  {
    "sl.no": 917,
    item: "10390- Supply and stacking of plant Murraya Koenigii spreng (Kadipatta/meetha neem) of ht 45-60 cm well developed in earthen pots of size 20 cm. ",
    unit: "each"
  },
  {
    "sl.no": 918,
    item: "10391-Supply and stacking of plant Mussaenda erythrophylla (Rosea) of height 60-75 cm. multi branched in earthen pots of size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 919,
    item: "10392- Supply and stacking of plant Nerium oleander (kaner) of height 45-60 cm. with 3-4 branches in poly bags of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 920,
    item: "10393- Supply and stacking of plant Nerium oleander (kaner) of height 60-75 cm. with 5-6 branches in poly bags of size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 921,
    item: "10394- Supply and stacking of plant Nerium oleander (kaner) dwarf of height 30-40 cm. in earthen pot of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 922,
    item: "10395- Supply and stacking of plant Nerium oleander variegated of height 45-60 cm. in earthen pots of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 923,
    item: "10396- Supply and stacking of plant Nerium oleander variegated of height 60-75 cm., multibranched in earthen pots of size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 924,
    item: "10397-Supply and stacking of plant Nyctanthes arbor-tristis (Hasingar) of ht. 90-105 cm in Earthen pots of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 925,
    item: "10398- Supply and stacking of plant Plumbego capensis well developed with fresh and healthy 30 to 45 cm ht., with bloom in 20 cm Earthen Pot/Plastic Pot ",
    unit: "each"
  },
  {
    "sl.no": 926,
    item: "10399- Supply and stacking of plant Putranjiva roxburghii of ht. 45-60 cm in bag of size 15 cm ",
    unit: "each"
  },
  {
    "sl.no": 927,
    item: "10400- Supply and stacking of plant Putranjiva roxburghii of ht. 60-75 cm in bag of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 928,
    item: "10401- Supply and stacking of plant Tabernaemontana coronaria (Chandni single) of height 45-60 cm. in earthen pots of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 929,
    item: "10402- Supply and stacking of plant Tabernaemontana coronaria (Chandni single) of height 75-90 cm. with 5-6 branches in bag of size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 930,
    item: "10403- Supply and stacking of plant Tabernaemontana coronaria (Chandni single) of height 90-105 cm.,bushy in big size HDPE bag ",
    unit: "each"
  },
  {
    "sl.no": 931,
    item: "10404- Supply and stacking of plant Tabernaemontana coronaria (chandni variegated) of height 45-60 cm. with 3-4 branches earthen pots of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 932,
    item: "10405- Supply and stacking of plant Tabernaemontana coronaria (Chandni single) variegated of height 60-75 cm., 5-6 branches in p.bags of size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 933,
    item: "10406- Supply and stacking of plant Tabernaemontana coronaria (Chandni single) veriegated of height 105-120 cm., multibranched, bushy in big size HDPE bag ",
    unit: "each"
  },
  {
    "sl.no": 934,
    item: "10407- Supply and stacking of plant Tabernaemontana divaricata (Chandni double) of height 45-60 cm. in earthen pots of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 935,
    item: "10408- Supply and stacking of plant Tabernaemontana divaricata (Chandni double) of height 75-90 cm. with 4-5 branches in bag of size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 936,
    item: "10409- Supply and stacking of plant Tabernaemontana divaricata (Chandni double) of height 90-105 cm., bushy in big size HDPE bag ",
    unit: "each"
  },
  {
    "sl.no": 937,
    item: "10410- Supply and stacking of plant Tecoma gaudichaudi of height 45-60 cm. in earthen pots of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 938,
    item: "10411- Supply and stacking of plant Tecoma gaudichaudi of height 60-75 cm. with 5-6 branches in p.bag of size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 939,
    item: "10412- Supply and stacking of plant Tecoma gaudichaudi of height 90-105 cm., bushy in big size HDPE bage",
    unit: "each"
  },
  {
    "sl.no": 940,
    item: "10413-Supply and stacking of plant Tecoma stans of height 45-60 cm. branched in earthen pots of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 941,
    item: "10414- Supply and stacking of plant Tecoma stans of height 60-75 cm. branched in earthen pots of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 942,
    item: "10415- Supply and stacking of plant Tecoma stans of height 90-105 cm. bushy in big size HDPE bag ",
    unit: "each"
  },
  {
    "sl.no": 943,
    item: "10416-Supply and stacking of plant Thevetia nerifolia of height 30-45 cm. with 3-4 branches in poly bags of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 944,
    item: "10417-Supply and stacking of plant Thevetia nerifolia of height 60-75 cm. with 5-6 branches in poly bags of size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 945,
    item: "10418- Supply and stacking of plant Thuja compacta of height 45-60 cm., well branched in earthen pots of size 25 cm ",
    unit: "each"
  },
  {
    "sl.no": 946,
    item: "10419-Supply and stacking of plant Thuja compacta of height 75-90 cm., conical shaped, well formed with healthy foliage in earthen pots of size 30 cm ",
    unit: "each"
  },
  {
    "sl.no": 947,
    item: "10420- Allamanda cathartica plant of height 30 cm to 45 cm. in 20 cm size of Earthen pots / Plastic pots ",
    unit: "each"
  },
  {
    "sl.no": 948,
    item: "10421- Allamanda violacea plant of height 30 cm to 45 cm. in poly bag of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 949,
    item: "10422- Bignonia venusta (Golden shower) plant of height 30 cm to 45 cm. in 20 cm size of Earthen pots / Plastic pots ",
    unit: "each"
  },
  {
    "sl.no": 950,
    item: "10423- Bougainvillea (Variety Butiana, Lady Mary Baring, Mahara,Mohan, Scarlet Queen, Varigata, Glabra Formosa, Peruviana Odissi, Partha, Subhra,Thimma, Spectabilis L.N Birla, Refulgens) plant of height 30 cm. to 45 cm. with 2-3 branches in 20 cm size of Earthen pots / Plastic pots. ",
    unit: "each"
  },
  {
    "sl.no": 951,
    item: "10424- Clerodendrum splendens plant of height 30 cm to 45 cm. in 20 cm size of Earthen pots / Plastic pots ",
    unit: "each"
  },
  {
    "sl.no": 952,
    item: "10425- Clerodendrum thompsonae plant of height 30 cm.to 45 cm. in 30 cm to 45 cm. in 20 cm size of poly bag & as per direction of the officer-in-charge",
    unit: "each"
  },
  {
    "sl.no": 953,
    item: "10426- Ipomea purpurea (Morning glory) plant of height 30 cm to 45 cm. in 20 cm size of Earthen pots / Plastic pots ",
    unit: "each"
  },
  {
    "sl.no": 954,
    item: "10427- Jasminum grandiflorum (chameli) plant of height 30 cm to 45 cm. in 20 cm size of Earthen pots / Plastic pots. ",
    unit: "each"
  },
  {
    "sl.no": 955,
    item: "10428- Jasminum humile (Yellow) plant of height 30 cm to 45 cm. in 20 cm size of Earthen pots / Plastic pots ",
    unit: "each"
  },
  {
    "sl.no": 956,
    item: "10429- Passiflora caerulea (Rakhi bel) plant of height 30 cm to 45 cm. in 20 cm size of Earthen pots / Plastic pots ",
    unit: "each"
  },
  {
    "sl.no": 957,
    item: "10430- Petrea volubilis plant of height 30 cm to 45 cm. in 20 cm size of Earthen pots / Plastic pots ",
    unit: "each"
  },
  {
    "sl.no": 958,
    item: "10431-Quisqualis indica plant of height 30 cm to 45 cm. in 20 cm size of Earthen pots / Plastic pots ",
    unit: "each"
  },
  {
    "sl.no": 959,
    item: "10432-Tecoma grandiflora plant of height 30 cm to 45 cm. in 20 cm size of Earthen pots / Plastic pots ",
    unit: "each"
  },
  {
    "sl.no": 960,
    item: "10433-Vernonia elaegnifolia (curtain creeper) plant of height 30 cm to 45 cm. in 20 cm size of Earthen pots / Plastic pots ",
    unit: "each"
  },
  {
    "sl.no": 961,
    item: "10449- Dianthus hybrid ",
    unit: "each"
  },
  {
    "sl.no": 962,
    item: "1143-Steel beading siz 10 x 10x 106 mm (box type)",
    unit: "metre"
  },
  {
    "sl.no": 963,
    item: "1145-Aluminium Plain Strip edging 38x12x3 mm",
    unit: "metre"
  },
  {
    "sl.no": 964,
    item: "1149-Glass strip 4 mm thick 40 mm deep",
    unit: "metre"
  },
  {
    "sl.no": 965,
    item: "1151-Boundary stone top chisel  dressed 15X15X90  cm",
    unit: "each"
  },
  {
    "sl.no": 966,
    item: "1154-Through and bond stone size 24 x 24 x 39cm",
    unit: "100 nos"
  },
  {
    "sl.no": 967,
    item: "1157-Stone for masonry work",
    unit: "cum"
  },
  {
    "sl.no": 968,
    item: "1158-Stone for pitching 15 cm x 22.5 cm",
    unit: "cum"
  },
  {
    "sl.no": 969,
    item: "1159-Stone dust",
    unit: "cum"
  },
  {
    "sl.no": 970,
    item: "1160-Red sand stone block",
    unit: "10 cud m"
  },
  {
    "sl.no": 971,
    item: "1161-White sand stone block",
    unit: "10 cud m"
  },
  {
    "sl.no": 972,
    item: "1163-White sand stone slab 75 mm thick (un- dressed)",
    unit: "sqm"
  },
  {
    "sl.no": 973,
    item: "1164-Red sand stone slab 40 mm thick (un-dressed)",
    unit: "sqm"
  },
  {
    "sl.no": 974,
    item: "1165-White sand stone slab 40 mm thick (un-dressed)",
    unit: "sqm"
  },
  {
    "sl.no": 975,
    item: "1166-Red sand stone slab 30 mm thick (un-dressed)",
    unit: "sqm"
  },
  {
    "sl.no": 976,
    item: "1168-Kota stone slab 20 mm to 25 mm thick (semi-polished)",
    unit: "sqm"
  },
  {
    "sl.no": 977,
    item: "1169-Kota stone slab 25 mm thick (rough chiseled)",
    unit: "sqm"
  },
  {
    "sl.no": 978,
    item: "1174-Red sand stone slab 45 mm to 50 mm thick (un-dressed)",
    unit: "sqm"
  },
  {
    "sl.no": 979,
    item: "1175-White sand stone slab 45 mm to 50 mm thick (un-dressed)",
    unit: "sqm"
  },
  {
    "sl.no": 980,
    item: "1177-Stone grit 6 mm and down size or pea sized gravel",
    unit: "cum"
  },
  {
    "sl.no": 981,
    item: "1179-Crushed stone 2.36 mm to 12.5 mm size",
    unit: "cum"
  },
  {
    "sl.no": 982,
    item: "1182-Surkhi",
    unit: "cum"
  },
  {
    "sl.no": 983,
    item: "1186-Superior class teak wood such as Dandeli, Balarshah or Malabar in planks",
    unit: "10 cud m"
  },
  {
    "sl.no": 984,
    item: "1187-First class teak wood in scantling",
    unit: "10 cud m"
  },
  {
    "sl.no": 985,
    item: "1188-First class teak wook in planks",
    unit: "10 cud m"
  },
  {
    "sl.no": 986,
    item: "1189-Second class teak wood in scantling ",
    unit: "10 cud m"
  },
  {
    "sl.no": 987,
    item: "1190-Second class teak wood in planks",
    unit: "10 cud m"
  },
  {
    "sl.no": 988,
    item: "1194-Second class deodar wood in planks",
    unit: "10 cud m"
  },
  {
    "sl.no": 989,
    item: "1196-First class kail wood in planks",
    unit: "10 cud m"
  },
  {
    "sl.no": 990,
    item: "1197-Second class kail wood in scantling ",
    unit: "10 cud m"
  },
  {
    "sl.no": 991,
    item: "1198-Second class kail wood in planks",
    unit: "10 cud m"
  },
  {
    "sl.no": 992,
    item: "1199-Sal wood in scantling ",
    unit: "10 cud m"
  },
  {
    "sl.no": 993,
    item: "1200-Klin seasoned selected sheesham wood planks ",
    unit: "10 cud m"
  },
  {
    "sl.no": 994,
    item: "1201-Precast terrazzo tiles 22 mm thick (light shade)",
    unit: "sqm"
  },
  {
    "sl.no": 995,
    item: "1202-Precast terrazzo tiles 22 mm thick (medium shade)",
    unit: "sqm"
  },
  {
    "sl.no": 996,
    item: "1203-Precast terrazzo tiles 22 mm thick (dark shade)",
    unit: "sqm"
  },
  {
    "sl.no": 997,
    item: "1204-Precast heat resistant terrance tiles (size 300x300 mm) and 20 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 998,
    item: "1207-G.I Limpet washer",
    unit: "100 nos"
  },
  {
    "sl.no": 999,
    item: "1208-Bitumen washer ",
    unit: "100 nos"
  },
  {
    "sl.no": 1000,
    item: "1209-G.I. Plain washer thick",
    unit: "100 nos"
  },
  {
    "sl.no": 1001,
    item: "1210-G.I. Plain washer thin",
    unit: "100 nos"
  },
  {
    "sl.no": 1002,
    item: "1211-G.I. Plain washer for seam bolts",
    unit: "100 nos"
  },
  {
    "sl.no": 1003,
    item: "1213-Water proofing materials",
    unit: "kilogram"
  },
  {
    "sl.no": 1004,
    item: "1214-Welding by gas plant",
    unit: "cm"
  },
  {
    "sl.no": 1005,
    item: "1215-Welding by electric plant",
    unit: "cm"
  },
  {
    "sl.no": 1006,
    item: "1216-Whiting ",
    unit: "quintal"
  },
  {
    "sl.no": 1007,
    item: "1219-Wire nails",
    unit: "kilogram"
  },
  {
    "sl.no": 1008,
    item: "1220-Wire mesh (rabbit)",
    unit: "sqm"
  },
  {
    "sl.no": 1009,
    item: "1221-20 mm dia holding down bolts",
    unit: "quintal"
  },
  {
    "sl.no": 1010,
    item: "1222-Mild steel sheets with bolts and nuts to rest on pintels",
    unit: "each"
  },
  {
    "sl.no": 1011,
    item: "1224-Hard drawn steel wire",
    unit: "quintal"
  },
  {
    "sl.no": 1012,
    item: "1225-Mild steel flat strap fitting ",
    unit: "quintal"
  },
  {
    "sl.no": 1013,
    item: "1227-Chequered terrazzo tiles 22 mm thick (light shade)",
    unit: "sqm"
  },
  {
    "sl.no": 1014,
    item: "1228-Chequered terrazzo tiles 22 mm thick (medium shade)",
    unit: "sqm"
  },
  {
    "sl.no": 1015,
    item: "1229-Chequered terrazzo tiles 22 mm thick (dark shade)",
    unit: "sqm"
  },
  {
    "sl.no": 1016,
    item: "1231-Extra for selected planks of second class teakwood ",
    unit: "10 cud m"
  },
  {
    "sl.no": 1017,
    item: "1234-Aluminium Plain Strip edging 57x12x3 mm",
    unit: "metre"
  },
  {
    "sl.no": 1018,
    item: "1235-Diesel oil",
    unit: "Litre"
  },
  {
    "sl.no": 1019,
    item: "1237-Cutting marble or sand stone slab up to 50 mm thick by mechanical device",
    unit: "metre"
  },
  {
    "sl.no": 1020,
    item: "1238-Extra for selected planks of first class teakwood",
    unit: "10 cud m"
  },
  {
    "sl.no": 1021,
    item: "1239-18 mm thick Flamed finish granite stone slab",
    unit: "sqm"
  },
  {
    "sl.no": 1022,
    item: "1240-18 mm thick Italian Marble stone slab. Perlato (slab area up to 0.5 sqm)",
    unit: "sqm"
  },
  {
    "sl.no": 1023,
    item: "1241-Commercial LPG in cylinder",
    unit: "kg"
  },
  {
    "sl.no": 1024,
    item: "1242-Glass mossaic tiles (20 mm x 20 mmx 4 mm).",
    unit: "sqm"
  },
  {
    "sl.no": 1025,
    item: "1243-Tile fixing chemical adhesive",
    unit: "kg"
  },
  {
    "sl.no": 1026,
    item: "1244-Cement Polymer Grout Compound",
    unit: "kg"
  },
  {
    "sl.no": 1027,
    item: "1245-Acid for cleaning tiles",
    unit: "Litre"
  },
  {
    "sl.no": 1028,
    item: "1246-Silicon based Joint Sealeant for Tiles",
    unit: "kg"
  },
  {
    "sl.no": 1029,
    item: "1247-Rubber base Adhesive",
    unit: "kg"
  },
  {
    "sl.no": 1030,
    item: "1250-Non woven reinforcement Tape",
    unit: "metre"
  },
  {
    "sl.no": 1031,
    item: "1301-Bleaching powder",
    unit: "quintal"
  },
  {
    "sl.no": 1032,
    item: "1304-Surface box for stop cock",
    unit: "each"
  },
  {
    "sl.no": 1033,
    item: "1305-Surface box for sluice valve",
    unit: "each"
  },
  {
    "sl.no": 1034,
    item: "1307-Surface box for water meter",
    unit: "each"
  },
  {
    "sl.no": 1035,
    item: "1309-C.I. bracket for wash basin and sinks ",
    unit: "pair"
  },
  {
    "sl.no": 1036,
    item: "1313-8 mm dia C.P. Brass/ S.S. Jet with flexible tube upto 1 metre long with S.S. triangular plate for European type W.C.",
    unit: "each"
  },
  {
    "sl.no": 1037,
    item: "1314-C.P. brass chain with 32 mm dia rubber plug",
    unit: "each"
  },
  {
    "sl.no": 1038,
    item: "1315-C.P.brass chain with 40 mm dia rubber plug",
    unit: "each"
  },
  {
    "sl.no": 1039,
    item: "1330-Clamps and M.S. stays including bolts and nuts for 100 mm pipe",
    unit: "each"
  },
  {
    "sl.no": 1040,
    item: "1331-M.S. Holder bat clamp of approved design for 100 mm S.C.I pipe",
    unit: "each"
  },
  {
    "sl.no": 1041,
    item: "1332-M.S. Holder bat clamp of approved design for 75 mm S.C.I. pipe",
    unit: "each"
  },
  {
    "sl.no": 1042,
    item: "1334-Clamps and M.S. stays including bolts and nuts for 50 mm pipe",
    unit: "each"
  },
  {
    "sl.no": 1043,
    item: "1335-Clamps and M.S.stays including bolts and nuts for 75 mm pipe",
    unit: "each"
  },
  {
    "sl.no": 1044,
    item: "1336-Clearing eye with chain and lid 100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1045,
    item: "1337-Clearing eye with chain and lid 150 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1046,
    item: "1339-Brass bib-cock-15 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1047,
    item: "1340-Brass bib-cock 20 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1048,
    item: "1342-Brass stop-cock 15 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1049,
    item: "1343-Brass stop-cock 20 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1050,
    item: "1350-Mosquito proof coupling of approved design",
    unit: "each"
  },
  {
    "sl.no": 1051,
    item: "1352-C.I. Cover and frame 300X300 mm inside",
    unit: "each"
  },
  {
    "sl.no": 1052,
    item: "1353-C.I. Cover without frame 300x300 mm inside ",
    unit: "each"
  },
  {
    "sl.no": 1053,
    item: "1354-Rectangular cover 455x610 mm with frame (low duty)",
    unit: "each"
  },
  {
    "sl.no": 1054,
    item: "1355-Rectangular cover 455X610 mm without frame (low duty)",
    unit: "each"
  },
  {
    "sl.no": 1055,
    item: "1356-500 mm dia cover with frame (medium duty)",
    unit: "each"
  },
  {
    "sl.no": 1056,
    item: "1357-500 mm dia cover without frame(medium duty)",
    unit: "each"
  },
  {
    "sl.no": 1057,
    item: "1360-C.I.mouth,brass ferrule 15 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1058,
    item: "1361-C.I.mouth, brass ferrule 20 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1059,
    item: "1362-C.I.mouth, brass ferrule 25 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1060,
    item: "1363-Vitreous china foot rests 250x130x30 mm",
    unit: "pair"
  },
  {
    "sl.no": 1061,
    item: "1364-C.I. Grating 100x100 mm",
    unit: "each"
  },
  {
    "sl.no": 1062,
    item: "1366-C.I. grating 150x150 mm",
    unit: "each"
  },
  {
    "sl.no": 1063,
    item: "1367-C.I. grating 180x180 mm",
    unit: "each"
  },
  {
    "sl.no": 1064,
    item: "1369-S.C.I. gully or nahani grating 100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1065,
    item: "1373-Rubber insertions for 80 mm dia pipe joints",
    unit: "each"
  },
  {
    "sl.no": 1066,
    item: "1374-Rubber insertions for 100 mm dia pipe joints",
    unit: "each"
  },
  {
    "sl.no": 1067,
    item: "1375-Rubber insertions for 125 mm dia pip joints",
    unit: "each"
  },
  {
    "sl.no": 1068,
    item: "1376-Rubber insertions for 150 mm dia pipe joints",
    unit: "each"
  },
  {
    "sl.no": 1069,
    item: "1377-Rubber insertions for 200 mm dia pipe joints",
    unit: "each"
  },
  {
    "sl.no": 1070,
    item: "1378-Rubber insertions for 250 mm dia pipe joints ",
    unit: "each"
  },
  {
    "sl.no": 1071,
    item: "1379-Rubber insertions for 300 mm dia pipe joints",
    unit: "each"
  },
  {
    "sl.no": 1072,
    item: "1380-Rubber insertions for 350 mm dia pipe joints",
    unit: "each"
  },
  {
    "sl.no": 1073,
    item: "1381-Rubber insertions for 400 mm dia pipe joints",
    unit: "each"
  },
  {
    "sl.no": 1074,
    item: "1382-Rubber insertions for 450 mm dia pipe joints",
    unit: "each"
  },
  {
    "sl.no": 1075,
    item: "1383-Rubber insertions for 500 mm dia pipe joints",
    unit: "each"
  },
  {
    "sl.no": 1076,
    item: "1384-Rubber insertions for 600 mm dia pipe joints",
    unit: "each"
  },
  {
    "sl.no": 1077,
    item: "1392-Mirror of superior make glass 60x45 cm",
    unit: "each"
  },
  {
    "sl.no": 1078,
    item: "1396-vitreous china pedestal for wash basin ",
    unit: "each"
  },
  {
    "sl.no": 1079,
    item: "1397-pig lead",
    unit: "kilogram"
  },
  {
    "sl.no": 1080,
    item: "1410- Supply and stacking of plant Tecoma gaudichaudi of height 45-60 cm. in earthen pots of size 20 cm ",
    unit: "each"
  },
  {
    "sl.no": 1081,
    item: "1464-S &S.C.I. standard specials up to 300 mm dia (heavy class)",
    unit: "quintal"
  },
  {
    "sl.no": 1082,
    item: "1466-S&S.C.I.standard specials over 300 mm dia (heavy class)",
    unit: "quintal"
  },
  {
    "sl.no": 1083,
    item: "1468-Flanged C.I. standard specials up to 300 mm dia (heavy class)",
    unit: "quintal"
  },
  {
    "sl.no": 1084,
    item: "1470-Flanged C.I. standard specials over 300 mm dia (heavy class)",
    unit: "quintal"
  },
  {
    "sl.no": 1085,
    item: "1472-Casing pipe 100 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1086,
    item: "1532-Flush pipe with union spreaders and clamps all in C.P. Brass for single stall",
    unit: "each"
  },
  {
    "sl.no": 1087,
    item: "1533-Flush pipe with union spreaders and clamps all in C.P. brass for double stall",
    unit: "each"
  },
  {
    "sl.no": 1088,
    item: "1534-Flush pipe with union spreaders and clamps all in C.P. brass for range of three stall",
    unit: "each"
  },
  {
    "sl.no": 1089,
    item: "1535-Flush pipe with union spreaders and clamps all in C.P. brass for range of four stall",
    unit: "each"
  },
  {
    "sl.no": 1090,
    item: "1540-Flush pipe and spreaders G.I. for single set of one squatting plate urinal ",
    unit: "each"
  },
  {
    "sl.no": 1091,
    item: "1541-Flush pipe and spreaders G.I. for range of two squatting plates urinal ",
    unit: "each"
  },
  {
    "sl.no": 1092,
    item: "1542-Flush pipe and spreaders G.I. for range of three squatting plates urinal ",
    unit: "each"
  },
  {
    "sl.no": 1093,
    item: "1543-Flush pipe and spreaders G.I. for range of four squatting plates urinal ",
    unit: "each"
  },
  {
    "sl.no": 1094,
    item: "1545-G.I. pipes 15 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1095,
    item: "1546-G.I. pipes 20 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1096,
    item: "1547-G.I. pipes 25 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1097,
    item: "1548-G.I. pipes 32 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1098,
    item: "1549-G.I. pipes 40 mm dia ",
    unit: "metre"
  },
  {
    "sl.no": 1099,
    item: "1550-G.I pipes 50 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1100,
    item: "1551-G.I. pipes 65 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1101,
    item: "1552-G.I. pipes 80 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1102,
    item: "1555-G.I. back (jam) nuts 25 mm dia ",
    unit: "each"
  },
  {
    "sl.no": 1103,
    item: "1559-G.I.back (jam) nuts 65 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1104,
    item: "1608-G.I.tees (equal) 25 mm",
    unit: "each"
  },
  {
    "sl.no": 1105,
    item: "1612-G.I. tees (equal) 65 mm",
    unit: "each"
  },
  {
    "sl.no": 1106,
    item: "1614-G.I. inlet connection",
    unit: "each"
  },
  {
    "sl.no": 1107,
    item: "1616-S.C.I. soil, waste and vent single socketed pipe 1.80 metres long: 75mm dia",
    unit: "each"
  },
  {
    "sl.no": 1108,
    item: "1617-S.C.I. soil, waste and vent single socketed pipe 1.80 metres long:100mm dia",
    unit: "each"
  },
  {
    "sl.no": 1109,
    item: "1618-S.C.I. soil, waste and vent single socketed pipe 1.80 metres long: 150mm dia",
    unit: "each"
  },
  {
    "sl.no": 1110,
    item: "1620-S.C.I. plain bend 75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1111,
    item: "1621-S.C.I. plain bend 100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1112,
    item: "1622-S.C.I. plain bend 150 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1113,
    item: "1624-S.C.I. bend with access door 75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1114,
    item: "1625-S.C.I. bend with access door 100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1115,
    item: "1627-S.C.I. Plain single equal junctions 75x75x75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1116,
    item: "1628-S.C.I. plainsingle equal junctions 100x100x100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1117,
    item: "1630-S.C.I. single equal junctions75x75x75mm dia with access door",
    unit: "each"
  },
  {
    "sl.no": 1118,
    item: "1631-S.C.I. single equal junctions 100x100x100 mm dia with access door",
    unit: "each"
  },
  {
    "sl.no": 1119,
    item: "1633-S.C.I. plain double equal junctions 75x75x75x75mm dia",
    unit: "each"
  },
  {
    "sl.no": 1120,
    item: "1634-S.C.I. plain double equal junctions 100x100x100x100 mm dia ",
    unit: "each"
  },
  {
    "sl.no": 1121,
    item: "1636-S.C.I.double equal junctions 75x75x75x75 mm dia with access door",
    unit: "each"
  },
  {
    "sl.no": 1122,
    item: "1637-S.C.I.double equal junctions 100x100x100x100 mm dia with access door",
    unit: "each"
  },
  {
    "sl.no": 1123,
    item: "1639-Slotted cowl (terminal guard) 75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1124,
    item: "1640-Slotted cowl (terminal guard) 100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1125,
    item: "1641-G.I. Union 15 mm nominal bore",
    unit: "each"
  },
  {
    "sl.no": 1126,
    item: "1642-G.I. Union 20 mm nominal bore",
    unit: "each"
  },
  {
    "sl.no": 1127,
    item: "1643-G.I. Union 25 mm nominal bore",
    unit: "each"
  },
  {
    "sl.no": 1128,
    item: "1644-G.I. Union 32 mm nominal bore",
    unit: "each"
  },
  {
    "sl.no": 1129,
    item: "1645-G.I. Union 40 mm nominal bore",
    unit: "each"
  },
  {
    "sl.no": 1130,
    item: "1646-G.I. Union 50 mm nominal bore",
    unit: "each"
  },
  {
    "sl.no": 1131,
    item: "1647-G.I. Union 65 mm nominal bore",
    unit: "each"
  },
  {
    "sl.no": 1132,
    item: "1648-G.I. Union 80 mm nominal bore",
    unit: "each"
  },
  {
    "sl.no": 1133,
    item: "1649-Polyethylene water storage tank with cover and suitable locking arrangemnet",
    unit: "per litre"
  },
  {
    "sl.no": 1134,
    item: "1653-Sand cast iron S & S single unequal junctions: 100x100x75x75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1135,
    item: "1656-Sand cast iron S&S single unequal Junction: 100x100x75 mm dia with access dor",
    unit: "each"
  },
  {
    "sl.no": 1136,
    item: "1659-Sand cast iron S&S plain double unequal junction: 100x100x75x75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1137,
    item: "1662-Sand cast iron S&S double unequal junction: 100x100x75x75xmm dia with access door",
    unit: "each"
  },
  {
    "sl.no": 1138,
    item: "1666-Sand cast iron heel rest bend 75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1139,
    item: "1667-Sand cast iron heel rest bend 100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1140,
    item: "1669-S.C.I. Single equal invert branch of required degree75x75x75x75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1141,
    item: "1670-S.C.I. Single equal invert branch of required degree 100x100x100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1142,
    item: "1672-S.C.I. double equal invert branch of required degree 75x75x75x75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1143,
    item: "1673-S.C.I. double equal invert branch of required degree 100x100x100x100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1144,
    item: "1674-S.C.I. Single unequal invert branch of required degree 100x100x75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1145,
    item: "1677-S.C.I. double unequal invert branch of required degree 100x100x75x75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1146,
    item: "1682-S.C.I. door pieces 75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1147,
    item: "1683-S.C.I.door pieces 100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1148,
    item: "1685-S.C.I. collar 75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1149,
    item: "1686-S.C.I. collar 100 mm dia ",
    unit: "each"
  },
  {
    "sl.no": 1150,
    item: "1687-Unplasticised P.V.C. connection pipe with brass union 30 cm long 15 mm bore",
    unit: "each"
  },
  {
    "sl.no": 1151,
    item: "1688-Unplasticised P.V.C. connection pipe with brass union 30 cm long 20 mm bore",
    unit: "each"
  },
  {
    "sl.no": 1152,
    item: "1689-Unplasticised P.V.C. connection pipe with brass union 45 cm long 15 mm bore",
    unit: "each"
  },
  {
    "sl.no": 1153,
    item: "1690-Unplasticiesd P.V.C. connection pipe with brass union 45 cm long 20 mm bore",
    unit: "each"
  },
  {
    "sl.no": 1154,
    item: "1693-S.C.I hand pump",
    unit: "each"
  },
  {
    "sl.no": 1155,
    item: "1700-R.C.C. pipes NP2 class 100 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1156,
    item: "1701-R.C.C.pipes NP2 class 150 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1157,
    item: "1702-R.C.C. pipes NP2 class 250 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1158,
    item: "1703-R.C.C. pipes NP2 class 300 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1159,
    item: "1704-R.C.C. pipes NP2 class 450 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1160,
    item: "1705-R.C.C. pipes NP2 class 500 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1161,
    item: "1706-R.C.C. pipes NP2 class 600 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1162,
    item: "1707-R.C.C. pipes NP2 class 700 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1163,
    item: "1709-R.C.C. pipes NP2 class 800 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1164,
    item: "1710-R.C.C. pipes NP2 class 900 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1165,
    item: "1711-R.C.C. pipes NP2 class 1000 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1166,
    item: "1712-R.C.C. pipes NP2 class 1100 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1167,
    item: "1713-R.C.C. pipes NP2 class 1200 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1168,
    item: "1714-R.C.C. collars NP2 class 100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1169,
    item: "1715-R.C.C. collars NP2 class 150 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1170,
    item: "1716-R.C.C. collars NP2 class 250 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1171,
    item: "1717-R.C.C. collars NP2 class 300 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1172,
    item: "1718-R.C.C. collars NP2 class 450 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1173,
    item: "1719-R.C.C. collars NP2 class 500 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1174,
    item: "1720-R.C.C. collars NP2 class 600 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1175,
    item: "1721-R.C.C. collars NP2 class 700 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1176,
    item: "1723-R.C.C. Colllars NP2 class 800 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1177,
    item: "1724-R.C.C. collars NP2 class 900 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1178,
    item: "1725-R.C.C. collars NP2 class 1000 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1179,
    item: "1726-R.C.C. collars NP2 class 1100mm dia",
    unit: "each"
  },
  {
    "sl.no": 1180,
    item: "1727-R.C.C. collars NP2 class 1200 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1181,
    item: "1728-RCC pipe 450 mm dia NP -3 spigot",
    unit: "metre"
  },
  {
    "sl.no": 1182,
    item: "1729-RCC pipe 600 mm dia NP- 3 spigot",
    unit: "metre"
  },
  {
    "sl.no": 1183,
    item: "1730-RCC pipe 900 mm dia NP - 3 spigot",
    unit: "metre"
  },
  {
    "sl.no": 1184,
    item: "1731-RCC pipe 1000 mm dia NP -3 spigot",
    unit: "metre"
  },
  {
    "sl.no": 1185,
    item: "1732-RCC pipe 1200 mm dia NP - 3 spigot",
    unit: "metre"
  },
  {
    "sl.no": 1186,
    item: "1733-RCC pipe 1800 mm dia NP- 3 spigot",
    unit: "metre"
  },
  {
    "sl.no": 1187,
    item: "1734-RCC pipe 450 mm dia NP- 4 spigot",
    unit: "metre"
  },
  {
    "sl.no": 1188,
    item: "1735-RCC pipe 600 mm dia NP- 4 spigot",
    unit: "metre"
  },
  {
    "sl.no": 1189,
    item: "1736-RCC pipe 900 mm dia NP- 4 spigot",
    unit: "metre"
  },
  {
    "sl.no": 1190,
    item: "1737-RCC pipe 1000 mm dia NP- 4 spigot",
    unit: "metre"
  },
  {
    "sl.no": 1191,
    item: "1738-RCC pipe 1200 mm dia NP- 4 spigot",
    unit: "metre"
  },
  {
    "sl.no": 1192,
    item: "1739-RCC pipe 1800 mm dia NP- 4 spigot",
    unit: "metre"
  },
  {
    "sl.no": 1193,
    item: "1854-stoneware pipes grade A (60 cm long) 100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1194,
    item: "1855-Stoneware pipes grade A (60 cm long ) 150 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1195,
    item: "1856-Stoneware pipes grade A (60 cm long ) 200 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1196,
    item: "1857-Stoneware pipes grade A (60 cm long)230 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1197,
    item: "1858-Stoneware pipes grade A (60 cm long) 250 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1198,
    item: "1859-Stoneware pipes grade A (60 cm long ) 300 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1199,
    item: "1863-Fire clay kitchen sink: 600x450x250 mm",
    unit: "each"
  },
  {
    "sl.no": 1200,
    item: "1871-White vitreous china laboratory sink 450x300x150x mm",
    unit: "each"
  },
  {
    "sl.no": 1201,
    item: "1872-White vitreous china laboratory sink 600x450x200 mm",
    unit: "each"
  },
  {
    "sl.no": 1202,
    item: "1875-White plastic seat (solid) with lid C.P. brass hinges and rubber buffers",
    unit: "each"
  },
  {
    "sl.no": 1203,
    item: "1876-Black plastic seat (soild) with lid C.P.brass hinges and rubber buffers",
    unit: "each"
  },
  {
    "sl.no": 1204,
    item: "1878-Shower rose C.P brass for 15 to 20 mm intel 100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1205,
    item: "1879-Shower rose C.P.brass for 15 to 20 mm intel 150 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1206,
    item: "1880-Dismenteled P or S trap scrap (approx wt 2kg)",
    unit: "kg"
  },
  {
    "sl.no": 1207,
    item: "1881-Spun yarn",
    unit: "kilogram"
  },
  {
    "sl.no": 1208,
    item: "1882-Strainer brass 40 mm dia 1.5 metre long ",
    unit: "each"
  },
  {
    "sl.no": 1209,
    item: "1885-15 mm C.P.brass tap",
    unit: "each"
  },
  {
    "sl.no": 1210,
    item: "1889-C.P.brass toilet paper holder of standard size",
    unit: "each"
  },
  {
    "sl.no": 1211,
    item: "1890-Centrifugally SCI(spun) S & S P or S trap",
    unit: "each"
  },
  {
    "sl.no": 1212,
    item: "1891-C.I. trap for standard urinal with vent arm with operating and other couplings in C.P. brass: 50 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1213,
    item: "1893-C.I. trap for standard urinal with vent arm with operating and other coupling in C.P. brass: 80 mm dia ",
    unit: "each"
  },
  {
    "sl.no": 1214,
    item: "1895-C.P. brass trap 40 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1215,
    item: "1896-100 mm S.C.I. trap with vent heel",
    unit: "each"
  },
  {
    "sl.no": 1216,
    item: "1897-100 mm S.C.I. trap with 100 mm inlet and 100 mm outlet",
    unit: "each"
  },
  {
    "sl.no": 1217,
    item: "1898-100 mm S.C.I. trap with 100 mm inlet and 75 mm outlet",
    unit: "each"
  },
  {
    "sl.no": 1218,
    item: "1900-S.W. gully trap type 100x100 mm",
    unit: "each"
  },
  {
    "sl.no": 1219,
    item: "1902-S.W. gully trap type 150x100 mm",
    unit: "each"
  },
  {
    "sl.no": 1220,
    item: "1904-S.W. gully trap P type 180x150 mm",
    unit: "each"
  },
  {
    "sl.no": 1221,
    item: "1913-Vitreous china lipped front urinal",
    unit: "each"
  },
  {
    "sl.no": 1222,
    item: "1915-Vitreous china squatting plate urinal",
    unit: "each"
  },
  {
    "sl.no": 1223,
    item: "1922-H.P. or L.P. ball valve with polythene floats: 15 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1224,
    item: "1923-H.P. or L.P. ball valve with polythene floats: 20 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1225,
    item: "1924-H.P. or L.P. ball valve with polythene floats: 25 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1226,
    item: "1926-20 mm dia Gunmetal gate valve with wheel",
    unit: "each"
  },
  {
    "sl.no": 1227,
    item: "1927-Brass full way valve with C.I. wheel (screwed end) 25 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1228,
    item: "1928-Brass full way valve with C.I. wheel (screwed end) 32 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1229,
    item: "1929-Brass full way valve with C.I. wheel (screwed end) 40 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1230,
    item: "1930-Brass full way valve with C.I. wheel (screwed end) 50 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1231,
    item: "1931-Brass full way valve with C.I. wheel (screwed end) 65 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1232,
    item: "1932-Brass full way valve with C.I. wheel (screwed end) 80 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1233,
    item: "1933-Gunmetal non-return valve-horizontal (screwed end ) 25 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1234,
    item: "1934-Gunmetal non-return valve-horizontal (screwed end ) 32 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1235,
    item: "1935-Gunmetal non-return valve-horizontal (screwed end ) 40 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1236,
    item: "1936-Gunmetal non-return valve-horizontal (screwed end ) 50 mm dia ",
    unit: "each"
  },
  {
    "sl.no": 1237,
    item: "1937-Gunmetal non-return valve-horizontal (screwed end ) 65 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1238,
    item: "1938-Gunmetal non-return valve-horizontal (screwed end ) 80 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1239,
    item: "1940-C.I.Sluice valve (with caps) class I : 100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1240,
    item: "1941-C.I.Sluice valve (with caps) class I : 125 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1241,
    item: "1942-C.I.Sluice valve (with caps) class  I : 150 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1242,
    item: "1943-C.I.Sluice valve (with caps) class I : 200 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1243,
    item: "1944-C.I.Sluice valve (with caps) class I : 250 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1244,
    item: "1945-C.I.Sluice valve (with caps) class : 300 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1245,
    item: "1947-Vitreous China flat back wash basin 630x450 mm",
    unit: "each"
  },
  {
    "sl.no": 1246,
    item: "1949-Vitreous China angle back wash basin 600x480 mm",
    unit: "each"
  },
  {
    "sl.no": 1247,
    item: "1950-Vitreous china angle back wash basin 400x400 mm ",
    unit: "each"
  },
  {
    "sl.no": 1248,
    item: "1951-C.P. brass waste 32 mm ",
    unit: "each"
  },
  {
    "sl.no": 1249,
    item: "1952-C.P. brass waste 40 mm",
    unit: "each"
  },
  {
    "sl.no": 1250,
    item: "1953-Vitreous china India type w.c. pan size 580 mm",
    unit: "each"
  },
  {
    "sl.no": 1251,
    item: "1954-Vitreous China orrisa type w.c. pan size 580 mm",
    unit: "each"
  },
  {
    "sl.no": 1252,
    item: "1955-Vitreous china pedestal type wate closet ",
    unit: "each"
  },
  {
    "sl.no": 1253,
    item: "1956-Bolts and nuts 16 mm dia 60 mm long",
    unit: "each"
  },
  {
    "sl.no": 1254,
    item: "1957-Bolts and nuts 16 mm dia 65 mm long",
    unit: "each"
  },
  {
    "sl.no": 1255,
    item: "1958-Bolts and nuts 20 mm dia 65 mm long",
    unit: "each"
  },
  {
    "sl.no": 1256,
    item: "1959-Bolts and nuts 20 mm dia 70 mm long",
    unit: "each"
  },
  {
    "sl.no": 1257,
    item: "1960-Bolts and nuts 20 mm dia 75 mm long",
    unit: "each"
  },
  {
    "sl.no": 1258,
    item: "1961-Bolts and nuts 20 mm dia 80 mm long",
    unit: "each"
  },
  {
    "sl.no": 1259,
    item: "1962-Bolts and nuts 24 mm dia 85 mm long",
    unit: "each"
  },
  {
    "sl.no": 1260,
    item: "1963-Bolts and nuts 24 mm dia 90 mm long ",
    unit: "each"
  },
  {
    "sl.no": 1261,
    item: "1964-Bolts and nuts 27 mm dia 100 mm long",
    unit: "each"
  },
  {
    "sl.no": 1262,
    item: "1965-White vitreous china dual purpose closet (Anglo Indian W.C.) suitable for use as squatting pan or European type water closet as per manufacture's specifications ",
    unit: "each"
  },
  {
    "sl.no": 1263,
    item: "1966-Floor mounted white vitrous china double trap syphonic WC with 10 litre cistern and all fittings, seat cover etc",
    unit: "each"
  },
  {
    "sl.no": 1264,
    item: "1970-Vitreous china foot rests 250x125x25 mm ",
    unit: "pair"
  },
  {
    "sl.no": 1265,
    item: "1980-Fly ash",
    unit: "cum"
  },
  {
    "sl.no": 1266,
    item: "1984-Common burnt clay F.P.S. (non modular) bricks tile class designation 10",
    unit: "1000 nos"
  },
  {
    "sl.no": 1267,
    item: "1986-Common burnt clay modular bricks class designation 12.5",
    unit: "1000 nos"
  },
  {
    "sl.no": 1268,
    item: "2391-Strips-Aluminium fluted 3.15 mm thick and 150 mm wide",
    unit: "metre"
  },
  {
    "sl.no": 1269,
    item: "2392-Strips-Aluminium fluted 3.15 mm thick and 200 mm wide",
    unit: "metre"
  },
  {
    "sl.no": 1270,
    item: "2393-1 mm thick Sstainless Steel Cover plate grade 304",
    unit: "each"
  },
  {
    "sl.no": 1271,
    item: "2394-Coupler 16 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1272,
    item: "2395-Coupler 20 mm dia ",
    unit: "each"
  },
  {
    "sl.no": 1273,
    item: "2396-Coupler 25 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1274,
    item: "2397-Coupler 28 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1275,
    item: "2398-Coupler 32 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1276,
    item: "2399-Complete Roof Joint of 100 mm",
    unit: "metre"
  },
  {
    "sl.no": 1277,
    item: "2400-Complete Roof Joint of 150 mm",
    unit: "metre"
  },
  {
    "sl.no": 1278,
    item: "2401-Complete Roof Joint of 200 mm",
    unit: "metre"
  },
  {
    "sl.no": 1279,
    item: "2402-Epoxy adhesive",
    unit: "kg"
  },
  {
    "sl.no": 1280,
    item: "2403-Floor Joint of 100 mm",
    unit: "metre"
  },
  {
    "sl.no": 1281,
    item: "2404-Floor Joint of 150 mm",
    unit: "metre"
  },
  {
    "sl.no": 1282,
    item: "2405-Floor Joint of 200 mm",
    unit: "metre"
  },
  {
    "sl.no": 1283,
    item: "2406-Float glass sheet of nominal thickness 4 mm (weight not less than 10 kg/sqm)",
    unit: "sqm"
  },
  {
    "sl.no": 1284,
    item: "2407-Float glass sheet of nominla thickness 5.5 mm (weight not less than 13.50 Kg/ sqm)",
    unit: "sqm"
  },
  {
    "sl.no": 1285,
    item: "2408-Float glass sheet of nominal thickness 8 mm (weight not less than 20.00 kg/sqm)",
    unit: "sqm"
  },
  {
    "sl.no": 1286,
    item: "2409-Wall Joint of 100 mm",
    unit: "metre"
  },
  {
    "sl.no": 1287,
    item: "2410-Wall Joint of 150 mm",
    unit: "metre"
  },
  {
    "sl.no": 1288,
    item: "2411-Wall Joint of 200 mm",
    unit: "metre"
  },
  {
    "sl.no": 1289,
    item: "2412-Play wood 5 play with commericila ply on both faces 6 mm thick ",
    unit: "sqm"
  },
  {
    "sl.no": 1290,
    item: "2413-12 mm commercial ply",
    unit: "sqm"
  },
  {
    "sl.no": 1291,
    item: "2414-18 mm thick block board with commercial ply veneering on both side",
    unit: "sqm"
  },
  {
    "sl.no": 1292,
    item: "2415-21 mm thick clear toughened Laminated glass for fins with holes",
    unit: "sqm"
  },
  {
    "sl.no": 1293,
    item: "2447-Hollock ballies 125 mm diameter",
    unit: "metre"
  },
  {
    "sl.no": 1294,
    item: "2449-Oxidised mild steel pull bolt lock (locking bolt) of size 85 mm x 42 mm with screws, bolts, nuts and washers complete",
    unit: "each"
  },
  {
    "sl.no": 1295,
    item: "2451-Brass cupboard lock 6 levers of approved quality, 40 mm size",
    unit: "each"
  },
  {
    "sl.no": 1296,
    item: "2452-Brass upboard lock 6 levers of approved quality,  50 mm  size",
    unit: "each"
  },
  {
    "sl.no": 1297,
    item: "2453-Brass cupboard lock 6 levers of approved quality,  65 mm size",
    unit: "each"
  },
  {
    "sl.no": 1298,
    item: "2454-Brass cupboard lock 6 levers of approved quality,  75 mm size",
    unit: "each"
  },
  {
    "sl.no": 1299,
    item: "2455-Brass  hanging type door stopper 150 mm",
    unit: "each"
  },
  {
    "sl.no": 1300,
    item: "2456-Hydraulic door closer bottle type M.S. body with necessary accessories and screw complete",
    unit: "each"
  },
  {
    "sl.no": 1301,
    item: "2459-Anodised Aluminium hanging type door stopper ",
    unit: "each"
  },
  {
    "sl.no": 1302,
    item: "2464-Anodised Aluminium pull bolt lock (locking bolt) of size 85 mmx42 mm wutg screws, bolts, nuts and washers complete",
    unit: "each"
  },
  {
    "sl.no": 1303,
    item: "2465-Anodised Aluminium Casement stay 250 mm",
    unit: "each"
  },
  {
    "sl.no": 1304,
    item: "2466-Hollock wood in scantling",
    unit: "10 cud m"
  },
  {
    "sl.no": 1305,
    item: "2467-Chromium plated Brass pull bolt lock (locking bolt) of size 85 mmx42 mm with screws, bolts, nuts and washers complete",
    unit: "each"
  },
  {
    "sl.no": 1306,
    item: "2468-Nickeled Chromium Brass cupboard lock 40 mm size",
    unit: "each"
  },
  {
    "sl.no": 1307,
    item: "2469-Nickeled Chromium Brass cupboard lock 50 mm size",
    unit: "each"
  },
  {
    "sl.no": 1308,
    item: "2470-Nickeled Chromium Brass cupboard lock 65 mm size",
    unit: "each"
  },
  {
    "sl.no": 1309,
    item: "2471-Nickeled Chromium Brass cupboard lock 75 mm size",
    unit: "each"
  },
  {
    "sl.no": 1310,
    item: "2480-Ply wood 5 ply with teak ply on both faces 9 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 1311,
    item: "2481-Ply wood 5 ply with teak ply on one faces and commercial ply on another face 9 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 1312,
    item: "2483-Ply wood 75 ply with teak ply on one face and commercial ply on another face 9 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 1313,
    item: "2484-Pre- laminated with decorative lamination on both side exterior Grade - I MDF Board 12 mm thick confirming to IS:14587    ",
    unit: "sqm"
  },
  {
    "sl.no": 1314,
    item: "2485-Pre - laminated with decorative lamination on both side exterior Grade - I MDF Board 18 mm thick confiriming to IS:14587",
    unit: "sqm"
  },
  {
    "sl.no": 1315,
    item: "2486-Pre- laminated with decorative lamination side and other side balancing lamination exterior Grade - I MDF Board 25 mm thick confirming to IS: 14587",
    unit: "sqm"
  },
  {
    "sl.no": 1316,
    item: "2487-Pre- laminated with decorative lamination side and other side balancing lamination exterior Grade - I MDF Board 12 mm thick Confirming to IS:14587",
    unit: "sqm"
  },
  {
    "sl.no": 1317,
    item: "2488-Pre-laminated with decorative lamination one side and other side balancing lamination exterior Grade- I MDF Board 18 mm thick confirming to IS:14587",
    unit: "sqm"
  },
  {
    "sl.no": 1318,
    item: "2489-PVC edge bending tape 2.00 mm thick",
    unit: "metre"
  },
  {
    "sl.no": 1319,
    item: "2491-Pre laminated both side solid foam uPVC profile (45x20mm)",
    unit: "metre"
  },
  {
    "sl.no": 1320,
    item: "2492-Solid foam uPVC sheet 20mm thick prelaminated on both side",
    unit: "sqm"
  },
  {
    "sl.no": 1321,
    item: "2493-PVC edge beading",
    unit: "metre"
  },
  {
    "sl.no": 1322,
    item: "2494-Expandable fastner with plastic sleeve",
    unit: "each"
  },
  {
    "sl.no": 1323,
    item: "2500-Extra for selectd planks of second class deodar wood ",
    unit: "10 cud m"
  },
  {
    "sl.no": 1324,
    item: "2504-Kiln seasoning of timber",
    unit: "cum"
  },
  {
    "sl.no": 1325,
    item: "2505-Hollock wood in planks",
    unit: "10 cud m"
  },
  {
    "sl.no": 1326,
    item: "2506-Carben Steel galvanised dash fastner (min 5 micron) of 10 mm dia double threaded 608 grade counter sunk head screw comprising of 10 mm dia polyamide PA 6 grade sleave.  Size 10 mm x 60 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 1327,
    item: "2507-Carben Steel galvanised dash fastner (min 5 micron) of 10 mm dia double threaded 6.8 grade counter sunk head screw comprising of 10 mm dia polyamide PA 6 grade sleave.  Size 10 mm x mm",
    unit: "10 nos"
  },
  {
    "sl.no": 1328,
    item: "2508-Carben Steel galvanised dash fastner ( min 5 micron) of 10 mm dia double threaded 6.8 grade counter sunk head screw comprising of 10 mm dia polyamide PA 6 grade sleave.  Size 10 mm x 120 mm ",
    unit: "10 nos"
  },
  {
    "sl.no": 1329,
    item: "2509-Carben steel galvanised dash fastner (min 5 micron) of 10 mm dia double threaded 6.8 grade sleave, Size 10 mm x 140 mm ",
    unit: "10 nos"
  },
  {
    "sl.no": 1330,
    item: "2510-Carben Steel galvanised dash fastner ( min 5 micron) of 10 mm dia double threaded 6.8 grade counter sunk head screw comprising of 10 mm dia polyamide PA 6 grade sleave.  Size 10 mm x 160 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 1331,
    item: "2602-Common burnt clay F.P.S. (non modular) bricks class designation 7.5",
    unit: "1000 nos"
  },
  {
    "sl.no": 1332,
    item: "2603-Common burnt clay F.P.S. (non modular) bricks class designation 5.00",
    unit: "1000 nos"
  },
  {
    "sl.no": 1333,
    item: "2604-Weather/structural non sage elastomeric PU sealant (600ml Sausage) for joints in RCC/ Brick/ Stone/ Wood/ Ceramic/ Gypsum/ Alluminium work complying to ASTM C920, DIN 18540- F & ISO 11600 incl all taxes",
    unit: "each"
  },
  {
    "sl.no": 1334,
    item: "2605-Structural sealant- 6mm x12 mm",
    unit: "metre"
  },
  {
    "sl.no": 1335,
    item: "2606-Spacer tape 6.4 mm thick x 6 mm wide",
    unit: "metre"
  },
  {
    "sl.no": 1336,
    item: "2607-Weather Sealant - Non Staining (600 ml)",
    unit: "each"
  },
  {
    "sl.no": 1337,
    item: "2608-Weather Sealant - Normal (300 ml)",
    unit: "each"
  },
  {
    "sl.no": 1338,
    item: "2609-MS Brackets / Aluminium Alloy Brackets",
    unit: "kg"
  },
  {
    "sl.no": 1339,
    item: "2610-Silicon Gasket in kg (Above 50 g/m)",
    unit: "kg"
  },
  {
    "sl.no": 1340,
    item: "2611-EPDM Gasket in kg(Above 60 g / m)",
    unit: "kg"
  },
  {
    "sl.no": 1341,
    item: "2612-Anchor Fastner - M10",
    unit: "each"
  },
  {
    "sl.no": 1342,
    item: "2613-SS Bolt with washer of sizes for structural glazing / ACP Cladding",
    unit: "each"
  },
  {
    "sl.no": 1343,
    item: "2614-SS Screws of sizes for structural glazing /ACP Cladding",
    unit: "each"
  },
  {
    "sl.no": 1344,
    item: "2615-Protective Tape",
    unit: "metre"
  },
  {
    "sl.no": 1345,
    item: "2616-GI flashing - 1.2 mm thick",
    unit: "kg"
  },
  {
    "sl.no": 1346,
    item: "2617-6 mm thick High performance glass",
    unit: "sqm"
  },
  {
    "sl.no": 1347,
    item: "2618-6 mm thick clear heat strengthened glass",
    unit: "sqm"
  },
  {
    "sl.no": 1348,
    item: "2619-6 mm thick clear heat strengthened glass",
    unit: "each"
  },
  {
    "sl.no": 1349,
    item: "2620-ARMS GS HD - TOP HUNG -20",
    unit: "pair"
  },
  {
    "sl.no": 1350,
    item: "2621-Connective Block",
    unit: "each"
  },
  {
    "sl.no": 1351,
    item: "2622-Curtain wall striker",
    unit: "each"
  },
  {
    "sl.no": 1352,
    item: "2623-Adjustable Fastening Pawl",
    unit: "each"
  },
  {
    "sl.no": 1353,
    item: "2624-Corner drive",
    unit: "each"
  },
  {
    "sl.no": 1354,
    item: "2625-Top wedge block",
    unit: "each"
  },
  {
    "sl.no": 1355,
    item: "2626-Glass wool Density 48 kg/m3 with Block Glass Tissue (BGT)",
    unit: "sqm"
  },
  {
    "sl.no": 1356,
    item: "2627-SS Screws - #8x19",
    unit: "each"
  },
  {
    "sl.no": 1357,
    item: "2628-Weather Sealant - DC 789",
    unit: "cartridge"
  },
  {
    "sl.no": 1358,
    item: "2629-Cement Board",
    unit: "sqm"
  },
  {
    "sl.no": 1359,
    item: "2630-Baker rod",
    unit: "metre"
  },
  {
    "sl.no": 1360,
    item: "2631-4 mm thick ACP",
    unit: "sqm"
  },
  {
    "sl.no": 1361,
    item: "2632-Fire Stop",
    unit: "metre"
  },
  {
    "sl.no": 1362,
    item: "2634-GI/Aluminium Sheet (0.8 mm thick)",
    unit: "kg"
  },
  {
    "sl.no": 1363,
    item: "2635-GI Screws of guage 10, length 25 mm for fixing cement fibre board to C Section",
    unit: "each"
  },
  {
    "sl.no": 1364,
    item: "2636-GI Screws of guage 10, length 45 mm for fixing cement fibre board to C Section",
    unit: "each"
  },
  {
    "sl.no": 1365,
    item: "2637-Vapour barrier",
    unit: "sqm"
  },
  {
    "sl.no": 1366,
    item: "2640-Clear toughned interlayed, non-wired fire resistant glass panes of minimum 11 mm thickness (120 minutes fire rating)",
    unit: "sqm"
  },
  {
    "sl.no": 1367,
    item: "2641-G.I. U beading of 1.6 mm thick G.I. sheet with ceramic tape",
    unit: "metre"
  },
  {
    "sl.no": 1368,
    item: "2642-Ceramic tape 5x20 mm size",
    unit: "metre"
  },
  {
    "sl.no": 1369,
    item: "2704-Aluminium Strip 40 mm wide and 2 mm thick",
    unit: "kilogram"
  },
  {
    "sl.no": 1370,
    item: "2708-Truf Paver (500 x 500x 40 mm)",
    unit: "sqm"
  },
  {
    "sl.no": 1371,
    item: "2709-Ceremic Tiles Pieces for Crazy Flooring ",
    unit: "quintal"
  },
  {
    "sl.no": 1372,
    item: "2710-White marble makrana second quality plain veined stone pieces for crazy flooting ",
    unit: "quintal"
  },
  {
    "sl.no": 1373,
    item: "2711-FS800H Grade Flooring Panel (Size 600 mmx600 mmx32 mm)",
    unit: "each"
  },
  {
    "sl.no": 1374,
    item: "2712-ZInc Electroplated Pedestals - 300 mm",
    unit: "each"
  },
  {
    "sl.no": 1375,
    item: "2713-Zinc Electroplated Pedestals - 450 mm",
    unit: "each"
  },
  {
    "sl.no": 1376,
    item: "2714-Zinc Electroplated Tube stringer",
    unit: "each"
  },
  {
    "sl.no": 1377,
    item: "2715-Machine Screw for Fixing ",
    unit: "each"
  },
  {
    "sl.no": 1378,
    item: "2750-8 mm thick granite stone tiles (mirror polished of all shades)",
    unit: "sqm"
  },
  {
    "sl.no": 1379,
    item: "2751-8 mm thick marble tiles (polished) Raj Nagar",
    unit: "sqm"
  },
  {
    "sl.no": 1380,
    item: "2901-Stone Aggregate (Single size): 100 mm nominal size",
    unit: "cum"
  },
  {
    "sl.no": 1381,
    item: "2902-Stone Aggregate (single size) : 80 mm nominal size",
    unit: "cum"
  },
  {
    "sl.no": 1382,
    item: "2903-Stone chippings/ screenings 4.75 mm nominla size",
    unit: "cum"
  },
  {
    "sl.no": 1383,
    item: "2904-Stone chippings/ screenings 150 micron nominal size",
    unit: "cum"
  },
  {
    "sl.no": 1384,
    item: "2908-Over burnt (Jhama) Brick Aggregate: 120 mm to 40 mm size",
    unit: "cum"
  },
  {
    "sl.no": 1385,
    item: "2909-Over burnt (jhama) Brick Aggregate: 90 mm to 40 mm siize",
    unit: "cum"
  },
  {
    "sl.no": 1386,
    item: "2910-Stone chippings/screenings 12.5/13.2 mm nominal size",
    unit: "cum"
  },
  {
    "sl.no": 1387,
    item: "2911-Stone Chippings/ screenings 10/ 11.2 mm nominal size",
    unit: "cum"
  },
  {
    "sl.no": 1388,
    item: "2914-Solvent",
    unit: "kilogram"
  },
  {
    "sl.no": 1389,
    item: "2916-Paving Asphalt VG-10 of approved quality",
    unit: "tonne"
  },
  {
    "sl.no": 1390,
    item: "3002-Polyvinyl chloride sheet 400 micron thick ",
    unit: "sqm"
  },
  {
    "sl.no": 1391,
    item: "3004-Stone ware spouts 100 mm dia 60 cm long",
    unit: "each"
  },
  {
    "sl.no": 1392,
    item: "3050-Galvanised steel corrugated sheets",
    unit: "quintal"
  },
  {
    "sl.no": 1393,
    item: "3080-Gunmetal non-return valve-vertical (screwed end)25 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1394,
    item: "3084-Gunmetal non-return valve-vertical (screwed end)32 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1395,
    item: "3088-Gunmetal non-return valve-vertical (screwed end) 40 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1396,
    item: "3092-Gunmetal non-return valve-vertical (screwed end) 50 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1397,
    item: "3096-Gunmetal non-return valve-vertical (screwed end) 65 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1398,
    item: "3213-Vitreous china Surgeon type wash basin of size 660x460 mm",
    unit: "each"
  },
  {
    "sl.no": 1399,
    item: "3228-600x120 mm glass shelf with anodised aluminium angle frame, C.P. brass brackets and guard rail of standard size",
    unit: "each"
  },
  {
    "sl.no": 1400,
    item: "3229-Vitreous china flat back wash basin 550x400 mm",
    unit: "each"
  },
  {
    "sl.no": 1401,
    item: "3300-Gunmetal non-return valve-verticlal (screwed end) 80 mm dia ",
    unit: "each"
  },
  {
    "sl.no": 1402,
    item: "3311-C.I. sluice valve (with caps) class II : 100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1403,
    item: "3314-C.I. sluice valve (with caps) class II : 125 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1404,
    item: "3317-C.I. sluice valve (with caps) class II : 150 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1405,
    item: "3320-C.I. sluice valve (with caps) class II : 200 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1406,
    item: "3321-C.I. sluice valve (with caps) class II : 250 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1407,
    item: "3326-C.I. sluice valve (with caps) class II : 300 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1408,
    item: "3327-15 mm Battery Based Sensor Pillar Cock",
    unit: "each"
  },
  {
    "sl.no": 1409,
    item: "3617-CP Brass Union 40 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1410,
    item: "3620-C.C.I. (spun) socketed soil, waste and vent pipe 1.80 metres long : 100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1411,
    item: "3621-C.C.I (spun) socketed soil, waste and vent pipe 1.80 meters long : 75 mm dia ",
    unit: "each"
  },
  {
    "sl.no": 1412,
    item: "3624-S.C.I. S&S bends with access door 100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1413,
    item: "3625-S.C.I. S&S bends with access door 75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1414,
    item: "3628-S.C.I. S&S bend 100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1415,
    item: "3629-S.C.I. S&S bend 75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1416,
    item: "3634-S.C.I. S&S heel rest sanitary  bend 100 mm dia    ",
    unit: "each"
  },
  {
    "sl.no": 1417,
    item: "3635-S.C.I  S&S heel rest sanitary bend 75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1418,
    item: "3640-S.C.I. S&S single equal junctions 100x100x100 mm",
    unit: "each"
  },
  {
    "sl.no": 1419,
    item: "3641-S.C.I. S&S single equal junctions 75x75x75 mm ",
    unit: "each"
  },
  {
    "sl.no": 1420,
    item: "3644-S.C.I. S&S single equal junctions wtih access door 100x100x100 mm ",
    unit: "each"
  },
  {
    "sl.no": 1421,
    item: "3645-S.C.I. S&S single equal junctions with access door 75x75x75 mm",
    unit: "each"
  },
  {
    "sl.no": 1422,
    item: "3650-S.C.I. S&S double equal junctions 100x100x100x100 mm",
    unit: "each"
  },
  {
    "sl.no": 1423,
    item: "3651-S.C.I. S&S double equal junctions 75x75x75x75 mm",
    unit: "each"
  },
  {
    "sl.no": 1424,
    item: "3654-S.C.I. S&S double equal junctions with access door 100x100x100x100 mm",
    unit: "each"
  },
  {
    "sl.no": 1425,
    item: "3655-S.C.I. S&S double equal junctions with access door 75x75x75x75 mm",
    unit: "each"
  },
  {
    "sl.no": 1426,
    item: "3660-S.C.I. S&S single unequal junctions 100x100x75 mm ",
    unit: "each"
  },
  {
    "sl.no": 1427,
    item: "3664-S.C.I. S&S single unequal junctions with access door 100x100x75 mm ",
    unit: "each"
  },
  {
    "sl.no": 1428,
    item: "3670-S.C.I. S&S double unequal junctions 100x100x75x75 mm",
    unit: "each"
  },
  {
    "sl.no": 1429,
    item: "3674-S.C.I. S&S double unequal junctions with access door 100x100x75x75",
    unit: "each"
  },
  {
    "sl.no": 1430,
    item: "3681-S.C.I. S&S single equal invert branch of required degree 100x100x100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1431,
    item: "3682-S.C.I. S&S single equal invert branch of required degree 75x75x75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1432,
    item: "3685-S.C.I. S&S double equal invert branch of required degree 100x100x100x100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1433,
    item: "3686-S.C.I. S&S double equal invert branch of required degree 75x75x75x75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1434,
    item: "3690-S.C.I. S&S single unequal invert branch of required degree 100x100x75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1435,
    item: "3695-S.C.I. S&S double unequal invert branch of required degree 100x100x75x75xmm dia",
    unit: "each"
  },
  {
    "sl.no": 1436,
    item: "3699-S.C.I. S&S, 75 mm offsets for 75 mm dia pipe",
    unit: "each"
  },
  {
    "sl.no": 1437,
    item: "3707-S.C.I. S&S, 150 mm offset for 75 mm dia pipe",
    unit: "each"
  },
  {
    "sl.no": 1438,
    item: "3708-S.C.I. S&S, 150 mm offset for 100 mm dia pipe",
    unit: "each"
  },
  {
    "sl.no": 1439,
    item: "3712-S.C.I. S&S, 114 mm offset for 75 mm dia pipe",
    unit: "each"
  },
  {
    "sl.no": 1440,
    item: "3713-S.C.I. S&S, 114 mm offset for 100 mm dia pipe",
    unit: "each"
  },
  {
    "sl.no": 1441,
    item: "3716-S.C.I S&S, 152 mm offset for 75 mm dia pipe",
    unit: "each"
  },
  {
    "sl.no": 1442,
    item: "3717-S.C.I. S&S, 152 mm offset for 100 mm dia pipe",
    unit: "each"
  },
  {
    "sl.no": 1443,
    item: "3728-S.C.I. S&S, door peeces 100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1444,
    item: "3729-S.C.I. S&S, door pieces 75 mm dia ",
    unit: "each"
  },
  {
    "sl.no": 1445,
    item: "3733-S.C.I. S&S, Slotted Cowl (Terminal Guard) 100 mm",
    unit: "each"
  },
  {
    "sl.no": 1446,
    item: "3734-S.C.I. S&S, Slotted Cowl (Terminal Guard) 75 mm",
    unit: "each"
  },
  {
    "sl.no": 1447,
    item: "3738-S.C.I. S&S, collars 100 mm",
    unit: "each"
  },
  {
    "sl.no": 1448,
    item: "3739-S.C.I. S&S, collars 75 mm",
    unit: "each"
  },
  {
    "sl.no": 1449,
    item: "3746-S.C.I. S&S, 75 mm offset for 75 mm dia pipe",
    unit: "each"
  },
  {
    "sl.no": 1450,
    item: "3747-S.C.I. S&S, 75 mm offset for mm dia pipe",
    unit: "each"
  },
  {
    "sl.no": 1451,
    item: "3749-Vitreous china toilet paper holder of standard size",
    unit: "each"
  },
  {
    "sl.no": 1452,
    item: "3860-560 mm dia cover with frame (Heavy duty)",
    unit: "each"
  },
  {
    "sl.no": 1453,
    item: "3861-560 mm dia cover without frame (Heavy duty)",
    unit: "each"
  },
  {
    "sl.no": 1454,
    item: "3991-Galvanized iron (1.6 +/- 0.2 mm) thick reinforcement for small series casement window/ door frame, sash, mulion & small series sliding window frame",
    unit: "metre"
  },
  {
    "sl.no": 1455,
    item: "3992-Galvanized iron (1.6 +/- 0.2mm) thick reinforcement for big series casement window/ door frame, sash mullion & small series sliding window frame",
    unit: "metre"
  },
  {
    "sl.no": 1456,
    item: "3993-Galvanized iron (1.6 +/- 0.2mm) thick reinforcement for big series casement door sash",
    unit: "metre"
  },
  {
    "sl.no": 1457,
    item: "3994-Galvanized iron (1.6 +/- 0.2mm) thick reinforcement for big series sliding window/ door sash",
    unit: "metre"
  },
  {
    "sl.no": 1458,
    item: "3995-G. I fasteners 100 x 8 mm",
    unit: "each"
  },
  {
    "sl.no": 1459,
    item: "4001-Stainless steel (Grade - 304) hollow section round/square tubes",
    unit: "kg"
  },
  {
    "sl.no": 1460,
    item: "4002-Stainless steel bolts /square bar and plates",
    unit: "kg"
  },
  {
    "sl.no": 1461,
    item: '4006-Pressed steel door fames (mild steel sheet 1.60 mm ) Profile "B"',
    unit: "metre"
  },
  {
    "sl.no": 1462,
    item: '4007-Pressed steel door fames (mild steel sheet 1.60 mm ) Profile "C"',
    unit: "metre"
  },
  {
    "sl.no": 1463,
    item: '4008-Pressed steel door fames (mild steel sheet 1.60 mm ) Profile "E"',
    unit: "metre"
  },
  {
    "sl.no": 1464,
    item: "4009-Mild steel tubes hot finished welded type",
    unit: "kilogram"
  },
  {
    "sl.no": 1465,
    item: "4010-Mild steel tubes hot finished seamless type",
    unit: "kilogram"
  },
  {
    "sl.no": 1466,
    item: "4011-Mild steel tubes electric resistant or induction butt welded ",
    unit: "kilogram"
  },
  {
    "sl.no": 1467,
    item: "4012-Circular C.I. Bok for ceiling fan",
    unit: "each"
  },
  {
    "sl.no": 1468,
    item: "4013-Pulley 40 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1469,
    item: "4201-Aluminium primer",
    unit: "Litre"
  },
  {
    "sl.no": 1470,
    item: "4202-Red oxide Zinc chromate primer ",
    unit: "Litre"
  },
  {
    "sl.no": 1471,
    item: "4203-Copper acetate",
    unit: "kilogram"
  },
  {
    "sl.no": 1472,
    item: "4204-Hydrochloric acid",
    unit: "kilogram"
  },
  {
    "sl.no": 1473,
    item: "4205-Copper chloride",
    unit: "kilogram"
  },
  {
    "sl.no": 1474,
    item: "4206-Copper nitrate",
    unit: "kilogram"
  },
  {
    "sl.no": 1475,
    item: "4207-Ammonium chloride",
    unit: "kilogram"
  },
  {
    "sl.no": 1476,
    item: "5001-Mobil oil",
    unit: "Litre"
  },
  {
    "sl.no": 1477,
    item: "5050-ss pipe 304 grades with press fit technology as per JIS 3448 Standard 48.60 mm outer dia",
    unit: "metre"
  },
  {
    "sl.no": 1478,
    item: "5743-Coloured inter locking C.C. paver block",
    unit: "sqm"
  },
  {
    "sl.no": 1479,
    item: "6001-White marble slab Makrana second quality plain veined 18 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 1480,
    item: "6007-Pink marble slab plain 18 mm thick ",
    unit: "sqm"
  },
  {
    "sl.no": 1481,
    item: "6010-Udaypur green marble slab plain 18 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 1482,
    item: "6019-Black Zebra Marble slab plain 18 mm thick ",
    unit: "sqm"
  },
  {
    "sl.no": 1483,
    item: "6501-Sand zone V (Jamuna)",
    unit: "cum"
  },
  {
    "sl.no": 1484,
    item: "7001-Brass 100 mm mortice latch and lock with 6 levers without pair of handles",
    unit: "each"
  },
  {
    "sl.no": 1485,
    item: "7003-Pair Anodised Aluminium lever handles for 100 mm mortice latch and lock",
    unit: "each"
  },
  {
    "sl.no": 1486,
    item: "7004-Vitreous china flat back wash basin 450x300 mm",
    unit: "each"
  },
  {
    "sl.no": 1487,
    item: "7005-Vitreous china 10 litres low level cistern without fittings ",
    unit: "each"
  },
  {
    "sl.no": 1488,
    item: "7006-Vitreous china 10 litres low level cistern with fittings",
    unit: "each"
  },
  {
    "sl.no": 1489,
    item: "7008-F.P.S. (non modular) clay fly ash bricks class designation 7.5",
    unit: "1000 nos"
  },
  {
    "sl.no": 1490,
    item: "7009-12.5 mm thick tapered edge gypsum plain board",
    unit: "sqm"
  },
  {
    "sl.no": 1491,
    item: "7010-Galvanised Steel celling section (size 80x26x0.50 mm)",
    unit: "metre"
  },
  {
    "sl.no": 1492,
    item: "7011-Galvanised Steel perimetre Channel (Size 20x27x30x0.50 mm)",
    unit: "metre"
  },
  {
    "sl.no": 1493,
    item: "7012-Galvanised Steel intermediate Channel (Size 15x45x15x0.90 mm) ",
    unit: "metre"
  },
  {
    "sl.no": 1494,
    item: "7013-Galvanised Steel angle hanger (Celling angle) (Size 25x10x0.50 mm)",
    unit: "metre"
  },
  {
    "sl.no": 1495,
    item: "7014-Galvanised Steel connecting clips (2.64 dia and 230 mm long GI wire)",
    unit: "each"
  },
  {
    "sl.no": 1496,
    item: "7015-Galvanised Steel soffit cleat (Size 27x37x25x0.60 mm) ",
    unit: "each"
  },
  {
    "sl.no": 1497,
    item: "7016-Joint filler",
    unit: "kilogram"
  },
  {
    "sl.no": 1498,
    item: "7017-Joint finisher",
    unit: "kilogram"
  },
  {
    "sl.no": 1499,
    item: "7018-Joint tape roll",
    unit: "roll"
  },
  {
    "sl.no": 1500,
    item: "7019-Dash fastener/chemical Fastener ",
    unit: "each"
  },
  {
    "sl.no": 1501,
    item: "7020-All drive screws (for gypsum board)",
    unit: "100 nos"
  },
  {
    "sl.no": 1502,
    item: "7021-Primer (for gypsum board)",
    unit: "Litre"
  },
  {
    "sl.no": 1503,
    item: "7022-Chlorpyriphos 20% E.C. / Lindane 20% E.C.",
    unit: "Litre"
  },
  {
    "sl.no": 1504,
    item: "7023-Chromium plated brackets (curtain rods)",
    unit: "each"
  },
  {
    "sl.no": 1505,
    item: "7024-Acid Proof cement",
    unit: "tonne"
  },
  {
    "sl.no": 1506,
    item: "7025-Self tapping pan head nickel coated mild steel screws of size 13 x 3.2 mm",
    unit: "1000 nos"
  },
  {
    "sl.no": 1507,
    item: "7026-Fibre joint tape 50 mm wide (90 metre) roll",
    unit: "each"
  },
  {
    "sl.no": 1508,
    item: "7027-M.S. Butt hinges 125x90x4 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 1509,
    item: "7028-12.5 mm thick Fully Perforated gypsum board",
    unit: "sqm"
  },
  {
    "sl.no": 1510,
    item: "7029-Galvanised wire mesh of average width of aperture 1.4 and nominal dia. of wire 0.63 mm",
    unit: "sqm"
  },
  {
    "sl.no": 1511,
    item: "7030-12.5 mm thick tapered edge gypsum fire resistant board",
    unit: "sqm"
  },
  {
    "sl.no": 1512,
    item: "7031-12.5 mm thick tapered edge gypsum moisture resistant board",
    unit: "sqm"
  },
  {
    "sl.no": 1513,
    item: "7032-Frosted glass sheet or nominal thickness 4 mm (weighing not less than 10 kg/sqm)",
    unit: "sqm"
  },
  {
    "sl.no": 1514,
    item: "7033-Nickel plated M.S. pipe 25 mm dia.",
    unit: "metre"
  },
  {
    "sl.no": 1515,
    item: "7034-Nickel plated M.S. pipe 20 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1516,
    item: "7035-Nickel palted M.S. Brackets for curtain rod 20 mm",
    unit: "each"
  },
  {
    "sl.no": 1517,
    item: "7036-Nickel plated M.S. Bracekts for curtain rod 25 mm",
    unit: "each"
  },
  {
    "sl.no": 1518,
    item: "7040-Oxidised mild steel screws 35 mm",
    unit: "100 nos"
  },
  {
    "sl.no": 1519,
    item: "7042-Mild steel conduit pipe (heavy type) ISI Marked-20 mm dia.",
    unit: "metre"
  },
  {
    "sl.no": 1520,
    item: "7043-Mild steel conduit pipe (heavy type) ISI Marked-25 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1521,
    item: "7044-Rolling shutters of 80x0.90 mm laths",
    unit: "sqm"
  },
  {
    "sl.no": 1522,
    item: "7045-Rolling shutters of 80x1.2 mm laths",
    unit: "sqm"
  },
  {
    "sl.no": 1523,
    item: "7046-Top cover of Rolling shutters 0.90 mm thick",
    unit: "metre"
  },
  {
    "sl.no": 1524,
    item: "7047-Top cover of Rolling shutters 1.20 mm thick",
    unit: "metre"
  },
  {
    "sl.no": 1525,
    item: "7048-Rawl plug 50 mm (designation 10 nos)",
    unit: "each"
  },
  {
    "sl.no": 1526,
    item: "7049-Teak wood lipping of size 25x3 mm in pelmets",
    unit: "metre"
  },
  {
    "sl.no": 1527,
    item: "7050-PU Primer",
    unit: "sqm"
  },
  {
    "sl.no": 1528,
    item: "7051-40 mm (average) PU spray having 40-45 kg/m3 density ",
    unit: "sqm"
  },
  {
    "sl.no": 1529,
    item: "7052-GI wire netting 3/4",
    unit: "sqm"
  },
  {
    "sl.no": 1530,
    item: "7053-400 G polythene sheet",
    unit: "sqm"
  },
  {
    "sl.no": 1531,
    item: "7055-Flat pressed 3 layer and graded particle board (medium density) Grade 1 Conforming to IS : 3087-18 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 1532,
    item: "7056-Almonium tee channel (heavy duty) with rollers and stop end",
    unit: "metre"
  },
  {
    "sl.no": 1533,
    item: "7059-Aluminium hanging floor door stopper with twin rubber & stopper",
    unit: "each"
  },
  {
    "sl.no": 1534,
    item: "7060-Hydraulic door closer tubular type Aluminium section body",
    unit: "each"
  },
  {
    "sl.no": 1535,
    item: "7063-Oxidised M.S. casement stay (straight peg type) 300 mm not less than 0.33 kg",
    unit: "each"
  },
  {
    "sl.no": 1536,
    item: "7064-Oxidised M.S. casement stay (straight peg type) 250 mm not less than 0.28 kg",
    unit: "each"
  },
  {
    "sl.no": 1537,
    item: "7065-Oxidised M.S. casement stay (straight peg type)200 mm not less than 0.24 kg",
    unit: "each"
  },
  {
    "sl.no": 1538,
    item: "7068-Extra for providing grilled rolling shutters with 8 mm dia M.S. rod",
    unit: "sqm"
  },
  {
    "sl.no": 1539,
    item: "7070-Chequered precast cement concrete tiles 22 mm thck using marble chips of size 6 mm - light shade using white cement",
    unit: "sqm"
  },
  {
    "sl.no": 1540,
    item: "7071-White marble Raj Nagar plain 18 mm thick upto 0.50 sqm area ",
    unit: "sqm"
  },
  {
    "sl.no": 1541,
    item: "7072-Wall mounted water closet",
    unit: "each"
  },
  {
    "sl.no": 1542,
    item: "7073-Adjustable Vetrious China Cistern with fittings",
    unit: "each"
  },
  {
    "sl.no": 1543,
    item: "7074-White Vetrious China Waterless Urinal ",
    unit: "each"
  },
  {
    "sl.no": 1544,
    item: "7075-Cistern with fittings for Waterless Urinal",
    unit: "each"
  },
  {
    "sl.no": 1545,
    item: "7076-White Vetrious Urinal",
    unit: "each"
  },
  {
    "sl.no": 1546,
    item: "7077-Acid and alkali resistant tiles 300x300 mm size, 10 mm thick",
    unit: "10 nos"
  },
  {
    "sl.no": 1547,
    item: "7087-S.C.I. Tee 150 mm",
    unit: "each"
  },
  {
    "sl.no": 1548,
    item: "7090-Expanded polystyrene type N- Normal",
    unit: "sqm"
  },
  {
    "sl.no": 1549,
    item: "7091-Expanded polystyrene type - SE",
    unit: "sqm"
  },
  {
    "sl.no": 1550,
    item: "7095-Stainless steel kitchen sink - with drain board bowl depth 250 mm",
    unit: "each"
  },
  {
    "sl.no": 1551,
    item: "7096-Stainless steel kitchen sink - with drain board 510x 1040 mm bowl depth 225 mm.",
    unit: "each"
  },
  {
    "sl.no": 1552,
    item: "7097-Stainless steel kitchen sink - with drain board 510 x 1040 mm bowl",
    unit: "each"
  },
  {
    "sl.no": 1553,
    item: "7098-Stainless steel kitchen sink - with drain board 510 x 1040 mm bowl depth 178 mm",
    unit: "each"
  },
  {
    "sl.no": 1554,
    item: "7101-Stainless steel kitchen sink - without drain board 610x510 mm bowl depth 200 mm",
    unit: "each"
  },
  {
    "sl.no": 1555,
    item: "7102-Stainless steel kitchen sink - without drain board 610x460 mm bowl depth 200 mm",
    unit: "each"
  },
  {
    "sl.no": 1556,
    item: "7103-Stainless steel kitchen sink - without drain board 470x420 mm bowl depth 178 mm",
    unit: "each"
  },
  {
    "sl.no": 1557,
    item: "7104-Coloured Orissa pattern W.C. pan 580x440 mm",
    unit: "each"
  },
  {
    "sl.no": 1558,
    item: "7105-Coloured Pedestal type W.C. pan 580x440 mm (European type)",
    unit: "each"
  },
  {
    "sl.no": 1559,
    item: "7106-Coloured Vitreous china 10 lit. low level cistern",
    unit: "each"
  },
  {
    "sl.no": 1560,
    item: "7107-Coloured (other than black)solid P.V.C. seat in European W.C. pan",
    unit: "each"
  },
  {
    "sl.no": 1561,
    item: "7112-Circular shape 450 mm dia Mirror with Plastic moulded frame ",
    unit: "each"
  },
  {
    "sl.no": 1562,
    item: "7113-Rectangular shape 453x357 mm Mirror with Plastic moulded frame",
    unit: "each"
  },
  {
    "sl.no": 1563,
    item: "7114-Oval shape 450x350 mm (outer dimension) Mirror with Plastic moulded fame",
    unit: "each"
  },
  {
    "sl.no": 1564,
    item: "7115-Rectangular shape 1500x450 mm Mirror with Plastic moulded frame ",
    unit: "each"
  },
  {
    "sl.no": 1565,
    item: "7116-Hard board 6 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 1566,
    item: "7117-Semi Rigid PVC waste pipe for sink and wash basin 32 mm dia with length not less than 700 mm i/c PVC waste fittings",
    unit: "each"
  },
  {
    "sl.no": 1567,
    item: "7118-Semi Rigid PVC waste pipe for sink and wash basin 40 mm dia with length not less than 700 mm i/c PVC waste fittings",
    unit: "each"
  },
  {
    "sl.no": 1568,
    item: "7119-Flexible (coil shaped) PVC waste pipe for sink and wash basin 32 mm dia with length not less than 700 mm i/c PVC waste fittings",
    unit: "each"
  },
  {
    "sl.no": 1569,
    item: "7120-Flexible (coil shaped) PVC waste pipe for sink and wash basin 40 mm dia with length not less than 700 mm i/c PVC waste fittings",
    unit: "each"
  },
  {
    "sl.no": 1570,
    item: "7121-Bottle Traop",
    unit: "each"
  },
  {
    "sl.no": 1571,
    item: "7122-CP Brass Single lever telephonic wall mixer of approved make",
    unit: "each"
  },
  {
    "sl.no": 1572,
    item: "7123-Coloured High density polyethylene/poly propylene 10 lit. (full flush) capacity controlled low level flushing cistern with fittings",
    unit: "each"
  },
  {
    "sl.no": 1573,
    item: "7126-White Vitreous china 10 lit. (full flush) capacity controlled low level flushing cistern with all fittings",
    unit: "each"
  },
  {
    "sl.no": 1574,
    item: "7127-Coloured Vitreous china 10 lit. (full flush) capacity controlled low level flushing cistern with all fittings",
    unit: "each"
  },
  {
    "sl.no": 1575,
    item: "7128-S.W. intercepting trap 100 mm dia ",
    unit: "each"
  },
  {
    "sl.no": 1576,
    item: "7129-S.W. intercepting trap 150 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1577,
    item: "7130-Rectangular shape 600x 450 mm precast R.C.C. manhole cover with frame - L.D. - 25",
    unit: "each"
  },
  {
    "sl.no": 1578,
    item: "7131-Square shape 450x450 mm precast R.C.C. manhole cover with frame - L.D. -25",
    unit: "each"
  },
  {
    "sl.no": 1579,
    item: "7132-Circular shape 450 mm dia precast R.C.C. manhole cover with frame L.D. -25",
    unit: "each"
  },
  {
    "sl.no": 1580,
    item: "7133-Rectangular shape 500x500 mm precast R.C.C. manhole cover with frame - M.D.-10",
    unit: "each"
  },
  {
    "sl.no": 1581,
    item: "7134-Circular shape 500 mm dia precast R.C.C. manhole cover with frame - M.D. 1 10",
    unit: "each"
  },
  {
    "sl.no": 1582,
    item: "7135-Circular shape 560 mm dia precast R.C.C.manhole cover with frame - H.D. - 20",
    unit: "each"
  },
  {
    "sl.no": 1583,
    item: "7136-Circular shape 560 mm thick shutters with frame E.H.D. -35",
    unit: "each"
  },
  {
    "sl.no": 1584,
    item: "7137-Factory made 35 mm thick shutters with laminated veneer lumber styles & rails as per TADS 15:1995 and panels of 12 mm thick plain type-I, medium density flat pressed three layer, graded particle board (FPT -I) as per IS:3087 bonded with  BWP type",
    unit: "sqm"
  },
  {
    "sl.no": 1585,
    item: "7139-Factory made 35 mm thick shutters with laminated veneer lumber styles & rails as per TADS 15:1995 and panels of 12 mm thick both sides prelaminated type - I, medium density flat pressed three layer, graded particle board (FPT - I) as per IS:3087 bonded with BWP type synthetic resin adhesive, as per IS:848",
    unit: "sqm"
  },
  {
    "sl.no": 1586,
    item: "7143-Factory made 35 mm thick shutters with laqminated veneer lumber styles & rails as per TADS 15:1995 and panels of 12 mm thick on e side prelaminated type-I, and other side balancing lamination, medium density flat pressed three layer, graded particle board (FPT-I) as per IS: 3087 bonded with BWP type synthetic resin adhesive, as per IS: 848",
    unit: "sqm"
  },
  {
    "sl.no": 1587,
    item: "7151-Factory made 30 mm thick shutters with laminated veneer lumbers styles & rails as per TADS 15:1995 and panels of sheet glass using 10 kg/sqm glass panes",
    unit: "sqm"
  },
  {
    "sl.no": 1588,
    item: "7154-Factory made 35 mm thck shutters with laminated veneer lumber styles & rails as per TADS 15:1995 and panels of galvanised wire of dia average width of aperture 1.4 mm in both directions with wire of dia 0.63 mm",
    unit: "sqm"
  },
  {
    "sl.no": 1589,
    item: "7155-Factory made 30 mm thick shutters with laminated veneer lumber styles & rauks as oer TADS 15:1995 and panels of galvanised wire gauge with average width of aperture 1.4 mm in both direction with wire of dia 0.63 mm",
    unit: "sqm"
  },
  {
    "sl.no": 1590,
    item: "7157-Laminated veneer lumber confirming to TADS 15:1995 manufactured in factory in frames of doors, windows",
    unit: "10 cud m"
  },
  {
    "sl.no": 1591,
    item: "7178-Chemical ASTMC- type I",
    unit: "kg"
  },
  {
    "sl.no": 1592,
    item: "7181-C.I. pile shoe",
    unit: "kilogram"
  },
  {
    "sl.no": 1593,
    item: "7182-M.S. clamps for pile shoe",
    unit: "kilogram"
  },
  {
    "sl.no": 1594,
    item: "7183-Bentonite",
    unit: "tonne"
  },
  {
    "sl.no": 1595,
    item: "7184-Oxidised M.S. safety chain (weighing not less than 450 gms) for door ",
    unit: "each"
  },
  {
    "sl.no": 1596,
    item: "7187-C.I. grating 150 mm dia, weighing not less than 440 gm",
    unit: "each"
  },
  {
    "sl.no": 1597,
    item: "7188-uPVC pipes (working pressure 4 kg /cm2 ) Single socketed pipe 75 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1598,
    item: "7189-uPVC pipes (working pressure 4 Kg / cm2 ) Single socketed pipe 110 mm dia ",
    unit: "metre"
  },
  {
    "sl.no": 1599,
    item: "7190-uPVC pipes (working pressure 4 kg/cm 2) Rubber  (seal) Ring 75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1600,
    item: "7191-uPVC pipes (working pressure 4 kg/cm2) Rubber (seal) Ring 110 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1601,
    item: "7192-uPVC coupler for uPVC drainage pipes 75 ,mm ",
    unit: "each"
  },
  {
    "sl.no": 1602,
    item: "7193-uPVC coupler for uPVC drainage pipes 110 mm ",
    unit: "each"
  },
  {
    "sl.no": 1603,
    item: "7194-uPVC pushfit coupler (single) 75 mm thick",
    unit: "each"
  },
  {
    "sl.no": 1604,
    item: "7195-uPVC Pushfit coupler (single) 110 mm thick",
    unit: "each"
  },
  {
    "sl.no": 1605,
    item: "7196-uPVC single equal Tee (without door) 75x75x75 mm",
    unit: "each"
  },
  {
    "sl.no": 1606,
    item: "7197-uPVC single equal Tee (without door) 110x110x110 mm",
    unit: "each"
  },
  {
    "sl.no": 1607,
    item: "7198-uPVC single equal Tee (with door) 75x75x75 mm",
    unit: "each"
  },
  {
    "sl.no": 1608,
    item: "7199-uPVC single equal Tee (with door) 110x110x110 mmmm",
    unit: "each"
  },
  {
    "sl.no": 1609,
    item: "7208-uPVC bend 87.50, 75 mm bend",
    unit: "each"
  },
  {
    "sl.no": 1610,
    item: "7209-UPVCbend 87.50, 110 mm bend",
    unit: "each"
  },
  {
    "sl.no": 1611,
    item: "7212-UPVC plain shoe 75 mm bend",
    unit: "each"
  },
  {
    "sl.no": 1612,
    item: "7213-UPVC plain shoe 110 mm bend",
    unit: "each"
  },
  {
    "sl.no": 1613,
    item: "7214-UPVC pipe clip 75 mm bend",
    unit: "each"
  },
  {
    "sl.no": 1614,
    item: "7215-UPVC pipe clip 110 mm bend",
    unit: "each"
  },
  {
    "sl.no": 1615,
    item: "7231-Resin bonded Glass wool 16 kg/m3 50 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 1616,
    item: "7232-Resin Bonded Glass wool 24 kg/m3 50 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 1617,
    item: "7233-Fibre glass tissue reinforcemet type II Grade I",
    unit: "sqm"
  },
  {
    "sl.no": 1618,
    item: "7236-Precast chequered cement tiles 22 mm thick Dark shade using ordinary cement",
    unit: "sqm"
  },
  {
    "sl.no": 1619,
    item: "7237-Precast chequered cement tiles 22 mm thick medium shade using 50% white cement 50% ordinary cement ",
    unit: "sqm"
  },
  {
    "sl.no": 1620,
    item: "7238-High Allbedo paint",
    unit: "kg"
  },
  {
    "sl.no": 1621,
    item: "7239-Epoxy paint",
    unit: "Litre"
  },
  {
    "sl.no": 1622,
    item: "7240-Fire retardant paint",
    unit: "Litre"
  },
  {
    "sl.no": 1623,
    item: "7241-Melamine polish",
    unit: "Litre"
  },
  {
    "sl.no": 1624,
    item: "7244-Table rubbed polished stone 18 mm thick (75x50 cm) Agaria Marble stone - 18 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 1625,
    item: "7245-Table rubbed polished stone 18 mm thick (75x50cm) Granite stone - 18mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 1626,
    item: "7246-Vertical load testing (INITIAL) of pipes in accordance with IS : 2911 (Part - IV) including installation of loading platform and preparation of pile head or construction of test cap and dismantling of test cap after test etc. complete as per specification and up to 50 MT capacity pile ",
    unit: "per test"
  },
  {
    "sl.no": 1627,
    item: "7247-Vertical load testing (INITIAL) of piles in accordance with IS : 2911(Part -IV) including installation of loading platform and preparation of pile head or construction of test cap and dismantling of test cap after test etc. compete as per specification & above 50MT and up to 100 MT ",
    unit: "per test"
  },
  {
    "sl.no": 1628,
    item: "7248-Vertical load testing (INIGIAL) pf piles in accordance with IS : 2911 (PART-IV) including installation of loading platform and preparation of pile head or construction of test cap and dismantling of test cap after test etc. complete as per specification & group of two ro more up to 50 MT",
    unit: "per test"
  },
  {
    "sl.no": 1629,
    item: "7249-Cyclic vertical load testing of piles in accordance with IS : 2911 (Part-IV) including prepartion of pile head etv. for Single pile above 50 tonne capacity pile and up to 100 tonnecapacity pile",
    unit: "per test"
  },
  {
    "sl.no": 1630,
    item: "7250-Cyclic vertical load testing of piles in accordance with IS : 2911(Part-IV) including preparation of pile head etc. for Single pile above 50 tonne capacity pile and up to 100 tonnecapacity pile",
    unit: "per test"
  },
  {
    "sl.no": 1631,
    item: "7251-Cyclic vertical load testing of piles in accoraance with IS : 2911 ( Part - IV) including preparation of pile head etc. for Group of two piles up to 50 tonne capacity each",
    unit: "per test"
  },
  {
    "sl.no": 1632,
    item: "7252-Lateral load testing of single pile in accordance with IS : 2911 part -IV for detemining safe allowable lateral load load on pile. up to 50 tonne capacity",
    unit: "per test"
  },
  {
    "sl.no": 1633,
    item: "7253-Lateral load testing of single pile in accordance with IS : 2911 part - IV for detemining safe allowable lateral load on pile. Above 50 tonne capacity",
    unit: "per test"
  },
  {
    "sl.no": 1634,
    item: "7254-Hardening compound",
    unit: "Litre"
  },
  {
    "sl.no": 1635,
    item: "7255-Road Marking paint (spirit based)",
    unit: "Litre"
  },
  {
    "sl.no": 1636,
    item: "7256-Superior quality road marking paint (water based)",
    unit: "Litre"
  },
  {
    "sl.no": 1637,
    item: "7257-C.P.Brass bibcock 15 mm ",
    unit: "each"
  },
  {
    "sl.no": 1638,
    item: "7258-C.P. Brass long nose bibcock 15 mm",
    unit: "each"
  },
  {
    "sl.no": 1639,
    item: "7259-C.P. Brass long body bibcock 15 mm",
    unit: "each"
  },
  {
    "sl.no": 1640,
    item: "7260-C.P. Brass stop cock (concealed) 15 mm",
    unit: "each"
  },
  {
    "sl.no": 1641,
    item: "7261-C.P. Brass angle valve 15 mm",
    unit: "each"
  },
  {
    "sl.no": 1642,
    item: "7266-Pressed clay tiles 20 mm thick 250 x 250 mm size",
    unit: "1000 nos"
  },
  {
    "sl.no": 1643,
    item: "7267- Plain ceiling tiles (BWP type phenol formaldehyde synthetic resin bonded) 600x600x12 mm)",
    unit: "each"
  },
  {
    "sl.no": 1644,
    item: "7268-Semi perforated ceiling tiles (600x600x12 mm)",
    unit: "each"
  },
  {
    "sl.no": 1645,
    item: "7269-25 mm thick particle board",
    unit: "sqm"
  },
  {
    "sl.no": 1646,
    item: "7270-30 mm thick prelaminated flush door shutter",
    unit: "sqm"
  },
  {
    "sl.no": 1647,
    item: "7271-IInd class teak wood lipping 25 mm wide x 12 mm thick",
    unit: "metre"
  },
  {
    "sl.no": 1648,
    item: "7272-25 mm thick melamine faced prelaminated three layer particle board",
    unit: "sqm"
  },
  {
    "sl.no": 1649,
    item: "7273-Resin Bonded Rockwool 48kg/m3",
    unit: "sqm"
  },
  {
    "sl.no": 1650,
    item: "7274-Glass wool 50 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 1651,
    item: "7280-Waste plastic additive",
    unit: "tonne"
  },
  {
    "sl.no": 1652,
    item: "7281-Chemical ASTMC -type II",
    unit: "kg"
  },
  {
    "sl.no": 1653,
    item: "7295-Granite of any colour, 18 mm thick (slab area upto 0.50 sqm)",
    unit: "sqm"
  },
  {
    "sl.no": 1654,
    item: "7296-Granite of any colour,30 mm thick (slab area up to 0.50 sqm) ",
    unit: "sqm"
  },
  {
    "sl.no": 1655,
    item: "7297-Granite of any colour, 18 mm thick (slab area above 0.50 sqm)",
    unit: "sqm"
  },
  {
    "sl.no": 1656,
    item: "7306-Aluminium T or L Sections",
    unit: "kilogram"
  },
  {
    "sl.no": 1657,
    item: "7307-For flush door shutters Extra for providing teak veneering on one side instead of commercial veneering ",
    unit: "sqm"
  },
  {
    "sl.no": 1658,
    item: "7309-Paving Asphalt of grade VG-30 of approved quality",
    unit: "tonne"
  },
  {
    "sl.no": 1659,
    item: "7312-Expandable fastener with plastic sleeve and M.S.screws, 25 mm long ",
    unit: "each"
  },
  {
    "sl.no": 1660,
    item: "7313-Expandable fastener with plastic sleeve and M.S.screws, 32 mm long ",
    unit: "each"
  },
  {
    "sl.no": 1661,
    item: "7314-Expandable fastener with plastic sleeve and M.S. screws, 40 mm long ",
    unit: "each"
  },
  {
    "sl.no": 1662,
    item: "7315-Expandable fastener with plastic sleeve and M.S. screws, 50 mm long ",
    unit: "each"
  },
  {
    "sl.no": 1663,
    item: "7318-Plasticizer / super plasticizer",
    unit: "kilogram"
  },
  {
    "sl.no": 1664,
    item: "7319-wall form panel 1250x500 mm",
    unit: "each"
  },
  {
    "sl.no": 1665,
    item: "7320-Tie bolt 12 mm dia 100 mm length",
    unit: "each"
  },
  {
    "sl.no": 1666,
    item: "7321-Tie bolt 12 mm dia 150 mm length",
    unit: "each"
  },
  {
    "sl.no": 1667,
    item: "7322-Tie bolt 20 mm dia 150 mm length",
    unit: "each"
  },
  {
    "sl.no": 1668,
    item: "7323-Tile bolt 20 mm dia 225 mm length",
    unit: "each"
  },
  {
    "sl.no": 1669,
    item: "7324-Spring coil 12 mm",
    unit: "each"
  },
  {
    "sl.no": 1670,
    item: "7325-Plastic cone 12 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1671,
    item: "7326-Corner angle 45x45x5 mm 1.50 m long",
    unit: "each"
  },
  {
    "sl.no": 1672,
    item: "7327-100 mm channel shoulder 2.5 m long",
    unit: "each"
  },
  {
    "sl.no": 1673,
    item: "7328-Double clip (bridge clip)",
    unit: "each"
  },
  {
    "sl.no": 1674,
    item: "7329-Single clip",
    unit: "each"
  },
  {
    "sl.no": 1675,
    item: "7330-M.S. Tube 40 mm dia ",
    unit: "metre"
  },
  {
    "sl.no": 1676,
    item: "7331-Wall form panel 1250x450xmm",
    unit: "each"
  },
  {
    "sl.no": 1677,
    item: "7332-Corner angle 45x45x5 mm 2.50 long",
    unit: "each"
  },
  {
    "sl.no": 1678,
    item: "7333-Column clamp 450x1070 mm",
    unit: "each"
  },
  {
    "sl.no": 1679,
    item: "7334-Prop 2 m (2-3.5m)",
    unit: "each"
  },
  {
    "sl.no": 1680,
    item: "7335-Binding wire",
    unit: "kilogram"
  },
  {
    "sl.no": 1681,
    item: "7338-Gun metal cramp",
    unit: "kilogram"
  },
  {
    "sl.no": 1682,
    item: "7339-Stainless steel cramp",
    unit: "kilogram"
  },
  {
    "sl.no": 1683,
    item: "7340-Stainless steel pin",
    unit: "kg"
  },
  {
    "sl.no": 1684,
    item: "7342-Adjustable span ESO+SI (2.35-3.40)",
    unit: "each"
  },
  {
    "sl.no": 1685,
    item: "7343-Adjustable telescopic prop 3 m (2.02-3.75m)",
    unit: "each"
  },
  {
    "sl.no": 1686,
    item: "7344-Beam clamp 300-380 mm (450-1070 mm)",
    unit: "each set"
  },
  {
    "sl.no": 1687,
    item: "7345-Prop 4 m",
    unit: "each"
  },
  {
    "sl.no": 1688,
    item: "7346-Double coupler",
    unit: "each"
  },
  {
    "sl.no": 1689,
    item: "7347-Cadmium plated full threaded steel screws (30x4 mm dia.)",
    unit: "100 nos"
  },
  {
    "sl.no": 1690,
    item: "7348-Aluminium washer 2 mm thick 15 mm dia",
    unit: "100 nos"
  },
  {
    "sl.no": 1691,
    item: "7349-12 mm M.S. 'U' beading ",
    unit: "metre"
  },
  {
    "sl.no": 1692,
    item: "7354-Plastic encapsulated  M.S. foor rest 30x20x15 cm",
    unit: "each"
  },
  {
    "sl.no": 1693,
    item: "7358-Flushing Cistern P.V.C. 10 lts capacity (low level) (white) (with fittings, accessories  and flush pipe)",
    unit: "each"
  },
  {
    "sl.no": 1694,
    item: "7359-P.V.C. automatic flushing cistern 5 lts capacity",
    unit: "each"
  },
  {
    "sl.no": 1695,
    item: "7361-P.V.C. Automatic flushing cistern  10 lts capacity",
    unit: "each"
  },
  {
    "sl.no": 1696,
    item: "7363-15 mm C.P. brass tap with elbow operation lever",
    unit: "each"
  },
  {
    "sl.no": 1697,
    item: "7364-White glazed fire clay draining board 600x450x25 mm",
    unit: "each"
  },
  {
    "sl.no": 1698,
    item: "7366-Glass reinforced Gypsum (GRG) board 12.5 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 1699,
    item: "7367-Galvanised M.S. sheet 0.5 mm thick pressed channel section of size 50x32 mm",
    unit: "metre"
  },
  {
    "sl.no": 1700,
    item: "7369-Galvanised M.S. sheet 0.50 mm thick pressed stud. 48x34x36 mm ",
    unit: "metre"
  },
  {
    "sl.no": 1701,
    item: "7375-G.I. flush pipe and C.P. brass spreader including C.P. connecting pipe Single lipped urinal",
    unit: "each"
  },
  {
    "sl.no": 1702,
    item: "7376-G.I. flush pipe and C.P. brass spreader including C.P. connecting pipe Range of two lipped urinals",
    unit: "each"
  },
  {
    "sl.no": 1703,
    item: "7377-G.I. flush pipe and C.P. brass spreader including C.P. connecting pipe Range of three lipped urinals",
    unit: "each"
  },
  {
    "sl.no": 1704,
    item: "7378-G.I. flush pipe and C.P. brass spreader including C.P. connecting pipe Range of four lipped urinals ",
    unit: "each"
  },
  {
    "sl.no": 1705,
    item: "7379-White vitreous china clay half stall urinal flat back 580x380x350 mm or angle back 450x375x350 mm with waste fittings as per IS: 2556",
    unit: "each"
  },
  {
    "sl.no": 1706,
    item: "7380-Precast R.C.C. grating with frame 500x450 mm horizontal grating ",
    unit: "each"
  },
  {
    "sl.no": 1707,
    item: "7381-Precast R.C.C. grating with frame 450x100 mm vertical grating ",
    unit: "each"
  },
  {
    "sl.no": 1708,
    item: "7382-Bitumen emulsion rapid setting (R.S.) confirming to IS: 8887",
    unit: "tonne"
  },
  {
    "sl.no": 1709,
    item: "7383-12 mm dia 50 mm long wedge type expanded zinc alloy dash fastener",
    unit: "each"
  },
  {
    "sl.no": 1710,
    item: "7385-3 mm thick translucent white acrylic plastic sheet",
    unit: "sqm"
  },
  {
    "sl.no": 1711,
    item: "7386-12 mm thick particle board ceiling tile",
    unit: "sqm"
  },
  {
    "sl.no": 1712,
    item: "7387-Spigot for standard jointing",
    unit: "kilogram"
  },
  {
    "sl.no": 1713,
    item: "7388-Dash hold fastener 12.5 mm dia, 50 mm long with 6 mm dia bolt",
    unit: "each"
  },
  {
    "sl.no": 1714,
    item: "7389-Anodising 15 microns on aluminium sections",
    unit: "kilogram"
  },
  {
    "sl.no": 1715,
    item: "7390-Neoprene / EPDM rubber gasket ",
    unit: "metre"
  },
  {
    "sl.no": 1716,
    item: "7391-Anodising 25 microns on aluminium sections ",
    unit: "kilogram"
  },
  {
    "sl.no": 1717,
    item: "7392-Powder coating 50 microns on aluminium sections ",
    unit: "kilogram"
  },
  {
    "sl.no": 1718,
    item: "7393-Polyester powder coating 50 microns on aluminium sections",
    unit: "kilogram"
  },
  {
    "sl.no": 1719,
    item: "7394-Double action hydraulic floor spring with stainless steel cover plate ",
    unit: "each"
  },
  {
    "sl.no": 1720,
    item: "7395-6 mm dia. G.I adjustable hangers including clips (up to 1.2 m length)",
    unit: "each"
  },
  {
    "sl.no": 1721,
    item: "7396-Double action hydraulic floor spring with brass cover plate ",
    unit: "each"
  },
  {
    "sl.no": 1722,
    item: "7397-Base Jack",
    unit: "each"
  },
  {
    "sl.no": 1723,
    item: "7398-Challies",
    unit: "each"
  },
  {
    "sl.no": 1724,
    item: "7399-Cup locks",
    unit: "each"
  },
  {
    "sl.no": 1725,
    item: "7400-15 mm PTMT bib cock",
    unit: "each"
  },
  {
    "sl.no": 1726,
    item: "7401-15 mm PTMT bib cock with flange (fancy)",
    unit: "each"
  },
  {
    "sl.no": 1727,
    item: "7402-15 mm PTMT bib cock long body with flange",
    unit: "each"
  },
  {
    "sl.no": 1728,
    item: "7403-15 mm PTMT bib stop cock (male thread)",
    unit: "each"
  },
  {
    "sl.no": 1729,
    item: "7405-20 mm dia. PTMT bib stop cock",
    unit: "each"
  },
  {
    "sl.no": 1730,
    item: "7406-PTMT pillar cock",
    unit: "each"
  },
  {
    "sl.no": 1731,
    item: "7407-PTMT push cock 15 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1732,
    item: "7408-PTMT push cock 12 mm dia 20 mm BSP",
    unit: "each"
  },
  {
    "sl.no": 1733,
    item: "7409-PTMT grating 100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1734,
    item: "7410-PTMT Pillar cock (fancy) 15 mm foam flow",
    unit: "each"
  },
  {
    "sl.no": 1735,
    item: "7411-125 mm grating with waste hole",
    unit: "each"
  },
  {
    "sl.no": 1736,
    item: "7412-Rectangular type with openable circular lid 150 mm size 18 mm high with 100 mm dia (110 gm)",
    unit: "each"
  },
  {
    "sl.no": 1737,
    item: "7415-Double acting air valve 50 mm ",
    unit: "each"
  },
  {
    "sl.no": 1738,
    item: "7416-Double acting air valve 80 mm",
    unit: "each"
  },
  {
    "sl.no": 1739,
    item: "7417-Double acting air valve 100 mm",
    unit: "each"
  },
  {
    "sl.no": 1740,
    item: "7418-Water meter (including testing charges) 80 mm",
    unit: "each"
  },
  {
    "sl.no": 1741,
    item: "7419-Water meter (including testing charges)  150 mm",
    unit: "each"
  },
  {
    "sl.no": 1742,
    item: "7420-Water meter (including testing charges) 150 mm",
    unit: "each"
  },
  {
    "sl.no": 1743,
    item: "7421-Water meter (including testing charges) 200 mm",
    unit: "each"
  },
  {
    "sl.no": 1744,
    item: "7422-Dirt box strainer 80 mm",
    unit: "each"
  },
  {
    "sl.no": 1745,
    item: "7423-Dirt box strainer 100 mm",
    unit: "each"
  },
  {
    "sl.no": 1746,
    item: "7424-Dirt box strainer 150 mm",
    unit: "each"
  },
  {
    "sl.no": 1747,
    item: "7425-Dirt box strainer 200 mm",
    unit: "each"
  },
  {
    "sl.no": 1748,
    item: "7426-Cat's eye",
    unit: "each"
  },
  {
    "sl.no": 1749,
    item: "7427-Water stops Serrated with central bulb (225 mm wide, 8-11 mm thick)",
    unit: "metre"
  },
  {
    "sl.no": 1750,
    item: "7428-Water stops Dumb bell with central bulb",
    unit: "metre"
  },
  {
    "sl.no": 1751,
    item: "7429-Kickers",
    unit: "metre"
  },
  {
    "sl.no": 1752,
    item: "7430-Wedge expansion hold fastener 1/4 or 6 mm",
    unit: "each"
  },
  {
    "sl.no": 1753,
    item: "7431-Wedge expansion hold fastener 3/8 or 10 mm",
    unit: "each"
  },
  {
    "sl.no": 1754,
    item: "7432-Wedge expansion hold fastener 1/2",
    unit: "each"
  },
  {
    "sl.no": 1755,
    item: "7439-8 mm thick (mirror polished tiles machine cut edge) Raj Nagar white",
    unit: "sqm"
  },
  {
    "sl.no": 1756,
    item: "7442-Wheel 75 mm dia. 40 mm wide",
    unit: "each"
  },
  {
    "sl.no": 1757,
    item: "7443-Aluminium single cleat of size 30x32x3 mm",
    unit: "each"
  },
  {
    "sl.no": 1758,
    item: "7444-Aluminium grip strip of 50x12x2 mm",
    unit: "each"
  },
  {
    "sl.no": 1759,
    item: "7445-25 mm thick prelaminated flush door shutter both side decorative",
    unit: "sqm"
  },
  {
    "sl.no": 1760,
    item: "7449-Aluminium U beading ",
    unit: "kilogram"
  },
  {
    "sl.no": 1761,
    item: "7451-Glass sheet (pin headed ) 4 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 1762,
    item: "7452-Raj nagar plain white marble (table rubbed add polished ) 18 mm thick (slab area upto 0.50 sqm)",
    unit: "sqm"
  },
  {
    "sl.no": 1763,
    item: "7453-Raj nagar plain white marble (table rubbed and polished ) 18 mm thick (slab area more than 0.50 sqm)",
    unit: "sqm"
  },
  {
    "sl.no": 1764,
    item: "7466-Second class deodar teak wood lipping 30 mm wide x 12 mm thick ",
    unit: "metre"
  },
  {
    "sl.no": 1765,
    item: "7468-Veneered particle board with commercial veneering on both sides 12 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 1766,
    item: "7477-Prelaminated particle board with one side decorative and other side balancing lamination, flat pressed 3 layer & graded (medium density) Grade I, Type II conforming to IS:12823 (exterior grade) 12 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 1767,
    item: "7478-Prelaminated particle board with one side decorative and other side balancing lamination, flat pressed 3 layer & graded (medium density) Grade I, Type II conforming to IS:12823 (exterior grade) 18 mm thick ",
    unit: "sqm"
  },
  {
    "sl.no": 1768,
    item: "7479-Prelaminated particle board with one side decorative and other side balancing lamination, flat pressed 3 layer & graded (medium density) Grade I, Type II conforming to IS:12823 (exterior grade) 25 mm thick ",
    unit: "sqm"
  },
  {
    "sl.no": 1769,
    item: "7480-Prelaminated particle board with both side decorative lamination, flat pressed 3 layer & grade ( medium density ) Grade I, Type II conforming to IS: 12823 (exterior grade) 12 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 1770,
    item: "7485-Oxidised M.S. hinges finished with nickel plating 50 mm (Pver all width)",
    unit: "metre"
  },
  {
    "sl.no": 1771,
    item: "7486-Oxidised M.S. hinges finished with nickel plating 65 mm (Over all width)",
    unit: "metre"
  },
  {
    "sl.no": 1772,
    item: "7491-PTMT - Waste Coupling 31/32 mm ",
    unit: "each"
  },
  {
    "sl.no": 1773,
    item: "7492-PTMT - Waste Coupling 38/40 mm",
    unit: "each"
  },
  {
    "sl.no": 1774,
    item: "7493-PTMT - Bottle Trap 31/32 mm",
    unit: "each"
  },
  {
    "sl.no": 1775,
    item: "7494-PTMT - Bottle Trap 38/40 mm",
    unit: "each"
  },
  {
    "sl.no": 1776,
    item: "7495-PTMT - Ball Cock 15 mm Complete with Epoxy Coated Aluminium Rod & H.D. Ball",
    unit: "each"
  },
  {
    "sl.no": 1777,
    item: "7496-PTMT - Ball Cock 120 mm Complete with Epoxy Coated Aluminium Rod & H.D. Ball",
    unit: "each"
  },
  {
    "sl.no": 1778,
    item: "7497-PTMT - Ball Cock 25 mm Complete with Epoxy Coated Aluminium Rod & H.D. Ball",
    unit: "each"
  },
  {
    "sl.no": 1779,
    item: "7498-PTMT - Ball Cock 40 mm Complete with Epoxy Coated Aluminium Rod & H.D. Ball",
    unit: "each"
  },
  {
    "sl.no": 1780,
    item: "7499-PTMT - Ball Cock 50 mm Complete with Epoxy Coated Aluminium Rod & H.D. Ball",
    unit: "each"
  },
  {
    "sl.no": 1781,
    item: "7500-PTMT - Angle Stope cock with Flange 15 mm",
    unit: "each"
  },
  {
    "sl.no": 1782,
    item: "7501-PTMT - Swiveling shower 15 mm",
    unit: "each"
  },
  {
    "sl.no": 1783,
    item: "7503-PTMT - Liquid Soap Container of 400 ml capacity",
    unit: "each"
  },
  {
    "sl.no": 1784,
    item: "7504-PTMT - Towel Ring 215x200x37 mm",
    unit: "each"
  },
  {
    "sl.no": 1785,
    item: "7505-PTMT - Towel Rail (450 mm)",
    unit: "each"
  },
  {
    "sl.no": 1786,
    item: "7506-PTMT - Towel Rail (600 mm)",
    unit: "each"
  },
  {
    "sl.no": 1787,
    item: "7507-PTMT - Shelf 450x124x36 mm",
    unit: "each"
  },
  {
    "sl.no": 1788,
    item: "7508-PTMT - Urinal Spreader 15 mm",
    unit: "each"
  },
  {
    "sl.no": 1789,
    item: "7509-PTMT - Soap Dish/Holder 138x102x75 mm",
    unit: "each"
  },
  {
    "sl.no": 1790,
    item: "7512-PTMT - handle 125x34x24 mm",
    unit: "each"
  },
  {
    "sl.no": 1791,
    item: "7513-PTMT - handle150x34x24 mm",
    unit: "each"
  },
  {
    "sl.no": 1792,
    item: "7514-PTMT - butt hinges 75x60x10 mm",
    unit: "each"
  },
  {
    "sl.no": 1793,
    item: "7515-PTMT - butt hinges 100x75x10 mm",
    unit: "each"
  },
  {
    "sl.no": 1794,
    item: "7516-PTMT - Tower bolt 152x42x18 mm",
    unit: "each"
  },
  {
    "sl.no": 1795,
    item: "7517-PTMT - Tower bolt 202x42x18 mm",
    unit: "each"
  },
  {
    "sl.no": 1796,
    item: "7518-PTMT - door catcher 72x42 mm",
    unit: "each"
  },
  {
    "sl.no": 1797,
    item: "7552-Coir veneered board 4 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 1798,
    item: "7553-Coir veneered board 6  mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 1799,
    item: "7555-Coir veneered board 12 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 1800,
    item: "7556-Coir veneered board 18 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 1801,
    item: "7621-Hubless centrifugally cast (spun) iron pipes as per IS 15905 - 100 mm dia (3000 mm length pipe)",
    unit: "metre"
  },
  {
    "sl.no": 1802,
    item: "7622-Hubless centrifugally cast (spun) iron pipes as per IS 15905 - 75 mm dia (3000 mm length pipe)",
    unit: "metre"
  },
  {
    "sl.no": 1803,
    item: "7623-Hubless centrifugally cast (spun) iron plain bend as per IS 15905 - 100 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1804,
    item: "7624-Hubless centrifugally cast (spun) iron plain bend as per IS 15905 - 75 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1805,
    item: "7625-Hubless centrifugally cast (spun) iron double equal plain junction as per IS 15905 - 100x100x100x100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1806,
    item: "7626-Hubless centrifugally cast (spun) iron double equal plain junction as per IS 15905 - 75x75x75x75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1807,
    item: "7627-Hubless centrifugally cast (Spun) iron single equal plain junction as per IS 15905 - 100x100x100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1808,
    item: "7628-Hubless centrifugally cast (Spun) iron single equal plain junction as per IS 15905 - 75x75x75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1809,
    item: "7629-Hubless centrifugally cast (spun) iron double unequal plain junction as per IS 15905 - 100x100x75x75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1810,
    item: "7630-Hubless centrifugally cast (Spun) iron single unequal plain junction as per IS 15905 - 100x100x75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1811,
    item: "7631-Hubless centrifugally cast (spun) irong double equal plain invert branch as per IS 15905 - 100x100x100x100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1812,
    item: "7632-Hubless centrifugally cast (spun) iron single equal plain invert branch as per 15905 - 100x100x100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1813,
    item: "7633-Hubless centrifugally cast (spun) iron single equal plain invert branch as per IS 15905 - 75x75x75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1814,
    item: "7634-Hubless centrifugally cast (Spun) iron single unequal plain invert branch 45 degree as per IS 15905 - 100x100x75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1815,
    item: "7635-Hubless centrifugally cast (spun) iron 65 mm offset with 100 mm dia pipe as per IS 15905",
    unit: "each"
  },
  {
    "sl.no": 1816,
    item: "7636-Hubless centrifugally cast (Spun) iron 65 mm offset with 75 mm dia pipe as per IS 15905",
    unit: "each"
  },
  {
    "sl.no": 1817,
    item: "7637-Hubless centrifugally cast (Spun) iron 130 mm offset with 100 mm dia pipe per IS 15905",
    unit: "each"
  },
  {
    "sl.no": 1818,
    item: "7638-Hubless centrifugally cast (Spun) iron 130 mm offset with 75 mm dia pipe per IS 15905",
    unit: "each"
  },
  {
    "sl.no": 1819,
    item: "7639-Hubless centrifugally cast (Spun) iron bend with acess door - 100 mm dia as per 15905",
    unit: "each"
  },
  {
    "sl.no": 1820,
    item: "7640-Hubless centrifugally cast (spun) iron bend with access door - 75\nmm dia as per IS 15905",
    unit: "each"
  },
  {
    "sl.no": 1821,
    item: "7641-Hubless centrifugally cast (spun) iron terminal guard (slotted cowl) - 100 mm dia as per IS 15905",
    unit: "each"
  },
  {
    "sl.no": 1822,
    item: "7642-Hubless centrifugally cast (spun) iron trap with 100 mm inlet and 100 mm outlet as per IS 15905",
    unit: "each"
  },
  {
    "sl.no": 1823,
    item: "7643-Hubless centrifugally cast (spun) iron trap with 100 mm inlet and 75 mm outlet as per IS 15905",
    unit: "each"
  },
  {
    "sl.no": 1824,
    item: "7644-SS 304 grade shielded coupling with EPDM rubber gasket for 100 mm dia Hubless centrifugally cast (spun) iron",
    unit: "each"
  },
  {
    "sl.no": 1825,
    item: "7645-SS 304 grade shielded coupling with EPDM rubber gasket for 75 mm dia Hubless centrifugally cast (spun) iron",
    unit: "each"
  },
  {
    "sl.no": 1826,
    item: "7651-Ductile Iron class K - 9 pipe Conforming to I.S. 8329 100 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1827,
    item: "7652-Ductile Iron class K - 9 pipe Conforming to I.S. 8329 150 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1828,
    item: "7653-Ductile Iron class K - 9 pipe Conforming to I.S. 8329 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1829,
    item: "7654-Ductile Iron class K - 9 pipe Conforming to I.S. 8329 - 250 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1830,
    item: "7655-Ductile Iron class K - 9 pipe Conforming to I.S. 8329 - 300 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1831,
    item: "7656-Ductile Iron class K - 9 pipe Conforming to I.S. 8329 - 350 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1832,
    item: "7657-Ductile Iron class K - 9 pipe Conforming to I.S. 8329 - 400 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1833,
    item: "7658-Ductile Iron class K - 9 pipe Conforming to I.S. 8329- 450 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1834,
    item: "7659-Ductile Iron class K - 9 pipe Conforming to I.S. 8329 - 500 mm dia ",
    unit: "metre"
  },
  {
    "sl.no": 1835,
    item: "7660-Ductile Iron class K - 9 pipe Conforming to I.S. 8329 - 600 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1836,
    item: "7661-Ductile Iron class K - 9 pipe Conforming to I.S. 8329 - 700 mm dia ",
    unit: "metre"
  },
  {
    "sl.no": 1837,
    item: "7662-Ductile Iron class K - 9 pipe Conforming to I.S. 8329 - 750 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1838,
    item: "7663-Ductile Iron class K - 9 pipe Conforming to I.S. 8329 - 800 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1839,
    item: "7664-Ductile Iron class K - 9 pipe Conforming to I.S. 8329 - 900 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1840,
    item: "7665-Ductile Iron class K - 9 pipe Conforming to I.S. 8329 -1000 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1841,
    item: "7666-Rubber Gaskets conforming to I.S. 5382 of S.B.R quality 100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1842,
    item: "7668-Rubber Gaskets conforming to I.S. 5382 of S.B.R quality  150 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1843,
    item: "7669-Rubber Gaskets conforming to I.S. 5382 of S.B.R quality 200 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1844,
    item: "7670-Rubber Gaskets conforming to I.S. 5382 of S.B.R quality 250  mm dia",
    unit: "each"
  },
  {
    "sl.no": 1845,
    item: "7671-Rubber Gaskets conforming to I.S. 5382 of S.B.R quality 300  mm dia",
    unit: "each"
  },
  {
    "sl.no": 1846,
    item: "7672-Rubber Gaskets conforming to I.S. 5382 of S.B.R quality 350 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1847,
    item: "7673-Rubber Gaskets conforming to I.S. 5382 of S.B.R quality 400  mm dia",
    unit: "each"
  },
  {
    "sl.no": 1848,
    item: "7674-Rubber Gaskets conforming to I.S. 5382 of S.B.R quality 450  mm dia",
    unit: "each"
  },
  {
    "sl.no": 1849,
    item: "7675-Rubber Gaskets conforming to I.S. 5382 of S.B.R quality 500 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1850,
    item: "7676-Rubber Gaskets conforming to I.S. 5382 of S.B.R quality 600 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1851,
    item: "7677-Rubber Gaskets conforming to I.S. 5382 of S.B.R quality 700 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1852,
    item: "7678-Rubber Gaskets conforming to I.S. 5382 of S.B.R quality 750 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1853,
    item: "7679-Rubber Gaskets conforming to I.S. 5382 of S.B.R quality 800 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1854,
    item: "7680-Rubber Gaskets conforming to I.S. 5382 of S.B.R quality 900 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1855,
    item: "7681-Rubber Gaskets conforming to I.S. 5382 of S.B.R quality 1000 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1856,
    item: "7682-Ductile Iron K-12 specials suitable for push on jointing upto 600 mm dia",
    unit: "quintal"
  },
  {
    "sl.no": 1857,
    item: "7683-Ductile Iron K-12 specials suitable for push on jointing over 600 mm dia",
    unit: "quintal"
  },
  {
    "sl.no": 1858,
    item: "7684-Ductile Iron specials suitable for mechanical jointing as per I.S. 9523 utp 600 mm dia",
    unit: "quintal"
  },
  {
    "sl.no": 1859,
    item: "7685-Ductile Iron specials suitable for mechanical jointing as per I.S. 9523 upto 600 mm dia",
    unit: "quintal"
  },
  {
    "sl.no": 1860,
    item: "7686-Ductile Iron Pipe Class K-9 flanges and welding 100 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1861,
    item: "7687-Ductile Iron Pipe Class K-9 flanges and welding 150 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1862,
    item: "7688-Ductile Iron Pipe Class K-9 flanges and welding 200 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1863,
    item: "7689-Ductile Iron Pipe Class K-9 flanges and welding 250 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1864,
    item: "7690-Ductile Iron Pipe Class K-9 flanges and welding 300 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1865,
    item: "7691-Ductile Iron Pipe Class K-9 flanges and welding 350 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1866,
    item: "7692-Ductile Iron Pipe Class K-9 flanges and welding 400 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1867,
    item: "7693-Ductile Iron Pipe Class K-9 flanges and welding 450 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1868,
    item: "7694-Ductile Iron Pipe Class K-9 flanges and welding 500 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1869,
    item: "7695-Ductile Iron Pipe Class K-9 flanges and welding 600 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1870,
    item: "7696-Ductile Iron Pipe Class K-9 flanges and welding 700 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1871,
    item: "7697-S&S Centrifugally (Spun) C.I. Pipe class LA 100 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1872,
    item: "7698-S&S Centrifugally (Spun) C.I. Pipe class LA 125 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1873,
    item: "7699-S&S Centrifugally (Spun) C.I. Pipe class LA 150 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1874,
    item: "7700-S&S Centrifugally (Spun) C.I. Pipe class LA 200 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1875,
    item: "7701-S&S Centrifugally (Spun) C.I. Pipe class LA 250 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1876,
    item: "7702-S&S Centrifugally (Spun) C.I. Pipe class LA 300 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1877,
    item: "7703-S&S Centrifugally (Spun) C.I. Pipe class LA  350 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1878,
    item: "7704-S&S Centrifugally (Spun) C.I. Pipe class LA 400 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1879,
    item: "7705-S&S Centrifugally (Spun) C.I. Pipe class LA 450 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1880,
    item: "7706-S&S Centrifugally (Spun) C.I. Pipe class LA 500 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1881,
    item: "7707-S&S Centrifugally (Spun) C.I. Pipe class LA 600 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1882,
    item: "7708-S&S Centrifugally (Spun) C.I. Pipe specials as per IS 1538 suitable for lead jointing up to 300 mm dia",
    unit: "quintal"
  },
  {
    "sl.no": 1883,
    item: "7709-S&S Centrifugally (Spun) C.I. Pipe specials as per IS 1538 suitable for lead jointing over  300 mm dia",
    unit: "quintal"
  },
  {
    "sl.no": 1884,
    item: "7710-S&S Centrifugally (Spun) C.I. Pipe specials suitable for mechanical joint as per I.S. 13382 up to 300 mm dia ",
    unit: "quintal"
  },
  {
    "sl.no": 1885,
    item: "7711-S & S Centrifugally (SPUN) C.I. Pipe Specials suitable for mechanical joint as per IS 13382 over 300 mm dia",
    unit: "quintal"
  },
  {
    "sl.no": 1886,
    item: "7712-Screwed double flanged centrifugally cast (spun) C.I Pipe pf Class B confroming to I.S. 1536.- 100 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1887,
    item: "7713-Screwed double flanged centrifugally cast (spun) C.I. Pipe of Class B conforming to I.S. 1536, - 150 mm dia ",
    unit: "metre"
  },
  {
    "sl.no": 1888,
    item: "7714-Screwed double flanged centrifugally cast (spun) C.I. Pipe of Class B conforming to I.S. 1536 - 200 mm dia ",
    unit: "metre"
  },
  {
    "sl.no": 1889,
    item: "7715-Screwed double flanged centrifugally cast (spun) C.I. Pipe of Class B conforming to I.S. 1536, - 250 mm dia ",
    unit: "metre"
  },
  {
    "sl.no": 1890,
    item: "7716-Screwed double flanged centrifugally cast (spun) C.I. Pipe of Class B conforming to I.S. 1536, - 300 mm dia ",
    unit: "metre"
  },
  {
    "sl.no": 1891,
    item: "7717-Screwed double flanged centrifugally cast (spun) C.I. Pipe of Class B conforming to I.S. 1536, - 350 mm dia ",
    unit: "metre"
  },
  {
    "sl.no": 1892,
    item: "7718-Screwed double flanged centrifugally cast (spun) C.I. Pipe of Class B conforming to I.S. 1536, - 400 mm dia ",
    unit: "metre"
  },
  {
    "sl.no": 1893,
    item: "7719-Screwed double flanged centrifugally cast (spun) C.I. Pipe of Class B conforming to I.S. 1536, - 450 mm dia ",
    unit: "metre"
  },
  {
    "sl.no": 1894,
    item: "7720-Screwed double flanged centrifugally cast (spun) C.I. Pipe of Class B conforming to I.S. 1536, - 500 mm dia ",
    unit: "metre"
  },
  {
    "sl.no": 1895,
    item: "7721-Screwed double flanged centrifugally cast (spun) C.I. Pipe of Class B conforming to I.S. 1536, - 600 mm dia ",
    unit: "metre"
  },
  {
    "sl.no": 1896,
    item: "7722-Ductile Iron Class K- 7 pipe conforming to I.S.8329 - 100 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1897,
    item: "7723-Ductile Iron Class K - 7 pipe conforming to I.S. 8329 - 150 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1898,
    item: "7724-Ductile Iron Class K - 7 pipe conforming to I.S. 8329 - 200 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1899,
    item: "7725-Ductile Iron Class K - 7 pipe conforming to I.S. 8329 - 250 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1900,
    item: "7726-Ductile Iron Class K - 7 pipe conforming to I.S. 8329 - 300 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1901,
    item: "7727-Ductile Iron Class K - 7 pipe conforming to I.S. 8329 - 350 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1902,
    item: "7728-Ductile Iron Class K - 7 pipe conforming to I.S. 8329 - 400 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1903,
    item: "7729-Ductile Iron Class K - 7 pipe conforming to I.S. 8329 - 450 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1904,
    item: "7730-Ductile Iron Class K - 7 pipe conforming to I.S. 8329 - 500 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1905,
    item: "7731-Ductile Iron Class K - 7 pipe conforming to I.S. 8329 - 600 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1906,
    item: "7732-Ductile Iron Class K - 7 pipe conforming to I.S. 8329 - 700 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1907,
    item: "7733-Ductile Iron Class K - 7 pipe conforming to I.S. 8329 - 800 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1908,
    item: "7734-Ductile Iron Class K - 7 pipe conforming to I.S. 8329 - 900 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1909,
    item: "7735-Ductile Iron Class K - 7 pipe conforming to I.S. 8329 - 1000 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 1910,
    item: "7736-Extruded burnt flyash clay sewer bricks conforming to I.S. 4885",
    unit: "1000 nos"
  },
  {
    "sl.no": 1911,
    item: "7737-Fly ash lime bricks (FALG Bricks) conforming to I.S. 12894",
    unit: "1000 nos"
  },
  {
    "sl.no": 1912,
    item: "7738-Calcium Silicate Bricks machine moulded confirming to I.S. 4139",
    unit: "1000 nos"
  },
  {
    "sl.no": 1913,
    item: "7739-Modified Bitumen Refinery produced CRMB - 55",
    unit: "tonne"
  },
  {
    "sl.no": 1914,
    item: "7741-Modified Bitumen Refinery produced CRMB - 60",
    unit: "tonne"
  },
  {
    "sl.no": 1915,
    item: "7742-Bitumen emulision medium setting (M.S.) conforming to IS: 8887",
    unit: "tonne"
  },
  {
    "sl.no": 1916,
    item: "7743-M.S. Pipe 150 mm dia casing pipe",
    unit: "metre"
  },
  {
    "sl.no": 1917,
    item: "7744-M.S. pipe 200 mm dia casing pipe",
    unit: "metre"
  },
  {
    "sl.no": 1918,
    item: "7745-PVC  blind pipe 150 mm dia as per IS: 12818",
    unit: "metre"
  },
  {
    "sl.no": 1919,
    item: "7746-PVC blind pipe 200 mm dia as pe IS: 12818",
    unit: "metre"
  },
  {
    "sl.no": 1920,
    item: "7747-M.S. cap 150 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1921,
    item: "7748-M.S. cap 200 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1922,
    item: "7749-M.S. bail plug 150 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1923,
    item: "7750-M.S. bail plug 200 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1924,
    item: "7751-PVC slotted pipe 150 mm dia as per IS: 12818",
    unit: "metre"
  },
  {
    "sl.no": 1925,
    item: "7752- PVC slotted pipe 200 mm dia as per IS: 12818",
    unit: "metre"
  },
  {
    "sl.no": 1926,
    item: "7753-Boulder 50 mm to 200 mm",
    unit: "cum"
  },
  {
    "sl.no": 1927,
    item: "7754-Gravel 5 mm to 10 mm",
    unit: "cum"
  },
  {
    "sl.no": 1928,
    item: "7755-Gravel 1.5 mm to 2 mm",
    unit: "cum"
  },
  {
    "sl.no": 1929,
    item: "7756-Gravel 3 mm to 6 mm",
    unit: "cum"
  },
  {
    "sl.no": 1930,
    item: "7757-M.S. pipe 100 mm dia casing pipe ",
    unit: "metre"
  },
  {
    "sl.no": 1931,
    item: "7758-uPVC blind pipe 100 mm dia as per IS: 12818",
    unit: "metre"
  },
  {
    "sl.no": 1932,
    item: "7759-uPVC slotted pipe 100 mm dia as per IS: 12818",
    unit: "metre"
  },
  {
    "sl.no": 1933,
    item: "7760-M.S. cap 100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1934,
    item: "7761-M.S. bail plug 100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1935,
    item: "7762-Precast R.C.C. perforated slab",
    unit: "each"
  },
  {
    "sl.no": 1936,
    item: "7763-Water supply tanker of 5000 litre capacity",
    unit: "each"
  },
  {
    "sl.no": 1937,
    item: "7764-M.S. socket 100 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1938,
    item: "7765-M.S. socket 150 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1939,
    item: "7766-M.S. socket 200 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1940,
    item: "7767-Stone cleaning chemical approved by ASI",
    unit: "Litre"
  },
  {
    "sl.no": 1941,
    item: "7768-Water epellent chemical approved by ASI",
    unit: "Litre"
  },
  {
    "sl.no": 1942,
    item: "7769-Stone surface strengthening chemical approved by ASI",
    unit: "Litre"
  },
  {
    "sl.no": 1943,
    item: "7770-Turpentine oil",
    unit: "Litre"
  },
  {
    "sl.no": 1944,
    item: "7771-Liquid Amonia 5%",
    unit: "Litre"
  },
  {
    "sl.no": 1945,
    item: "7772-Pea Gravel",
    unit: "cum"
  },
  {
    "sl.no": 1946,
    item: "7773- Coloured inter locking C.C. paver Block ",
    unit: "sqm"
  },
  {
    "sl.no": 1947,
    item: "7774-Stone size 10x10x7.50cm",
    unit: "each"
  },
  {
    "sl.no": 1948,
    item: "7775-Sodium pentachlorophenate ",
    unit: "kilogram"
  },
  {
    "sl.no": 1949,
    item: "7800-Ceramic Glazed Tiles Ist quality minimum thickness 5 mm in all colours shades and designs except burgundy, bottle green black",
    unit: "sqm"
  },
  {
    "sl.no": 1950,
    item: "7801-Ceramic Glazed Tiles Ist quality 300 x 300 mm in all shades and designs of White, Ivory, grey, Fume Red brown etc.",
    unit: "sqm"
  },
  {
    "sl.no": 1951,
    item: "7802-Ceramic Glazed Tiles Ist quality 300 x 300 mm in all shades designs except White, Ivory, Fume Red Brown etc.",
    unit: "sqm"
  },
  {
    "sl.no": 1952,
    item: "7803-Rectified - Ceramic Glazed Tiles Ist quality 300 x 300 mm or more in all shades designs White, Ivory, Grey, Fume Red Brown etc",
    unit: "sqm"
  },
  {
    "sl.no": 1953,
    item: "7804-Rectified - Ceramic Glazed Tiles Ist quality 300 x 300 mm or more in all shades designs except White, Ivory, Grey, Fume Red Brown etc",
    unit: "sqm"
  },
  {
    "sl.no": 1954,
    item: "7805-Salem Stainless steel AISI - 304 (18/8) Orrisa pattern W.C. pan 724 mm x 578 mm",
    unit: "each"
  },
  {
    "sl.no": 1955,
    item: "7806-Salem Stainless steel AISI - 304 (18/8) Round basin 405 mm X 355 mm",
    unit: "each"
  },
  {
    "sl.no": 1956,
    item: "7807-Salem Stainless steel AISI - 304 (18/8) Wash basin 530 mm X 345 mm ",
    unit: "each"
  },
  {
    "sl.no": 1957,
    item: "7808-Centrifugally cast (spun) iron S&S 100 mm inlet and 100 mm outlet",
    unit: "each"
  },
  {
    "sl.no": 1958,
    item: "7809-Centrifugally cast (spun) iron S & S 100 mm inlet and 75 mm outlet",
    unit: "each"
  },
  {
    "sl.no": 1959,
    item: "7850-Agaria White marble slab plain 18 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 1960,
    item: "7857-P.T.M.T. Grating square Slit 150 mm",
    unit: "each"
  },
  {
    "sl.no": 1961,
    item: "7858-P.T.M.T.  Urinal cock 15 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1962,
    item: "7859-P.T.M.T. Bib cock with nozzle 15 mm ",
    unit: "each"
  },
  {
    "sl.no": 1963,
    item: "7861-P.T.M.T. Stop cock (concealed ) 15 mm",
    unit: "each"
  },
  {
    "sl.no": 1964,
    item: "7862-15 mm nominal bore and 30 cm length PVC connection pipe with P.T.M.T. Nuts",
    unit: "each"
  },
  {
    "sl.no": 1965,
    item: "7863-15 mm nominal bore and 45 cm length PVC connection pipe with P.T.M.T. Nuts",
    unit: "each"
  },
  {
    "sl.no": 1966,
    item: "7864-P.T.M.T. extension nipple 15 mm",
    unit: "each"
  },
  {
    "sl.no": 1967,
    item: "7865-P.T.M.T. extension nipple 20 mm",
    unit: "each"
  },
  {
    "sl.no": 1968,
    item: "7866-P.T.M.T. extension nipple 25 mm",
    unit: "each"
  },
  {
    "sl.no": 1969,
    item: "7893-Tactile tile",
    unit: "sqm"
  },
  {
    "sl.no": 1970,
    item: "7895-Matt finished vitrified tile 100x100 x16 mm",
    unit: "sqm"
  },
  {
    "sl.no": 1971,
    item: "7896-Vitrified tile",
    unit: "sqm"
  },
  {
    "sl.no": 1972,
    item: "7900-Modular common burnt clay bricks of class designation 7.5",
    unit: "1000 nos"
  },
  {
    "sl.no": 1973,
    item: "7901-Machine moulded perforated common burnt clay FPS (non modular) bricks of class designation 12.5",
    unit: "1000 nos"
  },
  {
    "sl.no": 1974,
    item: "7902-Machine moulded common burnt clay modular perforated bricks of class designation 12.5",
    unit: "1000 nos"
  },
  {
    "sl.no": 1975,
    item: "7903-Machine moulded common burnt clay FPS (non modular) bricks of class designation 12.5",
    unit: "1000 nos"
  },
  {
    "sl.no": 1976,
    item: "7904-Machine moulded common burnt clay tile bricks of class designation 12.5",
    unit: "1000 nos"
  },
  {
    "sl.no": 1977,
    item: "7911-Chemical Rust Remover",
    unit: "Litre"
  },
  {
    "sl.no": 1978,
    item: "7912-Hire charges of Drill machine upto 30 mm dia",
    unit: "Day"
  },
  {
    "sl.no": 1979,
    item: "7913-Epoxy",
    unit: "kg"
  },
  {
    "sl.no": 1980,
    item: "7914-SBR Polymer",
    unit: "kg"
  },
  {
    "sl.no": 1981,
    item: "7915-Woven PVC Cloth",
    unit: "sqm"
  },
  {
    "sl.no": 1982,
    item: "7916-Hire charges of sand blasting equipment",
    unit: "Day"
  },
  {
    "sl.no": 1983,
    item: "7917-Hire charges of compressure",
    unit: "Day"
  },
  {
    "sl.no": 1984,
    item: "7918-25 mm thick cement concrete shotcrete(guniting) with compressor",
    unit: "sqm"
  },
  {
    "sl.no": 1985,
    item: "7919-50 mm thick cement concrete shotcrete (guniting) with compressor",
    unit: "sqm"
  },
  {
    "sl.no": 1986,
    item: "7920-75 mm thick cement concrete shotcrete (guniting) with compressor",
    unit: "sqm"
  },
  {
    "sl.no": 1987,
    item: "7921-Adhesive chemical",
    unit: "Litre"
  },
  {
    "sl.no": 1988,
    item: "7922-Bit of drilling machine for Hole upto 30 mm dia",
    unit: "each"
  },
  {
    "sl.no": 1989,
    item: "7923-GI injection nipple 12mm dia, 75mm long",
    unit: "each"
  },
  {
    "sl.no": 1990,
    item: "7924-Blowing compressed air for cleaning holes upto 30mm dia",
    unit: "each"
  },
  {
    "sl.no": 1991,
    item: "7925-L shaped 100mm long, 10mm dia mild steel shear key",
    unit: "kg"
  },
  {
    "sl.no": 1992,
    item: "7926-Welding charges of shear key to existing reinforcement",
    unit: "each"
  },
  {
    "sl.no": 1993,
    item: "7927-Acrylic Polymer chemical for cracks",
    unit: "kg"
  },
  {
    "sl.no": 1994,
    item: "7928-Hire charges of Plant and machinery, it can inject - 350 Kg/day",
    unit: "Day"
  },
  {
    "sl.no": 1995,
    item: "8001-24 mm thick Factory made shutters with styles, rails and panels of PVC extruded sections in white, grey or wooden finish",
    unit: "sqm"
  },
  {
    "sl.no": 1996,
    item: "8002-30 mm thick Factory made shutters with styles, rails and panels of PVC extruded sections in white, grey or wooden finish",
    unit: "sqm"
  },
  {
    "sl.no": 1997,
    item: "8003-Factory made PVC rigid foam panelled shutter i/c carriage",
    unit: "sqm"
  },
  {
    "sl.no": 1998,
    item: "8004-Factory made PVC rigid foam panelled shutter as per IS: 4020 i/c  carriage",
    unit: "sqm"
  },
  {
    "sl.no": 1999,
    item: "8006-Factory made PVC rigid foam sheet 1 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 2000,
    item: "8007-Factory made PVC rigid foam sheet 5 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 2001,
    item: "8008-Factory made prelaminated PVC rigid foam sheet 5 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 2002,
    item: "8010-48 mm X40 mmX1.5 mm thick Factory made door frame of PVC extruded sections in white, grey or wooden finish",
    unit: "metre"
  },
  {
    "sl.no": 2003,
    item: "8011-Factory made door frame PVC extruded sheet i/c  carriage ",
    unit: "metre"
  },
  {
    "sl.no": 2004,
    item: "8012-Adhesive solvent cement",
    unit: "kg"
  },
  {
    "sl.no": 2005,
    item: "8013-Factory made EPS Core wallpanel/ roof panel sandwiched between two Engineered welded wire fabric mesh of 3 mm dia G.I. wire mesh, with 50 mm pitch in both the directions, kept at 120-135 mm gap and interconnected by the zig zag G.I. wire of 3 mm dia at alternate row by welding",
    unit: "sqm"
  },
  {
    "sl.no": 2006,
    item: "8014-Factory made door frame size 50x47 mm with wall thickness 5 mm made of single piece extruded profile",
    unit: "metre"
  },
  {
    "sl.no": 2007,
    item: "8015-Expanded poly ethylene Foam sheet 4 mm thick of Density 40Kg/m3",
    unit: "sqm"
  },
  {
    "sl.no": 2008,
    item: "8016-High Density expanded poly ethylene (EPE) foam 1mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 2009,
    item: "8017-Fire rated door frame made with 1.6 mm thick G.I sheet (120 minutes fire rating)",
    unit: "metre"
  },
  {
    "sl.no": 2010,
    item: "8018-Fire rated door shutter made with 1.6 mm thick G.I sheet (120 minutes fire rating) including hinges (without glass panels)",
    unit: "sqm"
  },
  {
    "sl.no": 2011,
    item: "8021-Bamboo wood Tile flooring 14mm thick of minimum size 1800mm X 130 mm",
    unit: "sqm"
  },
  {
    "sl.no": 2012,
    item: "8022-Bamboo wood Quarter round 18 mm thick of size 1900mm x 18 mm",
    unit: "metre"
  },
  {
    "sl.no": 2013,
    item: "8023-Bamboo wood door reducer 14 mm thick of size 1900 mm x 44mm",
    unit: "metre"
  },
  {
    "sl.no": 2014,
    item: "8024-Bamboo wood skirting 14mm thick of size 1900mm x 85 mm",
    unit: "sqm"
  },
  {
    "sl.no": 2015,
    item: "8025-Bamboo wood tile wall cladding 10mm thick of size 1900mm x 135mm",
    unit: "sqm"
  },
  {
    "sl.no": 2016,
    item: "8026-Bamboo wood T-mold 14mm thick of size 1900mm x 44mm",
    unit: "metre"
  },
  {
    "sl.no": 2017,
    item: "8027-Bamboo wood Threshold 14mm thick of size 1900mm x 44mm",
    unit: "metre"
  },
  {
    "sl.no": 2018,
    item: "8028-Bamboo wood shutter of doors",
    unit: "10 cud m"
  },
  {
    "sl.no": 2019,
    item: "8029-Bamboo wood panelling (10mm thick)",
    unit: "10 cud m"
  },
  {
    "sl.no": 2020,
    item: "8030-Superior class Bamboo wood door frame 65 mm thick",
    unit: "10 cud m"
  },
  {
    "sl.no": 2021,
    item: "8031-Aluminium sheets Grade 5052, 4 mm thick for wall panel/deck panel/ WRB panel/ Kicker panels/ door closing panels (for form work)",
    unit: "sqm"
  },
  {
    "sl.no": 2022,
    item: "8032-Aluminium sheed Grad 5052, 4 mm thick for Internal corner/ Columns corners / (for Form work)",
    unit: "sqm"
  },
  {
    "sl.no": 2023,
    item: "8033-Aluminium sheets Grade 5052, 4 mm thick for Mid Soldier/ End soldier (For form work)",
    unit: "sqm"
  },
  {
    "sl.no": 2024,
    item: "8034-External corner 2050 mm",
    unit: "each"
  },
  {
    "sl.no": 2025,
    item: "8035-External corner 825 mm",
    unit: "each"
  },
  {
    "sl.no": 2026,
    item: "8036-Soldier tie 370 mm",
    unit: "each"
  },
  {
    "sl.no": 2027,
    item: "8037-Adjustable prop-2.0x2.0 m",
    unit: "each"
  },
  {
    "sl.no": 2028,
    item: "8038-Pin -50",
    unit: "each"
  },
  {
    "sl.no": 2029,
    item: "8039-Pin - 127",
    unit: "each"
  },
  {
    "sl.no": 2030,
    item: "8040-Wedge",
    unit: "each"
  },
  {
    "sl.no": 2031,
    item: "8041-Wall tie -150 (355 mm",
    unit: "each"
  },
  {
    "sl.no": 2032,
    item: "8042-Polythene Sleeve 90x150 mm",
    unit: "each"
  },
  {
    "sl.no": 2033,
    item: "8043-Polythene Rool - 150 mm long",
    unit: "each"
  },
  {
    "sl.no": 2034,
    item: "8044-Vertical soldier - 1100 mm",
    unit: "each"
  },
  {
    "sl.no": 2035,
    item: "8045-Wall attchyed bracket 600x100 mm",
    unit: "each"
  },
  {
    "sl.no": 2036,
    item: "8046-Allignment Pipe - 3.00 Mtr.",
    unit: "each"
  },
  {
    "sl.no": 2037,
    item: "8047-Allignment Bracket",
    unit: "each"
  },
  {
    "sl.no": 2038,
    item: "8048-Tie rod fr bracket - 500 mm",
    unit: "each"
  },
  {
    "sl.no": 2039,
    item: "8049-Anchor wing nut  100 mm",
    unit: "each"
  },
  {
    "sl.no": 2040,
    item: "8050-Debit Pin - 250 mm",
    unit: "each"
  },
  {
    "sl.no": 2041,
    item: "8051-PVC pipe - 20 mm -150 mm long",
    unit: "each"
  },
  {
    "sl.no": 2042,
    item: "8052-PVC cone",
    unit: "each"
  },
  {
    "sl.no": 2043,
    item: "8053-Bold+Nut - 16 x 80 mm",
    unit: "each"
  },
  {
    "sl.no": 2044,
    item: "8054-Flat washer 16, 3 mm thick",
    unit: "each"
  },
  {
    "sl.no": 2045,
    item: "8055-Bolt +Nut - 16 x30 mm",
    unit: "each"
  },
  {
    "sl.no": 2046,
    item: "8056-Door spacer 45x45x5 -1135mm long",
    unit: "each"
  },
  {
    "sl.no": 2047,
    item: "8057-Door spacer 45x45x5x-985 mm  long",
    unit: "each"
  },
  {
    "sl.no": 2048,
    item: "8100-Powder coated M.S. butt hinges 100 mm X58 mm X 1.9 mm",
    unit: "10 nos"
  },
  {
    "sl.no": 2049,
    item: "8101-SS ball bearing of sizw 100x89x3 mm",
    unit: "each"
  },
  {
    "sl.no": 2050,
    item: "8116-Zinc alloy (white powder coated ) 3D hinges for uPVC door",
    unit: "each"
  },
  {
    "sl.no": 2051,
    item: "8117-Zinc alloy (white powder coated ) handles with zinc plated mild steel multi point locking having transmission gear, cylinder with keeps and one side key for uPVC casement door",
    unit: "each"
  },
  {
    "sl.no": 2052,
    item: "8118-Zinc alloy (white powder coated) handles along with zinc plated mild steel multi point locking having transmission gear with keeps for uPVC sliding window",
    unit: "each set"
  },
  {
    "sl.no": 2053,
    item: "8119-Zinc alloy (white powder coated) handles with key along with zinc plated mild steel multi point locking having transmission gear with keeps for uPVC sliding door",
    unit: "each set"
  },
  {
    "sl.no": 2054,
    item: "8121-uPVC extruded (Small series) casement window frame size 47x50mm",
    unit: "metre"
  },
  {
    "sl.no": 2055,
    item: "8122-uPVC extruded (small series) casement window sash/window mullion size 47x68mm",
    unit: "metre"
  },
  {
    "sl.no": 2056,
    item: "8125-uPVC extruded glazing bead of appropriate dimension for small series casement window sash",
    unit: "metre"
  },
  {
    "sl.no": 2057,
    item: "8126-u PVC extruded (Big series) casement window frame size 67x60mm",
    unit: "metre"
  },
  {
    "sl.no": 2058,
    item: "8127-u PVC extruded (Big series) casement door frame size 67x60mm",
    unit: "metre"
  },
  {
    "sl.no": 2059,
    item: "8128-uPVC extruded (big series) casement window sash/window mullion/ door mullion size 67x80 mm",
    unit: "metre"
  },
  {
    "sl.no": 2060,
    item: "8129-uPVC extruded (big series) casement door sash size 67x11 mm",
    unit: "metre"
  },
  {
    "sl.no": 2061,
    item: "8130-uPVC extruded glazing bead of appropriate dimension for big series casemtne window/door sash",
    unit: "metre"
  },
  {
    "sl.no": 2062,
    item: "8131-uPVC extruded glazing bead of appropriate dimension for small series sliding window sash",
    unit: "metre"
  },
  {
    "sl.no": 2063,
    item: "8132-uPVC extruded glazing bead of appropriate dimension for big series of sliding window/ door sash",
    unit: "metre"
  },
  {
    "sl.no": 2064,
    item: "8133-uPVC extruded (small series) 2 track sliding window frame size 52x44mm",
    unit: "metre"
  },
  {
    "sl.no": 2065,
    item: "8134-uPVC extruded (big series) 2 track sliding window /door frame size 67x50 mm",
    unit: "metre"
  },
  {
    "sl.no": 2066,
    item: "8135-uPVC extruded (Small series) 3 track sliding window frame size 92x44 mm",
    unit: "metre"
  },
  {
    "sl.no": 2067,
    item: "8136-uPVC extruded (big series) 3 track sliding window/door frame size 116x45 mm",
    unit: "metre"
  },
  {
    "sl.no": 2068,
    item: "8137-uPVc extruded (small series) 2 track sliding window sash/ 3 track sliding window sash size 32x60 mm",
    unit: "metre"
  },
  {
    "sl.no": 2069,
    item: "8138-uPVC extruded (Big series) 2 track sliding window sash size 46x62 mm",
    unit: "metre"
  },
  {
    "sl.no": 2070,
    item: "8139-uPVC extruded (big series) 3 track sliding window sash size 46x62 mm",
    unit: "metre"
  },
  {
    "sl.no": 2071,
    item: "8140-uPVC extruded interlock of appropriate dimension for small series sliding window sash",
    unit: "metre"
  },
  {
    "sl.no": 2072,
    item: "8141-uPVC extruded interlock of appropriate dimension for small series sliding window/ door sash",
    unit: "metre"
  },
  {
    "sl.no": 2073,
    item: "8142-uPVC extruded inline adaptor or appropriate dimension for big series sliding window/door sash",
    unit: "metre"
  },
  {
    "sl.no": 2074,
    item: "8143-uPVC  extruded 2 track sliding door sash/ 3 track sliding door sash (Big series) size 46x82 mm",
    unit: "metre"
  },
  {
    "sl.no": 2075,
    item: "8200-A.P.P. modified polymeric felt (two layers) 1.5 mm thick ",
    unit: "sqm"
  },
  {
    "sl.no": 2076,
    item: "8201-A.P.P. modified polymeric felt (two layers) 2 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 2077,
    item: "8203-A.P.P. modified 2 mm thick membrane reinforced with glass fibre matt",
    unit: "sqm"
  },
  {
    "sl.no": 2078,
    item: "8204-A.P.P. modified 3 mm thick membrane reinforced with glass fibre matt",
    unit: "sqm"
  },
  {
    "sl.no": 2079,
    item: "8205-A.P. Modified 3 mm thick membrane reinforced with polyester matt",
    unit: "sqm"
  },
  {
    "sl.no": 2080,
    item: "8206-Bitumen primer for bitumen membrane",
    unit: "Litre"
  },
  {
    "sl.no": 2081,
    item: "8207-Geotextile 120 gram per sqm membrane",
    unit: "sqm"
  },
  {
    "sl.no": 2082,
    item: "8210-Stainless steel screws 50 mm",
    unit: "100 nos"
  },
  {
    "sl.no": 2083,
    item: "8211-Stainless steel screws 40 mm",
    unit: "100 nos"
  },
  {
    "sl.no": 2084,
    item: "8212-Stainless steel screws 30 mm",
    unit: "100 nos"
  },
  {
    "sl.no": 2085,
    item: "8214-Stainless steel screws 20 mm ",
    unit: "100 nos"
  },
  {
    "sl.no": 2086,
    item: "8215-Stainless steel  butt hinges 125x64x1.9 mm IS: 12817 marked",
    unit: "10 nos"
  },
  {
    "sl.no": 2087,
    item: "8216-Stainless steel  butt hinges 100x58x1.9 mm IS : 12817 marked ",
    unit: "10 nos"
  },
  {
    "sl.no": 2088,
    item: "8217-Stainless steel  butt hinges 75x47x1.8 mm IS : 12817 marked",
    unit: "10 nos"
  },
  {
    "sl.no": 2089,
    item: "8218-Stainless steel butt hinges 50x37x1.5 mm IS : 12817 marked ",
    unit: "10 nos"
  },
  {
    "sl.no": 2090,
    item: "8219-Stainless steel butt hinges (heavy weight) 125x64x2.5 mm IS: 12817 marked",
    unit: "10 nos"
  },
  {
    "sl.no": 2091,
    item: "8220-Stainless steel butt hinges (heavy weight) 100x60x2.5 mm IS : 12817 marked",
    unit: "10 nos"
  },
  {
    "sl.no": 2092,
    item: "8221-Stainless steel butt hinges (heavy weight) 75x50x2.5 mm IS : 12817 marked",
    unit: "10 nos"
  },
  {
    "sl.no": 2093,
    item: "8222-M.S. heavy weight butt hinges 125x90x4.0 mm IS : 1341 marked",
    unit: "10 nos"
  },
  {
    "sl.no": 2094,
    item: "8223-M.S. heavy weight butt hinges 100x75x3.5 mm IS: 1341 marked",
    unit: "10 nos"
  },
  {
    "sl.no": 2095,
    item: "8224-M.S. heavy weight butt hinges 75x60x3.1 mm IS : 1341 marked",
    unit: "10 nos"
  },
  {
    "sl.no": 2096,
    item: "8225-M.S. heavy weight butt hinges 50x40xx2.5 mm IS : 1341 marked ",
    unit: "10 nos"
  },
  {
    "sl.no": 2097,
    item: "8226-Concealed zinc coated hinges 19-20 mm thick with mounting plate",
    unit: "10 nos"
  },
  {
    "sl.no": 2098,
    item: "8300-1216 mm PE-AL-PE Composite pressure pipe",
    unit: "metre"
  },
  {
    "sl.no": 2099,
    item: "8301-1620 mm PE-AL-PE Composite pressure pipe",
    unit: "metre"
  },
  {
    "sl.no": 2100,
    item: "8302-2025 mm PE-AL-PE Composite pressure pipe",
    unit: "metre"
  },
  {
    "sl.no": 2101,
    item: "8303-2532 mm PE-AL-PE Composite pressure pipe",
    unit: "metre"
  },
  {
    "sl.no": 2102,
    item: "8304-3240 mm PE-AL-PE Composite pressure pipe",
    unit: "metre"
  },
  {
    "sl.no": 2103,
    item: "8305-4050 mm PE-AL-PE Composite pressure pipe",
    unit: "metre"
  },
  {
    "sl.no": 2104,
    item: "8500-Water for jetting/ blowback",
    unit: "Kilo litre"
  },
  {
    "sl.no": 2105,
    item: "8501-Polymer modified cementation coating ",
    unit: "kilogram"
  },
  {
    "sl.no": 2106,
    item: "8502-Fibre glass cloth",
    unit: "sqm"
  },
  {
    "sl.no": 2107,
    item: "8504-Multi surface paint ",
    unit: "Litre"
  },
  {
    "sl.no": 2108,
    item: "8505-Acrylic exterior paint ",
    unit: "Litre"
  },
  {
    "sl.no": 2109,
    item: "8506-Premium Arcylic exterior paint l",
    unit: "Litre"
  },
  {
    "sl.no": 2110,
    item: "8507-Textured exterior paint ",
    unit: "Litre"
  },
  {
    "sl.no": 2111,
    item: "8508-Primer for cement paint",
    unit: "Litre"
  },
  {
    "sl.no": 2112,
    item: "8509-Special primer (C.W)",
    unit: "Litre"
  },
  {
    "sl.no": 2113,
    item: "8510-Metal Primer (U.G.)",
    unit: "Litre"
  },
  {
    "sl.no": 2114,
    item: "8511-Fibre reinforced elastomeric liquid water proofing membrane",
    unit: "Litre"
  },
  {
    "sl.no": 2115,
    item: "8512-Cementitious water proofing coating with elastic polymers",
    unit: "kilogram"
  },
  {
    "sl.no": 2116,
    item: "8513-Acrylic modified resin based texture",
    unit: "kg"
  },
  {
    "sl.no": 2117,
    item: "8514-40 mm long S S screws with plastic rawl plugs",
    unit: "each"
  },
  {
    "sl.no": 2118,
    item: "8515-Galavanised MS 8 mm outer diameter M-6 dash fastener 50 mm long",
    unit: "each"
  },
  {
    "sl.no": 2119,
    item: "8552-Mineral fibre beveled tegular edged ceiling tiles 595x595 mm, 16 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 2120,
    item: "8553-Mineral fibre beveled tegular edged ceiliing tiles 595x595mm, 16 mm thick with bio-block conforming to ISO 5 (class 100) specifications",
    unit: "sqm"
  },
  {
    "sl.no": 2121,
    item: "8554-Mineral fiber beveled tegular edged ceiling tiles 595x595mm, 20 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 2122,
    item: "8555-G.I main runner 15x32 mm of 3000 mm length, 0.33 thick",
    unit: "each"
  },
  {
    "sl.no": 2123,
    item: "8556-G.I cross-T 15x32 mm of 1200 mm length, 0.33 mm thick",
    unit: "each"
  },
  {
    "sl.no": 2124,
    item: "8557-G.I. cross Tee 15X32mm of 600mm length, 0.33 mm thick",
    unit: "each"
  },
  {
    "sl.no": 2125,
    item: "8558-G.I hanger rod 6mm dia fully threaded upto 1000 mm length",
    unit: "each"
  },
  {
    "sl.no": 2126,
    item: "8559-Stainless steel U Channel of size (50x25x2 mm)",
    unit: "metre"
  },
  {
    "sl.no": 2127,
    item: "8560-Non staining water resistant clear silicon",
    unit: "metre"
  },
  {
    "sl.no": 2128,
    item: "8561-Extruded polystrene rigid insulation board 50mm thick ",
    unit: "sqm"
  },
  {
    "sl.no": 2129,
    item: "8563-15 mm thick, light weight, integral densified micro look edged, false ceiling tiles of size 595x595 mm",
    unit: "sqm"
  },
  {
    "sl.no": 2130,
    item: "8564-15 mm thick, light weight, fully perforated square/butt edge integral densified, false ceiling tile of size 595x595 mm",
    unit: "sqm"
  },
  {
    "sl.no": 2131,
    item: "8565-Galavanised MS hanger rod 6 mm dia MS fullly threaded up to 1000 mm length",
    unit: "each"
  },
  {
    "sl.no": 2132,
    item: "8566-Powder coated steel section main-T ceiling sections 15x42x0.40 mm (3000 mm long)",
    unit: "each"
  },
  {
    "sl.no": 2133,
    item: "8567-Galavanised mild steel perimeter wall angle 22x19x0.40 mm (3000 mm long)",
    unit: "each"
  },
  {
    "sl.no": 2134,
    item: "8568-Powder coated Galvanised Iron intermediate cross-T section 15x42x0.40 mm (1200 mm long",
    unit: "each"
  },
  {
    "sl.no": 2135,
    item: "8569-Powder coated galvanised iron intermediate cross-T section 15x42x0.40 mm (600 mm long)",
    unit: "each"
  },
  {
    "sl.no": 2136,
    item: "8576-Crates made of MEsh type 10x12 (D=100mm) Zinc coated (Mash wire diameter 3.00 mm)",
    unit: "sqm"
  },
  {
    "sl.no": 2137,
    item: "8577-Crates made of Mesh type 10x12 (D=100mm)Zn+PVC coated Mesh wire diameter 2.70/2.70 mm (ID/OD)",
    unit: "sqm"
  },
  {
    "sl.no": 2138,
    item: "8578-Crates made of Mesh type 10x12(D=100mm) Zn+10% Al alloy + PVC coated. Mesh wire diameter 2.70/3.70 mm (ID/OD)",
    unit: "sqm"
  },
  {
    "sl.no": 2139,
    item: "8579-Cold form light gauge Steel C-section of thickness 0.75 mm i/c zink coating/sliting etc",
    unit: "kg"
  },
  {
    "sl.no": 2140,
    item: "8580-Wastage of cold form light guage steel",
    unit: "kg"
  },
  {
    "sl.no": 2141,
    item: "8581-12 mm thick micro tegular edge semi perforated GRG (Glass Fibre Reinforcemtn Gypsum) false ceiling tiles of size 595x595 mm",
    unit: "sqm"
  },
  {
    "sl.no": 2142,
    item: "8582-12 mm thick micro tegular edge fully perforated GRG (Glass Fibre Reinforcemtn Gypsum) false ceiling tiles of size 595x595 mm",
    unit: "sqm"
  },
  {
    "sl.no": 2143,
    item: "8583-10 mm thick square edge fully perforated GRG (Glass Fibre Reinforcemtn Gypsum) false ceiling tiles of size 595x595 mm",
    unit: "sqm"
  },
  {
    "sl.no": 2144,
    item: "8587-Galvanized iron intermediate cross-T section 15x32x0.33 mm (600 mm long)",
    unit: "each"
  },
  {
    "sl.no": 2145,
    item: "8588-Galvanised MS hanger road 6 mm dia MS fully threaded upto 1000 mm length",
    unit: "each"
  },
  {
    "sl.no": 2146,
    item: "8589-Calcium Silicate tegular edged celling tiles 595x595 mm and 15 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 2147,
    item: "8590-Galvanised Steel main Tee ceiling section Size 24 x 38 x 0.33 mm ( 3 metre long)",
    unit: "each"
  },
  {
    "sl.no": 2148,
    item: "8591-Galvanised Steel perimeter wall Angle Size 24 x 24 0.40 mm (3.00 metre long)",
    unit: "each"
  },
  {
    "sl.no": 2149,
    item: "8592-Galvanised Steel intermediate cross T section Size 24 x 25 x 0.33 mm (1.2 metre long)",
    unit: "each"
  },
  {
    "sl.no": 2150,
    item: "8593-Galvanised Steel intermediate cross T Section 24 x 25 x 0.33 (0.6 metre long)",
    unit: "each"
  },
  {
    "sl.no": 2151,
    item: "8594-Galvanised Steel soffit cleat size 25x35x1.60 mm",
    unit: "each"
  },
  {
    "sl.no": 2152,
    item: "8595-Wooden screws with plastic rawl plugs 35x8 mm",
    unit: "each"
  },
  {
    "sl.no": 2153,
    item: "8596-Galvanised MS 8mm outer diameter M-6 dash fastener 25 mm long",
    unit: "each"
  },
  {
    "sl.no": 2154,
    item: "8597-GI Metal Tile Clip in Plain Beveled edge global white colour tiles of size 600x600 mm and 0.5 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 2155,
    item: "8598-GI Metal Tile Clip in Perforated Beveled edge global white colour tiles of size 600x600 mm and 0.5 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 2156,
    item: "8599-GI Metal Tile Lay- in Plain Tegular  edge global white color tiles of Size 595x595 mm and 0.5 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 2157,
    item: "8600-GI Metal Tile Lay-in Perforated Tegular edge global white color tiles of Size 595x595 mm and 0.5 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 2158,
    item: "8601-PVC Laminated Gypsum Tiles (square edge) of Size 595x595 mm and 12.5 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 2159,
    item: "8602-Gypsum Tiles Fully Perforated Square edge of Size 595x595 mm and 12.5 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 2160,
    item: "8604-Spring T-section 24x34x0.45 mm (3.00 meter long)",
    unit: "metre"
  },
  {
    "sl.no": 2161,
    item: "8605-C Wall angle section 20x30x20x0.50 mm (3.00 meter long)",
    unit: "metre"
  },
  {
    "sl.no": 2162,
    item: "8606-Main C Carrier Size 10x38x10x0.70 mm (3.00 meter long)",
    unit: "metre"
  },
  {
    "sl.no": 2163,
    item: "8607-Spring T-connector",
    unit: "each"
  },
  {
    "sl.no": 2164,
    item: "8608-C Carrier Connector",
    unit: "each"
  },
  {
    "sl.no": 2165,
    item: "8609-C Suspension Clip",
    unit: "each"
  },
  {
    "sl.no": 2166,
    item: "8610-Wire Coupling Clip",
    unit: "each"
  },
  {
    "sl.no": 2167,
    item: "8611-Main T ceiling sections 24x38x0.3 mm (3 metre long)",
    unit: "each"
  },
  {
    "sl.no": 2168,
    item: "8612-Perimeter wall angle 24x24x0.3 mm ( 3 metre long)",
    unit: "each"
  },
  {
    "sl.no": 2169,
    item: "8613-Intermediate cross T-Section 24x25x0.3 mm (1.2 mtr long)",
    unit: "each"
  },
  {
    "sl.no": 2170,
    item: "8614-Intermediate cross - T Section 24x25x0.3 mm (0.6 mtr. long)",
    unit: "each"
  },
  {
    "sl.no": 2171,
    item: "8615-Hanger rod 4 mm thick",
    unit: "each"
  },
  {
    "sl.no": 2172,
    item: "8616-Adjustment clip 85x30x0.8 mm",
    unit: "each"
  },
  {
    "sl.no": 2173,
    item: "8617-Soffit cleat (Size 27x37x25x1.60 mm)",
    unit: "each"
  },
  {
    "sl.no": 2174,
    item: "8618-Dash fastener 6 mm dia 50 mm long",
    unit: "each"
  },
  {
    "sl.no": 2175,
    item: "8619-Galvanised MS L-shaped level adjuster of size 85x25x2 mm",
    unit: "each"
  },
  {
    "sl.no": 2176,
    item: "8620-Vitrified floor tile 50x50 cm",
    unit: "sqm"
  },
  {
    "sl.no": 2177,
    item: "8621-Vitrified floor tile 60x60 cm",
    unit: "sqm"
  },
  {
    "sl.no": 2178,
    item: "8622-Vitrifies floor tile 80x80 cm",
    unit: "sqm"
  },
  {
    "sl.no": 2179,
    item: "8623-Vitrified floor tile 100x100 cm",
    unit: "sqm"
  },
  {
    "sl.no": 2180,
    item: "8624-Border tiles 200x75 mm size",
    unit: "each"
  },
  {
    "sl.no": 2181,
    item: "8636-Chlorinated Polyvinyl - Chloride (CPVC) pipe 15 mm outer dia",
    unit: "metre"
  },
  {
    "sl.no": 2182,
    item: "8637-Chlorinated Polyvinyl - Chloride (CPVC) pipe 20 mm outer dia",
    unit: "metre"
  },
  {
    "sl.no": 2183,
    item: "8638-Chlorinated Polyvinyl - Chloride (CPVC) pipe 25 mm outer dia",
    unit: "metre"
  },
  {
    "sl.no": 2184,
    item: "8639-Chlorinated Polyvinyl - chloride (CPVC) pipe 32 mm outer dia",
    unit: "metre"
  },
  {
    "sl.no": 2185,
    item: "8640-Chlorinated Polyvinyl - chloride (CPVC) pipe 40 mm outer dia",
    unit: "metre"
  },
  {
    "sl.no": 2186,
    item: "8641-Chlorinated Polyvinyl - chloride (CPVC) pipe 50 mm outer dia",
    unit: "metre"
  },
  {
    "sl.no": 2187,
    item: "8642-Chlorinated Polyvinyl - chloride (CPVC) pipe 62.5 inner dia",
    unit: "metre"
  },
  {
    "sl.no": 2188,
    item: "8643-Chlorinated Polyvinyl - chloride (CPVC) pipe 75 mm inner dia",
    unit: "metre"
  },
  {
    "sl.no": 2189,
    item: "8644-Chlorinated Polyvinyl - chloride (CPVC) pipe 100 inner dia",
    unit: "metre"
  },
  {
    "sl.no": 2190,
    item: "8645-Chlorinated Polyvinyl - chloride (CPVC) pipe 150 mm inner dia",
    unit: "metre"
  },
  {
    "sl.no": 2191,
    item: "8646-Silicon sealant",
    unit: "cartridge"
  },
  {
    "sl.no": 2192,
    item: "8647-Stainless steal screws 30 x 4 mm",
    unit: "100 nos"
  },
  {
    "sl.no": 2193,
    item: "8648-Hermetically sealed double glazed unit made with 6 mm thick clear float glass both side having 12 mm air gap",
    unit: "sqm"
  },
  {
    "sl.no": 2194,
    item: "8649-Stainless steel (SS 304 grade) adjustable friction window stay 205 x 19 mm",
    unit: "each"
  },
  {
    "sl.no": 2195,
    item: "8650-Stainless steel (S S 304 grade) adjustable friction window stay 255 x 19 mm",
    unit: "each"
  },
  {
    "sl.no": 2196,
    item: "8651-Stainless steel (S S 304 grade) adjustable friction window stay 355 x 19 mm",
    unit: "each"
  },
  {
    "sl.no": 2197,
    item: "8652-Stainless steel (S S 304 grade) adjustable friction window stay 510x 19 mm",
    unit: "each"
  },
  {
    "sl.no": 2198,
    item: "8653-Stainless steel (S S 304 grade) adjustable friction window stay 710x 19 mm",
    unit: "each"
  },
  {
    "sl.no": 2199,
    item: "8654-Masking Tape ",
    unit: "metre"
  },
  {
    "sl.no": 2200,
    item: "8655-Autoclaved aerated cement (AAC) blocks",
    unit: "cum"
  },
  {
    "sl.no": 2201,
    item: "8656-Gypsum pannel 666 X 500 X 100 mm siz",
    unit: "sqm"
  },
  {
    "sl.no": 2202,
    item: "8657-Bonding plaster for Gypsum panel",
    unit: "kilogram"
  },
  {
    "sl.no": 2203,
    item: "8659-Water proof ply 12 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 2204,
    item: "8660-Aluminium casement window fastener (Anodised AC 15 )",
    unit: "each"
  },
  {
    "sl.no": 2205,
    item: "8661-Aluminium casement window fastener (powder coated ) ",
    unit: "each"
  },
  {
    "sl.no": 2206,
    item: "8662-Aluminium casement window fastener ( polyester powder coated)",
    unit: "each"
  },
  {
    "sl.no": 2207,
    item: "8663-Aluminium round shape handle (anodised AC 15)",
    unit: "each"
  },
  {
    "sl.no": 2208,
    item: "8664-Aluminium round shape handle (powder coated)",
    unit: "each"
  },
  {
    "sl.no": 2209,
    item: "8665-Aluminium round shape handle (polyester powder  coated)",
    unit: "each"
  },
  {
    "sl.no": 2210,
    item: "8666-Stainless steel screws 25 mm x 4 mm ",
    unit: "100 nos"
  },
  {
    "sl.no": 2211,
    item: "8667-UV stabilised 2 mm thick plain FRP sheet",
    unit: "sqm"
  },
  {
    "sl.no": 2212,
    item: "8668-UV stabilised 2 mm thick corrugated FRP sheet",
    unit: "sqm"
  },
  {
    "sl.no": 2213,
    item: "8669-Mangalore ridge tiles 20 mm thick",
    unit: "each"
  },
  {
    "sl.no": 2214,
    item: "8670-Mangalore tiles 20 mm thcik",
    unit: "each"
  },
  {
    "sl.no": 2215,
    item: "8671-Precoated  glavanished iron profile sheet 0.50 mm TCT",
    unit: "sqm"
  },
  {
    "sl.no": 2216,
    item: "8672-Precoated galvanised steel plain ridges",
    unit: "metre"
  },
  {
    "sl.no": 2217,
    item: "8673-Precoated galvanised steel flashings / aprons",
    unit: "metre"
  },
  {
    "sl.no": 2218,
    item: "8674-Precoated galvanised steel gutter",
    unit: "metre"
  },
  {
    "sl.no": 2219,
    item: "8675-Precoted galvanised steel north light curves",
    unit: "metre"
  },
  {
    "sl.no": 2220,
    item: "8676-Precoated galvanised steel barge board ",
    unit: "metre"
  },
  {
    "sl.no": 2221,
    item: "8677-Precoated galvanish steel crimp curve",
    unit: "sqm"
  },
  {
    "sl.no": 2222,
    item: "8678-I mm thick 35 mm wide bright finished stainless steel piano hinges",
    unit: "metre"
  },
  {
    "sl.no": 2223,
    item: "8682-Eposy Grout",
    unit: "kg"
  },
  {
    "sl.no": 2224,
    item: "8683-Red sand stone gang saw cut 30 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 2225,
    item: "8684-White sand stone gang saw cut 30 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 2226,
    item: "8685-Delineator",
    unit: "each"
  },
  {
    "sl.no": 2227,
    item: "8686-Precast C.C. Kerb stone M-25",
    unit: "cum"
  },
  {
    "sl.no": 2228,
    item: "8687-Thermoplastic paint ",
    unit: "kg"
  },
  {
    "sl.no": 2229,
    item: "8688-Glass beads",
    unit: "kg"
  },
  {
    "sl.no": 2230,
    item: "8689-Interlocking C.C. paver block (60 mm thick, M-30)",
    unit: "sqm"
  },
  {
    "sl.no": 2231,
    item: "8690-High intensity retro- reflective sheet",
    unit: "sqm"
  },
  {
    "sl.no": 2232,
    item: "8691-Punched tape concertina coil 600 m dia . 10 m openable length( Total length 90 m)",
    unit: "bundle"
  },
  {
    "sl.no": 2233,
    item: "8692-RBT reinforced barbed wire",
    unit: "metre"
  },
  {
    "sl.no": 2234,
    item: "8693-Turn buckle and strengthening bolt",
    unit: "each set"
  },
  {
    "sl.no": 2235,
    item: "8694-Precast pavement slab 450 x 450 x 50 mm (M- 30)",
    unit: "each"
  },
  {
    "sl.no": 2236,
    item: "8695-Chain link fabric fencing mesh of size 50x50 mm made of G.I. wire of dia 4 mm",
    unit: "sqm"
  },
  {
    "sl.no": 2237,
    item: "8696-Chain link fabric fencing mesh of size 50x50 mm made of G.I. wire of dia dia 4 mm. PVC coated to outer dia 5 mm",
    unit: "sqm"
  },
  {
    "sl.no": 2238,
    item: "8697-Chain link fabric fencing mesh of size 25x25 mm made of G.I. wire of dia 3 mm",
    unit: "sqm"
  },
  {
    "sl.no": 2239,
    item: "8698-Stainless steel cramps (weight 260 grams) with nuts, bolts and washer for dry stone cladding ",
    unit: "each"
  },
  {
    "sl.no": 2240,
    item: "8699-8 mm thick tapered edge ccalcium silicate board",
    unit: "sqm"
  },
  {
    "sl.no": 2241,
    item: "8700-10 mm thick calcium silicate board",
    unit: "sqm"
  },
  {
    "sl.no": 2242,
    item: "8701- SS pipe 304 grades with press fit technology as per JIS 3448 standard 48.60 mm outer dia ",
    unit: "metre"
  },
  {
    "sl.no": 2243,
    item: "8702-Coupling/Socket fittings for 15.88 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2244,
    item: "8703-Telescopic drawer channels 300 mm long",
    unit: "set"
  },
  {
    "sl.no": 2245,
    item: "8704-Stainless steel roller for sliding arrangement in racks/cupboards/cabinets shutter",
    unit: "each"
  },
  {
    "sl.no": 2246,
    item: "8705-50 mmx42 mmx2 mm thick Factory made door frame of PVC extruded sections in white, grey or wooden finish",
    unit: "metre"
  },
  {
    "sl.no": 2247,
    item: "8706-25 mm thick factory made PVC flush door shutter i/c carriage",
    unit: "sqm"
  },
  {
    "sl.no": 2248,
    item: "8707-Factory made glass reinforced plastic door frame 90x45 mm i/c carriage",
    unit: "metre"
  },
  {
    "sl.no": 2249,
    item: "8708-30 mm thick factory made glass fiber reinforced plastic panel door shutter i/c carriage",
    unit: "sqm"
  },
  {
    "sl.no": 2250,
    item: "8709-30 mm thick factory made solid PVC profile panelled door single pipece extruded profile decorative finish (wood grain printed on both side)",
    unit: "sqm"
  },
  {
    "sl.no": 2251,
    item: "8710-Factory made solid PVC door frame 60 x  32 mm i/c carriage",
    unit: "metre"
  },
  {
    "sl.no": 2252,
    item: "8711-28 mm factory made solid PVC panel door shutter i/c carriage ",
    unit: "sqm"
  },
  {
    "sl.no": 2253,
    item: "8712-30 mm thick factory made solid PVC profile panelled door single pipece extruded profile non decorative finish ",
    unit: "sqm"
  },
  {
    "sl.no": 2254,
    item: "8713-Fiber glass reinforced plastic chajja",
    unit: "sqm"
  },
  {
    "sl.no": 2255,
    item: "8714-Magnetic catcher triple strip vertical type",
    unit: "each"
  },
  {
    "sl.no": 2256,
    item: "8715-Magnetic catcher double strip horizontal type",
    unit: "each"
  },
  {
    "sl.no": 2257,
    item: "8716-100 mm mortice lock with 6 levers for aluminium door",
    unit: "each"
  },
  {
    "sl.no": 2258,
    item: "8717-12.5 mm thick Glass fibre reinforced Gypsum board",
    unit: "sqm"
  },
  {
    "sl.no": 2259,
    item: "8719-2nd class teak wood lipping/ moulded beading or Taj beading of size 18x5 mm",
    unit: "metre"
  },
  {
    "sl.no": 2260,
    item: "8720-Ceiling sections 0.55 mm thick having a knurled web of 51.55 mm and two flanges of 26 mm each with lips of 10.55 mm",
    unit: "metre"
  },
  {
    "sl.no": 2261,
    item: "8721-Perimeter channel having one flange of 20 mm and another flange of 30 mm with thickness of 0.55 mm and web of length 27 mm",
    unit: "metre"
  },
  {
    "sl.no": 2262,
    item: "8722-Nylon sleeve & wooden screws ( 40 mm)",
    unit: "each"
  },
  {
    "sl.no": 2263,
    item: "8723-Counter sunk ribbed head screw 25",
    unit: "100 nos"
  },
  {
    "sl.no": 2264,
    item: "8724-12 mm thick marine plywood conforning IS: 710",
    unit: "sqm"
  },
  {
    "sl.no": 2265,
    item: "8725-12 mm thick fire retardant plywood conforming to IS: 5509",
    unit: "sqm"
  },
  {
    "sl.no": 2266,
    item: "8726-1.5 mm thick decorative laminated sheet",
    unit: "sqm"
  },
  {
    "sl.no": 2267,
    item: "8727-1.0 mm thick decorative laminated sheet",
    unit: "sqm"
  },
  {
    "sl.no": 2268,
    item: "8730-30 mm thick factory made glass  fiber reinforced pllastic flush door shutte i/c carriage",
    unit: "sqm"
  },
  {
    "sl.no": 2269,
    item: "8731-High polymer modified quickset tile adhesive",
    unit: "kg"
  },
  {
    "sl.no": 2270,
    item: "8732-Synthetic polyster traingular fibre of length 12 mm, effective diameter 10.40 microns and specific gravity of 1.34 to 1.40",
    unit: "kg"
  },
  {
    "sl.no": 2271,
    item: "8733-Synthetic ployster triangular fibre of length 6 mm, effective diameter 10-40 microns and specific gravity of 1.34 to 1.40",
    unit: "kg"
  },
  {
    "sl.no": 2272,
    item: "8734-P.V.C. Single piece extruded door frame of profile size 50 mm x 47 mm with wall thickness of 5 mm",
    unit: "metre"
  },
  {
    "sl.no": 2273,
    item: "8735-35 mm thick factory made solid panel PVC door shutter of single piece extruded profile non decorative finished (Matt finished)",
    unit: "sqm"
  },
  {
    "sl.no": 2274,
    item: "8736-35 mm thick factory made solid panel PVC door shutter of single piece extruded profile decorative finished  (Wood grain finished)",
    unit: "sqm"
  },
  {
    "sl.no": 2275,
    item: "8737-Stainless Steel wire guage (Grade-304) aperture 1.4 mm and 0.50 mm dia wire",
    unit: "sqm"
  },
  {
    "sl.no": 2276,
    item: "8738-Facrory made door frame fire rated (60 minutes) made with 16 SWG G.I. Sheet of section 143 mm x 57 mm duly filled with vermuculite based concrete mix",
    unit: "metre"
  },
  {
    "sl.no": 2277,
    item: "8739-Fire rated door shuttere made with 16 SWG G.I. sheet (60 minutes) without panel",
    unit: "sqm"
  },
  {
    "sl.no": 2278,
    item: "8740-Fire seal Putty",
    unit: "kg"
  },
  {
    "sl.no": 2279,
    item: "8741-Clear fire resistant glass panes 6 mm thick (60 minutes)",
    unit: "sqm"
  },
  {
    "sl.no": 2280,
    item: "8742-G.I.U beading 16 SWG G.I. sheet (zinc coating >120gm/m2) with ceramic tape of suitable thickness and fire resistant primer coating ",
    unit: "metre"
  },
  {
    "sl.no": 2281,
    item: "8743-Matrix Mineral Board",
    unit: "metre"
  },
  {
    "sl.no": 2282,
    item: "8744-Panic Bar / latch (Double point)",
    unit: "each"
  },
  {
    "sl.no": 2283,
    item: "8745-65 mm x 55 mm x 2 mm thick Factory made door frame of PVC extruded section in white grey or wooden finish",
    unit: "metre"
  },
  {
    "sl.no": 2284,
    item: "8746-37 mm thick Factory made shutter with style, rails and panels of PVC extruded section in white or grey finish i/c carriage",
    unit: "sqm"
  },
  {
    "sl.no": 2285,
    item: "8747-75 mm x 53 mm x 2.0 mm thick Factory made door frame of PVC extruded section in white, grey or wooden finish",
    unit: "metre"
  },
  {
    "sl.no": 2286,
    item: "8748-37 mm thick Factory made fusion welded shutter with style, rails and panels of PVC extruded section in wooden finish ",
    unit: "sqm"
  },
  {
    "sl.no": 2287,
    item: "8749-Zinc alloy (white powder coated) touch lock\nwith hook for wire mesh shutter",
    unit: "each"
  },
  {
    "sl.no": 2288,
    item: "8750-Zinc alloy (white powder coated) casement handle for uPVC windows",
    unit: "each"
  },
  {
    "sl.no": 2289,
    item: "8751-Zinc alloy (white powder coated) Touch Lock for uPVC windows  for uPVC windows",
    unit: "each"
  },
  {
    "sl.no": 2290,
    item: "8752-Zinc alloy rollers for uPVC windows",
    unit: "each"
  },
  {
    "sl.no": 2291,
    item: "8753-Zinc alloy rollers for uPVC door",
    unit: "each"
  },
  {
    "sl.no": 2292,
    item: "8754-Zinc alloy (white powder coated ) casement lock for uPVC windows ",
    unit: "each"
  },
  {
    "sl.no": 2293,
    item: "8755-Stainless steel friction hinge of size 200 mm x 19 x 1.9 mm for uPVC windows ",
    unit: "each"
  },
  {
    "sl.no": 2294,
    item: "8756-Stainless steel friction hinge of size 250 mm x 19 x 1.9 mm for uPVC windows",
    unit: "each"
  },
  {
    "sl.no": 2295,
    item: "8757-Stainless steel friction hinge of size 300 mm x 19 x 1.9 mm for uPVC windows",
    unit: "each"
  },
  {
    "sl.no": 2296,
    item: "8758-Stainless steel friction hinge of size 350 mm x 19 x 1.9 mm for uPVC windows",
    unit: "each"
  },
  {
    "sl.no": 2297,
    item: "8759-Stainless steel friction hinge of size 400 mm x 19 x 1.9 mm for uPVC windows",
    unit: "each"
  },
  {
    "sl.no": 2298,
    item: "8772-Aluminium Track on bottom rail for uPVC window",
    unit: "metre"
  },
  {
    "sl.no": 2299,
    item: "8773-Wool Pine for uPVC window",
    unit: "metre"
  },
  {
    "sl.no": 2300,
    item: "8774-Aluminium Grill",
    unit: "kg"
  },
  {
    "sl.no": 2301,
    item: "8775-Steel Galvanised tubular reinforcement for uPVC door/ window ",
    unit: "metre"
  },
  {
    "sl.no": 2302,
    item: "8776-Stainless Steel dash fastener of 8 mm dia and 75 mm long bolt",
    unit: "each"
  },
  {
    "sl.no": 2303,
    item: "8777-GI Fastener 100x8 mm",
    unit: "each"
  },
  {
    "sl.no": 2304,
    item: "8778-Toughened glass 12 mm thickness",
    unit: "sqm"
  },
  {
    "sl.no": 2305,
    item: "8779-SS pipe 304 grades with press fit technology as per JIS 3448 standard 15.88 mm outer dia",
    unit: "metre"
  },
  {
    "sl.no": 2306,
    item: "8780- SS pipe 304 grades with press fit technology as per JIS 3448 standard 22.22 mm outer dia",
    unit: "metre"
  },
  {
    "sl.no": 2307,
    item: "8781- SS pipe 304 grades with press fit technology as per JIS 3448 standard 28.58 mm outer dia",
    unit: "metre"
  },
  {
    "sl.no": 2308,
    item: "8782-SS pipe 304 grades with press fit technology as per JIS 3448 standard 34.00 mm outer dia",
    unit: "metre"
  },
  {
    "sl.no": 2309,
    item: "8783- SS pipe 304 grades with press fit technology as per JIS 3448 standard 42.70 mm outer dia",
    unit: "metre"
  },
  {
    "sl.no": 2310,
    item: "8784-8 mm thick Calcium silicate perforated tiles of size 595 x595 mm",
    unit: "sqm"
  },
  {
    "sl.no": 2311,
    item: "8785-Interlocking C.C. paver block (80 mm thick, M-30)",
    unit: "sqm"
  },
  {
    "sl.no": 2312,
    item: "8786-Coupling/Socket fittings for 22.22 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2313,
    item: "8787-Coupling/Socket fittings for 28.58 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2314,
    item: "8788-Coupling/Socket fittings for 34.00 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2315,
    item: "8789-Coupling/Socket fittings for 42.70 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2316,
    item: "8790-Coupling/Socket fittings for 48.60 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2317,
    item: "8791-Reducer for 22.22 mm X 15.88 mm outer Dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2318,
    item: "8792-Reducer for 28.58 mm X 15.88 mm outer Dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2319,
    item: "8793-Reducer for 28.58 mm X 22.22 mm outer Dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2320,
    item: "8794-Reducer for 34.00 mm X 15.88 mm outer Dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2321,
    item: "8795-Reducer for 34.00 mm X 22.22 mm outer Dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2322,
    item: "8796-Reducer for 34.00 mm X 28.58 mm outer Dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2323,
    item: "8797-Reducer for 42.70 mm X 15.88 mm outer Dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2324,
    item: "8798-Reducer for 42.70 mm X 22.22 mm outer Dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2325,
    item: "8799-Reducer for 42.70 mm X 28.58 mm outer Dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2326,
    item: "8800-Reducer for 48.60 mm X 15.88 mm outer Dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2327,
    item: "8801-Reducer for 42.70 mm X 34.00 mm outer Dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2328,
    item: "8802-Reducer for 48.60 mm X 22.22 mm outer Dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2329,
    item: "8803-Reducer for 48.60 mm X 28.58 mm outer Dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2330,
    item: "8804-Reducer for 48.60 mm X 34.00 mm outer Dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2331,
    item: "8805-Reducer for48.60 mm X 42.70 mm outer Dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2332,
    item: "8806-Slip Coupling / Socket 15.88 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2333,
    item: "8807-Slip Coupling / Socket 22.22 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2334,
    item: "8808-Slip Coupling / Socket 28.58 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2335,
    item: "8809-Slip Coupling / Socket 34.00 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2336,
    item: "8810-Slip Coupling / Socket 42.70 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2337,
    item: "8811-Slip Coupling / Socket 48.60 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2338,
    item: "8812-Elbow 90o for 15.88 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2339,
    item: "8813-Elbow 90o for 22.22 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2340,
    item: "8814-Elbow 90o for 28.58 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2341,
    item: "8815-Elbow 90o for 34.00 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2342,
    item: "8816-Elbow 90o for 42.70 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2343,
    item: "8817-Elbow 90o for 48.60 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2344,
    item: "8818-Reducing Elbow 90o for 22.22 mm X 15.88 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2345,
    item: "8819-Reducing Elbow 90o for 28.58 mm X 15.88 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2346,
    item: "8820-Reducing Elbow 90o for 28.58 mm X 22.22 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2347,
    item: "8821-Reducing Elbow 90o for 34.00 mm X 22.22 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2348,
    item: "8822-Reducing Elbow 90o for 34.00 mm X 28.58 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2349,
    item: "8823-Reducing Elbow 90o for 42.70 mm X 34.00 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2350,
    item: "8824-Equal Tee for 15.88 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2351,
    item: "8825-Equal Tee for 22.22 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2352,
    item: "8826-Equal Tee for 28.58 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2353,
    item: "8827-Equal Tee for 34.00 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2354,
    item: "8828-Equal Tee for 42.70 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2355,
    item: "8829-Equal Tee for 48.60 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2356,
    item: "8830-Reducing Tee for 22.22 mm X 15.88 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2357,
    item: "8831-Reducing Tee for 28.58 mm X 15.88 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2358,
    item: "8832-Reducing Tee for 28.58 mm X 22.22 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2359,
    item: "8833-Reducing Tee for 34.00 mm X 15.88 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2360,
    item: "8834-Reducing Tee for 34.00 mm X 22.22 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2361,
    item: "8835-Reducing Tee for 34.00 mm X 28.58 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2362,
    item: "8836-Reducing Tee for 42.70 mm X 15.88 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2363,
    item: "8837-Reducing Tee for 42.70 mm X 22.22 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2364,
    item: "8838-Reducing Tee for 42.70 mm X 28.58 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2365,
    item: "8839-Reducing Tee for 42.70 mm X 34.00 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2366,
    item: "8840-Reducing Tee for 48.60 mm X 15.88 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2367,
    item: "8841-Reducing Tee for 48.60 mm X 22.22 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2368,
    item: "8842-Reducing Tee for 48.60 mm X 28.58 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2369,
    item: "8843-Reducing Tee for 48.60mm X 34.00 mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2370,
    item: "8844-Reducing Tee for 48.60mm X 42.70mm outer dia SS pipe",
    unit: "each"
  },
  {
    "sl.no": 2371,
    item: "8845-Male thread Tee for 15.88 mm outer dia X 15 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2372,
    item: "8846-Male thread Tee for 22.22 mm outer dia X 15 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2373,
    item: "8847-Male thread Tee for 22.22 mm outer dia X 20 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2374,
    item: "8848-Male thread Tee for 28.58 mm outer dia X 15 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2375,
    item: "8849-Stainless steel Male thread Tee for 28.58 mm outer dia X 20 mm\nnominal  dia  threaded",
    unit: "each"
  },
  {
    "sl.no": 2376,
    item: "8850-Stainless steel Male thread Tee for 28.58 mm outer dia X 25 mm\nnominal  dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2377,
    item: "8851-Male thread Tee for 34.00 mm outer dia X 15 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2378,
    item: "8852-Male thread Tee for 34.00 mm outer dia X 20 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2379,
    item: "8853-Male thread Tee for 34.00 mm outer dia X 25 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2380,
    item: "8854-Male thread Tee for 34.00 mm outer dia X 32 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2381,
    item: "8855-Male thread Tee for 42.70 mm outer dia X 15 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2382,
    item: "8856-Male thread Tee for 42.70 mm outer dia X 20 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2383,
    item: "8857-Male thread Tee for 42.70 mm outer dia X 25 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2384,
    item: "8858-Male thread Tee for 42.70 mm outer dia X 32 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2385,
    item: "8859-Male thread Tee for 42.70 mm outer dia X 40 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2386,
    item: "8860-Male thread Tee for 48.60 mm outer dia X 15 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2387,
    item: "8861-Male thread Tee for 48.60 mm outer dia X 20 mm nominal dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2388,
    item: "8862-Male thread Tee for 48.60 mm outer dia X 25 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2389,
    item: "8863-Male thread Tee for 48.60 mm outer dia X 32 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2390,
    item: "8864-Male thread Tee for 48.60 mm outer dia X 40 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2391,
    item: "8865-Male thread Tee for 48.60 mm outer dia X 50 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2392,
    item: "8866-Female thread Tee for 15.88 mm outer dia X 15 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2393,
    item: "8867-Female thread Tee for 22.22 mm outer dia X 15 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2394,
    item: "8868-Female thread Tee for 22.22 mm outer dia X 20 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2395,
    item: "8869-Female thread Tee for 28.58 mm outer dia X 15 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2396,
    item: "8870-Female thread Tee for 28.58 mm outer dia X 20 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2397,
    item: "8871-Female thread Tee for 28.58 mm outer dia X 25 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2398,
    item: "8872-Female thread Tee for 34.00 mm outer dia X 15 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2399,
    item: "8873-Female thread Tee for 34.00 mm outer dia X 20 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2400,
    item: "8874-Female thread Tee for 34.00 mm outer dia X 25 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2401,
    item: "8875-Female thread Tee for 34.00 mm outer dia X 32 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2402,
    item: "8876-Female thread Tee for 42.70 mm outer dia X 15 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2403,
    item: "8877-Female thread Tee for 42.70 mm outer dia X 20 mm nominal dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2404,
    item: "8878-Female thread Tee for 42.70 mm outer dia X 25 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2405,
    item: "8879-Female thread Tee for 42.70 mm outer dia X 32 mm nominal dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2406,
    item: "8880-Female thread Tee for 42.70 mm outer dia X 40 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2407,
    item: "8881-Female thread Tee for 48.60 mm outer dia X 15 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2408,
    item: "8882-Female thread Tee for 48.60 mm outer dia X 20 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2409,
    item: "8883-Female thread Tee for 48.60 mm outer dia X 25 mm nominal dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2410,
    item: "8884-Female thread Tee for 48.60 mm outer dia X 32 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2411,
    item: "8885-Female thread Tee for 48.60 mm outer dia X 40 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2412,
    item: "8886-Female thread Tee for 48.60 mm outer dia X 50 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2413,
    item: "8887-Female threaded Connector/Adapter for 15.88 mm outer dia X 15 mm nominal threaded ",
    unit: "each"
  },
  {
    "sl.no": 2414,
    item: "8888-Female threaded Connector/Adapter for 22.22 mm outer dia X 15 mm nominal threaded ",
    unit: "each"
  },
  {
    "sl.no": 2415,
    item: "8889-Female threaded Connector/Adapter for 22.22 mm outer dia X 20 mm nominal threaded ",
    unit: "each"
  },
  {
    "sl.no": 2416,
    item: "8890-Female threaded Connector/Adapter for 28.58 mm outer dia X 15 mm nominal threaded ",
    unit: "each"
  },
  {
    "sl.no": 2417,
    item: "8891-Female threaded Connector/Adapter for 28.58 mm outer dia X 20 mm nominal threaded ",
    unit: "each"
  },
  {
    "sl.no": 2418,
    item: "8892-Female threaded Connector/Adapter for 28.58 mm outer dia X 25 mm nominal threaded ",
    unit: "each"
  },
  {
    "sl.no": 2419,
    item: "8893-Female threaded Connector/Adapter for 34.00 mm outer dia X 25 mm nominal threaded ",
    unit: "each"
  },
  {
    "sl.no": 2420,
    item: "8894-Female threaded Connector/Adapter for 34.00 mm outer dia X 32 mm nominal threaded ",
    unit: "each"
  },
  {
    "sl.no": 2421,
    item: "8895-Female threaded Connector/Adapter for 42.70 mm outer dia X 32 mm nominal threaded ",
    unit: "each"
  },
  {
    "sl.no": 2422,
    item: "8896-Female threaded Connector/Adapter for 42.70 mm outer dia X 40 mm nominal threaded ",
    unit: "each"
  },
  {
    "sl.no": 2423,
    item: "8897-Female threaded Connector/Adapter for 48.60 mm outer dia X 40 mm nominal threaded ",
    unit: "each"
  },
  {
    "sl.no": 2424,
    item: "8898-Female threaded Connector/Adapter for 48.60 mm outer dia X 50 mm nominal threaded ",
    unit: "each"
  },
  {
    "sl.no": 2425,
    item: "8899-Male threaded Connector/Adapter for 15.88 mm outer dia X 15 mm nominal threaded ",
    unit: "each"
  },
  {
    "sl.no": 2426,
    item: "8900-Male threaded Connector/Adapter for 22.22 mm outer dia X 15 mm nominal threaded ",
    unit: "each"
  },
  {
    "sl.no": 2427,
    item: "8901-Male threaded Connector/Adapter for 22.22 mm outer dia X 20 mm nominal threaded ",
    unit: "each"
  },
  {
    "sl.no": 2428,
    item: "8902-Male threaded Connector/Adapter for 28.58 mm outer dia X 20 mm nominal threaded ",
    unit: "each"
  },
  {
    "sl.no": 2429,
    item: "8903-Male threaded Connector/Adapter for 28.58 mm outer dia X 25 mm nominal threaded ",
    unit: "each"
  },
  {
    "sl.no": 2430,
    item: "8904-Male threaded Connector/Adapter for 34.00 mm outer dia X 25 mm nominal threaded",
    unit: "each"
  },
  {
    "sl.no": 2431,
    item: "8905-Male threaded Connector/Adapter for 34.00 mm outer dia X 32 mm nominal threaded",
    unit: "each"
  },
  {
    "sl.no": 2432,
    item: "8906-Male threaded Connector/Adapter for 42.70 mm outer dia X 32 mm nominal threaded ",
    unit: "each"
  },
  {
    "sl.no": 2433,
    item: "8907-Male threaded Connector/Adapter for 42.70 mm outer dia X 40 mm nominal threaded ",
    unit: "each"
  },
  {
    "sl.no": 2434,
    item: "8908-Male threaded Connector/Adapter for 48.60 mm outer dia X 40 mm nominal threaded",
    unit: "each"
  },
  {
    "sl.no": 2435,
    item: "8909-Male threaded Connector/Adapter for 48.60 mm outer dia X 50 mm nominal threaded",
    unit: "each"
  },
  {
    "sl.no": 2436,
    item: "8910-Valve Connector for 15.88 mm outer dia X 15 mm nominal dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2437,
    item: "8911-Valve Connector for 22.22 mm outer dia X 15 mm nominal dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2438,
    item: "8912-Valve Connector for 22.22 mm outer dia X 20 mm nominal dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2439,
    item: "8913-Valve Connector for 28.58 mm outer dia X 25 mm nominal dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2440,
    item: "8914-Valve Connector for 34.00 mm outer dia X 32 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2441,
    item: "8915-Valve Connector for 42.70 mm outer dia X 40 mm nominal dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2442,
    item: "8916-Valve Connector for 48.60 mm outer dia X 50 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2443,
    item: "8917-Female Threaded Elbow 90o for 15.88 mm outer dia X 15 mm nominal dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2444,
    item: "8918-Female Threaded Elbow 90o for 22.22 mm outer dia X 15 mm nominal dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2445,
    item: "8919-Female Threaded Elbow 90o for 22.22 mm outer dia X 20 mm nominal dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2446,
    item: "8920-Female Threaded Elbow 90o for 28.58 mm outer dia X 25 mm nominal dia threaded ",
    unit: "each"
  },
  {
    "sl.no": 2447,
    item: "8921-Female Threaded Elbow 90o for 34.00 mm outer dia X 32 mm nominal dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2448,
    item: "8922-Female Threaded Elbow 90o for 42.70 mm outer dia X 32 mm nominal dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2449,
    item: "8923-Female Threaded Elbow 90o for 42.70 mm outer dia X40 mm nominal dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2450,
    item: "8924-Female Threaded Elbow 90o for 48.60 mm outer dia X 40 mm nominal dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2451,
    item: "8925-Female Threaded Elbow 90o for 48.60 mm outer dia X 50 mm nominal dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2452,
    item: "8926-Male Threaded Elbow 90o for 15.88 mm outer dia X 15 mm nominal dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2453,
    item: "8927-Male Threaded Elbow 90o for 22.22 mm outer dia X 15 mm nominal dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2454,
    item: "8928-Male Threaded Elbow 90o for 22.22 mm outer dia X 20 mm nominal dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2455,
    item: "8929-Male Threaded Elbow 90o for 28.58 mm outer dia X 25 mm nominal dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2456,
    item: "8930-MaleThreaded Elbow 90o for 34.00 mm outer dia X 25 mm nominal dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2457,
    item: "8931-Male Threaded Elbow 90o for 34.00 mm outer dia X 32 mm nominal dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2458,
    item: "8932-Male Threaded Elbow 90o for 42.70 mm outer dia X 32 mm nominal dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2459,
    item: "8933-Male Threaded Elbow 90o for 42.70 mm outer dia X40 mm nominal dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2460,
    item: "8934-Male Threaded Elbow 90o for 48.60 mm outer dia X 40 mm nominal dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2461,
    item: "8935-Male Threaded Elbow 90o for 48.60 mm outer dia X 50 mm nominal dia threaded",
    unit: "each"
  },
  {
    "sl.no": 2462,
    item: "8936-Cap for 15.88 mm outer dia pipe",
    unit: "each"
  },
  {
    "sl.no": 2463,
    item: "8937-Cap for 22.22 mm outer dia pipe",
    unit: "each"
  },
  {
    "sl.no": 2464,
    item: "8938-Cap for 28.58 mm outer dia pipe",
    unit: "each"
  },
  {
    "sl.no": 2465,
    item: "8939-Cap for 34.00 mm outer dia pipe",
    unit: "each"
  },
  {
    "sl.no": 2466,
    item: "8940-Cap for 42.70 mm outer dia pipe",
    unit: "each"
  },
  {
    "sl.no": 2467,
    item: "8941-Cap for 48.60 mm outer dia pipe",
    unit: "each"
  },
  {
    "sl.no": 2468,
    item: "8942-Pipe Bridge for 15.88 mm outer dia pipe",
    unit: "each"
  },
  {
    "sl.no": 2469,
    item: "8943-Pipe Bridge for 15.88 mm outer dia pipe",
    unit: "each"
  },
  {
    "sl.no": 2470,
    item: "8944-Pipe Bridge for 28.58 mm outer dia pipe",
    unit: "each"
  },
  {
    "sl.no": 2471,
    item: "8945-4 Point facade glass bracket",
    unit: "no"
  },
  {
    "sl.no": 2472,
    item: "8946-2 Point facade glass bracket",
    unit: "no"
  },
  {
    "sl.no": 2473,
    item: "8947-1 Point facade glass bracket",
    unit: "no"
  },
  {
    "sl.no": 2474,
    item: "8948-Flate head bolt",
    unit: "no"
  },
  {
    "sl.no": 2475,
    item: "8949-400 fin plate at top",
    unit: "pair"
  },
  {
    "sl.no": 2476,
    item: "8953-Micro Silica",
    unit: "kg"
  },
  {
    "sl.no": 2477,
    item: "8954-Stop end tubes for diaphragmwall 600 mm dia.",
    unit: "sqm"
  },
  {
    "sl.no": 2478,
    item: "8955-Driving end tubes for diaphragm wall 600 mm dia.",
    unit: "sqm"
  },
  {
    "sl.no": 2479,
    item: "8956-Bi-Axial Extruded GeoGrid of Minimum Tensile Strength 15 kN/m in the longitudinal and transverse direction",
    unit: "sqm"
  },
  {
    "sl.no": 2480,
    item: "8957-Bi-Axial Extruded GeoGrid of Minimum Tensile Strength 20 kN/m in the longitudinal and transverse direction",
    unit: "sqm"
  },
  {
    "sl.no": 2481,
    item: "8958-Bi-Axial Extruded GeoGrid of Minimum Tensile Strength 30 kN/m in the longitudinal and transverse direction",
    unit: "sqm"
  },
  {
    "sl.no": 2482,
    item: "8959-Bi-Axial Extruded GeoGrid of Minimum Tensile Strength 40 kN/m in the longitudinal and transverse direction",
    unit: "sqm"
  },
  {
    "sl.no": 2483,
    item: '8960-Geosynthetic drainage with two filtering nonwoven geotextiles having a "W" configuration as longitudinal parallel channels.  Minimum thickness to be 7.2 mm, with two filtering UV stabilized polypropylene nonwoven geotextile of minimum thickness of 0.75mm having pores of 150 micron and tensile strength of 8.0 kN/m and having plane flow capacity of 2.1 L/(m.s) at hydraulic gradient of 1.0 & 20kPa pressure tensile strength of 18kN/m with mass per unit area of 740 gsm',
    unit: "sqm"
  },
  {
    "sl.no": 2484,
    item: "8961-Geosynthetic drainage composite havign thermobonding a draining core -HDPE geonet comprise to two set of parallel overlyed ribs integrally connected to have a rhomboidal shape with polyethylene film and a non woven geotextile having mass per unit are 130g/m2 and tensile strength of 8.0 kN/m having a plane flow capacity of 0.7 L/(m.s) at hydraulic gradient of 1.0 & 20 kPa pressure and tensile stength of 13.5 kN/m, with mass per unit are of 830 gsm",
    unit: "sqm"
  },
  {
    "sl.no": 2485,
    item: "8962-Synthetic Geogrid having Ultimate tensile strength - 100kN/m",
    unit: "sqm"
  },
  {
    "sl.no": 2486,
    item: "8963-Synthetic Geogrid Ultimate tensile strength - 150kN/m",
    unit: "sqm"
  },
  {
    "sl.no": 2487,
    item: "8964-Synthetic Geogrid Ultimate tensile strength - 200kN/m",
    unit: "sqm"
  },
  {
    "sl.no": 2488,
    item: "8965-Synthetic Geogrid Ultimate tensile strength - 250kN/m",
    unit: "sqm"
  },
  {
    "sl.no": 2489,
    item: "8966-Synthetic Geogrid Ultimate tensile strength - 300kN/m",
    unit: "sqm"
  },
  {
    "sl.no": 2490,
    item: "8967-Synthetic Geogrid Ultimate tensile strength - 350kN/m",
    unit: "sqm"
  },
  {
    "sl.no": 2491,
    item: "8968-Synthetic Geogrid Ultimate tensile strength - 400kN/m",
    unit: "sqm"
  },
  {
    "sl.no": 2492,
    item: "8969-Synthetic Geogrid Ultimate tensile strength - 500kN/m",
    unit: "sqm"
  },
  {
    "sl.no": 2493,
    item: "8970-Synthetic Geogrid Ultimate tensile strength - 600kN/m",
    unit: "sqm"
  },
  {
    "sl.no": 2494,
    item: "8971-Synthetic Geogrid Ultimate tensile strength - 700kN/m",
    unit: "sqm"
  },
  {
    "sl.no": 2495,
    item: "8972-Synthetic Geogrid Ultimate tensile strength - 800kN/m",
    unit: "sqm"
  },
  {
    "sl.no": 2496,
    item: "8973-Synthetic Geogrid Ultimate tensile strength - 900kN/m",
    unit: "sqm"
  },
  {
    "sl.no": 2497,
    item: "8974-Synthetic Geogrid Ultimate tensile strength - 1000kN/m",
    unit: "sqm"
  },
  {
    "sl.no": 2498,
    item: "8975-Synthetic Geogrid Ultimate tensile strength - 1100kN/m",
    unit: "sqm"
  },
  {
    "sl.no": 2499,
    item: "8976-Synthetic Geogrid Ultimate tensile strength - 1200kN/m",
    unit: "sqm"
  },
  {
    "sl.no": 2500,
    item: "8977-Aluminium profile industrial troughed sheet of alloy 31500/31000/40800, conforming to IS 1254, IS 737,IS 2676, 0.71 mm thick, the profile detail width 1044/920 mm, cover width 1000/875 mm",
    unit: "sqm"
  },
  {
    "sl.no": 2501,
    item: "8978-Aluminium profile industrial troughed sheet of Alloy 31500/31000/40800 conforming to IS 1254, IS 737, IS 2676, 0.91 mm thick, the profile detail width 1044/920 mm, cover width 1000/875 mm",
    unit: "sqm"
  },
  {
    "sl.no": 2502,
    item: "9001-C.P Brass Centre Hole basin mixer with cast spout",
    unit: "each"
  },
  {
    "sl.no": 2503,
    item: "9007-C.P. Brass Centre Hole Basin Mixer With Cast Spout ( Kigston/Marc/Prima/ Parko/ Hindware",
    unit: "each"
  },
  {
    "sl.no": 2504,
    item: "9950-     Petrol                  Liter           56.61",
    unit: "Litre"
  },
  {
    "sl.no": 2505,
    item: "9977-Carriage",
    unit: "L.S"
  },
  {
    "sl.no": 2506,
    item: "9988-Carriage and sundries",
    unit: "L.S"
  },
  {
    "sl.no": 2507,
    item: "9999-Sundries",
    unit: "L.S"
  },
  {
    "sl.no": 2508,
    item: "99993-Premise 30.50% 1P",
    unit: "Litre"
  },
  {
    "sl.no": 2509,
    item: "99994-G I wire",
    unit: "per kg"
  },
  {
    "sl.no": 2510,
    item: "Dsor Code-Dsor description",
    unit: "Unit"
  },
  {
    "sl.no": 2511,
    item: "2200-Steam coal",
    unit: "tonne"
  },
  {
    "sl.no": 2512,
    item: "2201-Bricks",
    unit: "1000 nos"
  },
  {
    "sl.no": 2513,
    item: "2202-Stone aggregate below 40 mm nominal size",
    unit: "cum"
  },
  {
    "sl.no": 2514,
    item: "2203-Coarse sand",
    unit: "cum"
  },
  {
    "sl.no": 2515,
    item: "2204-Timber",
    unit: "cum"
  },
  {
    "sl.no": 2516,
    item: "2205-Steel",
    unit: "tonne"
  },
  {
    "sl.no": 2517,
    item: "2206-Stone aggregate 40 mm nominal size and above",
    unit: "cum"
  },
  {
    "sl.no": 2518,
    item: "2207-Brick tiles",
    unit: "1000 nos"
  },
  {
    "sl.no": 2519,
    item: "2208-Lime",
    unit: "cum"
  },
  {
    "sl.no": 2520,
    item: "2209-Cement",
    unit: "tonne"
  },
  {
    "sl.no": 2521,
    item: "2211-Tar bitumen",
    unit: "tonne"
  },
  {
    "sl.no": 2522,
    item: "2215-Soling stone & masonry stone",
    unit: "cum"
  },
  {
    "sl.no": 2523,
    item: "2216-Stone blocks white & red sand stone & Kota stone slab",
    unit: "tonne"
  },
  {
    "sl.no": 2524,
    item: "2224-S.W. pipes 100 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2525,
    item: "2225-S.W. pipes 150 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2526,
    item: "2226-S.W. pipes 200 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2527,
    item: "2228-S.W. pipes 250 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2528,
    item: "2229-S.W. pipes 300 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2529,
    item: "2241-Good earth",
    unit: "cum"
  },
  {
    "sl.no": 2530,
    item: "2242-Dump manure",
    unit: "cum"
  },
  {
    "sl.no": 2531,
    item: "2260-Brick aggregate",
    unit: "cum"
  },
  {
    "sl.no": 2532,
    item: "2261-Fine sand (1 part badarpur sand : 2 parts jamuna sand",
    unit: "cum"
  },
  {
    "sl.no": 2533,
    item: "2262- Flyash",
    unit: "cum"
  },
  {
    "sl.no": 2534,
    item: "2264-Rubbish",
    unit: "cum"
  },
  {
    "sl.no": 2535,
    item: "2265-Carriage of Moorum",
    unit: "cum"
  },
  {
    "sl.no": 2536,
    item: "2266-Carriage of Surkhi",
    unit: "cum"
  },
  {
    "sl.no": 2537,
    item: "2267-Carriage of Stone dust",
    unit: "cum"
  },
  {
    "sl.no": 2538,
    item: "2268-Marble dust and marble chips",
    unit: "cum"
  },
  {
    "sl.no": 2539,
    item: "2271-G.I. pipes below 100 mm dia",
    unit: "tonne"
  },
  {
    "sl.no": 2540,
    item: "2272-Stainless Steel pipes below 100 mm dia",
    unit: "tonne"
  },
  {
    "sl.no": 2541,
    item: "2273-A.C. Sheet and accessories",
    unit: "tonne"
  },
  {
    "sl.no": 2542,
    item: "2275- R.C. C pipes 100 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2543,
    item: "2281-R.C.C.Pipes 150 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2544,
    item: "2287-R.C.C. Pipes 250 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2545,
    item: "2290-R.C.C. Pipes 300 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2546,
    item: "2299-R.C.C. Pipes 450 & 500 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2547,
    item: "2302-G.I. Sheet and accessories",
    unit: "tonne"
  },
  {
    "sl.no": 2548,
    item: "2303-R.C.C. Pipes 600,700,750 & 800  mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2549,
    item: "2308-Plaster of paris",
    unit: "tonne"
  },
  {
    "sl.no": 2550,
    item: "2309-Cast iron fittings",
    unit: "tonne"
  },
  {
    "sl.no": 2551,
    item: "2311-Red bajri",
    unit: "cum"
  },
  {
    "sl.no": 2552,
    item: "2314-Barbed wire",
    unit: "tonne"
  },
  {
    "sl.no": 2553,
    item: "2317-Sludge",
    unit: "cum"
  },
  {
    "sl.no": 2554,
    item: "2319-Spun iron S & S pipes 100 mm dia ",
    unit: "100 meter"
  },
  {
    "sl.no": 2555,
    item: "2320-Spun iron S & S pipes 125 mm dia ",
    unit: "100 meter"
  },
  {
    "sl.no": 2556,
    item: "2321-Spun iron S & S pipes 150 mm dia ",
    unit: "100 meter"
  },
  {
    "sl.no": 2557,
    item: "2322-Spun iron S & S pipes 200 mm dia ",
    unit: "100 meter"
  },
  {
    "sl.no": 2558,
    item: "2323-Spun iron S & S pipes 250 mm dia ",
    unit: "100 meter"
  },
  {
    "sl.no": 2559,
    item: "2324-Spun iron S & S pipes 300 mm dia ",
    unit: "100 meter"
  },
  {
    "sl.no": 2560,
    item: "2325-Spun iron S & S pipes 350 mm dia ",
    unit: "100 meter"
  },
  {
    "sl.no": 2561,
    item: "2326-Spun iron S & S pipes 400 mm dia ",
    unit: "100 meter"
  },
  {
    "sl.no": 2562,
    item: "2327-Spun iron S & S pipes 450 mm dia ",
    unit: "100 meter"
  },
  {
    "sl.no": 2563,
    item: "2328-Spun iron S & S pipes 500 mm dia ",
    unit: "100 meter"
  },
  {
    "sl.no": 2564,
    item: "2329-Spun iron S & S pipes 600 mm dia ",
    unit: "100 meter"
  },
  {
    "sl.no": 2565,
    item: "2330-C.I. pipes 500 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2566,
    item: "2331-R.C.C. pipes 900 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2567,
    item: "2332-R.C.C. pipes 1000 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2568,
    item: "2333-R.C.C. pipes 1100 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2569,
    item: "2334-R.C.C. pipes 1200 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2570,
    item: "2335-Jamuna sand",
    unit: "cum"
  },
  {
    "sl.no": 2571,
    item: "2336-R.C.C. pipe above 1200 mm dia and upto 1800 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2572,
    item: "2341-Pig lead",
    unit: "tonne"
  },
  {
    "sl.no": 2573,
    item: "2342-Solvent/ Diesel",
    unit: "quintal"
  },
  {
    "sl.no": 2574,
    item: "2343-Ductile iron pipes (K7) 100 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2575,
    item: "2344-Cast iron pipes 150 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2576,
    item: "2345-Cast iron pipes 200 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2577,
    item: "2346-Cast iron pipes 250 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2578,
    item: "2347-Cast iron pipes 300 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2579,
    item: "2348-Cast iron pipes 350 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2580,
    item: "2349-Cast iron pipes 400 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2581,
    item: "2350-Cast iron pipes 450 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2582,
    item: "2351-Cast iron pipes 500 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2583,
    item: "2352-Cast iron pipes 600 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2584,
    item: "2353-Cast iron pipes 700 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2585,
    item: "2355-Cast iron pipes 800 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2586,
    item: "2356-Cast iron pipes 900 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2587,
    item: "2357-Cast iron pipes 1000 mm dia",
    unit: "100 meter"
  },
  {
    "sl.no": 2588,
    item: "2499-Cost of Neelgiri/Maxican grass truf sqm",
    unit: "sqm"
  },
  {
    "sl.no": 2589,
    item: "Dsor Code-Dsor description",
    unit: "Unit"
  },
  {
    "sl.no": 2590,
    item: "MR9401-12 x 12 Gauge G.I. Wire 100 mtr at Ts. 8.00/ per m",
    unit: "metre"
  },
  {
    "sl.no": 2591,
    item: "MR9402-16 x 16 mm MS Square rod",
    unit: "kg"
  },
  {
    "sl.no": 2592,
    item: "MR9403-18 Gauge 75 mm MS Laths of 2.8 m Length",
    unit: "no"
  },
  {
    "sl.no": 2593,
    item: "MR9404-2 mm PVC sheet",
    unit: "sqm"
  },
  {
    "sl.no": 2594,
    item: "MR9405-20mm Thick preflamed black granite",
    unit: "sqm"
  },
  {
    "sl.no": 2595,
    item: "MR9406-20mm Thick preflamed grey granite",
    unit: "sqm"
  },
  {
    "sl.no": 2596,
    item: "MR9407-36 mm x 6mm MS Plates",
    unit: "kg"
  },
  {
    "sl.no": 2597,
    item: "MR9408-40 x 6 mm MS Plates",
    unit: "kg"
  },
  {
    "sl.no": 2598,
    item: "MR9409-5 mm BS Prelam PVC sheet",
    unit: "sqm"
  },
  {
    "sl.no": 2599,
    item: "MR9410-5 mm Semi finished PVC sheet",
    unit: "sqm"
  },
  {
    "sl.no": 2600,
    item: "MR9411-5 mm SS Prelam PVC sheet",
    unit: "sqm"
  },
  {
    "sl.no": 2601,
    item: 'MR9412-5" Dia 5mm Thick M.S plate',
    unit: "no"
  },
  {
    "sl.no": 2602,
    item: "MR9413-5.50 mm Thick plain glass",
    unit: "sqm"
  },
  {
    "sl.no": 2603,
    item: "MR9414-50 mm dia MS Hollow pipe B Class 14 Gauge",
    unit: "kg"
  },
  {
    "sl.no": 2604,
    item: "MR9415-5mm PVC sheet",
    unit: "sqm"
  },
  {
    "sl.no": 2605,
    item: "MR9416-Adhesive",
    unit: "kg"
  },
  {
    "sl.no": 2606,
    item: "MR9417-Adhesive for joints",
    unit: "kg"
  },
  {
    "sl.no": 2607,
    item: "MR9418-Adhesive for tiles",
    unit: "kg"
  },
  {
    "sl.no": 2608,
    item: "MR9419-Alluminium handles - 15 mm",
    unit: "each"
  },
  {
    "sl.no": 2609,
    item: "MR9420-Alluminium tower bolt - 20 cm",
    unit: "each"
  },
  {
    "sl.no": 2610,
    item: "MR9421-Aluminium window frame section 1.20 mm thick",
    unit: "kg"
  },
  {
    "sl.no": 2611,
    item: "MR9422-Anchor Bolts 750 mm",
    unit: "no"
  },
  {
    "sl.no": 2612,
    item: "MR9423-Ball bearing hinges heavy duty",
    unit: "no"
  },
  {
    "sl.no": 2613,
    item: "MR9424-Bond stone 20 x 20 x 45 cm",
    unit: "each"
  },
  {
    "sl.no": 2614,
    item: "MR9425-Bottom lock nail",
    unit: "each"
  },
  {
    "sl.no": 2615,
    item: "MR9426-Boulders",
    unit: "cum"
  },
  {
    "sl.no": 2616,
    item: "MR9427-Brass stop cock",
    unit: "each"
  },
  {
    "sl.no": 2617,
    item: "MR9428-Broken granite metal 10 mm",
    unit: "cum"
  },
  {
    "sl.no": 2618,
    item: "MR9429-Broken granite metal 12.5 mm",
    unit: "cum"
  },
  {
    "sl.no": 2619,
    item: "MR9430-Broken granite metal 20 mm",
    unit: "cum"
  },
  {
    "sl.no": 2620,
    item: "MR9431-Broken stone aggregate 12 mm to 10 mm size",
    unit: "cum"
  },
  {
    "sl.no": 2621,
    item: "MR9432-Broken stone aggregate 20 mm size",
    unit: "cum"
  },
  {
    "sl.no": 2622,
    item: "MR9433-Broken stone aggregate 40 mm size",
    unit: "cum"
  },
  {
    "sl.no": 2623,
    item: "MR9434-Burnt bricks class 35 (non modular)",
    unit: "no"
  },
  {
    "sl.no": 2624,
    item: "MR9435-Burnt lime/shell lime",
    unit: "quintal"
  },
  {
    "sl.no": 2625,
    item: "MR9436-Burnt stone slabs 10 cms thick",
    unit: "sqm"
  },
  {
    "sl.no": 2626,
    item: "MR9437-CI Pipes 75 mm dia of 1.8 m length",
    unit: "each"
  },
  {
    "sl.no": 2627,
    item: "MR9438-CI Bends 75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 2628,
    item: "MR9439-CI shoes 75 mm dia",
    unit: "each"
  },
  {
    "sl.no": 2629,
    item: "MR9440-CP brass chain with plug",
    unit: "each"
  },
  {
    "sl.no": 2630,
    item: "MR9441-CP brass pillar tap elbow operated",
    unit: "each"
  },
  {
    "sl.no": 2631,
    item: "MR9442-CP brass waste 32 mm of standard pattern",
    unit: "each"
  },
  {
    "sl.no": 2632,
    item: "MR9443-Cast iron spike",
    unit: "no"
  },
  {
    "sl.no": 2633,
    item: "MR9444-Casurina poles 100 - 150 mm",
    unit: "metre"
  },
  {
    "sl.no": 2634,
    item: "MR9445-Casurina Poles 75 - 100 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 2635,
    item: "MR9446-Center pully",
    unit: "each"
  },
  {
    "sl.no": 2636,
    item: "MR9447-Ceramic tiles 30 x 30 cms",
    unit: "sqm"
  },
  {
    "sl.no": 2637,
    item: "MR9448-Ceramic tiles 400 x 400 mm",
    unit: "sqm"
  },
  {
    "sl.no": 2638,
    item: "MR9449-Ceramic tiles of size 30 x 30 cms",
    unit: "sqm"
  },
  {
    "sl.no": 2639,
    item: "MR9450-Chequered mozaic tiles",
    unit: "sqm"
  },
  {
    "sl.no": 2640,
    item: "MR9451-Chrominum plated screws",
    unit: "each"
  },
  {
    "sl.no": 2641,
    item: "MR9452-Cleat angles",
    unit: "each"
  },
  {
    "sl.no": 2642,
    item: "MR9453-Cobble Stones of 60 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 2643,
    item: "MR9454-Colour glazed tiles 15 x 15 cms 10 mm thick",
    unit: "each"
  },
  {
    "sl.no": 2644,
    item: "MR9455-Corbon electrodes",
    unit: "cm"
  },
  {
    "sl.no": 2645,
    item: "MR9456-Cost of coal tar painting two coats for two sides of frame",
    unit: "sqm"
  },
  {
    "sl.no": 2646,
    item: "MR9457-Crushed stone chippings 13.2 mm",
    unit: "cum"
  },
  {
    "sl.no": 2647,
    item: "MR9458-Crushed stone course aggregate 53",
    unit: "cum"
  },
  {
    "sl.no": 2648,
    item: "MR9459-Cudddapah slab 2.5 cms thick",
    unit: "sqm"
  },
  {
    "sl.no": 2649,
    item: "MR9460-Detonators",
    unit: "each"
  },
  {
    "sl.no": 2650,
    item: "MR9461-Door closure heavy duty floor mounting",
    unit: "each"
  },
  {
    "sl.no": 2651,
    item: "MR9462-Door lock",
    unit: "each"
  },
  {
    "sl.no": 2652,
    item: "MR9463-Enamel metal paint",
    unit: "Litre"
  },
  {
    "sl.no": 2653,
    item: "MR9464-Enamel primer",
    unit: "Litre"
  },
  {
    "sl.no": 2654,
    item: "MR9465-GI coated expansion Bolts",
    unit: "no"
  },
  {
    "sl.no": 2655,
    item: "MR9466-GI Pipe 20 mm dia B class",
    unit: "metre"
  },
  {
    "sl.no": 2656,
    item: "MR9467-GI Pipe 50 mm dia B class",
    unit: "metre"
  },
  {
    "sl.no": 2657,
    item: "MR9468-GI 'J' or 'L' hook with nuts and bolts 8 mm dia",
    unit: "each"
  },
  {
    "sl.no": 2658,
    item: "MR9469-Gopi powder",
    unit: "kg"
  },
  {
    "sl.no": 2659,
    item: "MR9470-Granite metal 20 mm",
    unit: "cum"
  },
  {
    "sl.no": 2660,
    item: "MR9471-Granite metal 40 mm",
    unit: "cum"
  },
  {
    "sl.no": 2661,
    item: "MR9472-Granite slabs 7.5 cms to 8 cms thick",
    unit: "sqm"
  },
  {
    "sl.no": 2662,
    item: "MR9473-Granite stone slabs fine dressed 40 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 2663,
    item: "MR9474-Granite/trap broken metal 100 mm and down size",
    unit: "cum"
  },
  {
    "sl.no": 2664,
    item: "MR9475-Gravel 2.36 mm/Murrum",
    unit: "cum"
  },
  {
    "sl.no": 2665,
    item: "MR9476-Grey colour mosaic tiles",
    unit: "sqm"
  },
  {
    "sl.no": 2666,
    item: "MR9477-Grout for Vitrified tiles",
    unit: "kg"
  },
  {
    "sl.no": 2667,
    item: "MR9478-Handles",
    unit: "each"
  },
  {
    "sl.no": 2668,
    item: "MR9479-Handles to full width 2 m long",
    unit: "each"
  },
  {
    "sl.no": 2669,
    item: "MR9480-High bond tile adhesive for vitrified tiles",
    unit: "kg"
  },
  {
    "sl.no": 2670,
    item: "MR9481-High tension coil",
    unit: "each"
  },
  {
    "sl.no": 2671,
    item: 'MR9482-Hinges 5" heavy duty',
    unit: "each"
  },
  {
    "sl.no": 2672,
    item: "MR9483-Hold fasts",
    unit: "each"
  },
  {
    "sl.no": 2673,
    item: "MR9484-Honne wood",
    unit: "cum"
  },
  {
    "sl.no": 2674,
    item: "MR9485-Honnewood planks for panels 20 mm thick",
    unit: "cum"
  },
  {
    "sl.no": 2675,
    item: "MR9486-Jungle wood reepers 50 x 25 mm",
    unit: "metre"
  },
  {
    "sl.no": 2676,
    item: "MR9487-Jungle wood runners and planks",
    unit: "cum"
  },
  {
    "sl.no": 2677,
    item: "MR9488-Lead or PVC connection pipe 32mm dia (for wash basin)",
    unit: "each"
  },
  {
    "sl.no": 2678,
    item: "MR9489-Light house polish",
    unit: "Litre"
  },
  {
    "sl.no": 2679,
    item: "MR9490-Light shade mosaic tiles",
    unit: "sqm"
  },
  {
    "sl.no": 2680,
    item: "MR9491-Liquid wood filler",
    unit: "Litre"
  },
  {
    "sl.no": 2681,
    item: "MR9492-Locking arrangments",
    unit: "each"
  },
  {
    "sl.no": 2682,
    item: "MR9493-MS stays and clamps for 100 mm dia including bolts and nuts",
    unit: "each"
  },
  {
    "sl.no": 2683,
    item: "MR9494-Machine polished granite stone slabs 20 mm",
    unit: "sqm"
  },
  {
    "sl.no": 2684,
    item: "MR9495-Mangalore tiles first class and special tile for ridges and hips",
    unit: "no"
  },
  {
    "sl.no": 2685,
    item: "MR9496-Mathi or nandi wood planks for panels 20 mm thick",
    unit: "cum"
  },
  {
    "sl.no": 2686,
    item: "MR9497-Mathi/Nandi wood beading 10 mm wide",
    unit: "metre"
  },
  {
    "sl.no": 2687,
    item: "MR9498-Mathi/Nandi wood planks for panels 25 mm thick",
    unit: "cum"
  },
  {
    "sl.no": 2688,
    item: "MR9499-Mathi/Nandi wood scantling",
    unit: "cum"
  },
  {
    "sl.no": 2689,
    item: "MR9500-Mathi/nandi wood scantling for styles ad rails 25 mm thick",
    unit: "cum"
  },
  {
    "sl.no": 2690,
    item: "MR9501-Mathi/nandi wood scantling for styles and rails 30 mm thick",
    unit: "cum"
  },
  {
    "sl.no": 2691,
    item: "MR9502-Water",
    unit: "Kilo litre"
  },
  {
    "sl.no": 2692,
    item: "MR9503-MS handles",
    unit: "each"
  },
  {
    "sl.no": 2693,
    item: "MR9504-MS sheet 20 gauge",
    unit: "kg"
  },
  {
    "sl.no": 2694,
    item: "MR9505-MS side shed clamps",
    unit: "each"
  },
  {
    "sl.no": 2695,
    item: "MR9506-Mullion section",
    unit: "kg"
  },
  {
    "sl.no": 2696,
    item: "MR9507-Non Asbestos cement roofing sheet(Lap loss @ 9% and wastage @ 2%)=1.11sqm",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2697,
    item: "MR9508-Nylon rollers",
    unit: "each"
  },
  {
    "sl.no": 2698,
    item: "MR9509-Nails and screws",
    unit: "kg"
  },
  {
    "sl.no": 2699,
    item: "MR9510-Pigment",
    unit: "kg"
  },
  {
    "sl.no": 2700,
    item: "MR9511-Pivots",
    unit: "each"
  },
  {
    "sl.no": 2701,
    item: "MR9512-Plaster of Paris",
    unit: "kg"
  },
  {
    "sl.no": 2702,
    item: "MR9513-Plastic sheet",
    unit: "sqm"
  },
  {
    "sl.no": 2703,
    item: "MR9514-Polyethylene pipes high density 32 mm dia external dia",
    unit: "metre"
  },
  {
    "sl.no": 2704,
    item: "MR9515-Prepolished Grey /Multy red / Ruby red / Black /Hassan green granite 20 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 2705,
    item: "MR9516-Prepolished Grey granite 20 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 2706,
    item: "MR9517-Prepolished grey granite tiles 10 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 2707,
    item: "MR9518-Primer",
    unit: "kg"
  },
  {
    "sl.no": 2708,
    item: "MR9519-PVC Storage tank",
    unit: "Litre"
  },
  {
    "sl.no": 2709,
    item: "MR9520-Raw silk granite",
    unit: "sqm"
  },
  {
    "sl.no": 2710,
    item: "MR9521-RCC pipes NP3 300 mm dia including collars",
    unit: "metre"
  },
  {
    "sl.no": 2711,
    item: "MR9522-Ready mix primer paint (Ready mix red lead paint)",
    unit: "Litre"
  },
  {
    "sl.no": 2712,
    item: "MR9523-Red oxide",
    unit: "kg"
  },
  {
    "sl.no": 2713,
    item: "MR9524-Reeded glass 2 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 2714,
    item: "MR9525-Reeded glass 3 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 2715,
    item: "MR9526-Reeper nails 50 mm long",
    unit: "kg"
  },
  {
    "sl.no": 2716,
    item: "MR9527-Rubber beading for shutters beading",
    unit: "metre"
  },
  {
    "sl.no": 2717,
    item: "MR9528-Rubble stones",
    unit: "cum"
  },
  {
    "sl.no": 2718,
    item: "MR9529-Sadarahalli flammed granite 40 mm",
    unit: "sqm"
  },
  {
    "sl.no": 2719,
    item: "MR9530-Hydraulic Excavator 0.9 cum bucket capacity  @ 60 cum per hour",
    unit: "hour"
  },
  {
    "sl.no": 2720,
    item: "MR9531-Sal wood (White)",
    unit: "cum"
  },
  {
    "sl.no": 2721,
    item: "MR9532-Sealer for vitrified tiles",
    unit: "sqm"
  },
  {
    "sl.no": 2722,
    item: "MR9533-Side guides",
    unit: "each"
  },
  {
    "sl.no": 2723,
    item: "MR9534-Silver oak or equivalent planks 38 mm thick",
    unit: "cum"
  },
  {
    "sl.no": 2724,
    item: "MR9535-Size stone 20 x 20 x 25 cms",
    unit: "each"
  },
  {
    "sl.no": 2725,
    item: "MR9536-Soild partical board flush doors 30 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 2726,
    item: "MR9537-Solid concrete blocks (40 x 15 x 20 cms)-4.00 N/Sqmm",
    unit: "no"
  },
  {
    "sl.no": 2727,
    item: "MR9538-Solid concrete blocks (40 x 20 x 20 cms)-4.00 N/Sqmm",
    unit: "no"
  },
  {
    "sl.no": 2728,
    item: "MR9539-Spacers for Vitrified tiles",
    unit: "no"
  },
  {
    "sl.no": 2729,
    item: "MR9540-Special Gelatin",
    unit: "kg"
  },
  {
    "sl.no": 2730,
    item: "MR9541-Stainless steel hollow pipe 25 mm dia",
    unit: "kg"
  },
  {
    "sl.no": 2731,
    item: "MR9542-Stainless steel hollow pipes 16 gauge 50 mm dia",
    unit: "kg"
  },
  {
    "sl.no": 2732,
    item: "MR9543-Stays",
    unit: "each"
  },
  {
    "sl.no": 2733,
    item: "MR9544-Suspension shaft",
    unit: "metre"
  },
  {
    "sl.no": 2734,
    item: "MR9545-T section",
    unit: "kg"
  },
  {
    "sl.no": 2735,
    item: "MR9546-Teak wood",
    unit: "cum"
  },
  {
    "sl.no": 2736,
    item: "MR9547-Teak wood scantiling for styles and rails 30 mm thick",
    unit: "cum"
  },
  {
    "sl.no": 2737,
    item: "MR9548-Teak wood planks for panels 25 mm thick",
    unit: "cum"
  },
  {
    "sl.no": 2738,
    item: "MR9549-Teak wood classII for styles and rails",
    unit: "cum"
  },
  {
    "sl.no": 2739,
    item: "MR9550-Teak wood gutties Big",
    unit: "each"
  },
  {
    "sl.no": 2740,
    item: "MR9551-Teak wood beading 20 x 20 mm",
    unit: "metre"
  },
  {
    "sl.no": 2741,
    item: "MR9552-Teak wood reepers 50 x 25mm",
    unit: "metre"
  },
  {
    "sl.no": 2742,
    item: "MR9553-TMT bars Fe 415",
    unit: "tonne"
  },
  {
    "sl.no": 2743,
    item: "MR9554-TMT bars Fe 500",
    unit: "tonne"
  },
  {
    "sl.no": 2744,
    item: "MR9555-Tower bolt 300 mm long",
    unit: "each"
  },
  {
    "sl.no": 2745,
    item: "MR9556-TW beading for fixing glass",
    unit: "metre"
  },
  {
    "sl.no": 2746,
    item: "MR9557-Undercoat flatting varnish",
    unit: "Litre"
  },
  {
    "sl.no": 2747,
    item: "MR9558-Vitrified tiles 10 mm thick 600 x 600 mm",
    unit: "sqm"
  },
  {
    "sl.no": 2748,
    item: "MR9559-Delete",
    unit: "Litre"
  },
  {
    "sl.no": 2749,
    item: "MR9560-Weilding rods",
    unit: "no"
  },
  {
    "sl.no": 2750,
    item: "MR9561-White vitreous china clay surgeon type wash basin size 660 x 460 mm",
    unit: "each"
  },
  {
    "sl.no": 2751,
    item: "MR9562-Whitening",
    unit: "kg"
  },
  {
    "sl.no": 2752,
    item: "MR9563-Yelahanka tiles of size 250 x 250 mm",
    unit: "each"
  },
  {
    "sl.no": 2753,
    item: "MR9564-Z section",
    unit: "kg"
  },
  {
    "sl.no": 2754,
    item: "MR9565-Alluminium strips of size 25/6 mm",
    unit: "each"
  },
  {
    "sl.no": 2755,
    item: "MR9566-Rabbit wire mesh for reinforcement with 5% wastage",
    unit: "sqm"
  },
  {
    "sl.no": 2756,
    item: "MR9567-Air compressor 210 cfm with 2 jack hammers",
    unit: "hour"
  },
  {
    "sl.no": 2757,
    item: "MR9568-Compensation for earth taken from private land",
    unit: "cum"
  },
  {
    "sl.no": 2758,
    item: "MR9569-Concrete mixer 0.4/0.28 cum capacity",
    unit: "hour"
  },
  {
    "sl.no": 2759,
    item: "MR9570-Crane upto 8 Tonne capacity",
    unit: "hour"
  },
  {
    "sl.no": 2760,
    item: "MR9571-Dozer D-50 for spreading @ 200 cum per hour",
    unit: "hour"
  },
  {
    "sl.no": 2761,
    item: "MR9572-Front end loader 1 cum bucket capacity @ 50 cum per hour",
    unit: "hour"
  },
  {
    "sl.no": 2762,
    item: "MR9573-Front end loader 1 cum capacity",
    unit: "hour"
  },
  {
    "sl.no": 2763,
    item: "MR9574-Granite slabs 7.5 cms to 8 cms thick",
    unit: "sqm"
  },
  {
    "sl.no": 2764,
    item: "MR9575-Mechnical concrete mixer 0.4/0.28 cum capacity fitted with water measuring device and preferably also with load cell.",
    unit: "hour"
  },
  {
    "sl.no": 2765,
    item: "MR9576-Motor Grader @ 50 cum per hour",
    unit: "hour"
  },
  {
    "sl.no": 2766,
    item: "MR9577-Motor grader 110 HP @ 50 cum per hour for spreading",
    unit: "hour"
  },
  {
    "sl.no": 2767,
    item: "MR9578-Motor grader for grading @ 200 cum per hour",
    unit: "hour"
  },
  {
    "sl.no": 2768,
    item: "MR9579-Three wheel 80-100 kN Static Roller",
    unit: "hour"
  },
  {
    "sl.no": 2769,
    item: "MR9580-Three wheel 80-100 kN static roller @ 16 cum per hour",
    unit: "hour"
  },
  {
    "sl.no": 2770,
    item: "MR9581-Three wheel 80-100 kN Static Roller @ 8 cum per hour",
    unit: "hour"
  },
  {
    "sl.no": 2771,
    item: "MR9582-Tipper 5.5 cum capacity, 4 trips per hour",
    unit: "hour"
  },
  {
    "sl.no": 2772,
    item: "MR9583-Tipper 5.5 cum with 10 Tonne capacity",
    unit: "hour"
  },
  {
    "sl.no": 2773,
    item: "MR9584-Tipper/Dumper 10 Tonne capacity",
    unit: "hour"
  },
  {
    "sl.no": 2774,
    item: "MR9585-Tractor with ripper attachment @ 60 cum per hour",
    unit: "hour"
  },
  {
    "sl.no": 2775,
    item: "MR9586-Tractor with trolley",
    unit: "hour"
  },
  {
    "sl.no": 2776,
    item: "MR9587-Truck 10 Tonne capacity (Katcha work)",
    unit: "tonne Km"
  },
  {
    "sl.no": 2777,
    item: "MR9588-Truck flat body 10 tonne",
    unit: "hour"
  },
  {
    "sl.no": 2778,
    item: "MR9589-Water tanker 6 kl capacity",
    unit: "hour"
  },
  {
    "sl.no": 2779,
    item: "MR9590-Wet mix plant (Pug Mill)",
    unit: "hour"
  },
  {
    "sl.no": 2780,
    item: "MR9591-Bar Bender",
    unit: "Day"
  },
  {
    "sl.no": 2781,
    item: "MR9592-Blaster",
    unit: "Day"
  },
  {
    "sl.no": 2782,
    item: "MR9593-Dresser (Skilled) for alignment",
    unit: "Day"
  },
  {
    "sl.no": 2783,
    item: "MR9594-Driller",
    unit: "Day"
  },
  {
    "sl.no": 2784,
    item: "MR9595-Drilling mechanic Grade I",
    unit: "Day"
  },
  {
    "sl.no": 2785,
    item: "MR9596-Electrician/Lineman",
    unit: "Day"
  },
  {
    "sl.no": 2786,
    item: "MR9597-Fabricator",
    unit: "Day"
  },
  {
    "sl.no": 2787,
    item: "MR9598-Fitter Class I",
    unit: "Day"
  },
  {
    "sl.no": 2788,
    item: "MR9599-Hammer Mazdoor",
    unit: "Day"
  },
  {
    "sl.no": 2789,
    item: "MR9600-Laboratory Asst. (SSLC Passed)/Mate/Supervisor",
    unit: "Day"
  },
  {
    "sl.no": 2790,
    item: "MR9601-Licenced Blaster",
    unit: "Day"
  },
  {
    "sl.no": 2791,
    item: "MR9602-MS clamps",
    unit: "each"
  },
  {
    "sl.no": 2792,
    item: "MR9603-Mechanic Class II/Mechanic HmP Grade I/EME Grade",
    unit: "Day"
  },
  {
    "sl.no": 2793,
    item: "MR9604-Plumber",
    unit: "Day"
  },
  {
    "sl.no": 2794,
    item: "MR9605-Stone cutter Class - I",
    unit: "Day"
  },
  {
    "sl.no": 2795,
    item: "MR9606-Stone Dresser (with tools)",
    unit: "Day"
  },
  {
    "sl.no": 2796,
    item: "MR9607-Welder Grade I",
    unit: "Day"
  },
  {
    "sl.no": 2797,
    item: "MR9608-Welder Grade II",
    unit: "Day"
  },
  {
    "sl.no": 2798,
    item: "MR9609-Add",
    unit: "each"
  },
  {
    "sl.no": 2799,
    item: "MR9610-Bitumen washers",
    unit: "each"
  },
  {
    "sl.no": 2800,
    item: "MR9611-C.I. / M.S. brackets for flushing cistern",
    unit: "each"
  },
  {
    "sl.no": 2801,
    item: "MR9612-MS Tube",
    unit: "metre"
  },
  {
    "sl.no": 2802,
    item: "MR9613-Marble chips",
    unit: "kg"
  },
  {
    "sl.no": 2803,
    item: "MR9614-Sal wood Scantling",
    unit: "cum"
  },
  {
    "sl.no": 2804,
    item: "MR9615-Solvent cement adhesive",
    unit: "Litre"
  },
  {
    "sl.no": 2805,
    item: "MR9616-White cement",
    unit: "quintal"
  },
  {
    "sl.no": 2806,
    item: "MR9617-1,200 mm Ø RCC pipe NP4 pipe including collar at site",
    unit: "metre"
  },
  {
    "sl.no": 2807,
    item: "MR9618-600 mm � RCC pipe NP3 concrete pipe including collar at site",
    unit: "metre"
  },
  {
    "sl.no": 2808,
    item: "MR9619-600 mm � RCC pipe NP2 concrete pipe including collar at site",
    unit: "metre"
  },
  {
    "sl.no": 2809,
    item: "MR9620-1200 mm Ø RCC pipe NP3 pipe including collar at site",
    unit: "metre"
  },
  {
    "sl.no": 2810,
    item: "MR9621-2nd Class Bamboo 65 mm to 75 mm dia, (1.2 m - 1.8 m Long)",
    unit: "no"
  },
  {
    "sl.no": 2811,
    item: "MR9622-2nd Class Bamboo 65 mm to 75 mm dia, (1.8 m - 2.5 m) long",
    unit: "no"
  },
  {
    "sl.no": 2812,
    item: "MR9623-40 mm dia G.I  pipes ",
    unit: "metre"
  },
  {
    "sl.no": 2813,
    item: "MR9624-450 mm � RCC pipe NP3 concrete pipe including collar at site",
    unit: "metre"
  },
  {
    "sl.no": 2814,
    item: "MR9625-450 mm � RCC pipe NP2 concrete pipe including collar at site",
    unit: "metre"
  },
  {
    "sl.no": 2815,
    item: "MR9626-750 mm � RCC pipe NP3 concrete pipe including collar at site",
    unit: "metre"
  },
  {
    "sl.no": 2816,
    item: "MR9627-750 mm � RCC pipe NP2 concrete pipe including collar at site",
    unit: "metre"
  },
  {
    "sl.no": 2817,
    item: "MR9628-AC pipe 100 mm dia i/c wastage of 5 per cent 600 mm",
    unit: "metre"
  },
  {
    "sl.no": 2818,
    item: "MR9629-AC pipe 100 mm dia including wastage @ 5 per cent. Average length of weep hole is taken as one metre for the purpose of estimating",
    unit: "metre"
  },
  {
    "sl.no": 2819,
    item: "MR9630-Aggregate : Stone Screening - Type A 13.2 mm for Grading-1 @ 0.27 cum per 10 sqm",
    unit: "cum"
  },
  {
    "sl.no": 2820,
    item: "MR9631-Aggregate : Stone Screening - Type B 11.2 mm for Grading 2 @ 0.20 cum per 10 sqm",
    unit: "cum"
  },
  {
    "sl.no": 2821,
    item: "MR9632-Aggregate Grading-1 : 90 mm to 45 mm @ 1.21 cum per 10 sqm for compacted thickness of 100 mm",
    unit: "cum"
  },
  {
    "sl.no": 2822,
    item: "MR9633-Aggregate Grading-2 : 63 mm to 45 mm @ 0.91 cum per 10 sqm for compacted thickness of 75 mm",
    unit: "cum"
  },
  {
    "sl.no": 2823,
    item: "MR9634-Aggregate Grading-3 : 53 mm to 22.4 mm @ 0.91 cum per 10 sqm for compacted thickness of 75 mm",
    unit: "cum"
  },
  {
    "sl.no": 2824,
    item: "MR9635-Aggregates 22.4 mm to 2.36 mm @ 40 per cent",
    unit: "cum"
  },
  {
    "sl.no": 2825,
    item: "MR9636-Aluminium studs 100x100 mm fitted with lense reflectors Add 10 per cent of cost of material for fixing and installation.",
    unit: "no"
  },
  {
    "sl.no": 2826,
    item: "MR9637-Binding Material @ 0.08 cum per 10 sqm for Grading 2 material",
    unit: "cum"
  },
  {
    "sl.no": 2827,
    item: "MR9638-Binding Material Binding Material @ 0.06 cum per 10 sqm for Grading 2 material",
    unit: "cum"
  },
  {
    "sl.no": 2828,
    item: "MR9639-Bitumen Emulsion",
    unit: "tonne"
  },
  {
    "sl.no": 2829,
    item: "MR9640-Brick",
    unit: "no"
  },
  {
    "sl.no": 2830,
    item: "MR9641-Coarse aggregate 45 mm to 22.4 mm @ 30 per cen",
    unit: "cum"
  },
  {
    "sl.no": 2831,
    item: "MR9642-Crushable type such as Moorum or gravel for Grading 2 @ 0.22 cum per 10 sqm",
    unit: "cum"
  },
  {
    "sl.no": 2832,
    item: "MR9643-Edge blocks",
    unit: "metre"
  },
  {
    "sl.no": 2833,
    item: "MR9644-Edge blocks 60 m x 2 m",
    unit: "metre"
  },
  {
    "sl.no": 2834,
    item: "MR9645-Elastomeric bearing assembly consisting of 7 internal layers of elastomer bonded to 6 nos. internal reinforcing steel laminates by the process of vulcanisation, complete with all components as per drawing and technical specification",
    unit: "no"
  },
  {
    "sl.no": 2835,
    item: "MR9646-Epoxy paint",
    unit: "Litre"
  },
  {
    "sl.no": 2836,
    item: "MR9647-Epoxy primer/Red-oxide",
    unit: "Litre"
  },
  {
    "sl.no": 2837,
    item: "MR9648-Filter media as per specification",
    unit: "cum"
  },
  {
    "sl.no": 2838,
    item: "MR9649-Filter media base with stone aggregate 0.5 m x 0.5 m area",
    unit: "cum"
  },
  {
    "sl.no": 2839,
    item: "MR9650-Fine aggregate/Crushed sand 2.36 mm to 75 micron @ 30",
    unit: "cum"
  },
  {
    "sl.no": 2840,
    item: "MR9651-Gelatin 80%",
    unit: "kg"
  },
  {
    "sl.no": 2841,
    item: "MR9652-GI wires 4 mm dia @ 32 kg/10 sqm",
    unit: "kg"
  },
  {
    "sl.no": 2842,
    item: "MR9653-HYSD bars including 5 per cent for overlaps and wastage",
    unit: "tonne"
  },
  {
    "sl.no": 2843,
    item: "MR9654-Jute netting, open weave, 25 mm square opening",
    unit: "sqm"
  },
  {
    "sl.no": 2844,
    item: "MR9655-Kilometre Stone",
    unit: "no"
  },
  {
    "sl.no": 2845,
    item: "MR9656-Lime putty",
    unit: "tonne"
  },
  {
    "sl.no": 2846,
    item: "MR9657-M.S Bolts, nuts and washers",
    unit: "tonne"
  },
  {
    "sl.no": 2847,
    item: "MR9658-MS bars including 5 per cent for overlaps and wastage",
    unit: "tonne"
  },
  {
    "sl.no": 2848,
    item: "MR9659-Paint",
    unit: "Litre"
  },
  {
    "sl.no": 2849,
    item: "MR9660-Providing inter-locking blocks",
    unit: "sqm"
  },
  {
    "sl.no": 2850,
    item: "MR9661-Providing inter-locking blocks of approved shape, thickness and size.",
    unit: "sqm"
  },
  {
    "sl.no": 2851,
    item: "MR9662-Road marking paint as per IS:164",
    unit: "Litre"
  },
  {
    "sl.no": 2852,
    item: "MR9663-Seeds",
    unit: "kg"
  },
  {
    "sl.no": 2853,
    item: "MR9664-Sludge/Farm yard manure @ 0.18 cum per 100 sqm",
    unit: "cum"
  },
  {
    "sl.no": 2854,
    item: "MR9665-Spalls/blasted rubbles",
    unit: "cum"
  },
  {
    "sl.no": 2855,
    item: 'MR9666-"Steel posts IS MB 100 (100 x 75) 5 x 2 x 11.5 x 1.1 x 1.05 = 130 kg"',
    unit: "tonne"
  },
  {
    "sl.no": 2856,
    item: "MR9667-Stone boulder (25 kg minimum)",
    unit: "cum"
  },
  {
    "sl.no": 2857,
    item: "MR9668-Stone for C.R. masonry 1st sort",
    unit: "cum"
  },
  {
    "sl.no": 2858,
    item: "MR9669-Stone for RR masonry",
    unit: "cum"
  },
  {
    "sl.no": 2859,
    item: "MR9670-Stone spalls of minimum 25 mm size",
    unit: "cum"
  },
  {
    "sl.no": 2860,
    item: "MR9671-TMT bars including 5 per cent for overlaps and wastage",
    unit: "tonne"
  },
  {
    "sl.no": 2861,
    item: "MR9672-HOM of cutting and grinding machine",
    unit: "Day"
  },
  {
    "sl.no": 2862,
    item: "MR9673-HOM of cutting and grinding machine - 1",
    unit: "hour"
  },
  {
    "sl.no": 2863,
    item: "MR9674-HOM of Machinaries for planing",
    unit: "cum"
  },
  {
    "sl.no": 2864,
    item: "MR9675-HOM of Vibrator 0.71 days",
    unit: "Day"
  },
  {
    "sl.no": 2865,
    item: "MR9676-HOM of welding and grinding machine",
    unit: "Day"
  },
  {
    "sl.no": 2866,
    item: "MR9677-Mixer (concrete small used in culvert)",
    unit: "hour"
  },
  {
    "sl.no": 2867,
    item: "MR9678-Mixer (concrete) - 1 cum Capacity",
    unit: "Day"
  },
  {
    "sl.no": 2868,
    item: "MR9679-Mixer /day",
    unit: "Day"
  },
  {
    "sl.no": 2869,
    item: "MR9680-Plate vibrator having 3 Ton compaction force",
    unit: "Day"
  },
  {
    "sl.no": 2870,
    item: "MR9681-Wheeled Dozer (D50 BEML)",
    unit: "hour"
  },
  {
    "sl.no": 2871,
    item: "MR9682-Motor Grader 3.35 meter blade",
    unit: "hour"
  },
  {
    "sl.no": 2872,
    item: "MR9683-Vibratory Roller 8 Tonne",
    unit: "hour"
  },
  {
    "sl.no": 2873,
    item: "MR9684-Water Tanker",
    unit: "hour"
  },
  {
    "sl.no": 2874,
    item: "MR9685-Drilling equipment",
    unit: "Day"
  },
  {
    "sl.no": 2875,
    item: "MR9686-Loading of earth as per item 1.1 (ii)",
    unit: "cum"
  },
  {
    "sl.no": 2876,
    item: "MR9687-Unloading of earth as per item 1.1 (iv)",
    unit: "cum"
  },
  {
    "sl.no": 2877,
    item: "MR9688-Unit Cost as per the Specification",
    unit: "each"
  },
  {
    "sl.no": 2878,
    item: "MR9689-Water tanker 6 kl capacity including watering for 3 months (for one hour per week)",
    unit: "hour"
  },
  {
    "sl.no": 2879,
    item: "MR9690-Painter Class I",
    unit: "Day"
  },
  {
    "sl.no": 2880,
    item: "MR9691-Painter Class II",
    unit: "Day"
  },
  {
    "sl.no": 2881,
    item: "MR9692-Tipper 5 Cum Capacity",
    unit: "hour"
  },
  {
    "sl.no": 2882,
    item: "MR9693-Solid concrete blocks (40*10*20 cms)-4.00 N/Sqmm",
    unit: "each"
  },
  {
    "sl.no": 2883,
    item: "MR9694-Hollow concrete blocks (40*20*20 cms)-5.00 N/Sqmm",
    unit: "100 nos"
  },
  {
    "sl.no": 2884,
    item: "MR9695-Hollow concrete blocks (40*15*20 cms)-5.00 N/Sqmm",
    unit: "100 nos"
  },
  {
    "sl.no": 2885,
    item: "MR9696-Safety fuse wire",
    unit: "coil"
  },
  {
    "sl.no": 2886,
    item: "MR9697-Crushable type such as moorum or Gravel for Grading 3 @ 0.22 cum per 10 sqm",
    unit: "cum"
  },
  {
    "sl.no": 2887,
    item: "MR9698-AC sheet 6 mm thick corrugated (AC sheet to be used 2 x 20 x 3 x 1.05 = 126 sqm 2 x 20 x 2.50 x 1.05 = 105 sqm",
    unit: "sqm"
  },
  {
    "sl.no": 2888,
    item: "MR9699-GI washers",
    unit: "each"
  },
  {
    "sl.no": 2889,
    item: "MR9700-AC sheet 6 mm thick semi corrguated (Trafford)",
    unit: "sqm"
  },
  {
    "sl.no": 2890,
    item: "MR9701-Stone for CR Masonry 2nd Sort",
    unit: "cum"
  },
  {
    "sl.no": 2891,
    item: "MR9702-38 mm dia of 14 guage MS Black pipe",
    unit: "metre"
  },
  {
    "sl.no": 2892,
    item: "MR9703-M.S. Angles 65 x 65 x 6 mm 34.7 kgs",
    unit: "kg"
  },
  {
    "sl.no": 2893,
    item: "MR9704-15 mm Bolt",
    unit: "no"
  },
  {
    "sl.no": 2894,
    item: "MR9705-60 x 60 x 10 Guage sq. plate washer",
    unit: "kg"
  },
  {
    "sl.no": 2895,
    item: "MR9706-20 mm dia hold fast rod",
    unit: "no"
  },
  {
    "sl.no": 2896,
    item: "MR9707-Wire mesh 50mm x 50mm",
    unit: "sqm"
  },
  {
    "sl.no": 2897,
    item: "MR9708-Shahabad bond stone",
    unit: "no"
  },
  {
    "sl.no": 2898,
    item: "MR9709-Shahbad rouble stone",
    unit: "cum"
  },
  {
    "sl.no": 2899,
    item: "MR9710-Needle Vibrator",
    unit: "hour"
  },
  {
    "sl.no": 2900,
    item: "MR9711-Screed Vibrator",
    unit: "hour"
  },
  {
    "sl.no": 2901,
    item: "MR9712-Plate Vibrator",
    unit: "hour"
  },
  {
    "sl.no": 2902,
    item: "MR9713-Concrete jiont cutting machine for initial and final cuts",
    unit: "hour"
  },
  {
    "sl.no": 2903,
    item: "MR9714-Air Compressor (1 hour initial + 1 hour final",
    unit: "hour"
  },
  {
    "sl.no": 2904,
    item: "MR9715-Crushed stone coarse aggregate, grading will be as per clause 1501.2.4.1 (Table 1500.1) of specifications @ 0.90 cum/cum of concrete.",
    unit: "cum"
  },
  {
    "sl.no": 2905,
    item: "MR9716-Polythene sheet 125 mm micron",
    unit: "sqm"
  },
  {
    "sl.no": 2906,
    item: "MR9717-Bitumen primer @200 ml per joint for 23 joints",
    unit: "tonne"
  },
  {
    "sl.no": 2907,
    item: "MR9718-Bituminous sealant 800 ml per joint 23 joints",
    unit: "Litre"
  },
  {
    "sl.no": 2908,
    item: "MR9719-De-bonding strips 3.75 m (length) x 10 mm (width) x 5mm (thick) cut-out of rubber filler board or similar material including 5% wastage",
    unit: "cum"
  },
  {
    "sl.no": 2909,
    item: "MR9720-Joint filler board 20mm thick as per IS:1838 (4 x 3.75 x 0.200 = 3 Sqm)",
    unit: "sqm"
  },
  {
    "sl.no": 2910,
    item: "MR9721-Granular material",
    unit: "cum"
  },
  {
    "sl.no": 2911,
    item: "MR9722-Lime",
    unit: "cum"
  },
  {
    "sl.no": 2912,
    item: "MR9723-Varnish",
    unit: "Litre"
  },
  {
    "sl.no": 2913,
    item: "MR9724-Mason Class II (with tools)",
    unit: "Day"
  },
  {
    "sl.no": 2914,
    item: "MR9725-Mason Class I (with tools)",
    unit: "Day"
  },
  {
    "sl.no": 2915,
    item: "MR9726-Add 15% wastage",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2916,
    item: "MR9727-Add 15% wastage for glass",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2917,
    item: "MR9728-Add 2% for fittings and wastage charges",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2918,
    item: "MR9729-Add 24% centering charges (Since centering area increased)",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2919,
    item: "MR9730-Add 3% wastage charges",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2920,
    item: "MR9731-Add 5% for fittings and wastage charges",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2921,
    item: "MR9732-Add 5% wastage charges",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2922,
    item: "MR9733-Add Add HOM of welding and grinding machine @ 3% on Material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2923,
    item: "MR9734-Add Brush @ 1% on cost of paint",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2924,
    item: "MR9735-Add Brush at 1% on cost of paint",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2925,
    item: "MR9736-Add Brush, putty at 5% on cost of distemper primer",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2926,
    item: "MR9737-Add Brush, putty, glue at 5% on cost of paint",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2927,
    item: "MR9738-Add Brush, putty, sand paper at 2% on cost of paint",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2928,
    item: "MR9739-Add Brush, putty, sand paper at 3% on cost of paint",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2929,
    item: "MR9740-Add Brush, putty, sand paper at 5% on cost of paint",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2930,
    item: "MR9741-Add Brush, putty, sand paper, roller at 1% on cost of paint",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2931,
    item: "MR9742-Add Brush, putty, sand paper, roller at 5% on cost of paint",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2932,
    item: "MR9743-Add Brush, sand paper at 1% on cost of paint",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2933,
    item: "MR9744-Add Brush, sand paper, roller at 1% on cost of paint",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2934,
    item: "MR9745-Add Cement mortr and spun yarn 1% cost of pipes",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2935,
    item: "MR9746-Add Cement sand and grit 1% on Material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2936,
    item: "MR9747-Add Cost of nails,Adhesives, metal patti etc,@ 5% of Material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2937,
    item: "MR9748-Add cutting and other wastage 3%",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2938,
    item: "MR9749-Add cutting and other wastage 5%",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2939,
    item: "MR9750-Add Gum / gangiwater / fevical and blue at 10% of lime cost",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2940,
    item: "MR9751-Add Gum / gangiwater / fevical at 10% of lime cost",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2941,
    item: "MR9752-Add Handling , loading and unloading at 1% on Material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2942,
    item: "MR9753-Add Handling , loading and unloading at 2% on Material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2943,
    item: "MR9754-Add HOM of welding and grinding machine @ 2% on Material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2944,
    item: "MR9755-Add HOM of welding and grinding machine @ 4% on Material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2945,
    item: "MR9756-Add Non Asbestos cement roofing sheet (Lap loss @9% and wastage @ 2%) = 1.11 Sqm.",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2946,
    item: "MR9757-Over Head  & other Miscellaneous Charges",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2947,
    item: "MR9758-Add providing and removing scaffolding at 1% on Labour",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2948,
    item: "MR9759-Add providing and removing scaffolding at 3% on Labour",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2949,
    item: "MR9760-Add sundries carborundum stone, oxalic acid, wax, coir and other items at 3% on Material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2950,
    item: "MR9761-Add sundries charges at 1 % on Labour",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2951,
    item: "MR9762-Add sundries charges at 1 % on Material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2952,
    item: "MR9763-Add sundries charges at 2 % on Labour",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2953,
    item: "MR9764-Add sundries charges at 2 % on Material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2954,
    item: "MR9765-Add sundries charges at 3 % on Labour",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2955,
    item: "MR9766-Add sundries charges at 3 % on Material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2956,
    item: "MR9767-Add T & P and sundries @ 1 % on Material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2957,
    item: "MR9768-Add T & P and sundries @ 2 % on Material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2958,
    item: "MR9769-Add Tools Transportation and machinaries 1% on Material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2959,
    item: "MR9770-Add Transportation charges at 2 % on Material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2960,
    item: "MR9771-Add Water supply & electrical charges",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2961,
    item: "MR9772-Add watering charges at 1 % on Labour",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2962,
    item: "MR9773-Add watering charges at 1 % on Material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2963,
    item: "MR9774-Add watering charges at 2 % on Labour",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2964,
    item: "MR9775-Add watering charges at 2 % on Material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2965,
    item: "MR9776-Add watering charges at 3 % on Labour",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2966,
    item: "MR9777-Add watering charges at 3 % on Material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2967,
    item: "MR9778-Add Weilding charges @ 10% on Material and Labour",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2968,
    item: "MR9779-Add White cement for pointing at 2% on Material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2969,
    item: "MR9780-Add White lead paint, gasket, cement, sand for making good the wall and floor at 2% on Material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2970,
    item: "MR9781-Add White lead paint, gasket, cement, sand for making good the wall and floor at 2% on Material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2971,
    item: "MR9782-Add Wire brush, fine steel wool, putty, sand paper, at 3% on cost of paint",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2972,
    item: "MR9783-Add Wire brush, fine steel wool, putty, sand paper, at 5% on cost of paint",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2973,
    item: "MR9784-The cost of all materials, skilled, semi skilled centering, transportation, fixing, wastage and other extra charges, excluding the cost of unskilled labour.",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2974,
    item: "MR9785-Add Formwork @ 4% out of material and labour",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2975,
    item: "MR9786-Add Over Head Charges 15%",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2976,
    item: "MR9787-Add Over Head Charges 10%",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2977,
    item: "MR9788-Add for scaffolding @ 5 per cent of cost of labour and material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2978,
    item: "MR9789-Formwork @ 4% on material, labour and machinery",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2979,
    item: "MR9790-Formwork @ 3.5 % on material, labour and machinery",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2980,
    item: "MR9791-Three wheel 80-100 kN static roller @ 10 cum",
    unit: "hour"
  },
  {
    "sl.no": 2981,
    item: "MR9792-Tractor with Rotavator 25 cum capacity",
    unit: "hour"
  },
  {
    "sl.no": 2982,
    item: "MR9793-Add Formwork @ 10% on cost of Labour, Material and Machinery",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2983,
    item: "MR9794-Blacksmith",
    unit: "Day"
  },
  {
    "sl.no": 2984,
    item: "MR9795-Add 10% extra cost for architectural coping",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2985,
    item: "MR9796-Add Formwork and staging @ 20% for height upto 5 m",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2986,
    item: "MR9797-Add Formwork and staging @ 25% for height from 5 m to 10 m",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2987,
    item: "MR9798-Add Formwork and staging @ 30% for height above 10m",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2988,
    item: "MR9799-Add 2% of cost to account for surface reinforecement and filling of granular material in recesses between blocks",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2989,
    item: "MR9800-Add formwork @ 3%",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2990,
    item: "MR9801-The cost of all materials, centering, transportation, fixing, wastage and other extra charges etc, excluding the cost of Unskilled labour.",
    unit: "Lumpsum"
  },
  {
    "sl.no": 2991,
    item: "MR9802-GI plaster mesh 0.35 mm thick 10 cms wide",
    unit: "metre"
  },
  {
    "sl.no": 2992,
    item: "MR9803-Mud mortar",
    unit: "cum"
  },
  {
    "sl.no": 2993,
    item: "MR9804-Stone Chistler Class II",
    unit: "Day"
  },
  {
    "sl.no": 2994,
    item: "MR9805-Table moulded Bricks of class designation 50 (modular)",
    unit: "100 nos"
  },
  {
    "sl.no": 2995,
    item: "MR9806-Burnt Bricks of class designation 35 modular",
    unit: "100 nos"
  },
  {
    "sl.no": 2996,
    item: "MR9807-Hollow concrete blocks (40*20*20 cms)-3.50 N/Sqmm",
    unit: "100 nos"
  },
  {
    "sl.no": 2997,
    item: "MR9808-Hollow concrete blocks (40*15*20 cms)-3.50 N/Sqmm",
    unit: "100 nos"
  },
  {
    "sl.no": 2998,
    item: "MR9809-Filter media stone aggregates",
    unit: "cum"
  },
  {
    "sl.no": 2999,
    item: "MR9810-Stone at quarry",
    unit: "cum"
  },
  {
    "sl.no": 3000,
    item: "MR9811-Spall (jelly used for packing)",
    unit: "cum"
  },
  {
    "sl.no": 3001,
    item: "MR9812-Uncoursed rubble stones",
    unit: "cum"
  },
  {
    "sl.no": 3002,
    item: "MR9813-Pin headers @ 2 per sqm",
    unit: "no"
  },
  {
    "sl.no": 3003,
    item: "MR9814-Stone chips at quarry",
    unit: "cum"
  },
  {
    "sl.no": 3004,
    item: "MR9815-Add for small Tools and Plants @ 1%",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3005,
    item: "MR9816-Tractor/ Truck/Irrespective of mode of transport",
    unit: "cum"
  },
  {
    "sl.no": 3006,
    item: "MR9817-MS flat",
    unit: "kg"
  },
  {
    "sl.no": 3007,
    item: "MR9818-Bolts and nuts",
    unit: "kg"
  },
  {
    "sl.no": 3008,
    item: "MR9819-20mm thick Hassan green granite",
    unit: "sqm"
  },
  {
    "sl.no": 3009,
    item: "MR9820-Wastages",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3010,
    item: "MR9821-Plaster of Paris",
    unit: "kg"
  },
  {
    "sl.no": 3011,
    item: "MR9822-Tractor - 40 HP",
    unit: "hour"
  },
  {
    "sl.no": 3012,
    item: "MR9823-Front End Loader 1 cum bucket capacity",
    unit: "hour"
  },
  {
    "sl.no": 3013,
    item: "MR9824-Tipper-5 cum",
    unit: "hour"
  },
  {
    "sl.no": 3014,
    item: "MR9825-Coarse aggregates 25 mm",
    unit: "cum"
  },
  {
    "sl.no": 3015,
    item: "MR9826-weld mesh 75 x 25 mm of 6G to 10G",
    unit: "sqm"
  },
  {
    "sl.no": 3016,
    item: "MR9827-40 mm nominal Size of Aggregates",
    unit: "cum"
  },
  {
    "sl.no": 3017,
    item: "MR9828-Separation Membrane of impermeable plastic sheeting 125 micron thick",
    unit: "sqcm"
  },
  {
    "sl.no": 3018,
    item: "MR9829-Pre-moulded joint filler, 25mm thick for expansion joint",
    unit: "sqcm"
  },
  {
    "sl.no": 3019,
    item: "MR9830-sealant primer",
    unit: "kg"
  },
  {
    "sl.no": 3020,
    item: "MR9831-Joint sealant",
    unit: "kg"
  },
  {
    "sl.no": 3021,
    item: "MR9832-Jute rope",
    unit: "metre"
  },
  {
    "sl.no": 3022,
    item: "MR9833-Super Plasticizer admixture IS marked as per 9-103-1999",
    unit: "kg"
  },
  {
    "sl.no": 3023,
    item: "MR9834-Add cost of water for curing at 1.50 %",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3024,
    item: "MR9835-Vibrator with Needle",
    unit: "Day"
  },
  {
    "sl.no": 3025,
    item: "MR9836-RCC pipes NP3 900 mm dia including collars",
    unit: "metre"
  },
  {
    "sl.no": 3026,
    item: "MR9837-HOM of screed vibrator",
    unit: "hour"
  },
  {
    "sl.no": 3027,
    item: "MR9838-Plate vibrator having 3 Ton compaction force",
    unit: "Day"
  },
  {
    "sl.no": 3028,
    item: "MR9839-Concrete joint cutting machine",
    unit: "hour"
  },
  {
    "sl.no": 3029,
    item: "MR9840-Air Compressor",
    unit: "Day"
  },
  {
    "sl.no": 3030,
    item: "MR9841-Add 3% for form work on the above",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3031,
    item: "MR9842-RCC pipes NP3 450mm dia including collars",
    unit: "metre"
  },
  {
    "sl.no": 3032,
    item: "MR9843-RCC pipes NP3 600 mm dia including collars",
    unit: "metre"
  },
  {
    "sl.no": 3033,
    item: "MR9844-Enabling Works @ 1%",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3034,
    item: "MR9845-Add Brush, Putty and sand paper @ 1% cost of paint",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3035,
    item: "MR9846-Cartman with cart and double bullock",
    unit: "Day"
  },
  {
    "sl.no": 3036,
    item: "MR9847-Welding Charges @ 10% on Material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3037,
    item: "MR9848-Mild Steel 6 mm dia",
    unit: "kg"
  },
  {
    "sl.no": 3038,
    item: "MR9849-R.C.C. pipes NP2 class 750 mm dia",
    unit: "metre"
  },
  {
    "sl.no": 3039,
    item: "MR9850-Delete",
    unit: "metre"
  },
  {
    "sl.no": 3040,
    item: "MR9851-RCC pipes NP2 150 mm dia including collars",
    unit: "metre"
  },
  {
    "sl.no": 3041,
    item: "MR9852-RCC pipes NP2 250 mm dia including collars",
    unit: "metre"
  },
  {
    "sl.no": 3042,
    item: "MR9853-RCC pipes NP2 300 mm dia including collars",
    unit: "metre"
  },
  {
    "sl.no": 3043,
    item: "MR9854-RCC pipes NP2 450 mm dia including collars",
    unit: "metre"
  },
  {
    "sl.no": 3044,
    item: "MR9855-RCC pipes NP2 600 mm dia including collars",
    unit: "metre"
  },
  {
    "sl.no": 3045,
    item: "MR9856-RCC pipes NP2 900 mm dia including collars",
    unit: "metre"
  },
  {
    "sl.no": 3046,
    item: "MR9857-RCC pipes NP2 1200 mm dia including collars",
    unit: "metre"
  },
  {
    "sl.no": 3047,
    item: "MR9858-Transportation loading and unloading @1% on material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3048,
    item: "MR9859-Tools and Plants @2% on material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3049,
    item: "MR9860-12 mm x 6 mm MS Plate",
    unit: "kg"
  },
  {
    "sl.no": 3050,
    item: "MR9861-RCC Pipe NP2 Class 900 mm dia, 300 mm length (internal)",
    unit: "each"
  },
  {
    "sl.no": 3051,
    item: "MR9862-RCC Cap 1000 mm dia, 100 mm thick",
    unit: "each"
  },
  {
    "sl.no": 3052,
    item: "MR9863-Quarry Spalls",
    unit: "cum"
  },
  {
    "sl.no": 3053,
    item: "MR9864-HOM of Drilling machine with all necessary fixtures",
    unit: "Day"
  },
  {
    "sl.no": 3054,
    item: "MR9865-MS Casing Pipe Including MS Cap",
    unit: "each"
  },
  {
    "sl.no": 3055,
    item: "MR9866-Generator with Drilling Equipment",
    unit: "hour"
  },
  {
    "sl.no": 3056,
    item: "MR9867-Charcoal",
    unit: "kg"
  },
  {
    "sl.no": 3057,
    item: "MR9868-Aqua Nylon mesh",
    unit: "sqm"
  },
  {
    "sl.no": 3058,
    item: "MR9869-Bracket Bolts and Nuts",
    unit: "no"
  },
  {
    "sl.no": 3059,
    item: "MR9870-Cement concrete batch mix at 175 cum/hour (effective output)",
    unit: "hour"
  },
  {
    "sl.no": 3060,
    item: "MR9871-Electric generator set 250 KVA",
    unit: "hour"
  },
  {
    "sl.no": 3061,
    item: "MR9872-Front end loader (1Cum) Turnover 120 Cum /day when used with hot mix plant",
    unit: "hour"
  },
  {
    "sl.no": 3062,
    item: "MR9873-Generator 100 KVA",
    unit: "hour"
  },
  {
    "sl.no": 3063,
    item: "MR9874-Generator 33 KVA",
    unit: "hour"
  },
  {
    "sl.no": 3064,
    item: "MR9875-HOM of cutting and grinding machine1",
    unit: "hour"
  },
  {
    "sl.no": 3065,
    item: "MR9876-Paver finisher Mechanical 100 TPH capacity",
    unit: "hour"
  },
  {
    "sl.no": 3066,
    item: "MR9877-Road Roller 8-10 T ( 425Cum/day soil compacted)",
    unit: "hour"
  },
  {
    "sl.no": 3067,
    item: "MR9878-Road sweeper at 1250 sqm /hr",
    unit: "hour"
  },
  {
    "sl.no": 3068,
    item: "MR9879-Slip form paver with electronic sensor",
    unit: "hour"
  },
  {
    "sl.no": 3069,
    item: "MR9880-Wet Mix Plant 60 TPH/Pug Mill",
    unit: "hour"
  },
  {
    "sl.no": 3070,
    item: "MR9881-Blacksmith assistant",
    unit: "Day"
  },
  {
    "sl.no": 3071,
    item: "MR9882-Carpenter Assistant",
    unit: "Day"
  },
  {
    "sl.no": 3072,
    item: "MR9883-Licenced Plumber with tools",
    unit: "Day"
  },
  {
    "sl.no": 3073,
    item: "MR9884-Add 1% of material for cost of miscellaneous materials like tarpauline, Hessian cloth, metal cap, co",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3074,
    item: "MR9885-CaseII : Unsurfaced Gravelled Road  Add 10% of cost of carriage to cover cost of loading and unloading",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3075,
    item: "MR9886-CaseII : Unsurfaced Gravelled Road) (450 t *10 km) =4500 t-km Add 10 per cent cost of carriage to cover loading and unloading",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3076,
    item: "MR9887-CaseII : Unsurfaced Gravelled Road) (495 t* 10 km)=4950 t-km Add 10% of cost of carriage to cover cost of loading and unloading",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3077,
    item: "MR9888-Galvanised Hot Dip cost @ 16/kg",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3078,
    item: "MR9889-Labour for fixing at 4.5% on A",
    unit: "Day"
  },
  {
    "sl.no": 3079,
    item: "MR9890-Locking arrangements at 1% on A",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3080,
    item: "MR9891-Tools & plants and electrical charges @2%",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3081,
    item: "MR9892-Moulding charges for casting gaurd stones",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3082,
    item: "MR9893-100mm 'S' or 'P' trap",
    unit: "each"
  },
  {
    "sl.no": 3083,
    item: "MR9894-12x12 M.S Square Rod",
    unit: "kg"
  },
  {
    "sl.no": 3084,
    item: "MR9895-16mm deformed steel tie bars of grade S 415",
    unit: "tonne"
  },
  {
    "sl.no": 3085,
    item: "MR9896-20 mm x20mm vertical M.S Square Rod",
    unit: "kg"
  },
  {
    "sl.no": 3086,
    item: "MR9897-32 mm mild steel dowel bars of grade S 240",
    unit: "tonne"
  },
  {
    "sl.no": 3087,
    item: "MR9898-4mm thick plain glass",
    unit: "sqm"
  },
  {
    "sl.no": 3088,
    item: "MR9899-6 mm and below aggreages",
    unit: "cum"
  },
  {
    "sl.no": 3089,
    item: "MR9900-Anchor Bolts 750mm",
    unit: "no"
  },
  {
    "sl.no": 3090,
    item: "MR9901-Angle iron 40x40x6mm",
    unit: "kg"
  },
  {
    "sl.no": 3091,
    item: "MR9902-Anticorrosive bitumastic paint",
    unit: "Litre"
  },
  {
    "sl.no": 3092,
    item: "MR9903-Base plate / base plate",
    unit: "kg"
  },
  {
    "sl.no": 3093,
    item: "MR9904-Bib cock 20mm nominal bore",
    unit: "each"
  },
  {
    "sl.no": 3094,
    item: "MR9905-Brick bats 25 to 100 mm",
    unit: "cum"
  },
  {
    "sl.no": 3095,
    item: "MR9906-C.I. / M.S. brackets for flushing cistern",
    unit: "each"
  },
  {
    "sl.no": 3096,
    item: "MR9907-Cast iron arrows",
    unit: "no"
  },
  {
    "sl.no": 3097,
    item: "MR9908-Cast iron ornamental design",
    unit: "no"
  },
  {
    "sl.no": 3098,
    item: "MR9909-Coarse aggreages 12 mm",
    unit: "cum"
  },
  {
    "sl.no": 3099,
    item: "MR9910-Cobble stones of 75mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 3100,
    item: "MR9911-Copper plated brass piller tap 15mm",
    unit: "each"
  },
  {
    "sl.no": 3101,
    item: "MR9912-Cudddapah slab 4 cm thick/Shahabad/Thandur blue",
    unit: "sqm"
  },
  {
    "sl.no": 3102,
    item: "MR9913-Curing compound",
    unit: "Litre"
  },
  {
    "sl.no": 3103,
    item: "MR9914-Expansion bolt",
    unit: "no"
  },
  {
    "sl.no": 3104,
    item: "MR9915-Fine aggregates 10mm",
    unit: "cum"
  },
  {
    "sl.no": 3105,
    item: "MR9916-Float glass 5 mm thick",
    unit: "sqm"
  },
  {
    "sl.no": 3106,
    item: "MR9917-G.I. 32mm dia telescopic flush pipes with fittings specials",
    unit: "each"
  },
  {
    "sl.no": 3107,
    item: "MR9918-G.I. Flush pipe of standard size and C.P brass spreaders, brass unions and clamps including fittings",
    unit: "each"
  },
  {
    "sl.no": 3108,
    item: "MR9919-G.I. Overflow pipe 20mm dia",
    unit: "metre"
  },
  {
    "sl.no": 3109,
    item: "MR9920-Galvanised steel section 46x52 mm",
    unit: "metre"
  },
  {
    "sl.no": 3110,
    item: "MR9921-Galvanised steel section 46x46 mm",
    unit: "metre"
  },
  {
    "sl.no": 3111,
    item: "MR9922-Galvanised steel beading section 18x25mm",
    unit: "metre"
  },
  {
    "sl.no": 3112,
    item: "MR9923-Grit / Stone dust",
    unit: "cum"
  },
  {
    "sl.no": 3113,
    item: "MR9924-Gusset plates 3.15 mm thick",
    unit: "kg"
  },
  {
    "sl.no": 3114,
    item: "MR9925-Gusset plates 6 mm thick",
    unit: "kg"
  },
  {
    "sl.no": 3115,
    item: "MR9926-Honne wood beading 20x20mm",
    unit: "metre"
  },
  {
    "sl.no": 3116,
    item: "MR9927-Honne wood scantling for styles and rails 25mm thick",
    unit: "cum"
  },
  {
    "sl.no": 3117,
    item: "MR9928-Hooks",
    unit: "each"
  },
  {
    "sl.no": 3118,
    item: "MR9929-Latrite",
    unit: "cum"
  },
  {
    "sl.no": 3119,
    item: "MR9930-M.S. holder bat clamp 32mm",
    unit: "each"
  },
  {
    "sl.no": 3120,
    item: "MR9931-M.S. Square Bright bars 20mm",
    unit: "quintal"
  },
  {
    "sl.no": 3121,
    item: "MR9932-Mosquito proof coupling 25mm",
    unit: "each"
  },
  {
    "sl.no": 3122,
    item: "MR9933-MS angle iron 40mm x 40mm x 6mm, 23 metre in length at 3.5 kg per metre",
    unit: "kg"
  },
  {
    "sl.no": 3123,
    item: "MR9934-MS angle iron 50mm x 50mm x 6mm, 33.8 metre in length at 4.5 kg per metre",
    unit: "kg"
  },
  {
    "sl.no": 3124,
    item: "MR9935-MS cleats with bolts and nuts to rest on pile",
    unit: "each"
  },
  {
    "sl.no": 3125,
    item: "MR9936-MS flat 12 x 75mm",
    unit: "kg"
  },
  {
    "sl.no": 3126,
    item: "MR9937-MS GRILLS powder coated 100 mm pitch",
    unit: "sqm"
  },
  {
    "sl.no": 3127,
    item: "MR9938-MS pipes of 80 mm to 100 mm dia",
    unit: "kg"
  },
  {
    "sl.no": 3128,
    item: "MR9939-MS sheet 1 mm thick",
    unit: "kg"
  },
  {
    "sl.no": 3129,
    item: "MR9940-Nandiwood reepers 50x25 mm",
    unit: "metre"
  },
  {
    "sl.no": 3130,
    item: "MR9941-Orissa pattern of size 580x440mm with integral type foot rests",
    unit: "each"
  },
  {
    "sl.no": 3131,
    item: "MR9942-P.V.C automatic flushing cistern 7.5 litres with fittings",
    unit: "each"
  },
  {
    "sl.no": 3132,
    item: "MR9943-P.V.C. automatic flushing cistern 5 litres with fittings",
    unit: "each"
  },
  {
    "sl.no": 3133,
    item: "MR9944-P.V.C. flushing cistern 10 lts low level with fitting",
    unit: "each"
  },
  {
    "sl.no": 3134,
    item: "MR9945-Pintels including welded pins",
    unit: "each"
  },
  {
    "sl.no": 3135,
    item: "MR9946-Plastic sheet",
    unit: "sqm"
  },
  {
    "sl.no": 3136,
    item: "MR9947-PVC pipes 10kgf / sqcm 90mm outer dia",
    unit: "metre"
  },
  {
    "sl.no": 3137,
    item: "MR9948-RMS Gusset plate",
    unit: "kg"
  },
  {
    "sl.no": 3138,
    item: "MR9949-Solid concrete blocks (40*20*20 cms)-5.00 N/Sqmm",
    unit: "no"
  },
  {
    "sl.no": 3139,
    item: "MR9950-Special for overflow pipe",
    unit: "each"
  },
  {
    "sl.no": 3140,
    item: "MR9951-Stone slab 10 to 12 cm thick",
    unit: "sqm"
  },
  {
    "sl.no": 3141,
    item: "MR9952-Supply of quarried stone 150-200 mm size",
    unit: "cum"
  },
  {
    "sl.no": 3142,
    item: "MR9953-Vitrified tiles 600x600 mm",
    unit: "sqm"
  },
  {
    "sl.no": 3143,
    item: "MR9954-Water proofing compound",
    unit: "kg"
  },
  {
    "sl.no": 3144,
    item: "MR9955-White vitreous china clay flat back lipped front urinal basin of 430x260x350mm size",
    unit: "each"
  },
  {
    "sl.no": 3145,
    item: "MR9956-White vitreous china clay flat back wash basin size 550x400mm",
    unit: "each"
  },
  {
    "sl.no": 3146,
    item: "MR9957-White vitreous china clay flat back wash basin size 630x450mm",
    unit: "each"
  },
  {
    "sl.no": 3147,
    item: "MR9958-White vitreous china clay squalting plate",
    unit: "each"
  },
  {
    "sl.no": 3148,
    item: "MR9959-White vitreous china clay wall corner type, lipped front urinal basis of size 340x410x265mm",
    unit: "each"
  },
  {
    "sl.no": 3149,
    item: "MR9960-Indian type water closet of size 580 mm of specified make with footrests",
    unit: "each"
  },
  {
    "sl.no": 3150,
    item: "MR9961-Cost of 6.5mm M.S. Coil",
    unit: "kg"
  },
  {
    "sl.no": 3151,
    item: "MR9962-Fabrication charges.",
    unit: "kg"
  },
  {
    "sl.no": 3152,
    item: "MR9963-Transportation charges of materials beyond 5 KM @ 10%",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3153,
    item: "MR9964-Labour charges for handing errection of RCC rings etc. @ 5%",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3154,
    item: "MR9965-GI pipe 32mm dia B Class",
    unit: "metre"
  },
  {
    "sl.no": 3155,
    item: "MR9966-Kentledge - Wooden rafter and wooden plank for 3.00 m Sinking well for 1 use per Mtr",
    unit: "metre"
  },
  {
    "sl.no": 3156,
    item: "MR9967-Dewatering with 2 Nos. of 5 HP pumpsets @ 30% on Excavation",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3157,
    item: "MR9968-PVC pipe of 4kg\\cum,63 mm",
    unit: "metre"
  },
  {
    "sl.no": 3158,
    item: "MR9969-PVC pipe of 4kg\\cum,75 mm",
    unit: "metre"
  },
  {
    "sl.no": 3159,
    item: "MR9970-PVC pipe of 4kg\\cum,90 mm",
    unit: "metre"
  },
  {
    "sl.no": 3160,
    item: "MR9971-PVC pipe of 4kg\\cum,110 mm",
    unit: "metre"
  },
  {
    "sl.no": 3161,
    item: "MR9972-PVC pipe of 4kg\\cum,140 mm",
    unit: "metre"
  },
  {
    "sl.no": 3162,
    item: "MR9973-PVC pipe of 4kg\\cum,160 mm",
    unit: "metre"
  },
  {
    "sl.no": 3163,
    item: "MR9974-PVC pipe of 4kg\\cum,200 mm",
    unit: "metre"
  },
  {
    "sl.no": 3164,
    item: "MR9975-PVC pipe of 6kg\\cum,63 mm",
    unit: "metre"
  },
  {
    "sl.no": 3165,
    item: "MR9976-PVC pipe of 6kg\\cum,75 mm",
    unit: "metre"
  },
  {
    "sl.no": 3166,
    item: "MR9977-PVC pipe of 6kg\\cum,90 mm",
    unit: "metre"
  },
  {
    "sl.no": 3167,
    item: "MR9978-PVC pipe of 6kg\\cum,110 mm",
    unit: "metre"
  },
  {
    "sl.no": 3168,
    item: "MR9979-PVC pipe of 6kg\\cum,140 mm",
    unit: "metre"
  },
  {
    "sl.no": 3169,
    item: "MR9980-PVC pipe of 6kg\\cum,160 mm",
    unit: "metre"
  },
  {
    "sl.no": 3170,
    item: "MR9981-PVC pipe of 6kg\\cum,200 mm",
    unit: "metre"
  },
  {
    "sl.no": 3171,
    item: "MR9982-PVC pipe of 10kg\\cum,63 mm",
    unit: "metre"
  },
  {
    "sl.no": 3172,
    item: "MR9983-PVC pipe of 10kg\\cum,75 mm",
    unit: "metre"
  },
  {
    "sl.no": 3173,
    item: "MR9984-PVC pipe of 10kg\\cum,90 mm",
    unit: "metre"
  },
  {
    "sl.no": 3174,
    item: "MR9985-PVC pipe of 10kg\\cum,110 mm",
    unit: "metre"
  },
  {
    "sl.no": 3175,
    item: "MR9986-PVC pipe of 10kg\\cum,140 mm",
    unit: "metre"
  },
  {
    "sl.no": 3176,
    item: "MR9987-PVC pipe of 10kg\\cum,160 mm",
    unit: "metre"
  },
  {
    "sl.no": 3177,
    item: "MR9988-PVC pipe of 10kg\\cum,200 mm",
    unit: "metre"
  },
  {
    "sl.no": 3178,
    item: "MR9989-Dewatering charges @ 8 %",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3179,
    item: "MR9990-Dewatering charges @ 8%",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3180,
    item: "MR9991-Granite sink 23cm thick",
    unit: "sqm"
  },
  {
    "sl.no": 3181,
    item: "MR9992-Baling out water @ 0.2 %",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3182,
    item: "MR9993-Bailing out water  @ 5%",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3183,
    item: "MR9994-Curing T & P @ 1%",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3184,
    item: "MR9995-Form work @ 1%",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3185,
    item: "MR9996-Solid Concrete Block (40*15*20 cms)- 5.00 N/sqmm",
    unit: "each"
  },
  {
    "sl.no": 3186,
    item: "MR9997-100 mm dia M.S pipe hallow",
    unit: "metre"
  },
  {
    "sl.no": 3187,
    item: "MR9998-Metal wire netting",
    unit: "sqm"
  },
  {
    "sl.no": 3188,
    item: "MR9999-Northlight adjustable ridges of 1.22 m",
    unit: "each"
  },
  {
    "sl.no": 3189,
    item: "MR10000-Crane charges",
    unit: "Day"
  },
  {
    "sl.no": 3190,
    item: "MR10001-Moulding charges for casting guard stones",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3191,
    item: "MR10002-C.I manhole cover with frame",
    unit: "no"
  },
  {
    "sl.no": 3192,
    item: "MR10003-Table moulded bricks of class designation 50( non modular )",
    unit: "no"
  },
  {
    "sl.no": 3193,
    item: "MR10004-European type water classet of specific make",
    unit: "no"
  },
  {
    "sl.no": 3194,
    item: "MR10005-Black plastic seat with lid as specified",
    unit: "no"
  },
  {
    "sl.no": 3195,
    item: "MR10006-White glazed/viterous china clay 10lts low lwvwl flushingcistern, with fittings and brackets and 40 mm white C.P. flush pipe",
    unit: "no"
  },
  {
    "sl.no": 3196,
    item: "MR10007-M.S Channel",
    unit: "kg"
  },
  {
    "sl.no": 3197,
    item: "MR10008-M.S Tees",
    unit: "kg"
  },
  {
    "sl.no": 3198,
    item: "MR10009-M.S Diagonal",
    unit: "kg"
  },
  {
    "sl.no": 3199,
    item: "MR10010-Pulley 38 mm dia",
    unit: "no"
  },
  {
    "sl.no": 3200,
    item: "MR10011-Cost of rivets fixing hooks and washer at 2% on material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3201,
    item: "MR10012-PVC beading",
    unit: "metre"
  },
  {
    "sl.no": 3202,
    item: "MR10013-Colour glazed tiles 30x60 cms 6mm thick",
    unit: "no"
  },
  {
    "sl.no": 3203,
    item: "MR10014-Border Tiles 30 x 10 cms",
    unit: "no"
  },
  {
    "sl.no": 3204,
    item: "MR10015-M.S Rods",
    unit: "kg"
  },
  {
    "sl.no": 3205,
    item: "MR10016-White Cement based putty @ 2sqm / kg at Rs. 1050 per Kgs",
    unit: "kg"
  },
  {
    "sl.no": 3206,
    item: "MR10017-Polyenthylene water storage tank of specified capacity L",
    unit: "Litre"
  },
  {
    "sl.no": 3207,
    item: "MR10018-Chicken Mesh",
    unit: "sqm"
  },
  {
    "sl.no": 3208,
    item: "MR10019-L .Bracket",
    unit: "no"
  },
  {
    "sl.no": 3209,
    item: "MR10020-Rubber gasket",
    unit: "metre"
  },
  {
    "sl.no": 3210,
    item: "MR10021-Labour charges for lifting and placing in position and making connection at 7% on Material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3211,
    item: "MR10022-Handling loading and unloading 3% on Material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3212,
    item: "MR10023-Pesticides",
    unit: "Litre"
  },
  {
    "sl.no": 3213,
    item: "MR10024-flowring plants",
    unit: "no"
  },
  {
    "sl.no": 3214,
    item: "MR10025-Shrubs",
    unit: "no"
  },
  {
    "sl.no": 3215,
    item: "MR10026-Hedge plant",
    unit: "no"
  },
  {
    "sl.no": 3216,
    item: "MR10027-Fine grass",
    unit: "kg"
  },
  {
    "sl.no": 3217,
    item: "MR10028-Paint Remover",
    unit: "Litre"
  },
  {
    "sl.no": 3218,
    item: "MR10029-Blow lamp, brushes, Shrubs, turpentine oil, putty at  5% on paint removal cost.",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3219,
    item: "MR10030-Aluminium Paint",
    unit: "Litre"
  },
  {
    "sl.no": 3220,
    item: "MR10031-Water proof cement paint",
    unit: "kg"
  },
  {
    "sl.no": 3221,
    item: "MR10032-Corner beads",
    unit: "metre"
  },
  {
    "sl.no": 3222,
    item: "MR10033-Waterproofing compound at one kg per 50kg",
    unit: "kg"
  },
  {
    "sl.no": 3223,
    item: "MR10034-Glazed tiles 300x450",
    unit: "sqm"
  },
  {
    "sl.no": 3224,
    item: "MR10035-C.P brass towel rail 740mm length 20mm dia",
    unit: "no"
  },
  {
    "sl.no": 3225,
    item: "MR10036-C.P brass screw 25mm with washer",
    unit: "no"
  },
  {
    "sl.no": 3226,
    item: "MR10037-C.P brass bracket",
    unit: "no"
  },
  {
    "sl.no": 3227,
    item: "MR10038-Wooden cleats",
    unit: "no"
  },
  {
    "sl.no": 3228,
    item: "MR10039-Ridges",
    unit: "no"
  },
  {
    "sl.no": 3229,
    item: "MR10040-Powder coated 60-70 micron",
    unit: "kg"
  },
  {
    "sl.no": 3230,
    item: "MR10041-Doob grass",
    unit: "sqm"
  },
  {
    "sl.no": 3231,
    item: "MR10042-sapling 2m high 25mm dia",
    unit: "no"
  },
  {
    "sl.no": 3232,
    item: "MR10043-Add 5% cost of material for riveting,bolting and  welding accessories",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3233,
    item: "MR10044-Foreman Grade 1",
    unit: "Day"
  },
  {
    "sl.no": 3234,
    item: "MR10045-Cost of centering at 1% on material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3235,
    item: "MR10046-Labour for fixing 5% on material",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3236,
    item: "MR10047-Oil Bound Distemper",
    unit: "kg"
  },
  {
    "sl.no": 3237,
    item: "MR10048-Through stone 200 x 200 x 300 mm",
    unit: "no"
  },
  {
    "sl.no": 3238,
    item: "MR10049-5 hp pump and fuel",
    unit: "hour"
  },
  {
    "sl.no": 3239,
    item: "MR10050-Water tanker 8000 ltr and fuel",
    unit: "hour"
  },
  {
    "sl.no": 3240,
    item: "MR10051-Crew for pump",
    unit: "hour"
  },
  {
    "sl.no": 3241,
    item: "MR10052-Crew for water tanker",
    unit: "hour"
  },
  {
    "sl.no": 3242,
    item: "MR10053-Crowbarman",
    unit: "Day"
  },
  {
    "sl.no": 3243,
    item: "MR10054-Polythylene pipes high density 25mm external dia",
    unit: "metre"
  },
  {
    "sl.no": 3244,
    item: "MR10055-Polythylene pipes high density 32mm external dia",
    unit: "metre"
  },
  {
    "sl.no": 3245,
    item: "MR10056-Polythylene pipes high density 40mm external dia",
    unit: "metre"
  },
  {
    "sl.no": 3246,
    item: "MR10057-Pile Shoes CI",
    unit: "kg"
  },
  {
    "sl.no": 3247,
    item: "MR10058-MS Shoe",
    unit: "kg"
  },
  {
    "sl.no": 3248,
    item: "MR10059-Steel Helmet& cushion back",
    unit: "kg"
  },
  {
    "sl.no": 3249,
    item: "MR10060-Piling rig with bantonite pump",
    unit: "hour"
  },
  {
    "sl.no": 3250,
    item: "MR10061-Crane 3 tonnes",
    unit: "hour"
  },
  {
    "sl.no": 3251,
    item: "MR10062-Concrete Cutting Machine",
    unit: "hour"
  },
  {
    "sl.no": 3252,
    item: "MR10063-Farm work (Columns and Pires)",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3253,
    item: "MR10064-Farm work (Beams, Lintels, Roof, Arched and Curved)",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3254,
    item: "MR10065-Farm work (Plastering and painting)",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3255,
    item: "MR10066-Farm work (Chejjas, canopy and other architectural projections)",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3256,
    item: "MR10067-Overhead charges - Supervision, Site office, store shed, Labour Amenities, Workmen compensation Act and Quality Control, lab test. This Item is Mentioned and included in Common PWD SoR as - 10%",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3257,
    item: "MR10068-Formwork, Centering & Scaffolding For Columns & Piers",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3258,
    item: "MR10069-Formwork, Centering & Scaffolding for Beams & Lintels of Building ",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3259,
    item: "MR10070-Formwork, Centering & Scaffolding for Roof Slab",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3260,
    item: "MR10071-Formwork, Centering & Scaffolding for Plastering & Painting of New walls ",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3261,
    item: "MR10072-Formwork, Centering & Scaffolding for Plastering & Painting of ceiling ",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3262,
    item: "MR10073-Formwork, Centering & Scaffolding for Chejjas, Canopy & Other Architectural projections of minor sections ",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3263,
    item: "MR10074-Bitumen VG30*",
    unit: "tonne"
  },
  {
    "sl.no": 3264,
    item: "MR10075-Hotmix Plant - 40/60 TPH capacity",
    unit: "hour"
  },
  {
    "sl.no": 3265,
    item: "MR10076-Bitumen Boiler Oil Fired",
    unit: "hour"
  },
  {
    "sl.no": 3266,
    item: "MR10077-Smooth Wheeled Roller 8 t",
    unit: "hour"
  },
  {
    "sl.no": 3267,
    item: "MR10078-Hydraulic Chip Spreader",
    unit: "hour"
  },
  {
    "sl.no": 3268,
    item: "MR10079-Tipper",
    unit: "Day"
  },
  {
    "sl.no": 3269,
    item: "MR10080-Bitumen Pressure Distributor",
    unit: "hour"
  },
  {
    "sl.no": 3270,
    item: "MR10081-Spraying machine",
    unit: "Day"
  },
  {
    "sl.no": 3271,
    item: "MR10082-53MM Down size Aggregates",
    unit: "cum"
  },
  {
    "sl.no": 3272,
    item: "MR10083-Asphalt boiler atttendant",
    unit: "Day"
  },
  {
    "sl.no": 3273,
    item: "MR10084-Using 1000 micron thick LDPE sheet",
    unit: "sqm"
  },
  {
    "sl.no": 3274,
    item: "MR10085-Empty cement bag",
    unit: "each"
  },
  {
    "sl.no": 3275,
    item: "MR10086-Formwork - Foundation, Sub structure of Cross drainages ",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3276,
    item: "MR10087-Over Head Charges ",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3277,
    item: "MR10088-AW",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3278,
    item: "MR10089-Dewatering pump 20 hp diesel ",
    unit: "hour"
  },
  {
    "sl.no": 3279,
    item: "MR10090-Cost of CGT as per Specification including Transportation and Supervision. ",
    unit: "sqm"
  },
  {
    "sl.no": 3280,
    item: "MR10091-Extra for Lapping at 5%",
    unit: "sqm"
  },
  {
    "sl.no": 3281,
    item: "MR10092-Cost of U hooks at interval of 750mm",
    unit: "no"
  },
  {
    "sl.no": 3282,
    item: "MR10093-Form work for Foundation upto Plinth",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3283,
    item: "MR10094-Form work for Cement Concrete Drain Walls",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3284,
    item: "MR10095-Form work for Culverts (Head walls)",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3285,
    item: "MR10096-Form work for Staircase and other similar structures",
    unit: "Lumpsum"
  },
  {
    "sl.no": 3286,
    item: "MR10097-100mm thick pre-cast cover slab",
    unit: "sqm"
  },
  {
    "sl.no": 3287,
    item: "MR10098-RCC Ring 0.90 M Dia",
    unit: "each"
  },
  {
    "sl.no": 3288,
    item: "MR10099-RCC Ring 1.00 M Dia",
    unit: "each"
  },
  {
    "sl.no": 3289,
    item: "MR10100-RCC Ring 1.20 M Dia",
    unit: "each"
  },
  {
    "sl.no": 3290,
    item: "MR10101-RCC Ring 1.50 M Dia",
    unit: "each"
  },
  {
    "sl.no": 3291,
    item: "MR10102-RCC Ring 1.80 M Dia",
    unit: "each"
  },
  {
    "sl.no": 3292,
    item: "MR10103-RCC Ring 3.00 M Dia",
    unit: "each"
  },
  {
    "sl.no": 3293,
    item: "MR10104-RCC Concrete cap 0.90 M Dia",
    unit: "each"
  },
  {
    "sl.no": 3294,
    item: "MR10105-RCC Concrete cap 1.00 M Dia",
    unit: "each"
  },
  {
    "sl.no": 3295,
    item: "MR10106-RCC Concrete cap 1.20 M Dia",
    unit: "each"
  },
  {
    "sl.no": 3296,
    item: "MR10107-RCC Concrete cap 1.50 M Dia",
    unit: "each"
  },
  {
    "sl.no": 3297,
    item: "MR10108-RCC Concrete cap 1.80 M Dia",
    unit: "each"
  }
];
