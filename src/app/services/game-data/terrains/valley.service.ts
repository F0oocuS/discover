import { Injectable } from '@angular/core';

import { TileInterface } from '../../../interfaces/map/tile.interface';

import { CELL_TYPE_VALLEY_GRASS, CELL_TYPE_VALLEY_HILL, CELL_TYPE_VALLEY_MOUNTAIN } from '../../../constants/map/cell-types.constants';

@Injectable({
	providedIn: 'root'
})
export class ValleyService {
	private tiles0: TileInterface[] = [
		{
			id: 0,
			cells: [
				{ id: 0, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true },
				{ id: 1, cellType: CELL_TYPE_VALLEY_HILL, landmark: 'binoculars', resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true },
				{ id: 2, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true },
				{ id: 3, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: 'bonfire|camp', objective: null, tileID: 0, isReveal: true, isCanMove: true, players: [1, 2, 3, 4] },
				{ id: 4, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true },
				{ id: 5, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true },
				{ id: 6, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true },
				{ id: 7, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true },
				{ id: 8, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true },
				{ id: 9, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true }
			],
			number: 0,
			direction: 'left'
		}
	];
	private tiles1: TileInterface[] = [
		{
			id: 1,
			cells: [
				{ id: 10, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 1, isReveal: false, isCanMove: false },
				{ id: 11, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 1, isReveal: false, isCanMove: false },
				{ id: 12, cellType: CELL_TYPE_VALLEY_MOUNTAIN, landmark: null, resource: 'meal', objective: null, tileID: 1, isReveal: false, isCanMove: false },
				{ id: 13, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 1, isReveal: false, isCanMove: false },
				{ id: 14, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 1, isReveal: false, isCanMove: false },
				{ id: 15, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 1, isReveal: false, isCanMove: false },
				{ id: 16, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 1, isReveal: false, isCanMove: false },
				{ id: 17, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 1, isReveal: false, isCanMove: false },
				{ id: 18, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 1, isReveal: false, isCanMove: false },
				{ id: 19, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 1, isReveal: false, isCanMove: false },
			],
			number: 1,
			direction: 'left'
		},
		{
			id: 2,
			cells: [
				{ id: 20, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 2, isReveal: false, isCanMove: false },
				{ id: 21, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 2, isReveal: false, isCanMove: false },
				{ id: 22, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 2, isReveal: false, isCanMove: false },
				{ id: 23, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 2, isReveal: false, isCanMove: false },
				{ id: 24, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 2, isReveal: false, isCanMove: false },
				{ id: 25, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 2, isReveal: false, isCanMove: false },
				{ id: 26, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: 'stone', objective: null, tileID: 2, isReveal: false, isCanMove: false },
				{ id: 27, cellType: CELL_TYPE_VALLEY_HILL, landmark: 'shovel', resource: null, objective: null, tileID: 2, isReveal: false, isCanMove: false },
				{ id: 28, cellType: CELL_TYPE_VALLEY_HILL, landmark: null, resource: null, objective: null, tileID: 2, isReveal: false, isCanMove: false },
				{ id: 29, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 2, isReveal: false, isCanMove: false },
			],
			number: 1,
			direction: 'left'
		}
	];
	private tiles2: TileInterface[] = [
		{
			id: 3,
			cells: [
				{ id: 30, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 3, isReveal: false, isCanMove: false },
				{ id: 31, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: 'stone', objective: null, tileID: 3, isReveal: false, isCanMove: false },
				{ id: 32, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 3, isReveal: false, isCanMove: false },
				{ id: 33, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 3, isReveal: false, isCanMove: false },
				{ id: 34, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 3, isReveal: false, isCanMove: false },
				{ id: 35, cellType: CELL_TYPE_VALLEY_HILL, landmark: null, resource: null, objective: null, tileID: 3, isReveal: false, isCanMove: false },
				{ id: 36, cellType: CELL_TYPE_VALLEY_MOUNTAIN, landmark: null, resource: 'water', objective: null, tileID: 3, isReveal: false, isCanMove: false },
				{ id: 37, cellType: CELL_TYPE_VALLEY_HILL, landmark: null, resource: null, objective: null, tileID: 3, isReveal: false, isCanMove: false },
				{ id: 38, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 3, isReveal: false, isCanMove: false },
				{ id: 39, cellType: CELL_TYPE_VALLEY_HILL, landmark: null, resource: null, objective: null, tileID: 3, isReveal: false, isCanMove: false }
			],
			number: 2,
			direction: 'right'
		},
		{
			id: 4,
			cells: [
				{ id: 40, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 4, isReveal: false, isCanMove: false },
				{ id: 41, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 4, isReveal: false, isCanMove: false },
				{ id: 42, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 4, isReveal: false, isCanMove: false },
				{ id: 43, cellType: CELL_TYPE_VALLEY_HILL, landmark: null, resource: null, objective: null, tileID: 4, isReveal: false, isCanMove: false },
				{ id: 44, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 4, isReveal: false, isCanMove: false },
				{ id: 45, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 4, isReveal: false, isCanMove: false },
				{ id: 46, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: 'tree', objective: null, tileID: 4, isReveal: false, isCanMove: false },
				{ id: 47, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 4, isReveal: false, isCanMove: false },
				{ id: 48, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 4, isReveal: false, isCanMove: false },
				{ id: 49, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 4, isReveal: false, isCanMove: false }
			],
			number: 2,
			direction: 'right'
		},
		{
			id: 5,
			cells: [
				{ id: 50, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 5, isReveal: false, isCanMove: false },
				{ id: 51, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: 'stone', objective: null, tileID: 5, isReveal: false, isCanMove: false },
				{ id: 52, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 5, isReveal: false, isCanMove: false },
				{ id: 53, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 5, isReveal: false, isCanMove: false },
				{ id: 54, cellType: CELL_TYPE_VALLEY_HILL, landmark: null, resource: null, objective: null, tileID: 5, isReveal: false, isCanMove: false },
				{ id: 55, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 5, isReveal: false, isCanMove: false },
				{ id: 56, cellType: CELL_TYPE_VALLEY_HILL, landmark: null, resource: null, objective: null, tileID: 5, isReveal: false, isCanMove: false },
				{ id: 57, cellType: CELL_TYPE_VALLEY_HILL, landmark: null, resource: null, objective: null, tileID: 5, isReveal: false, isCanMove: false },
				{ id: 58, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 5, isReveal: false, isCanMove: false },
				{ id: 59, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 5, isReveal: false, isCanMove: false }
			],
			number: 2,
			direction: 'right'
		},
		{
			id: 6,
			cells: [
				{ id: 60, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 6, isReveal: false, isCanMove: false },
				{ id: 61, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: 'tree', objective: null, tileID: 6, isReveal: false, isCanMove: false },
				{ id: 62, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 6, isReveal: false, isCanMove: false },
				{ id: 63, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 6, isReveal: false, isCanMove: false },
				{ id: 64, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 6, isReveal: false, isCanMove: false },
				{ id: 65, cellType: CELL_TYPE_VALLEY_HILL, landmark: null, resource: null, objective: null, tileID: 6, isReveal: false, isCanMove: false },
				{ id: 66, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 6, isReveal: false, isCanMove: false },
				{ id: 67, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 6, isReveal: false, isCanMove: false },
				{ id: 68, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: 'animal', objective: null, tileID: 6, isReveal: false, isCanMove: false },
				{ id: 69, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 6, isReveal: false, isCanMove: false }
			],
			number: 2,
			direction: 'right'
		},
		{
			id: 7,
			cells: [
				{ id: 70, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 7, isReveal: false, isCanMove: false },
				{ id: 71, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 7, isReveal: false, isCanMove: false },
				{ id: 72, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 7, isReveal: false, isCanMove: false },
				{ id: 73, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 7, isReveal: false, isCanMove: false },
				{ id: 74, cellType: CELL_TYPE_VALLEY_HILL, landmark: null, resource: 'meal', objective: null, tileID: 7, isReveal: false, isCanMove: false },
				{ id: 75, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 7, isReveal: false, isCanMove: false },
				{ id: 76, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 7, isReveal: false, isCanMove: false },
				{ id: 77, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 7, isReveal: false, isCanMove: false },
				{ id: 78, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: 'tree', objective: null, tileID: 7, isReveal: false, isCanMove: false },
				{ id: 79, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 7, isReveal: false, isCanMove: false }
			],
			number: 2,
			direction: 'right'
		},
		{
			id: 8,
			cells: [
				{ id: 80, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 8, isReveal: false, isCanMove: false },
				{ id: 81, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: 40, tileID: 8, isReveal: false, isCanMove: false },
				{ id: 82, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 8, isReveal: false, isCanMove: false },
				{ id: 83, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 8, isReveal: false, isCanMove: false },
				{ id: 84, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 8, isReveal: false, isCanMove: false },
				{ id: 85, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: 'tree', objective: null, tileID: 8, isReveal: false, isCanMove: false },
				{ id: 86, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 8, isReveal: false, isCanMove: false },
				{ id: 87, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 8, isReveal: false, isCanMove: false },
				{ id: 88, cellType: CELL_TYPE_VALLEY_HILL, landmark: null, resource: null, objective: null, tileID: 8, isReveal: false, isCanMove: false },
				{ id: 89, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 8, isReveal: false, isCanMove: false }
			],
			number: 2,
			direction: 'right'
		}
	];
	private tiles3: TileInterface[] = [
		{
			id: 9,
			cells: [
				{ id: 90, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 9, isReveal: false, isCanMove: false },
				{ id: 91, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: 34, tileID: 9, isReveal: false, isCanMove: false },
				{ id: 92, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: 'tree', objective: null, tileID: 9, isReveal: false, isCanMove: false },
				{ id: 93, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 9, isReveal: false, isCanMove: false },
				{ id: 94, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 9, isReveal: false, isCanMove: false },
				{ id: 95, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 9, isReveal: false, isCanMove: false },
				{ id: 96, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 9, isReveal: false, isCanMove: false },
				{ id: 97, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 9, isReveal: false, isCanMove: false },
				{ id: 98, cellType: CELL_TYPE_VALLEY_HILL, landmark: null, resource: 'meal', objective: null, tileID: 9, isReveal: false, isCanMove: false },
				{ id: 99, cellType: CELL_TYPE_VALLEY_HILL, landmark: null, resource: null, objective: null, tileID: 9, isReveal: false, isCanMove: false }
			],
			number: 3,
			direction: 'left'
		},
		{
			id: 10,
			cells: [
				{ id: 100, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 10, isReveal: false, isCanMove: false },
				{ id: 101, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: 'animal', objective: null, tileID: 10, isReveal: false, isCanMove: false },
				{ id: 102, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 10, isReveal: false, isCanMove: false },
				{ id: 103, cellType: CELL_TYPE_VALLEY_HILL, landmark: null, resource: null, objective: null, tileID: 10, isReveal: false, isCanMove: false },
				{ id: 104, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 10, isReveal: false, isCanMove: false },
				{ id: 105, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: 'stone', objective: null, tileID: 10, isReveal: false, isCanMove: false },
				{ id: 106, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 10, isReveal: false, isCanMove: false },
				{ id: 107, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 10, isReveal: false, isCanMove: false },
				{ id: 108, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 10, isReveal: false, isCanMove: false },
				{ id: 109, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: 'tree', objective: null, tileID: 10, isReveal: false, isCanMove: false }
			],
			number: 3,
			direction: 'left'
		},
		{
			id: 11,
			cells: [
				{ id: 110, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 11, isReveal: false, isCanMove: false },
				{ id: 111, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 11, isReveal: false, isCanMove: false },
				{ id: 112, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 11, isReveal: false, isCanMove: false },
				{ id: 113, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: 'animal', objective: null, tileID: 11, isReveal: false, isCanMove: false },
				{ id: 114, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 11, isReveal: false, isCanMove: false },
				{ id: 115, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 11, isReveal: false, isCanMove: false },
				{ id: 116, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 11, isReveal: false, isCanMove: false },
				{ id: 117, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 11, isReveal: false, isCanMove: false },
				{ id: 118, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: 44, tileID: 11, isReveal: false, isCanMove: false },
				{ id: 119, cellType: CELL_TYPE_VALLEY_HILL, landmark: null, resource: null, objective: null, tileID: 11, isReveal: false, isCanMove: false }
			],
			number: 3,
			direction: 'left'
		},
		{
			id: 12,
			cells: [
				{ id: 120, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 12, isReveal: false, isCanMove: false },
				{ id: 121, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 12, isReveal: false, isCanMove: false },
				{ id: 122, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 12, isReveal: false, isCanMove: false },
				{ id: 123, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: 'animal', objective: null, tileID: 12, isReveal: false, isCanMove: false },
				{ id: 124, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 12, isReveal: false, isCanMove: false },
				{ id: 125, cellType: CELL_TYPE_VALLEY_HILL, landmark: null, resource: null, objective: null, tileID: 12, isReveal: false, isCanMove: false },
				{ id: 126, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 12, isReveal: false, isCanMove: false },
				{ id: 127, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: 'water', objective: null, tileID: 12, isReveal: false, isCanMove: false },
				{ id: 128, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 12, isReveal: false, isCanMove: false },
				{ id: 129, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 12, isReveal: false, isCanMove: false }
			],
			number: 3,
			direction: 'left'
		}
	];
	private tiles4: TileInterface[] = [
		{
			id: 13,
			cells: [
				{ id: 120, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 13, isReveal: false, isCanMove: false },
				{ id: 121, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 13, isReveal: false, isCanMove: false },
				{ id: 122, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: 'water', objective: null, tileID: 13, isReveal: false, isCanMove: false },
				{ id: 123, cellType: CELL_TYPE_VALLEY_HILL, landmark: null, resource: 'meal', objective: null, tileID: 13, isReveal: false, isCanMove: false },
				{ id: 124, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 13, isReveal: false, isCanMove: false },
				{ id: 125, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 13, isReveal: false, isCanMove: false },
				{ id: 126, cellType: CELL_TYPE_VALLEY_GRASS, landmark: 'boots', resource: null, objective: null, tileID: 13, isReveal: false, isCanMove: false },
				{ id: 127, cellType: CELL_TYPE_VALLEY_HILL, landmark: null, resource: null, objective: null, tileID: 13, isReveal: false, isCanMove: false },
				{ id: 128, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: 'tree', objective: null, tileID: 13, isReveal: false, isCanMove: false },
				{ id: 129, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 13, isReveal: false, isCanMove: false }
			],
			number: 4,
			direction: 'right'
		},
		{
			id: 14,
			cells: [
				{ id: 140, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 14, isReveal: false, isCanMove: false },
				{ id: 141, cellType: CELL_TYPE_VALLEY_HILL, landmark: null, resource: 'meal', objective: null, tileID: 14, isReveal: false, isCanMove: false },
				{ id: 142, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 14, isReveal: false, isCanMove: false },
				{ id: 143, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: 'tree', objective: null, tileID: 14, isReveal: false, isCanMove: false },
				{ id: 144, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 14, isReveal: false, isCanMove: false },
				{ id: 145, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 14, isReveal: false, isCanMove: false },
				{ id: 146, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: 1, tileID: 14, isReveal: false, isCanMove: false },
				{ id: 147, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 14, isReveal: false, isCanMove: false },
				{ id: 148, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 14, isReveal: false, isCanMove: false },
				{ id: 149, cellType: CELL_TYPE_VALLEY_HILL, landmark: null, resource: null, objective: null, tileID: 14, isReveal: false, isCanMove: false }
			],
			number: 4,
			direction: 'right'
		},
		{
			id: 15,
			cells: [
				{ id: 150, cellType: CELL_TYPE_VALLEY_MOUNTAIN, landmark: null, resource: null, objective: null, tileID: 15, isReveal: false, isCanMove: false },
				{ id: 151, cellType: CELL_TYPE_VALLEY_MOUNTAIN, landmark: null, resource: null, objective: null, tileID: 15, isReveal: false, isCanMove: false },
				{ id: 152, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: 30, tileID: 15, isReveal: false, isCanMove: false },
				{ id: 153, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: 'stone', objective: null, tileID: 15, isReveal: false, isCanMove: false },
				{ id: 154, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 15, isReveal: false, isCanMove: false },
				{ id: 155, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 15, isReveal: false, isCanMove: false },
				{ id: 156, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 15, isReveal: false, isCanMove: false },
				{ id: 157, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 15, isReveal: false, isCanMove: false },
				{ id: 158, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 15, isReveal: false, isCanMove: false },
				{ id: 159, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: 'animal', objective: null, tileID: 15, isReveal: false, isCanMove: false }
			],
			number: 4,
			direction: 'right'
		},
		{
			id: 16,
			cells: [
				{ id: 0, cellType: CELL_TYPE_VALLEY_MOUNTAIN, landmark: null, resource: null, objective: null, tileID: 0, isReveal: false, isCanMove: false },
				{ id: 1, cellType: CELL_TYPE_VALLEY_HILL, landmark: null, resource: 'stone', objective: null, tileID: 0, isReveal: false, isCanMove: false },
				{ id: 2, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 0, isReveal: false, isCanMove: false },
				{ id: 3, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: 4, tileID: 0, isReveal: false, isCanMove: false },
				{ id: 4, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 0, isReveal: false, isCanMove: false },
				{ id: 5, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 0, isReveal: false, isCanMove: false },
				{ id: 6, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 0, isReveal: false, isCanMove: false },
				{ id: 7, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 0, isReveal: false, isCanMove: false },
				{ id: 8, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: null, objective: null, tileID: 0, isReveal: false, isCanMove: false },
				{ id: 9, cellType: CELL_TYPE_VALLEY_GRASS, landmark: null, resource: 'animal', objective: null, tileID: 0, isReveal: false, isCanMove: false }
			],
			number: 4,
			direction: 'right'
		}
	];

	private mapModel: (string | null)[][] = [
		[null, null, '400', '403', '405', '408', '410', '413', '415', '418', null, null],
		[null, null, '401', '404', '406', '409', '411', '414', '416', '419', null, null],
		[null, null, '402', '302', '407', '307', '412', '312', '417', '317', null, null],
		[null, null, '300', '303', '305', '308', '310', '313', '315', '318', null, null],
		[null, null, '301', '304', '306', '309', '311', '314', '316', '319', null, null],
		['200', '203', '205', '208', '210', '213', '215', '218', '220', '223', '225', '228'],
		['201', '204', '206', '209', '211', '214', '216', '219', '221', '224', '226', '229'],
		['202', '102', '207', '107', '212', '002', '217', '007', '222', '112', '227', '117'],
		['100', '103', '105', '108', '000', '003', '005', '008', '110', '113', '115', '118'],
		['101', '104', '106', '109', '001', '004', '006', '009', '111', '114', '116', '119'],
		['230', '233', '235', '238', '240', '243', '245', '248', '250', '253', '255', '258'],
		['231', '234', '236', '239', '241', '244', '246', '249', '251', '254', '256', '259'],
		['232', null, '237', '322', '242', '327', '247', '332', '252', '337', '257', null],
		[null, null, '320', '323', '325', '328', '330', '333', '335', '338', null, null],
		[null, null, '321', '324', '326', '329', '331', '334', '336', '339', null, null],
		[null, null, '420', '423', '425', '428', '430', '433', '435', '438', null, null],
		[null, null, '421', '424', '426', '429', '431', '434', '436', '439', null, null],
		[null, null, '422', null, '427', null, '432', null, '437', null, null, null]
	];

	public getMapTiles(): TileInterface[][] {
		return [[...this.tiles0], [...this.tiles1], [...this.tiles2], [...this.tiles3], [...this.tiles4],];
	}

	public getMapModel(): (string | null)[][] {
		return [...this.mapModel];
	}
}
