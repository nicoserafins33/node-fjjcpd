import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellaContattiComponent } from './tabella-contatti.component';

describe('TabellaContattiComponent', () => {
  let component: TabellaContattiComponent;
  let fixture: ComponentFixture<TabellaContattiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabellaContattiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabellaContattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
