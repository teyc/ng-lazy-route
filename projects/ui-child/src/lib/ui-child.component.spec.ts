import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiChildComponent } from './ui-child.component';

describe('UiChildComponent', () => {
  let component: UiChildComponent;
  let fixture: ComponentFixture<UiChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiChildComponent]
    });
    fixture = TestBed.createComponent(UiChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
