import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-map-tile',
	templateUrl: './map-tile.component.html',
	styleUrls: ['./map-tile.component.scss']
})
export class MapTileComponent implements OnInit {
	@Input() tileData: any;

	constructor() {
	}

	ngOnInit(): void {
		console.log(this.tileData);
	}

}
