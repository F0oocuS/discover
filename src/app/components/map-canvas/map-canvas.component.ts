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
	private hexagonRadius: number = 50;
	private startCoordinate = {
		x: this.hexagonRadius + 10,
		y: this.hexagonRadius + 10,
	}

	private mapIconsLoadedCount: number = 0;
	private mapIcons: any = { 'stone': null, 'water': null, 'meal': null, 'animal': null, 'tree': null, 'bonfire': null, 'boots': null, 'shovel': null, 'binoculars': null, 'player-0': null, 'player-1': null, 'player-2': null, 'player-3': null, 'camp': null };

	ngOnInit(): void {
		this.gameMapTiles = this.gameData.getGameTiles();
		this.gameMapModel = this.gameData.getGameMapModel();

		this.ctx = this.canvasMap.nativeElement.getContext('2d');

		this.ctx.font = "16px serif";
		this.ctx.strokeStyle = '#000';

		for (let image in this.mapIcons) {
			const imageElement = new Image();
			imageElement.src = `assets/images/icons/map-icons/${image}.svg`;
			imageElement.onload = () => {
				this.mapIconsLoadedCount++;

				this.mapIcons[image] = imageElement;

				if (this.mapIconsLoadedCount === Object.keys(this.mapIcons).length) {
					this.generateMap();
				}
			}
		}
	}

	public generateMap() {
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

		if (cell.resource) {
			if (cell.resource === 'water') {
				this.ctx.fillStyle = '#d4f1f9';
				this.ctx.beginPath();
				this.ctx.arc(this.startCoordinate.x + 15, this.startCoordinate.y + 20, 15, 0, 2 * Math.PI);
				this.ctx.fill();
			}

			cell.resource.split('|').forEach((item, index) => {
				this.ctx.drawImage(this.mapIcons[item], this.startCoordinate.x + 5 - 35 * index, this.startCoordinate.y + 10, 20, 20);
			})
		}

		if (cell.objective) {
			this.ctx.fillStyle = '#343434';
			this.ctx.fillText(cell.objective.toString(), this.startCoordinate.x - 5, this.startCoordinate.y + 35);
		}

		if (cell.landmark) {
			this.ctx.drawImage(this.mapIcons[cell.landmark], this.startCoordinate.x - 30, this.startCoordinate.y + 10, 20, 20);
		}

		if (cell.players?.length) {
			const coordinate = {
				x: this.startCoordinate.x - 43,
				y: this.startCoordinate.y - 15
			}

			cell.players.forEach((item, index) => {
				this.ctx.drawImage(this.mapIcons['player-' + index], coordinate.x + 21 * index, coordinate.y, 20, 20);
			});
		}
	}

	public getCellData(string: string): CellInterface {
		const parsedString = string.split('-');

		return this.gameMapTiles[parsedString[0]][parsedString[1]].cells[parsedString[2]];
	}
}
