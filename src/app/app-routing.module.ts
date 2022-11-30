import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegistrationPageComponent } from "./pages/registration-page/registration-page.component";
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LobbyPageComponent } from './pages/lobby-page/lobby-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import {NewLobbyPageComponent} from "./pages/new-lobby-page/new-lobby-page.component";


const routes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'registration', component: RegistrationPageComponent },
	{ path: 'login', component: LoginPageComponent },
	{ path: 'lobby', children:
		[
			{ path: '', component: LobbyPageComponent },
			{ path: 'new', component: NewLobbyPageComponent }
		]
	},
	{ path: 'game', component: GamePageComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {}
