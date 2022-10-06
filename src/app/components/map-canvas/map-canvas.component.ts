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
	private hexagonRadius: number = 50;
	private startCoordinate = {
		x: this.hexagonRadius + 10,
		y: this.hexagonRadius + 10,
	}

	ngOnInit(): void {
		this.ctx = this.canvasMap.nativeElement.getContext('2d');

		this.ctx.fillStyle = '#eee';
		this.ctx.strokeStyle = 'coral';
		this.ctx.fillRect(0, 0, 1000, 600);

		this.generateImage();

		setTimeout(() => {
			for (let i = 0; i < 6; i++) {
				if (i !== 0) {
					this.startCoordinate.y += this.hexagonRadius * Math.sin(this.startAngle);
					this.startCoordinate.x = this.hexagonRadius + 10;
				}
				for (let j = 0; j < 12; j++) {
					if (j !== 0) {
						this.startCoordinate.x += this.hexagonRadius + this.hexagonRadius * Math.cos(this.startAngle);
						this.startCoordinate.y -= (-1) ** j * this.hexagonRadius * Math.sin(this.startAngle);
					}

					this.drawHexagon();
				}
			}
			this.ctx.clip();
		}, 300);

		console.log(this.ctx);
	}

	public drawHexagon() {
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
