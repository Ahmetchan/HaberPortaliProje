/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KatduzenlesilComponent } from './katduzenlesil.component';

describe('KatduzenlesilComponent', () => {
  let component: KatduzenlesilComponent;
  let fixture: ComponentFixture<KatduzenlesilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KatduzenlesilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KatduzenlesilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
