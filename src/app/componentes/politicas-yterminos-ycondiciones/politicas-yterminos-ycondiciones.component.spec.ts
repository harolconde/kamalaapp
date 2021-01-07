import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasYterminosYcondicionesComponent } from './politicas-yterminos-ycondiciones.component';

describe('PoliticasYterminosYcondicionesComponent', () => {
  let component: PoliticasYterminosYcondicionesComponent;
  let fixture: ComponentFixture<PoliticasYterminosYcondicionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticasYterminosYcondicionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticasYterminosYcondicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
