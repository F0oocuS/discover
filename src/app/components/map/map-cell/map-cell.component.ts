import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-map-cell',
	templateUrl: './map-cell.component.html',
	styleUrls: ['./map-cell.component.scss']
})
export class MapCellComponent implements OnInit {
	@Input() image = '';

	constructor() {
	}

	ngOnInit(): void {
	}
}
