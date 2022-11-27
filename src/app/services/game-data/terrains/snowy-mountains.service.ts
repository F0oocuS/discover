import { Injectable } from '@angular/core';

import { TileInterface } from '../../../interfaces/map/tile.interface';

@Injectable({
	providedIn: 'root'
})
export class SnowyMountainsService {
	constructor() {}

	private tiles0: TileInterface[] = [];
	private tiles1: TileInterface[] = [];
	private tiles2: TileInterface[] = [];
	private tiles3: TileInterface[] = [];
	private tiles4: TileInterface[] = [];

	private mapModel: (string | null)[][] = [
		[null, null, '300', '302', '305', '307', '500', '502', '505', '507', null, null, null],
		[null, null, '301', '303', '306', '308', '501', '503', '506', '508', null, null, null],
		[null, null, null, '304', '312', '309', '317', '504', '512', '509', '517', null, null],
		[null, null, null, '310', '313', '315', '318', '510', '513', '515', '518', null, null],
		[null, null, null, '311', '314', '316', '319', '511', '514', '516', '519', null, null],
		['100', '102', '105', '107', '110', '112', '115', '117', '520', '522', '525', '527', null],
		['101', '103', '106', '108', '111', '113', '116', '118', '521', '523', '526', '528', null],
		[null, '104`', '122', '109', '127', '114', '002', '119', '007', '524', '202', '529', '207'],
		[null, '120', '123', '125', '128', '000', '003', '005', '008', '200', '203', '205', '208'],
		[null, '121', '124', '126', '129', '001', '004', '006', '009', '201', '204', '206', '209'],
		['130', '132', '135', '137', '140', '142', '145', '147', '400', '402', '405', '407', null],
		['131', '133', '136', '138', '141', '143', '146', '148', '401', '403', '406', '408', null],
		[null, '134', null, '139', '322', '144', '327', '149', '412', '404', '417', '409', null],
		[null, null, null, '320', '323', '325', '328', '410', '413', '415', '418', null, null],
		[null, null, null, '321', '324', '326', '329', '411', '414', '416', '419', null, null],
		[null, null, '330', '332', '335', '337', '420', '422', '425', '427', null, null, null],
		[null, null, '331', '333', '336', '338', '421', '423', '426', '428', null, null, null],
		[null, null, null, '334', null, '339', null, '424', null, '429', null, null, null],
	];

	public getMapTiles(): TileInterface[][] {
		return [[...this.tiles0], [...this.tiles1], [...this.tiles2], [...this.tiles3], [...this.tiles4]];
	}

	public getMapModel(): (string | null)[][] {
		return [...this.mapModel];
	}
}
