import { Component, OnInit, ViewChild } from '@angular/core';
import { GameDataService } from '../../services/game/game-data.service';
import { CellInterface } from '../../interfaces/map/cell.interface';

@Component({
	selector: 'app-map-canvas',
	templateUrl: './map-canvas.component.html',
	styleUrls: ['./map-canvas.component.scss']
})
export class MapCanvasComponent implements OnInit {
	constructor(private gameData: GameDataService) {}

	private gameMapModel: any;
	private gameMapTiles: any;
	private gameMapTilesColor: any = {
		meadow: '#739957',
		hill: '#3c5730',
		mount: '#a7adba'
	};

	@ViewChild('canvasMap', { static: true })

	public canvasMap: any
	private ctx: any;

	private startAngle = Math.PI / 3;
	private hexagonRadius: number = 30;
	private startCoordinate = {
		x: this.hexagonRadius + 10,
		y: this.hexagonRadius + 10,
	}

	ngOnInit(): void {
		this.gameMapTiles = this.gameData.getGameTiles();
		this.gameMapModel = this.gameData.getGameMapModel();

		this.ctx = this.canvasMap.nativeElement.getContext('2d');

		this.ctx.font = "12px serif";
		this.ctx.strokeStyle = '#000';

		for (let i = 0; i < this.gameMapModel.length; i++) {
			if (i !== 0) {
				this.startCoordinate.y += this.hexagonRadius * Math.sin(this.startAngle);
				this.startCoordinate.x = this.hexagonRadius + 10;
			}
			for (let j = 0; j < this.gameMapModel[i].length; j++) {
				if (j !== 0) {
					this.startCoordinate.x += this.hexagonRadius + this.hexagonRadius * Math.cos(this.startAngle);
					this.startCoordinate.y -= (-1) ** j * this.hexagonRadius * Math.sin(this.startAngle);
				}

				if (this.gameMapModel[i][j]) {
					this.drawHexagon(this.gameMapModel[i][j]);
				}
			}
		}
	}

	public drawHexagon(string: string) {
		const cell = this.getCellData(string);

		this.ctx.fillStyle = this.gameMapTilesColor[cell.terrain];

		this.ctx.beginPath();

		for (let i = 0; i < 6; i++) {
			this.ctx.lineTo(this.startCoordinate.x + this.hexagonRadius * Math.cos(this.startAngle * i), this.startCoordinate.y + this.hexagonRadius * Math.sin(this.startAngle * i));
		}

		this.ctx.closePath();
		this.ctx.fill();
	}

	public getCellData(string: string): CellInterface {
		const parsedString = string.split('-');

		return this.gameMapTiles[parsedString[0]][parsedString[1]].cells[parsedString[2]];
	}
}
