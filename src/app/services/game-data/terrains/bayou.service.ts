import { Injectable } from '@angular/core';

import { TileInterface } from '../../../interfaces/map/tile.interface';

@Injectable({
	providedIn: 'root'
})
export class BayouService {
	constructor() {
	}

	private tiles0: TileInterface[] = [];
	private tiles1: TileInterface[] = [];
	private tiles2: TileInterface[] = [];
	private tiles3: TileInterface[] = [];
	private tiles4: TileInterface[] = [];

	private mapModel: (string | null)[][] = [
		[null, null, null, null, null, null, null, '200', '202', '205', '207', '400', '402', '405', '407', null, null, null],
		[null, null, null, null, null, null, null, '201', '203', '206', '208', '401', '403', '406', '408', null, null, null],
		[null, '412', null, '417', null, '302', null, '307', '204', '212', '209', '217', '404', '422', '409', '427', null, null],
		['410', '413', '415', '418', '300', '303', '305', '308', '210', '213', '215', '218', '420', '423', '425', '428', null, null],
		['411', '414', '416', '419', '301', '304', '306', '309', '211', '214', '216', '219', '421', '424', '426', '429', null, null],
		[null, '430', '432', '435', '437', '310', '312', '315', '317', '220', '222', '225', '227', '440', '442', '445', '447', null],
		[null, '431', '433', '436', '438', '311', '313', '316', '318', '221', '223', '226', '228', '441', '443', '446', '448', null],
		[null, null, '434', '102', '439', '107', '314', '322', '319', '327', '224', '232', '229', '237', '444', '112', '449', '117'],
		[null, null, '100', '103', '105', '108', '320', '323', '325', '328', '230', '233', '235', '238', '110', '113', '115', '118'],
		[null, null, '101', '104', '106', '109', '321', '324', '326', '329', '231', '234', '236', '239', '111', '114', '116', '119'],
		[null, null, null, '120', '122', '125', '127', '000', '002', '005', '007', '130', '132', '135', '137', null, null, null],
		[null, null, null, '121', '123', '126', '128', '001', '003', '006', '008', '131', '133', '136', '138', null, null, null],
		[null, null, null, null, '124', null, '129', null, '004', null, '009', null, '134', null, '139', null, null, null]
	];

	public getMapTiles(): TileInterface[][] {
		return [[...this.tiles0], [...this.tiles1], [...this.tiles2], [...this.tiles3], [...this.tiles4]];
	}

	public getMapModel(): (string | null)[][] {
		return [...this.mapModel];
	}
}
