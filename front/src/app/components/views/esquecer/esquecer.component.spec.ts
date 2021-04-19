import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsquecerComponent } from './esquecer.component';

describe('EsquecerComponent', () => {
  let component: EsquecerComponent;
  let fixture: ComponentFixture<EsquecerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsquecerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsquecerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
