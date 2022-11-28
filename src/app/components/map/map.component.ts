import { Component, OnInit, ViewChild } from '@angular/core';

import { CellInterface } from '../../interfaces/map/cell.interface';
import { TileInterface } from '../../interfaces/map/tile.interface';

import { MapService } from '../../services/map/map.service';

import { HEXAGON_RADIUS } from '../../constants/map/map.constants';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
	constructor(private mapService: MapService) {}

	private gameMapModel: any;
	private gameMapTiles: any;

	@ViewChild('map', { static: true })

	public map: any;
	private ctx: any;

	private startAngle = Math.PI / 3;
	private hexagonRadius: number = HEXAGON_RADIUS;
	private startCoordinate = {
		x: this.hexagonRadius + 10,
		y: this.hexagonRadius + 10,
	}

	private mapSettings: any;
	private mapIconsLoadedCount: number = 0;
	private mapIcons: any = { 'stone': null, 'water': null, 'meal': null, 'animal': null, 'tree': null, 'bonfire': null, 'boots': null, 'shovel': null, 'binoculars': null, 'player-0': null, 'player-1': null, 'player-2': null, 'player-3': null, 'camp': null };

	private mapName = '';

	ngOnInit(): void {
		this.ctx = this.map.nativeElement.getContext('2d');

		this.ctx.font = "16px serif";
		this.ctx.strokeStyle = '#000';
	}

	public initMap(): void {
		for (let image in this.mapIcons) {
			const imageElement = new Image();
			imageElement.src = `assets/images/icons/map-icons/${image}.svg`;
			imageElement.onload = () => {
				this.mapIconsLoadedCount++;

				this.mapIcons[image] = imageElement;

				if (this.mapIconsLoadedCount === Object.keys(this.mapIcons).length) {
					this.drawMap();
				}
			}
		}
	}

	public drawMap(): void {
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

		this.ctx.fillStyle = cell.cellType.color;

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
				if (this.mapIcons[item]) {
					this.ctx.drawImage(this.mapIcons[item], this.startCoordinate.x + 5 - 35 * index, this.startCoordinate.y + 10, 20, 20);
				}
			})
		}

		if (cell.objective) {
			this.ctx.fillStyle = '#343434';
			this.ctx.fillText(cell.objective.toString(), this.startCoordinate.x - 5, this.startCoordinate.y + 35);
		}

		if (cell.landmark) {
			if (this.mapIcons[cell.landmark]) {
				this.ctx.drawImage(this.mapIcons[cell.landmark], this.startCoordinate.x - 30, this.startCoordinate.y + 10, 20, 20);
			}
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
		const parsedString = string.split('');

		return this.gameMapTiles[parsedString[0]][parsedString[1]].cells[parsedString[2]];
	}

	public generateMap(terrain: string) {
		if (this.mapName === terrain) return;

		this.mapSettings = this.mapService.getMapSettings(terrain);

		if (!Object.keys(this.mapSettings).length) return;

		this.gameMapModel = this.mapSettings.mapModel;
		this.gameMapTiles = this.mapSettings.mapTiles;

		this.gameMapTiles.forEach((item: TileInterface[]) => this.shuffleArray(item));

		if (!this.mapName) {
			this.mapName = terrain;
			this.initMap();
		}

		if (this.mapName !== terrain) {
			this.mapName = terrain;
			this.clearMap();
			this.drawMap()
		}
	}

	public clearMap() {
		this.startCoordinate.x = this.hexagonRadius + 10;
		this.startCoordinate.y = this.hexagonRadius + 10;
		this.ctx.clearRect(0, 0, 2200, 1800);
	}

	public shuffleArray(array: any[]) {
		let currentIndex = array.length,  randomIndex;

		while (currentIndex != 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}

		return array;
	}
}
