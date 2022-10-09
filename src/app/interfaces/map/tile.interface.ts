import { CellInterface } from './cell.interface';

export interface TileInterface {
	id: number;
	number: number;
	direction?: string;
	cells: CellInterface[];
}
