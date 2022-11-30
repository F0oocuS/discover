import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLobbyPageComponent } from './new-lobby-page.component';

describe('NewLobbyPageComponent', () => {
  let component: NewLobbyPageComponent;
  let fixture: ComponentFixture<NewLobbyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLobbyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewLobbyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
