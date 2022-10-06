import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { MapTileComponent } from './components/map/map-tile/map-tile.component';
import { MapCellComponent } from './components/map/map-cell/map-cell.component';
import { MapCanvasComponent } from './components/map-canvas/map-canvas.component';

@NgModule({
	declarations: [
		AppComponent,
		MapComponent,
		MapTileComponent,
		MapCellComponent,
		MapCanvasComponent
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
