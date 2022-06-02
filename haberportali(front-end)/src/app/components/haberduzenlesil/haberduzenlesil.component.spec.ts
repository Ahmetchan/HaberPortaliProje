/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HaberduzenlesilComponent } from './haberduzenlesil.component';

describe('HaberduzenlesilComponent', () => {
  let component: HaberduzenlesilComponent;
  let fixture: ComponentFixture<HaberduzenlesilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaberduzenlesilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaberduzenlesilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
