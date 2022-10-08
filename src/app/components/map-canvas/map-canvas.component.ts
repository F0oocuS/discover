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
	private tile1A = { color: 'red', cells: ['1-A-0', '1-A-1', '1-A-2', '1-A-3', '1-A-4', '1-A-5', '1-A-6', '1-A-7', '1-A-8', '1-A-9']};
	private tile1B = { color: 'blue', cells: ['1-B-0', '1-B-1', '1-B-2', '1-B-3', '1-B-4', '1-B-5', '1-B-6', '1-B-7', '1-B-8', '1-B-9']};
	private tiles = [this.tile0, this.tile1A, this.tile1B];

	private mapTiles = [
		{ id: 0, type: 0, cellsIndex: 0},
		{ id: 1, type: 1, cellsIndex: 0},
		{ id: 2, type: 1, cellsIndex: 0},
	];

	ngOnInit(): void {
		console.log(this.tiles)

		this.ctx = this.canvasMap.nativeElement.getContext('2d');

		// this.ctx.fillStyle = '#000';
		this.ctx.font = "12px serif";
		this.ctx.strokeStyle = '#000';
		// this.ctx.fillRect(0, 0, 1200, 1770);


		// this.generateImage();

		setTimeout(() => {
			for (let i = 0; i < 18; i++) {
				if (i !== 0) {
					this.startCoordinate.y += this.hexagonRadius * Math.sin(this.startAngle);
					this.startCoordinate.x = this.hexagonRadius + 10;
				}
				for (let j = 0; j < 12; j++) {
					if (j !== 0) {
						this.startCoordinate.x += this.hexagonRadius + this.hexagonRadius * Math.cos(this.startAngle);
						this.startCoordinate.y -= (-1) ** j * this.hexagonRadius * Math.sin(this.startAngle);
					}

					// this.drawHexagon(i, j);
					// debugger

					if (!((j < 2 || j > 9) && (i < 5 || i > 11))) {
						if (!(i === 17 && (j === 3 || j === 5 || j === 7 || j === 9))) {
							if (!(i === 11 && j === 11)) {
								this.drawHexagon(i, j);
							}
						}
					} else {
						if (i === 12 && j === 0) {
							this.drawHexagon(i, j);
						}
					}

					// if (!((j < 4 || j > 19) && (i < 3 || i > 5))) {
					// 	this.drawHexagon();
					// }
				}
			}
			this.ctx.clip();
		}, 300);

		console.log(this.ctx);
	}

	// public determinationMapRaw () {
	//
	// }

	public drawHexagon(string: number, raw: number) {
		if (raw === 0) {
			for (let i = 8; i < 10; i ++) {
				if( string === i) {
					this.ctx.strokeStyle = this.tiles[1].color
					this.ctx.fillStyle = this.tiles[1].color;
					this.ctx.fillText(this.tiles[1].cells[this.mapTiles[1].cellsIndex], this.startCoordinate.x - 15, this.startCoordinate.y + 5);
					this.mapTiles[1].cellsIndex++;

					this.ctx.beginPath();

					for (let i = 0; i < 6; i++) {
						this.ctx.lineTo(this.startCoordinate.x + this.hexagonRadius * Math.cos(this.startAngle * i), this.startCoordinate.y + this.hexagonRadius * Math.sin(this.startAngle * i));
					}

					this.ctx.closePath();
					this.ctx.stroke();

					this.ctx.strokeStyle = '#000'
					this.ctx.fillStyle = '#000';

					return;
				}
			}
		}

		if (raw === 1) {
			for (let i = 7; i < 10; i ++) {
				if( string === i) {
					this.ctx.strokeStyle = this.tiles[1].color
					this.ctx.fillStyle = this.tiles[1].color;
					this.ctx.fillText(this.tiles[1].cells[this.mapTiles[1].cellsIndex], this.startCoordinate.x - 15, this.startCoordinate.y + 5);
					this.mapTiles[1].cellsIndex++;

					this.ctx.beginPath();

					for (let i = 0; i < 6; i++) {
						this.ctx.lineTo(this.startCoordinate.x + this.hexagonRadius * Math.cos(this.startAngle * i), this.startCoordinate.y + this.hexagonRadius * Math.sin(this.startAngle * i));
					}

					this.ctx.closePath();
					this.ctx.stroke();

					this.ctx.strokeStyle = '#000'
					this.ctx.fillStyle = '#000';

					return;
				}
			}
		}

		if (raw === 2) {
			for (let i = 8; i < 10; i ++) {
				if( string === i) {
					this.ctx.strokeStyle = this.tiles[1].color
					this.ctx.fillStyle = this.tiles[1].color;
					this.ctx.fillText(this.tiles[1].cells[this.mapTiles[1].cellsIndex], this.startCoordinate.x - 15, this.startCoordinate.y + 5);
					this.mapTiles[1].cellsIndex++;

					this.ctx.beginPath();

					for (let i = 0; i < 6; i++) {
						this.ctx.lineTo(this.startCoordinate.x + this.hexagonRadius * Math.cos(this.startAngle * i), this.startCoordinate.y + this.hexagonRadius * Math.sin(this.startAngle * i));
					}

					this.ctx.closePath();
					this.ctx.stroke();

					this.ctx.strokeStyle = '#000'
					this.ctx.fillStyle = '#000';

					return;
				}
			}
		}

		if (raw === 3) {
			for (let i = 7; i < 10; i ++) {
				if( string === i) {
					this.ctx.strokeStyle = this.tiles[1].color
					this.ctx.fillStyle = this.tiles[1].color;
					this.ctx.fillText(this.tiles[1].cells[this.mapTiles[1].cellsIndex], this.startCoordinate.x - 15, this.startCoordinate.y + 5);
					this.mapTiles[1].cellsIndex++;

					this.ctx.beginPath();

					for (let i = 0; i < 6; i++) {
						this.ctx.lineTo(this.startCoordinate.x + this.hexagonRadius * Math.cos(this.startAngle * i), this.startCoordinate.y + this.hexagonRadius * Math.sin(this.startAngle * i));
					}

					this.ctx.closePath();
					this.ctx.stroke();

					this.ctx.strokeStyle = '#000'
					this.ctx.fillStyle = '#000';

					return;
				}
			}
		}

		if (raw === 4) {
			for (let i = 8; i < 10; i ++) {
				if( string === i) {
					this.ctx.strokeStyle = this.tiles[0].color
					this.ctx.fillStyle = this.tiles[0].color;
					this.ctx.fillText(this.tiles[0].cells[this.mapTiles[0].cellsIndex], this.startCoordinate.x - 15, this.startCoordinate.y + 5);
					this.mapTiles[0].cellsIndex++;

					this.ctx.beginPath();

					for (let i = 0; i < 6; i++) {
						this.ctx.lineTo(this.startCoordinate.x + this.hexagonRadius * Math.cos(this.startAngle * i), this.startCoordinate.y + this.hexagonRadius * Math.sin(this.startAngle * i));
					}

					this.ctx.closePath();
					this.ctx.stroke();

					this.ctx.strokeStyle = '#000'
					this.ctx.fillStyle = '#000';

					return;
				}
			}
		}

		if (raw === 5) {
			for (let i = 7; i < 10; i ++) {
				if( string === i) {
					this.ctx.strokeStyle = this.tiles[0].color
					this.ctx.fillStyle = this.tiles[0].color;
					this.ctx.fillText(this.tiles[0].cells[this.mapTiles[0].cellsIndex], this.startCoordinate.x - 15, this.startCoordinate.y + 5);
					this.mapTiles[0].cellsIndex++;

					this.ctx.beginPath();

					for (let i = 0; i < 6; i++) {
						this.ctx.lineTo(this.startCoordinate.x + this.hexagonRadius * Math.cos(this.startAngle * i), this.startCoordinate.y + this.hexagonRadius * Math.sin(this.startAngle * i));
					}

					this.ctx.closePath();
					this.ctx.stroke();

					this.ctx.strokeStyle = '#000'
					this.ctx.fillStyle = '#000';

					return;
				}
			}
		}

		if (raw === 6) {
			for (let i = 8; i < 10; i ++) {
				if( string === i) {
					this.ctx.strokeStyle = this.tiles[0].color
					this.ctx.fillStyle = this.tiles[0].color;
					this.ctx.fillText(this.tiles[0].cells[this.mapTiles[0].cellsIndex], this.startCoordinate.x - 15, this.startCoordinate.y + 5);
					this.mapTiles[0].cellsIndex++;

					this.ctx.beginPath();

					for (let i = 0; i < 6; i++) {
						this.ctx.lineTo(this.startCoordinate.x + this.hexagonRadius * Math.cos(this.startAngle * i), this.startCoordinate.y + this.hexagonRadius * Math.sin(this.startAngle * i));
					}

					this.ctx.closePath();
					this.ctx.stroke();

					this.ctx.strokeStyle = '#000'
					this.ctx.fillStyle = '#000';

					return;
				}
			}
		}

		if (raw === 7) {
			for (let i = 7; i < 10; i ++) {
				if( string === i) {
					this.ctx.strokeStyle = this.tiles[0].color
					this.ctx.fillStyle = this.tiles[0].color;
					this.ctx.fillText(this.tiles[0].cells[this.mapTiles[0].cellsIndex], this.startCoordinate.x - 15, this.startCoordinate.y + 5);
					this.mapTiles[0].cellsIndex++;

					this.ctx.beginPath();

					for (let i = 0; i < 6; i++) {
						this.ctx.lineTo(this.startCoordinate.x + this.hexagonRadius * Math.cos(this.startAngle * i), this.startCoordinate.y + this.hexagonRadius * Math.sin(this.startAngle * i));
					}

					this.ctx.closePath();
					this.ctx.stroke();

					this.ctx.strokeStyle = '#000'
					this.ctx.fillStyle = '#000';

					return;
				}
			}
		}

		if (raw === 8) {
			for (let i = 8; i < 10; i ++) {
				if( string === i) {
					this.ctx.strokeStyle = this.tiles[2].color
					this.ctx.fillStyle = this.tiles[2].color;
					this.ctx.fillText(this.tiles[2].cells[this.mapTiles[2].cellsIndex], this.startCoordinate.x - 15, this.startCoordinate.y + 5);
					this.mapTiles[2].cellsIndex++;

					this.ctx.beginPath();

					for (let i = 0; i < 6; i++) {
						this.ctx.lineTo(this.startCoordinate.x + this.hexagonRadius * Math.cos(this.startAngle * i), this.startCoordinate.y + this.hexagonRadius * Math.sin(this.startAngle * i));
					}

					this.ctx.closePath();
					this.ctx.stroke();

					this.ctx.strokeStyle = '#000'
					this.ctx.fillStyle = '#000';

					return;
				}
			}
		}

		if (raw === 9) {
			for (let i = 7; i < 10; i ++) {
				if( string === i) {
					this.ctx.strokeStyle = this.tiles[2].color
					this.ctx.fillStyle = this.tiles[2].color;
					this.ctx.fillText(this.tiles[2].cells[this.mapTiles[2].cellsIndex], this.startCoordinate.x - 15, this.startCoordinate.y + 5);
					this.mapTiles[2].cellsIndex++;

					this.ctx.beginPath();

					for (let i = 0; i < 6; i++) {
						this.ctx.lineTo(this.startCoordinate.x + this.hexagonRadius * Math.cos(this.startAngle * i), this.startCoordinate.y + this.hexagonRadius * Math.sin(this.startAngle * i));
					}

					this.ctx.closePath();
					this.ctx.stroke();

					this.ctx.strokeStyle = '#000'
					this.ctx.fillStyle = '#000';

					return;
				}
			}
		}

		if (raw === 10) {
			for (let i = 8; i < 10; i ++) {
				if( string === i) {
					this.ctx.strokeStyle = this.tiles[2].color
					this.ctx.fillStyle = this.tiles[2].color;
					this.ctx.fillText(this.tiles[2].cells[this.mapTiles[2].cellsIndex], this.startCoordinate.x - 15, this.startCoordinate.y + 5);
					this.mapTiles[2].cellsIndex++;

					this.ctx.beginPath();

					for (let i = 0; i < 6; i++) {
						this.ctx.lineTo(this.startCoordinate.x + this.hexagonRadius * Math.cos(this.startAngle * i), this.startCoordinate.y + this.hexagonRadius * Math.sin(this.startAngle * i));
					}

					this.ctx.closePath();
					this.ctx.stroke();

					this.ctx.strokeStyle = '#000'
					this.ctx.fillStyle = '#000';

					return;
				}
			}
		}

		if (raw === 11) {
			for (let i = 7; i < 10; i ++) {
				if( string === i) {
					this.ctx.strokeStyle = this.tiles[2].color
					this.ctx.fillStyle = this.tiles[2].color;
					this.ctx.fillText(this.tiles[2].cells[this.mapTiles[2].cellsIndex], this.startCoordinate.x - 15, this.startCoordinate.y + 5);
					this.mapTiles[2].cellsIndex++;

					this.ctx.beginPath();

					for (let i = 0; i < 6; i++) {
						this.ctx.lineTo(this.startCoordinate.x + this.hexagonRadius * Math.cos(this.startAngle * i), this.startCoordinate.y + this.hexagonRadius * Math.sin(this.startAngle * i));
					}

					this.ctx.closePath();
					this.ctx.stroke();

					this.ctx.strokeStyle = '#000'
					this.ctx.fillStyle = '#000';

					return;
				}
			}
		}

		this.ctx.beginPath();

		for (let i = 0; i < 6; i++) {
			this.ctx.lineTo(this.startCoordinate.x + this.hexagonRadius * Math.cos(this.startAngle * i), this.startCoordinate.y + this.hexagonRadius * Math.sin(this.startAngle * i));
		}

		this.ctx.closePath();
		this.ctx.stroke();
	}

	public generateImage() {
		const image = new Image();

		image.src = 'assets/images/cell-images/water.png';
		image.onload = () => {
			return this.ctx.drawImage(image, 60, 60, 100, 100);
		}
	}
}
