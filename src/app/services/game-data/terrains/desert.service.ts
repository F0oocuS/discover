import { Injectable } from '@angular/core';

import { TileInterface } from '../../../interfaces/map/tile.interface';

@Injectable({
	providedIn: 'root'
})
export class DesertService {
	constructor() {}

	private tiles0: TileInterface[] = [];
	private tiles1: TileInterface[] = [];
	private tiles2: TileInterface[] = [];
	private tiles3: TileInterface[] = [];
	private tiles4: TileInterface[] = [];

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
