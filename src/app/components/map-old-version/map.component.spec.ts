import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapOldVersionComponent } from './map.component';

describe('MapComponent', () => {
  let component: MapOldVersionComponent;
  let fixture: ComponentFixture<MapOldVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapOldVersionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapOldVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
