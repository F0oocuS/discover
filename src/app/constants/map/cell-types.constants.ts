import { CellTypeInterface } from '../../interfaces/map/cell-type.interface';

// CELL TYPES

// Valley terrain types
export const CELL_TYPE_VALLEY_GRASS: CellTypeInterface = { name: 'Grass', color: '#739957', moveCost: 1 };
export const CELL_TYPE_VALLEY_HILL: CellTypeInterface = { name: 'Hill', color: '#3c5730', moveCost: 2 };
export const CELL_TYPE_VALLEY_MOUNTAIN: CellTypeInterface = { name: 'Mountain', color: '#a7adba', moveCost: 3 };

// Snowy mountain terrain types
export const CELL_TYPE_SNOWY_SNOW: CellTypeInterface = { name: 'Snow', color: '#b1d8f0', moveCost: 1 };
export const CELL_TYPE_SNOWY_DEEP_SNOW: CellTypeInterface= { name: 'Deep Snow', color: '#f2faff', moveCost: 2 };
export const CELL_TYPE_SNOWY_MOUNTAIN: CellTypeInterface = { name: 'Mountain', color: '#a1908c', moveCost: 3 };
export const CELL_TYPE_SNOWY_CLIFF: CellTypeInterface = { name: 'Cliff', color: '#42322e', moveCost: 4 };
export const CELL_TYPE_SNOWY_MELT_SNOW: CellTypeInterface = { name: 'Cliff', color: '#8a8a8a', moveCost: 1 };

// Desert terrain types
export const CELL_TYPE_DESERT_SAND: CellTypeInterface = { name: 'Sand', color: '#f7ecc1', moveCost: 1 }
export const CELL_TYPE_DESERT_GRASS: CellTypeInterface = { name: 'Grass', color: '#82b04d', moveCost: 1 }
export const CELL_TYPE_DESERT_DUNE: CellTypeInterface = { name: 'Dune', color: '#f2bb72', moveCost: 2 }
export const CELL_TYPE_DESERT_MOUNTAIN: CellTypeInterface = { name: 'Mountain', color: '#854105', moveCost: 2 }

// Badlands terrain types
export const CELL_TYPE_BADLANDS_DIRT: CellTypeInterface = { name: 'Dirt', color: '#ffba75', moveCost: 1 };
export const CELL_TYPE_BADLANDS_HILL: CellTypeInterface = { name: 'Hill', color: '#ad551d', moveCost: 2 };
export const CELL_TYPE_BADLANDS_MOUNTAIN: CellTypeInterface = { name: 'Mountain', color: '#6e2402', moveCost: 3 };
export const CELL_TYPE_BADLANDS_ROAD_SPACE: CellTypeInterface = { name: 'Road Space', color: '#fce8dc', moveCost: 3 };

// Bayou terrain types
export const CELL_TYPE_BAYOU_MEADOW: CellTypeInterface = { name: 'Meadow', color: '#017a66', moveCost: 1 };
export const CELL_TYPE_BAYOU_SWAMP: CellTypeInterface = { name: 'Swamp', color: '#003f36', moveCost: 2 };
export const CELL_TYPE_BAYOU_FIRTH: CellTypeInterface = { name: 'Firth', color: '#03879c', moveCost: 3 };
export const CELL_TYPE_BAYOU_BRIDGE: CellTypeInterface = { name: 'Firth', color: '#331408', moveCost: 1 };

// Island terrain types
export const CELL_TYPE_ISLAND_BEACH: CellTypeInterface = { name: 'Beach', color: '#fafcd7', moveCost: 1 };
export const CELL_TYPE_ISLAND_GRASS: CellTypeInterface = { name: 'Grass', color: '#82b04d', moveCost: 1 };
export const CELL_TYPE_ISLAND_UNDERBRUSH: CellTypeInterface = { name: 'Underbrush', color: '#054f24', moveCost: 2 };
export const CELL_TYPE_ISLAND_OCEAN: CellTypeInterface = { name: 'Ocean', color: '#2392a6', moveCost: 2 };
export const CELL_TYPE_ISLAND_MOUNTAIN: CellTypeInterface = { name: 'Mountain', color: '#87898a', moveCost: 3 };

