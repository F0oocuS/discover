import { CellTypeInterface } from './cell-type.interface';

export interface CellInterface {
	id: number;
	cellType: CellTypeInterface;
	landmark: string | null;
	resource: string | null;
	objective: number | null;
	tileID: number;
	isReveal: boolean;
	isCanMove: boolean;
	players?: number[];
}
