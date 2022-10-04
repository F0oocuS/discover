import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapTileComponent } from './components/map/map-tile/map-tile.component';
import { MapCellComponent } from './components/map/map-cell/map-cell.component';

@NgModule({
	declarations: [
		AppComponent,
		MapTileComponent,
		MapCellComponent
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
