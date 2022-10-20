import { CellTypeInterface } from '../../interfaces/map/cell-type.interface';

// CELL TYPES

// Valley terrain types
export const CELL_TYPE_VALLEY_GRASS: CellTypeInterface = { name: 'Grass', color: '#739957', moveCost: 1 };
export const CELL_TYPE_VALLEY_HILL: CellTypeInterface = { name: 'Hill', color: '#3c5730', moveCost: 2 };
export const CELL_TYPE_VALLEY_MOUNTAIN: CellTypeInterface = { name: 'Mountain', color: '#a7adba', moveCost: 3 };

// Snowy mountain terrain types
export const CELL_TYPE_SNOWY_SNOW: CellTypeInterface = { name: 'Snow', color: '#739957', moveCost: 1 };
export const CELL_TYPE_SNOWY_DEEP_SNOW: CellTypeInterface= { name: 'Deep Snow', color: '#3c5730', moveCost: 2 };
export const CELL_TYPE_SNOWY_MOUNTAIN: CellTypeInterface = { name: 'Mountain', color: '', moveCost: 3 };
export const CELL_TYPE_SNOWY_CLIFF: CellTypeInterface = { name: 'Cliff', color: '', moveCost: 4 };

// Desert terrain types
export const CELL_TYPE_DESERT_SAND: CellTypeInterface = { name: 'Sand', color: '', moveCost: 1 }
export const CELL_TYPE_DESERT_GRASS: CellTypeInterface = { name: 'Grass', color: '', moveCost: 1 }
export const CELL_TYPE_DESERT_DUNE: CellTypeInterface = { name: 'Dune', color: '', moveCost: 2 }
export const CELL_TYPE_DESERT_MOUNTAIN: CellTypeInterface = { name: 'Mountain', color: '', moveCost: 2 }

// Badlands terrain types
export const CELL_TYPE_BADLANDS_DIRT: CellTypeInterface = { name: 'Dirt', color: '', moveCost: 1 };
export const CELL_TYPE_BADLANDS_HILL: CellTypeInterface = { name: 'Hill', color: '', moveCost: 2 };
export const CELL_TYPE_BADLANDS_MOUNTAIN: CellTypeInterface = { name: 'Mountain', color: '', moveCost: 3 };

// Bayou terrain types
export const CELL_TYPE_BAYOU_MEADOW: CellTypeInterface = { name: 'Meadow', color: '', moveCost: 1 };
export const CELL_TYPE_BAYOU_SWAMP: CellTypeInterface = { name: 'Swamp', color: '', moveCost: 2 };
export const CELL_TYPE_BAYOU_FIRTH: CellTypeInterface = { name: 'Firth', color: '', moveCost: 3 };

