/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MasComponent } from './mas.component';

describe('MasComponent', () => {
  let component: MasComponent;
  let fixture: ComponentFixture<MasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
