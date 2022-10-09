import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-map-canvas',
	templateUrl: './map-canvas.component.html',
	styleUrls: ['./map-canvas.component.scss']
})
export class MapCanvasComponent implements OnInit {
	@ViewChild('canvasMap', { static: true })

	public canvasMap: any
	private ctx: any;

	private startAngle = Math.PI / 3;
	private hexagonRadius: number = 30;
	private startCoordinate = {
		x: this.hexagonRadius + 10,
		y: this.hexagonRadius + 10,
	}

	private tile0 = { color: 'green', cells: ['0-0-0', '0-0-1', '0-0-2', '0-0-3', '0-0-4', '0-0-5', '0-0-6', '0-0-7', '0-0-8', '0-0-9']}
	private tile1A = { color: 'blue', cells: ['1-A-0', '1-A-1', '1-A-2', '1-A-3', '1-A-4', '1-A-5', '1-A-6', '1-A-7', '1-A-8', '1-A-9']};
	private tile1B = { color: 'blue', cells: ['1-B-0', '1-B-1', '1-B-2', '1-B-3', '1-B-4', '1-B-5', '1-B-6', '1-B-7', '1-B-8', '1-B-9']};
	private tile2A = { color: 'red', cells: ['2-A-0', '2-A-1', '2-A-2', '2-A-3', '2-A-4', '2-A-5', '2-A-6', '2-A-7', '2-A-8', '2-A-9']};
	private tile2B = { color: 'red', cells: ['2-B-0', '2-B-1', '2-B-2', '2-B-3', '2-B-4', '2-B-5', '2-B-6', '2-B-7', '2-B-8', '2-B-9']};
	private tile2C = { color: 'red', cells: ['2-C-0', '2-C-1', '2-C-2', '2-C-3', '2-C-4', '2-C-5', '2-C-6', '2-C-7', '2-C-8', '2-C-9']};
	private tile2D = { color: 'red', cells: ['2-D-0', '2-D-1', '2-D-2', '2-D-3', '2-D-4', '2-D-5', '2-D-6', '2-D-7', '2-D-8', '2-D-9']};
	private tile2F = { color: 'red', cells: ['2-F-0', '2-F-1', '2-F-2', '2-F-3', '2-F-4', '2-F-5', '2-F-6', '2-F-7', '2-F-8', '2-F-9']};
	private tile2G = { color: 'red', cells: ['2-G-0', '2-G-1', '2-G-2', '2-G-3', '2-G-4', '2-G-5', '2-G-6', '2-G-7', '2-G-8', '2-G-9']};
	private tile3A = { color: 'violet', cells: ['3-A-0', '3-A-1', '3-A-2', '3-A-3', '3-A-4', '3-A-5', '3-A-6', '3-A-7', '3-A-8', '3-A-9']};
	private tile3B = { color: 'violet', cells: ['3-B-0', '3-B-1', '3-B-2', '3-B-3', '3-B-4', '3-B-5', '3-B-6', '3-B-7', '3-B-8', '3-B-9']};
	private tile3C = { color: 'violet', cells: ['3-C-0', '3-C-1', '3-C-2', '3-C-3', '3-C-4', '3-C-5', '3-C-6', '3-C-7', '3-C-8', '3-C-9']};
	private tile3D = { color: 'violet', cells: ['3-D-0', '3-D-1', '3-D-2', '3-D-3', '3-D-4', '3-D-5', '3-D-6', '3-D-7', '3-D-8', '4-D-9']};
	private tile4A = { color: 'orange', cells: ['4-A-0', '4-A-1', '4-A-2', '4-A-3', '4-A-4', '4-A-5', '4-A-6', '4-A-7', '4-A-8', '4-A-9']};
	private tile4B = { color: 'orange', cells: ['4-B-0', '4-B-1', '4-B-2', '4-B-3', '4-B-4', '4-B-5', '4-B-6', '4-B-7', '4-B-8', '4-B-9']};
	private tile4C = { color: 'orange', cells: ['4-C-0', '4-C-1', '4-C-2', '4-C-3', '4-C-4', '4-C-5', '4-C-6', '4-C-7', '4-C-8', '4-C-9']};
	private tile4D = { color: 'orange', cells: ['4-D-0', '4-D-1', '4-D-2', '4-D-3', '4-D-4', '4-D-5', '4-D-6', '4-D-7', '4-D-8', '4-D-9']};

	/*private tiles = [
		this.tile0,
		this.tile1A, this.tile1B,
		this.tile2A, this.tile2B, this.tile2C, this.tile2D, this.tile2F, this.tile2G,
		this.tile3A, this.tile3B, this.tile3C, this.tile3D,
		this.tile4A, this.tile4B, this.tile4C, this.tile4D
	];*/

	private tiles = [
		this.tile0,
		this.tile1B, this.tile1A,
		this.tile2A, this.tile2F, this.tile2B, this.tile2D, this.tile2C, this.tile2G,
		this.tile3A, this.tile3C, this.tile3D, this.tile3B,
		this.tile4D, this.tile4A, this.tile4C, this.tile4B
	];

	private mapTemplate = {
		size: {
			width: 12,
			height: 18
		},
		tiles: [
			{
				id: 0,
				type: 0,
				position: [[8, 4], [9, 4], [7, 5], [8, 5], [9, 5], [8, 6], [9, 6], [7, 7], [8, 7], [9, 7]],
				currentCellsIndex: 0
			},
			{
				id: 1,
				type: 1,
				position: [[8, 0], [9, 0], [7, 1], [8, 1], [9, 1], [8, 2], [9, 2], [7, 3], [8, 3], [9, 3]],
				currentCellsIndex: 0
			},
			{
				id: 2,
				type: 1,
				position: [[8, 8], [9, 8], [7, 9], [8, 9], [9, 9], [8, 10], [9, 10], [7, 11], [8, 11], [9, 11]],
				currentCellsIndex: 0
			},
			{
				id: 3,
				type: 2,
				position: [[5, 0], [6, 0], [7, 0], [5, 1], [6, 1], [5, 2], [6, 2], [7, 2], [5, 3], [6, 3]],
				currentCellsIndex: 0
			},
			{
				id: 4,
				type: 2,
				position: [[5, 4], [6, 4], [7, 4], [5, 5], [6, 5], [5, 6], [6, 6], [7, 6], [5, 7], [6, 7]],
				currentCellsIndex: 0
			},
			{
				id: 5,
				type: 2,
				position: [[5, 8], [6, 8], [7, 8], [5, 9], [6, 9], [5, 10], [6, 10], [7, 10], [5, 11], [6, 11]],
				currentCellsIndex: 0
			},
			{
				id: 6,
				type: 2,
				position: [[10, 0], [11, 0], [12, 0], [10, 1], [11, 1], [10, 2], [11, 2], [12, 2], [10, 3], [11, 3]],
				currentCellsIndex: 0
			},
			{
				id: 7,
				type: 2,
				position: [[10, 4], [11, 4], [12, 4], [10, 5], [11, 5], [10, 6], [11, 6], [12, 6], [10, 7], [11, 7]],
				currentCellsIndex: 0
			},
			{
				id: 8,
				type: 2,
				position: [[10, 8], [11, 8], [12, 8], [10, 9], [11, 9], [10, 10], [11, 10], [12, 10], [10, 11], [11, 11]],
				currentCellsIndex: 0
			},
			{
				id: 9,
				type: 3,
				position: [[3, 2], [4, 2], [2, 3], [3, 3], [4, 3],  [3, 4], [4, 4], [2, 5], [3, 5], [4, 5]],
				currentCellsIndex: 0
			},
			{
				id: 10,
				type: 3,
				position: [[3, 6], [4, 6], [2, 7], [3, 7], [4, 7],  [3, 8], [4, 8], [2, 9], [3, 9], [4, 9]],
				currentCellsIndex: 0
			},
			{
				id: 11,
				type: 3,
				position: [[13, 2], [14, 2], [12, 3], [13, 3], [14, 3],  [13, 4], [14, 4], [12, 5], [13, 5], [14, 5]],
				currentCellsIndex: 0
			},
			{
				id: 12,
				type: 3,
				position: [[13, 6], [14, 6], [12, 7], [13, 7], [14, 7],  [13, 8], [14, 8], [12, 9], [13, 9], [14, 9]],
				currentCellsIndex: 0
			},
			{
				id: 13,
				type: 4,
				position: [[0, 2], [1, 2], [2, 2], [0, 3], [1, 3],  [0, 4], [1, 4], [2, 4], [0, 5], [1, 5]],
				currentCellsIndex: 0
			},
			{
				id: 14,
				type: 4,
				position: [[0, 6], [1, 6], [2, 6], [0, 7], [1, 7],  [0, 8], [1, 8], [2, 8], [0, 9], [1, 9]],
				currentCellsIndex: 0
			},
			{
				id: 15,
				type: 4,
				position: [[15, 2], [16, 2], [17, 2], [15, 3], [16, 3],  [15, 4], [16, 4], [17, 4], [15, 5], [16, 5]],
				currentCellsIndex: 0
			},
			{
				id: 16,
				type: 4,
				position: [[15, 6], [16, 6], [17, 6], [15, 7], [16, 7],  [15, 8], [16, 8], [17, 8], [15, 9], [16, 9]],
				currentCellsIndex: 0
			},
		]
	}

	ngOnInit(): void {
		console.log(this.tiles)

		this.ctx = this.canvasMap.nativeElement.getContext('2d');

		// this.ctx.fillStyle = '#000';
		this.ctx.font = "12px serif";
		this.ctx.strokeStyle = '#000';
		// this.ctx.fillRect(0, 0, 1200, 1770);


		// this.generateImage();

		setTimeout(() => {
			for (let i = 0; i < this.mapTemplate.size.height; i++) {
				if (i !== 0) {
					this.startCoordinate.y += this.hexagonRadius * Math.sin(this.startAngle);
					this.startCoordinate.x = this.hexagonRadius + 10;
				}
				 for (let j = 0; j < this.mapTemplate.size.width; j++) {
					if (j !== 0) {
						this.startCoordinate.x += this.hexagonRadius + this.hexagonRadius * Math.cos(this.startAngle);
						this.startCoordinate.y -= (-1) ** j * this.hexagonRadius * Math.sin(this.startAngle);
					}

					this.drawHexagon(i, j);
				}
			}
			this.ctx.clip();
		}, 300);

		console.log(this.ctx);
	}

	public drawHexagon(string: number, raw: number) {
		this.mapTemplate.tiles.forEach((tile,index) => {
			tile.position.forEach((coordinate) => {
				if (coordinate[0] === string && coordinate[1] === raw) {
					this.ctx.strokeStyle = this.tiles[index].color
					this.ctx.fillStyle = this.tiles[index].color;
					this.ctx.fillText(this.tiles[index].cells[tile.currentCellsIndex], this.startCoordinate.x - 15, this.startCoordinate.y + 5);
					tile.currentCellsIndex++
					this.ctx.beginPath();

					for (let i = 0; i < 6; i++) {
						this.ctx.lineTo(this.startCoordinate.x + this.hexagonRadius * Math.cos(this.startAngle * i), this.startCoordinate.y + this.hexagonRadius * Math.sin(this.startAngle * i));
					}

					this.ctx.closePath();
					this.ctx.stroke();
				}
			})
		})
	}

	public generateImage() {
		const image = new Image();

		image.src = 'assets/images/cell-images/water.png';
		image.onload = () => {
			return this.ctx.drawImage(image, 60, 60, 100, 100);
		}
	}
}
