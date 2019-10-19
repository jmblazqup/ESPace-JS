import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelMarComponent } from './nivel-mar.component';

describe('NivelMarComponent', () => {
  let component: NivelMarComponent;
  let fixture: ComponentFixture<NivelMarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NivelMarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelMarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
