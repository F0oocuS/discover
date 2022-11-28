import { Injectable } from '@angular/core';

import { TileInterface } from '../../../interfaces/map/tile.interface';
import {
	CELL_TYPE_DESERT_GRASS,
	CELL_TYPE_DESERT_SAND,
	CELL_TYPE_DESERT_DUNE,
	CELL_TYPE_DESERT_MOUNTAIN
} from '../../../constants/map/cell-types.constants';

@Injectable({
	providedIn: 'root'
})
export class DesertService {
	private tiles0: TileInterface[] = [
		{
			id: 0,
			cells: [
				{ id: 0, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true },
				{ id: 1, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true },
				{ id: 2, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true },
				{ id: 3, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: 'bonfire|camp', objective: null, tileID: 0, isReveal: true, isCanMove: true },
				{ id: 4, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true },
				{ id: 5, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true },
				{ id: 6, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true },
				{ id: 7, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true },
				{ id: 8, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true },
				{ id: 9, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true }
			],
			number: 0
		}
	];
	private tiles1: TileInterface[] = [
		{
			id: 1,
			cells: [
				{ id: 10, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 1, isReveal: true, isCanMove: true },
				{ id: 11, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 1, isReveal: true, isCanMove: true },
				{ id: 12, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 1, isReveal: true, isCanMove: true },
				{ id: 13, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 1, isReveal: true, isCanMove: true },
				{ id: 14, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: 24, tileID: 1, isReveal: true, isCanMove: true },
				{ id: 15, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: 'tree', objective: null, tileID: 1, isReveal: true, isCanMove: true },
				{ id: 16, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 1, isReveal: true, isCanMove: true },
				{ id: 17, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: 'animal', objective: null, tileID: 1, isReveal: true, isCanMove: true },
				{ id: 18, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 1, isReveal: true, isCanMove: true },
				{ id: 19, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 1, isReveal: true, isCanMove: true }
			],
			number: 1
		},
		{
			id: 2,
			cells: [
				{ id: 20, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 2, isReveal: true, isCanMove: true },
				{ id: 21, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: 'stone', objective: null, tileID: 2, isReveal: true, isCanMove: true },
				{ id: 22, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 2, isReveal: true, isCanMove: true },
				{ id: 23, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 2, isReveal: true, isCanMove: true },
				{ id: 24, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 2, isReveal: true, isCanMove: true },
				{ id: 25, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 2, isReveal: true, isCanMove: true },
				{ id: 26, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: 20, tileID: 2, isReveal: true, isCanMove: true },
				{ id: 27, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 2, isReveal: true, isCanMove: true },
				{ id: 28, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 2, isReveal: true, isCanMove: true },
				{ id: 29, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 2, isReveal: true, isCanMove: true }
			],
			number: 1
		},
		{
			id: 3,
			cells: [
				{ id: 30, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 3, isReveal: true, isCanMove: true },
				{ id: 31, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 3, isReveal: true, isCanMove: true },
				{ id: 32, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 3, isReveal: true, isCanMove: true },
				{ id: 33, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 3, isReveal: true, isCanMove: true },
				{ id: 34, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 3, isReveal: true, isCanMove: true },
				{ id: 35, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 3, isReveal: true, isCanMove: true },
				{ id: 36, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: 'tree', objective: null, tileID: 3, isReveal: true, isCanMove: true },
				{ id: 37, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 3, isReveal: true, isCanMove: true },
				{ id: 38, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 3, isReveal: true, isCanMove: true },
				{ id: 39, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 3, isReveal: true, isCanMove: true }
			],
			number: 1
		},
		{
			id: 4,
			cells: [
				{ id: 40, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 4, isReveal: true, isCanMove: true },
				{ id: 41, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 4, isReveal: true, isCanMove: true },
				{ id: 42, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 4, isReveal: true, isCanMove: true },
				{ id: 43, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 4, isReveal: true, isCanMove: true },
				{ id: 44, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 4, isReveal: true, isCanMove: true },
				{ id: 45, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 4, isReveal: true, isCanMove: true },
				{ id: 46, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: 'animal', objective: null, tileID: 4, isReveal: true, isCanMove: true },
				{ id: 47, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 4, isReveal: true, isCanMove: true },
				{ id: 48, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 4, isReveal: true, isCanMove: true },
				{ id: 49, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 4, isReveal: true, isCanMove: true }
			],
			number: 1
		},
		{
			id: 5,
			cells: [
				{ id: 50, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 5, isReveal: true, isCanMove: true },
				{ id: 51, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: 'stone', objective: null, tileID: 5, isReveal: true, isCanMove: true },
				{ id: 52, cellType: CELL_TYPE_DESERT_MOUNTAIN, landmark: null, resource: null, objective: null, tileID: 5, isReveal: true, isCanMove: true },
				{ id: 53, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 5, isReveal: true, isCanMove: true },
				{ id: 54, cellType: CELL_TYPE_DESERT_MOUNTAIN, landmark: null, resource: null, objective: null, tileID: 5, isReveal: true, isCanMove: true },
				{ id: 55, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 5, isReveal: true, isCanMove: true },
				{ id: 56, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 5, isReveal: true, isCanMove: true },
				{ id: 57, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 5, isReveal: true, isCanMove: true },
				{ id: 58, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 5, isReveal: true, isCanMove: true },
				{ id: 59, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 5, isReveal: true, isCanMove: true }
			],
			number: 1
		},
		{
			id: 6,
			cells: [
				{ id: 60, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 6, isReveal: true, isCanMove: true },
				{ id: 61, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 6, isReveal: true, isCanMove: true },
				{ id: 62, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 6, isReveal: true, isCanMove: true },
				{ id: 63, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 6, isReveal: true, isCanMove: true },
				{ id: 64, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: 'meal', objective: null, tileID: 6, isReveal: true, isCanMove: true },
				{ id: 65, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: 44, tileID: 6, isReveal: true, isCanMove: true },
				{ id: 66, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 6, isReveal: true, isCanMove: true },
				{ id: 67, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 6, isReveal: true, isCanMove: true },
				{ id: 68, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 6, isReveal: true, isCanMove: true },
				{ id: 69, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 6, isReveal: true, isCanMove: true }
			],
			number: 1
		}
	];
	private tiles2: TileInterface[] = [
		{
			id: 7,
			cells: [
				{ id: 70, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 7, isReveal: true, isCanMove: true },
				{ id: 71, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 7, isReveal: true, isCanMove: true },
				{ id: 72, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: 'animal', objective: null, tileID: 7, isReveal: true, isCanMove: true },
				{ id: 73, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 7, isReveal: true, isCanMove: true },
				{ id: 74, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 7, isReveal: true, isCanMove: true },
				{ id: 75, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 7, isReveal: true, isCanMove: true },
				{ id: 76, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 7, isReveal: true, isCanMove: true },
				{ id: 77, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 7, isReveal: true, isCanMove: true },
				{ id: 78, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 7, isReveal: true, isCanMove: true },
				{ id: 79, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 7, isReveal: true, isCanMove: true }
			],
			number: 2
		},
		{
			id: 8,
			cells: [
				{ id: 80, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: 'stone', objective: null, tileID: 8, isReveal: true, isCanMove: true },
				{ id: 81, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 8, isReveal: true, isCanMove: true },
				{ id: 82, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 8, isReveal: true, isCanMove: true },
				{ id: 83, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 8, isReveal: true, isCanMove: true },
				{ id: 84, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: 'animal', objective: null, tileID: 8, isReveal: true, isCanMove: true },
				{ id: 85, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 8, isReveal: true, isCanMove: true },
				{ id: 86, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 8, isReveal: true, isCanMove: true },
				{ id: 87, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: 'tree', objective: null, tileID: 8, isReveal: true, isCanMove: true },
				{ id: 88, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 8, isReveal: true, isCanMove: true },
				{ id: 89, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 8, isReveal: true, isCanMove: true }
			],
			number: 2
		}
	];
	private tiles3: TileInterface[] = [
		{
			id: 9,
			cells: [
				{ id: 90, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 9, isReveal: true, isCanMove: true },
				{ id: 91, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 9, isReveal: true, isCanMove: true },
				{ id: 92, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 9, isReveal: true, isCanMove: true },
				{ id: 93, cellType: CELL_TYPE_DESERT_GRASS, landmark: null, resource: 'animal', objective: null, tileID: 9, isReveal: true, isCanMove: true },
				{ id: 94, cellType: CELL_TYPE_DESERT_GRASS, landmark: null, resource: null, objective: null, tileID: 9, isReveal: true, isCanMove: true },
				{ id: 95, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 9, isReveal: true, isCanMove: true },
				{ id: 96, cellType: CELL_TYPE_DESERT_GRASS, landmark: null, resource: 'water', objective: null, tileID: 9, isReveal: true, isCanMove: true },
				{ id: 97, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: 'tree', objective: null, tileID: 9, isReveal: true, isCanMove: true },
				{ id: 98, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 9, isReveal: true, isCanMove: true },
				{ id: 99, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 9, isReveal: true, isCanMove: true }
			],
			number: 3
		},
		{
			id: 10,
			cells: [
				{ id: 100, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 10, isReveal: true, isCanMove: true },
				{ id: 101, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 10, isReveal: true, isCanMove: true },
				{ id: 102, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: 'stone', objective: null, tileID: 10, isReveal: true, isCanMove: true },
				{ id: 103, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: 'tree', objective: null, tileID: 10, isReveal: true, isCanMove: true },
				{ id: 104, cellType: CELL_TYPE_DESERT_SAND, landmark: 'binoculars', resource: null, objective: null, tileID: 10, isReveal: true, isCanMove: true },
				{ id: 105, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 10, isReveal: true, isCanMove: true },
				{ id: 106, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 10, isReveal: true, isCanMove: true },
				{ id: 107, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 10, isReveal: true, isCanMove: true },
				{ id: 108, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 10, isReveal: true, isCanMove: true },
				{ id: 109, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: 'meal', objective: null, tileID: 10, isReveal: true, isCanMove: true }
			],
			number: 3
		},
		{
			id: 11,
			cells: [
				{ id: 110, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 11, isReveal: true, isCanMove: true },
				{ id: 111, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 11, isReveal: true, isCanMove: true },
				{ id: 112, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 11, isReveal: true, isCanMove: true },
				{ id: 113, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: 'meal', objective: null, tileID: 11, isReveal: true, isCanMove: true },
				{ id: 114, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 11, isReveal: true, isCanMove: true },
				{ id: 115, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 11, isReveal: true, isCanMove: true },
				{ id: 116, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 11, isReveal: true, isCanMove: true },
				{ id: 117, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 11, isReveal: true, isCanMove: true },
				{ id: 118, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 11, isReveal: true, isCanMove: true },
				{ id: 119, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 11, isReveal: true, isCanMove: true }
			],
			number: 3
		},
		{
			id: 12,
			cells: [
				{ id: 120, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 12, isReveal: true, isCanMove: true },
				{ id: 121, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: 40, tileID: 12, isReveal: true, isCanMove: true },
				{ id: 122, cellType: CELL_TYPE_DESERT_MOUNTAIN, landmark: null, resource: null, objective: null, tileID: 12, isReveal: true, isCanMove: true },
				{ id: 123, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 12, isReveal: true, isCanMove: true },
				{ id: 124, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 12, isReveal: true, isCanMove: true },
				{ id: 125, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 12, isReveal: true, isCanMove: true },
				{ id: 126, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 12, isReveal: true, isCanMove: true },
				{ id: 127, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 12, isReveal: true, isCanMove: true },
				{ id: 128, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 12, isReveal: true, isCanMove: true },
				{ id: 129, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: 'tree', objective: null, tileID: 12, isReveal: true, isCanMove: true }
			],
			number: 3
		}
	];
	private tiles4: TileInterface[] = [
		{
			id: 13,
			cells: [
				{ id: 130, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 13, isReveal: true, isCanMove: true },
				{ id: 131, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 13, isReveal: true, isCanMove: true },
				{ id: 132, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 13, isReveal: true, isCanMove: true },
				{ id: 133, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 13, isReveal: true, isCanMove: true },
				{ id: 134, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: 'animal', objective: null, tileID: 13, isReveal: true, isCanMove: true },
				{ id: 135, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 13, isReveal: true, isCanMove: true },
				{ id: 136, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: 4, tileID: 13, isReveal: true, isCanMove: true },
				{ id: 137, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: 'stone', objective: null, tileID: 13, isReveal: true, isCanMove: true },
				{ id: 138, cellType: CELL_TYPE_DESERT_MOUNTAIN, landmark: null, resource: null, objective: null, tileID: 13, isReveal: true, isCanMove: true },
				{ id: 139, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 13, isReveal: true, isCanMove: true }
			],
			number: 4
		},
		{
			id: 14,
			cells: [
				{ id: 140, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 14, isReveal: true, isCanMove: true },
				{ id: 141, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 14, isReveal: true, isCanMove: true },
				{ id: 142, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 14, isReveal: true, isCanMove: true },
				{ id: 143, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: 1, tileID: 14, isReveal: true, isCanMove: true },
				{ id: 144, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 14, isReveal: true, isCanMove: true },
				{ id: 145, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: 'meal', objective: null, tileID: 14, isReveal: true, isCanMove: true },
				{ id: 146, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 14, isReveal: true, isCanMove: true },
				{ id: 147, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 14, isReveal: true, isCanMove: true },
				{ id: 148, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 14, isReveal: true, isCanMove: true },
				{ id: 149, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 14, isReveal: true, isCanMove: true }
			],
			number: 4
		},
		{
			id: 15,
			cells: [
				{ id: 150, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 15, isReveal: true, isCanMove: true },
				{ id: 151, cellType: CELL_TYPE_DESERT_MOUNTAIN, landmark: 'shovel', resource: null, objective: null, tileID: 15, isReveal: true, isCanMove: true },
				{ id: 152, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 15, isReveal: true, isCanMove: true },
				{ id: 153, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 15, isReveal: true, isCanMove: true },
				{ id: 154, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: 'stone', objective: null, tileID: 15, isReveal: true, isCanMove: true },
				{ id: 155, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: 'meal', objective: null, tileID: 15, isReveal: true, isCanMove: true },
				{ id: 156, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 15, isReveal: true, isCanMove: true },
				{ id: 157, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 15, isReveal: true, isCanMove: true },
				{ id: 158, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 15, isReveal: true, isCanMove: true },
				{ id: 159, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 15, isReveal: true, isCanMove: true }
			],
			number: 4
		},
		{
			id: 16,
			cells: [
				{ id: 160, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 16, isReveal: true, isCanMove: true },
				{ id: 161, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 16, isReveal: true, isCanMove: true },
				{ id: 162, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 16, isReveal: true, isCanMove: true },
				{ id: 163, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 16, isReveal: true, isCanMove: true },
				{ id: 164, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 16, isReveal: true, isCanMove: true },
				{ id: 165, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 16, isReveal: true, isCanMove: true },
				{ id: 166, cellType: CELL_TYPE_DESERT_DUNE, landmark: null, resource: null, objective: null, tileID: 16, isReveal: true, isCanMove: true },
				{ id: 167, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 16, isReveal: true, isCanMove: true },
				{ id: 168, cellType: CELL_TYPE_DESERT_SAND, landmark: 'flashlight', resource: null, objective: null, tileID: 16, isReveal: true, isCanMove: true },
				{ id: 169, cellType: CELL_TYPE_DESERT_SAND, landmark: null, resource: null, objective: null, tileID: 16, isReveal: true, isCanMove: true }
			],
			number: 4
		}
	];

	private mapModel: (string | null)[][] = [
		[null, null, null, null, '300', '303', '305', '308', '100', '103', '105', '108', '110', '113', '115', '118', '120', '123', '125', '128', '310', '313', '315', '318', null, null, null, null],
		[null, null, null, null, '301', '304', '306', '309', '101', '104', '106', '109', '111', '114', '116', '119', '121', '124', '126', '129', '311', '314', '316', '319', null, null, null, null],
		[null, '402', null, '407', '302', '412', '307', '417', '102', '202', '107', '207', '112', '002', '117', '007', '122', '212', '127', '217', '312', '422', '317', '427', null, '432', null, '437'],
		['400', '403', '405', '408', '410', '413', '415', '418', '200', '203', '205', '208', '000', '003', '005', '008', '210', '213', '215', '218', '420', '423', '425', '428', '430', '433', '435', '438'],
		['401', '404', '406', '409', '411', '414', '416', '419', '201', '204', '206', '209', '001', '004', '006', '009', '211', '214', '216', '219', '421', '424', '426', '429', '431', '434', '436', '439'],
		[null, null, null, null, '320', '323', '325', '328', '130', '133', '135', '138', '140', '143', '145', '148', '150', '153', '155', '158', '330', '333', '335', '338', null, null, null, null],
		[null, null, null, null, '321', '324', '326', '329', '131', '134', '136', '139', '141', '144', '146', '149', '151', '154', '156', '159', '331', '334', '336', '339', null, null, null, null],
		[null, null, null, null, '322', null, '327', null, '132', null, '137', null, '142', null, '147', null, '152', null, '157', null, '332', null, '337', null, null, null, null, null]
	];

	public getMapTiles(): TileInterface[][] {
		return [[...this.tiles0], [...this.tiles1], [...this.tiles2], [...this.tiles3], [...this.tiles4]];
	}

	public getMapModel(): (string | null)[][] {
		return [...this.mapModel];
	}
}
