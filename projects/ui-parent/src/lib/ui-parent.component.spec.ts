import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiParentComponent } from './ui-parent.component';

describe('UiParentComponent', () => {
  let component: UiParentComponent;
  let fixture: ComponentFixture<UiParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiParentComponent]
    });
    fixture = TestBed.createComponent(UiParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
