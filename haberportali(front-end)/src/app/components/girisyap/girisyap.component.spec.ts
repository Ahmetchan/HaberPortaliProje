/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GirisyapComponent } from './girisyap.component';

describe('GirisyapComponent', () => {
  let component: GirisyapComponent;
  let fixture: ComponentFixture<GirisyapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirisyapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirisyapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
