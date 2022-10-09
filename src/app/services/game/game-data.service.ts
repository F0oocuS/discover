import { Injectable } from '@angular/core';

import { TileInterface } from '../../interfaces/map/tile.interface';

@Injectable({
	providedIn: 'root'
})
export class GameDataService {
	constructor() {}

	private tiles0: TileInterface[] = [
		{
			id: 0,
			cells: [
				{ id: 0, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true },
				{ id: 1, cellType: 'game', moveCost: 2, terrain: 'hill', landmark: 'binocle', resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true },
				{ id: 2, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true },
				{ id: 3, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true },
				{ id: 4, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true },
				{ id: 5, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true },
				{ id: 6, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true },
				{ id: 7, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true },
				{ id: 8, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true },
				{ id: 9, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 0, isReveal: true, isCanMove: true }
			],
			number: 0,
			direction: 'left'
		}
	];

	private tiles1: TileInterface[] = [
		{
			id: 1,
			cells: [
				{ id: 10, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 1, isReveal: false, isCanMove: false },
				{ id: 11, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 1, isReveal: false, isCanMove: false },
				{ id: 12, cellType: 'game', moveCost: 3, terrain: 'mount', landmark: null, resource: 'meal', objective: null, tileID: 1, isReveal: false, isCanMove: false },
				{ id: 13, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 1, isReveal: false, isCanMove: false },
				{ id: 14, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 1, isReveal: false, isCanMove: false },
				{ id: 15, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 1, isReveal: false, isCanMove: false },
				{ id: 16, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 1, isReveal: false, isCanMove: false },
				{ id: 17, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 1, isReveal: false, isCanMove: false },
				{ id: 18, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 1, isReveal: false, isCanMove: false },
				{ id: 19, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 1, isReveal: false, isCanMove: false },
			],
			number: 1,
			direction: 'left'
		},
		{
			id: 2,
			cells: [
				{ id: 20, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 2, isReveal: false, isCanMove: false },
				{ id: 21, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 2, isReveal: false, isCanMove: false },
				{ id: 22, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 2, isReveal: false, isCanMove: false },
				{ id: 23, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 2, isReveal: false, isCanMove: false },
				{ id: 24, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 2, isReveal: false, isCanMove: false },
				{ id: 25, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 2, isReveal: false, isCanMove: false },
				{ id: 26, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: 'stone', objective: null, tileID: 2, isReveal: false, isCanMove: false },
				{ id: 27, cellType: 'game', moveCost: 2, terrain: 'hill', landmark: null, resource: null, objective: null, tileID: 2, isReveal: false, isCanMove: false },
				{ id: 28, cellType: 'game', moveCost: 2, terrain: 'hill', landmark: 'shovel', resource: null, objective: null, tileID: 2, isReveal: false, isCanMove: false },
				{ id: 29, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 2, isReveal: false, isCanMove: false },
			],
			number: 1,
			direction: 'left'
		}
	];

	private tiles2: TileInterface[] = [
		{
			id: 3,
			cells: [
				{ id: 30, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 3, isReveal: false, isCanMove: false },
				{ id: 31, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: 'stone', objective: null, tileID: 3, isReveal: false, isCanMove: false },
				{ id: 32, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 3, isReveal: false, isCanMove: false },
				{ id: 33, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 3, isReveal: false, isCanMove: false },
				{ id: 34, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 3, isReveal: false, isCanMove: false },
				{ id: 35, cellType: 'game', moveCost: 2, terrain: 'hill', landmark: null, resource: null, objective: null, tileID: 3, isReveal: false, isCanMove: false },
				{ id: 36, cellType: 'game', moveCost: 3, terrain: 'mount', landmark: null, resource: 'water', objective: null, tileID: 3, isReveal: false, isCanMove: false },
				{ id: 37, cellType: 'game', moveCost: 2, terrain: 'hill', landmark: null, resource: null, objective: null, tileID: 3, isReveal: false, isCanMove: false },
				{ id: 38, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 3, isReveal: false, isCanMove: false },
				{ id: 39, cellType: 'game', moveCost: 2, terrain: 'hill', landmark: null, resource: null, objective: null, tileID: 3, isReveal: false, isCanMove: false }
			],
			number: 2,
			direction: 'right'
		},
		{
			id: 4,
			cells: [
				{ id: 40, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 4, isReveal: false, isCanMove: false },
				{ id: 41, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 4, isReveal: false, isCanMove: false },
				{ id: 42, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 4, isReveal: false, isCanMove: false },
				{ id: 43, cellType: 'game', moveCost: 2, terrain: 'hill', landmark: null, resource: null, objective: null, tileID: 4, isReveal: false, isCanMove: false },
				{ id: 44, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 4, isReveal: false, isCanMove: false },
				{ id: 45, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 4, isReveal: false, isCanMove: false },
				{ id: 46, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: 'tree', objective: null, tileID: 4, isReveal: false, isCanMove: false },
				{ id: 47, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 4, isReveal: false, isCanMove: false },
				{ id: 48, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 4, isReveal: false, isCanMove: false },
				{ id: 49, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 4, isReveal: false, isCanMove: false }
			],
			number: 2,
			direction: 'right'
		},
		{
			id: 5,
			cells: [
				{ id: 50, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 5, isReveal: false, isCanMove: false },
				{ id: 51, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: 'stone', objective: null, tileID: 5, isReveal: false, isCanMove: false },
				{ id: 52, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 5, isReveal: false, isCanMove: false },
				{ id: 53, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 5, isReveal: false, isCanMove: false },
				{ id: 54, cellType: 'game', moveCost: 2, terrain: 'hill', landmark: null, resource: null, objective: null, tileID: 5, isReveal: false, isCanMove: false },
				{ id: 55, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 5, isReveal: false, isCanMove: false },
				{ id: 56, cellType: 'game', moveCost: 2, terrain: 'hill', landmark: null, resource: null, objective: null, tileID: 5, isReveal: false, isCanMove: false },
				{ id: 57, cellType: 'game', moveCost: 2, terrain: 'hill', landmark: null, resource: null, objective: null, tileID: 5, isReveal: false, isCanMove: false },
				{ id: 58, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 5, isReveal: false, isCanMove: false },
				{ id: 59, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 5, isReveal: false, isCanMove: false }
			],
			number: 2,
			direction: 'right'
		},
		{
			id: 6,
			cells: [
				{ id: 60, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 6, isReveal: false, isCanMove: false },
				{ id: 61, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: 'tree', objective: null, tileID: 6, isReveal: false, isCanMove: false },
				{ id: 62, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 6, isReveal: false, isCanMove: false },
				{ id: 63, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 6, isReveal: false, isCanMove: false },
				{ id: 64, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 6, isReveal: false, isCanMove: false },
				{ id: 65, cellType: 'game', moveCost: 2, terrain: 'hill', landmark: null, resource: null, objective: null, tileID: 6, isReveal: false, isCanMove: false },
				{ id: 66, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 6, isReveal: false, isCanMove: false },
				{ id: 67, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 6, isReveal: false, isCanMove: false },
				{ id: 68, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: 'animal', objective: null, tileID: 6, isReveal: false, isCanMove: false },
				{ id: 69, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 6, isReveal: false, isCanMove: false }
			],
			number: 2,
			direction: 'right'
		},
		{
			id: 7,
			cells: [
				{ id: 70, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 7, isReveal: false, isCanMove: false },
				{ id: 71, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 7, isReveal: false, isCanMove: false },
				{ id: 72, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 7, isReveal: false, isCanMove: false },
				{ id: 73, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 7, isReveal: false, isCanMove: false },
				{ id: 74, cellType: 'game', moveCost: 2, terrain: 'hill', landmark: null, resource: 'meal', objective: null, tileID: 7, isReveal: false, isCanMove: false },
				{ id: 75, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 7, isReveal: false, isCanMove: false },
				{ id: 76, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 7, isReveal: false, isCanMove: false },
				{ id: 77, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 7, isReveal: false, isCanMove: false },
				{ id: 78, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: 'tree', objective: null, tileID: 7, isReveal: false, isCanMove: false },
				{ id: 79, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 7, isReveal: false, isCanMove: false }
			],
			number: 2,
			direction: 'right'
		},
		{
			id: 8,
			cells: [
				{ id: 80, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 8, isReveal: false, isCanMove: false },
				{ id: 81, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: 40, tileID: 8, isReveal: false, isCanMove: false },
				{ id: 82, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 8, isReveal: false, isCanMove: false },
				{ id: 83, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 8, isReveal: false, isCanMove: false },
				{ id: 84, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 8, isReveal: false, isCanMove: false },
				{ id: 85, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: 'tree', objective: null, tileID: 8, isReveal: false, isCanMove: false },
				{ id: 86, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 8, isReveal: false, isCanMove: false },
				{ id: 87, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 8, isReveal: false, isCanMove: false },
				{ id: 88, cellType: 'game', moveCost: 1, terrain: 'hill', landmark: null, resource: null, objective: null, tileID: 8, isReveal: false, isCanMove: false },
				{ id: 89, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 8, isReveal: false, isCanMove: false }
			],
			number: 2,
			direction: 'right'
		}
	];

	private tiles3: TileInterface[] = [
		{
			id: 9,
			cells: [
				{ id: 90, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: 34, tileID: 9, isReveal: false, isCanMove: false },
				{ id: 91, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 9, isReveal: false, isCanMove: false },
				{ id: 92, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: 'tree', objective: null, tileID: 9, isReveal: false, isCanMove: false },
				{ id: 93, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 9, isReveal: false, isCanMove: false },
				{ id: 94, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 9, isReveal: false, isCanMove: false },
				{ id: 95, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 9, isReveal: false, isCanMove: false },
				{ id: 96, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 9, isReveal: false, isCanMove: false },
				{ id: 97, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 9, isReveal: false, isCanMove: false },
				{ id: 98, cellType: 'game', moveCost: 2, terrain: 'hill', landmark: null, resource: 'meal', objective: null, tileID: 9, isReveal: false, isCanMove: false },
				{ id: 99, cellType: 'game', moveCost: 2, terrain: 'hill', landmark: null, resource: null, objective: null, tileID: 9, isReveal: false, isCanMove: false }
			],
			number: 3,
			direction: 'left'
		},
		{
			id: 10,
			cells: [
				{ id: 100, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 10, isReveal: false, isCanMove: false },
				{ id: 101, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: 'animal', objective: null, tileID: 10, isReveal: false, isCanMove: false },
				{ id: 102, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 10, isReveal: false, isCanMove: false },
				{ id: 103, cellType: 'game', moveCost: 2, terrain: 'hill', landmark: null, resource: null, objective: null, tileID: 10, isReveal: false, isCanMove: false },
				{ id: 104, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 10, isReveal: false, isCanMove: false },
				{ id: 105, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: 'stone', objective: null, tileID: 10, isReveal: false, isCanMove: false },
				{ id: 106, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 10, isReveal: false, isCanMove: false },
				{ id: 107, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 10, isReveal: false, isCanMove: false },
				{ id: 108, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 10, isReveal: false, isCanMove: false },
				{ id: 109, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: 'tree', objective: null, tileID: 10, isReveal: false, isCanMove: false }
			],
			number: 3,
			direction: 'left'
		},
		{
			id: 11,
			cells: [
				{ id: 110, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 11, isReveal: false, isCanMove: false },
				{ id: 111, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 11, isReveal: false, isCanMove: false },
				{ id: 112, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 11, isReveal: false, isCanMove: false },
				{ id: 113, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: 'animal', objective: null, tileID: 11, isReveal: false, isCanMove: false },
				{ id: 114, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 11, isReveal: false, isCanMove: false },
				{ id: 115, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 11, isReveal: false, isCanMove: false },
				{ id: 116, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 11, isReveal: false, isCanMove: false },
				{ id: 117, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 11, isReveal: false, isCanMove: false },
				{ id: 118, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: 44, tileID: 11, isReveal: false, isCanMove: false },
				{ id: 119, cellType: 'game', moveCost: 2, terrain: 'hill', landmark: null, resource: null, objective: null, tileID: 11, isReveal: false, isCanMove: false }
			],
			number: 3,
			direction: 'left'
		},
		{
			id: 12,
			cells: [
				{ id: 120, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 12, isReveal: false, isCanMove: false },
				{ id: 121, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 12, isReveal: false, isCanMove: false },
				{ id: 122, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 12, isReveal: false, isCanMove: false },
				{ id: 123, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: 'animal', objective: null, tileID: 12, isReveal: false, isCanMove: false },
				{ id: 124, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 12, isReveal: false, isCanMove: false },
				{ id: 125, cellType: 'game', moveCost: 2, terrain: 'hill', landmark: null, resource: null, objective: null, tileID: 12, isReveal: false, isCanMove: false },
				{ id: 126, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 12, isReveal: false, isCanMove: false },
				{ id: 127, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: 'water', objective: null, tileID: 12, isReveal: false, isCanMove: false },
				{ id: 128, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 12, isReveal: false, isCanMove: false },
				{ id: 129, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 12, isReveal: false, isCanMove: false }
			],
			number: 3,
			direction: 'left'
		}
	];

	private tiles4: TileInterface[] = [
		{
			id: 13,
			cells: [
				{ id: 120, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 13, isReveal: false, isCanMove: false },
				{ id: 121, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 13, isReveal: false, isCanMove: false },
				{ id: 122, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: 'water', objective: null, tileID: 13, isReveal: false, isCanMove: false },
				{ id: 123, cellType: 'game', moveCost: 2, terrain: 'hill', landmark: null, resource: 'meal', objective: null, tileID: 13, isReveal: false, isCanMove: false },
				{ id: 124, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 13, isReveal: false, isCanMove: false },
				{ id: 125, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 13, isReveal: false, isCanMove: false },
				{ id: 126, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: 'boots', resource: null, objective: null, tileID: 13, isReveal: false, isCanMove: false },
				{ id: 127, cellType: 'game', moveCost: 2, terrain: 'hill', landmark: null, resource: null, objective: null, tileID: 13, isReveal: false, isCanMove: false },
				{ id: 128, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: 'tree', objective: null, tileID: 13, isReveal: false, isCanMove: false },
				{ id: 129, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 13, isReveal: false, isCanMove: false }
			],
			number: 4,
			direction: 'right'
		},
		{
			id: 14,
			cells: [
				{ id: 140, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 14, isReveal: false, isCanMove: false },
				{ id: 141, cellType: 'game', moveCost: 2, terrain: 'hill', landmark: null, resource: 'meal', objective: null, tileID: 14, isReveal: false, isCanMove: false },
				{ id: 142, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 14, isReveal: false, isCanMove: false },
				{ id: 143, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: 'tree', objective: null, tileID: 14, isReveal: false, isCanMove: false },
				{ id: 144, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 14, isReveal: false, isCanMove: false },
				{ id: 145, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 14, isReveal: false, isCanMove: false },
				{ id: 146, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: 1, tileID: 14, isReveal: false, isCanMove: false },
				{ id: 147, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 14, isReveal: false, isCanMove: false },
				{ id: 148, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 14, isReveal: false, isCanMove: false },
				{ id: 149, cellType: 'game', moveCost: 2, terrain: 'hill', landmark: null, resource: null, objective: null, tileID: 14, isReveal: false, isCanMove: false }
			],
			number: 4,
			direction: 'right'
		},
		{
			id: 15,
			cells: [
				{ id: 150, cellType: 'game', moveCost: 3, terrain: 'mount', landmark: null, resource: null, objective: null, tileID: 15, isReveal: false, isCanMove: false },
				{ id: 151, cellType: 'game', moveCost: 3, terrain: 'mount', landmark: null, resource: null, objective: null, tileID: 15, isReveal: false, isCanMove: false },
				{ id: 152, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: 30, tileID: 15, isReveal: false, isCanMove: false },
				{ id: 153, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: 'stone', objective: null, tileID: 15, isReveal: false, isCanMove: false },
				{ id: 154, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 15, isReveal: false, isCanMove: false },
				{ id: 155, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 15, isReveal: false, isCanMove: false },
				{ id: 156, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 15, isReveal: false, isCanMove: false },
				{ id: 157, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 15, isReveal: false, isCanMove: false },
				{ id: 158, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 15, isReveal: false, isCanMove: false },
				{ id: 159, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: 'animal', objective: null, tileID: 15, isReveal: false, isCanMove: false }
			],
			number: 4,
			direction: 'right'
		},
		{
			id: 16,
			cells: [
				{ id: 0, cellType: 'game', moveCost: 3, terrain: 'mount', landmark: null, resource: null, objective: null, tileID: 0, isReveal: false, isCanMove: false },
				{ id: 1, cellType: 'game', moveCost: 2, terrain: 'hill', landmark: null, resource: 'stone', objective: null, tileID: 0, isReveal: false, isCanMove: false },
				{ id: 2, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 0, isReveal: false, isCanMove: false },
				{ id: 3, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: 4, tileID: 0, isReveal: false, isCanMove: false },
				{ id: 4, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 0, isReveal: false, isCanMove: false },
				{ id: 5, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 0, isReveal: false, isCanMove: false },
				{ id: 6, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 0, isReveal: false, isCanMove: false },
				{ id: 7, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 0, isReveal: false, isCanMove: false },
				{ id: 8, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: null, objective: null, tileID: 0, isReveal: false, isCanMove: false },
				{ id: 9, cellType: 'game', moveCost: 1, terrain: 'meadow', landmark: null, resource: 'animal', objective: null, tileID: 0, isReveal: false, isCanMove: false }
			],
			number: 4,
			direction: 'right'
		}
	];

	private gameTiles = [
		...this.tiles0,
		...this.tiles1,
		...this.tiles2,
		...this.tiles3,
		...this.tiles4
	];

	getGameTiles() {
		return this.gameTiles;
	}
}
