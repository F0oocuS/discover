import { Injectable } from '@angular/core';
import { TileInterface } from '../../../interfaces/map/tile.interface';

@Injectable({
	providedIn: 'root'
})
export class BadlandsService {
	constructor() {}

	private tiles0: TileInterface[] = [];
	private tiles1: TileInterface[] = [];
	private tiles2: TileInterface[] = [];
	private tiles3: TileInterface[] = [];
	private tiles4: TileInterface[] = [];

	private mapModel: (string | null)[][] = [
		[null, null, null, null, null, null, null, null, null, null, null, null, '300', '302', '305', '307', '400', null, '405', null],
		[null, null, null, null, null, null, null, null, null, null, null, null, '301', '303', '306', '308', '401', '403', '406', '408'],
		[null, null, null, null, null, null, null, null, '100', '102', '105', '107', '200', '304', '205', '309', '402', '404', '407', '409'],
		[null, null, null, null, null, null, null, null, '101', '103', '106', '108', '201', '203', '206', '208', '110', '112', '115', '117'],
		[null, null, null, null, '120', '122', '125', '127', '210', '104', '215', '109', '202', '204', '207', '209', '111', '113', '116', '118'],
		[null, null, null, null, '121', '123', '126', '128', '211', '213', '216', '218', '310', '312', '315', '317', '410', '114', '415', '119'],
		['000', '002', '005', '007', '220', '124', '225', '129', '212', '214', '217', '219', '311', '313', '316', '318', '411', '413', '416', '418'],
		['001', '003', '006', '008', '221', '223', '226', '228', '130', '132', '135', '137', '230', '314', '235', '319', '412', '414', '417', '419'],
		[null, '004', null, '009', '222', '224', '227', '229', '131', '133', '136', '138', '231', '233', '236', '238', '140', '142', '145', '147'],
		[null, null, null, null, '150', '152', '155', '157', '240', '134', '245', '139', '232', '234', '237', '238', '141', '143', '146', '148'],
		[null, null, null, null, '151', '153', '156', '158', '241', '243', '246', '248', '320', '322', '325', '327', null, '144', null, '149'],
		[null, null, null, null, null, '154', null, '159', '242', '244', '247', '249', '321', '323', '326', '328', null, null, null, null],
		[null, null, null, null, null, null, null, null, null, null, null, null, null, '324', null, '329', null, null, null, null]
	];

	public getMapTiles(): TileInterface[][] {
		return [[...this.tiles0], [...this.tiles1], [...this.tiles2], [...this.tiles3], [...this.tiles4]];
	}

	public getMapModel(): (string | null)[][] {
		return [...this.mapModel];
	}
}
