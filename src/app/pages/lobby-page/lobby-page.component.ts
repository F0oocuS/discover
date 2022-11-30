import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-lobby-page',
	templateUrl: './lobby-page.component.html',
	styleUrls: ['./lobby-page.component.scss']
})
export class LobbyPageComponent implements OnInit {
	public lobbyItem = [
		{ lobby: 'Lobby name', map: 'Map name', scenario: '1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur dicta dolorem esse est fugit hic in iusto laborum laudantium natus officia, quaerat quas quo, quos similique soluta totam voluptate.' },
		{ lobby: 'Lobby name', map: 'Map name', scenario: '2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur dicta dolorem esse est fugit hic in iusto laborum laudantium natus officia, quaerat quas quo, quos similique soluta totam voluptate.' },
		{ lobby: 'Lobby name', map: 'Map name', scenario: '3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur dicta dolorem esse est fugit hic in iusto laborum laudantium natus officia, quaerat quas quo, quos similique soluta totam voluptate.' },
		{ lobby: 'Lobby name', map: 'Map name', scenario: '4', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur dicta dolorem esse est fugit hic in iusto laborum laudantium natus officia, quaerat quas quo, quos similique soluta totam voluptate.' },
		{ lobby: 'Lobby name', map: 'Map name', scenario: '5', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur dicta dolorem esse est fugit hic in iusto laborum laudantium natus officia, quaerat quas quo, quos similique soluta totam voluptate.' },
		{ lobby: 'Lobby name', map: 'Map name', scenario: '4', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur dicta dolorem esse est fugit hic in iusto laborum laudantium natus officia, quaerat quas quo, quos similique soluta totam voluptate.' },
		{ lobby: 'Lobby name', map: 'Map name', scenario: '3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur dicta dolorem esse est fugit hic in iusto laborum laudantium natus officia, quaerat quas quo, quos similique soluta totam voluptate.' },
		{ lobby: 'Lobby name', map: 'Map name', scenario: '2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur dicta dolorem esse est fugit hic in iusto laborum laudantium natus officia, quaerat quas quo, quos similique soluta totam voluptate.' },
		{ lobby: 'Lobby name', map: 'Map name', scenario: '1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur dicta dolorem esse est fugit hic in iusto laborum laudantium natus officia, quaerat quas quo, quos similique soluta totam voluptate.' },

	];
	constructor() {
	}

	ngOnInit(): void {
	}

}
