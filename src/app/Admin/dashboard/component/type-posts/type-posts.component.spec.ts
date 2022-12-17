/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TypePostsComponent } from './type-posts.component';

describe('TypePostsComponent', () => {
  let component: TypePostsComponent;
  let fixture: ComponentFixture<TypePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypePostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
