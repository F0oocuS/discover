import { Injectable } from '@angular/core';

import { ValleyService } from '../game-data/terrains/valley.service';
import { BayouService } from '../game-data/terrains/bayou.service';
import { DesertService } from '../game-data/terrains/desert.service';
import { BadlandsService } from '../game-data/terrains/badlands.service';
import { IslandService } from '../game-data/terrains/island.service';
import { SnowyMountainsService } from '../game-data/terrains/snowy-mountains.service';

@Injectable({
	providedIn: 'root'
})
export class MapService {
	constructor(
		private valleyService: ValleyService,
		private bayouService: BayouService,
		private desertService: DesertService,
		private badlandsService: BadlandsService,
		private islandService: IslandService,
		private snowyMountainsService: SnowyMountainsService
	) {}

	public getMapSettings(terrain: string) {
		switch (terrain) {
			case 'valley': {
				return {
					mapModel: this.valleyService.getMapModel(),
					mapTiles: this.valleyService.getMapTiles()
				}
			}
			case 'snow-mountain': {
				return {
					mapModel: this.snowyMountainsService.getMapModel(),
					mapTiles: this.snowyMountainsService.getMapTiles()
				};
			}
			case 'desert': {
				return {
					mapModel: this.desertService.getMapModel(),
					mapTiles: this.desertService.getMapTiles()
				};
			}
			case 'bayou': {
				return {
					mapModel: this.bayouService.getMapModel(),
					mapTiles: this.bayouService.getMapTiles()
				};
			}
			case 'badlands': {
				return {
					mapModel: this.badlandsService.getMapModel(),
					mapTiles: this.badlandsService.getMapTiles()
				};
			}
			case 'island': {
				return {
					mapModel: this.islandService.getMapModel(),
					mapTiles: this.islandService.getMapTiles()
				};
			}
			default: {
				return {};
			}
		}
	}
}
