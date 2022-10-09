export interface CellInterface {
	id: number;
	cellType: string;
	moveCost: number;
	terrain: string;
	landmark: string;
	resource: string;
	objective: number;
	tileID: number;
	isReveal: boolean;
	isCanMove: boolean;
}
