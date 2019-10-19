/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IncendiosComponent } from './incendios.component';

describe('IncendiosComponent', () => {
  let component: IncendiosComponent;
  let fixture: ComponentFixture<IncendiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncendiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncendiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
