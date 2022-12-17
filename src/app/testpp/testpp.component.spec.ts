import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestppComponent } from './testpp.component';

describe('TestppComponent', () => {
  let component: TestppComponent;
  let fixture: ComponentFixture<TestppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
