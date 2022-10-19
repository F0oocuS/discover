import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-map-old-version',
	templateUrl: './map-old-version.component.html',
	styleUrls: ['./map-old-version.component.scss']
})
export class MapOldVersionComponent implements OnInit {
	tileData = [
		[
			{ image: null },
			{ image: 'assets/images/cell-images/grass.png' },
			{ image: null },
			{ image: 'assets/images/cell-images/grass.png' }
		],
		[
			{ image: 'assets/images/cell-images/stone.jpeg' },
			{ image: 'assets/images/cell-images/grass.png' },
			{ image: 'assets/images/cell-images/forest.jpeg' },
			{ image: 'assets/images/cell-images/water.png' }
		],
		[
			{ image: 'assets/images/cell-images/grass.png' },
			{ image: 'assets/images/cell-images/water.png' },
			{ image: 'assets/images/cell-images/water.png' },
			{ image: 'assets/images/cell-images/water.png' }
		],
	];

	tileData2 = [
		[
			{ image: 'assets/images/cell-images/grass.png' },
			{ image: 'assets/images/cell-images/water.png' },
			{ image: 'assets/images/cell-images/water.png' },
			{ image: 'assets/images/cell-images/water.png' }
		],
		[
			{ image: 'assets/images/cell-images/stone.jpeg' },
			{ image: 'assets/images/cell-images/grass.png' },
			{ image: 'assets/images/cell-images/forest.jpeg' },
			{ image: 'assets/images/cell-images/water.png' }
		],
		[
			{ image: 'assets/images/cell-images/grass.png' },
			{ image: null },
			{ image: 'assets/images/cell-images/grass.png' },
			{ image: null }
		]
	];

	constructor() {
	}

	ngOnInit(): void {
	}

}
