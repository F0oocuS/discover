export interface CellInterface {
	id: number;
	cellType: string;
	moveCost: number;
	terrain: string;
	landmark: string | null;
	resource: string | null;
	objective: number | null;
	tileID: number;
	isReveal: boolean;
	isCanMove: boolean;
}
