import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapOldVersionComponent } from './components/map-old-version/map-old-version.component';
import { MapTileComponent } from './components/map-old-version/map-tile/map-tile.component';
import { MapCellComponent } from './components/map-old-version/map-cell/map-cell.component';
import { MapComponent } from './components/map/map.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { LobbyPageComponent } from './pages/lobby-page/lobby-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { RegistrationFormComponent } from './components/auth/registration-form/registration-form.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';


@NgModule({
	declarations: [
		AppComponent,
		MapComponent,
		MapTileComponent,
		MapCellComponent,
		MapComponent,
		LoginPageComponent,
		HomePageComponent,
		GamePageComponent,
		LobbyPageComponent,
		MapOldVersionComponent,
		RegistrationPageComponent,
		RegistrationFormComponent,
		LoginFormComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule {
}
