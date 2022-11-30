import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-lobby-item',
	templateUrl: './lobby-item.component.html',
	styleUrls: ['./lobby-item.component.scss']
})
export class LobbyItemComponent implements OnInit {
	@Input() item: any;

	constructor() {
	}

	ngOnInit(): void {
	}

}
