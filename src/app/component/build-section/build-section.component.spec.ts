import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildSectionComponent } from './build-section.component';

describe('BuildSectionComponent', () => {
  let component: BuildSectionComponent;
  let fixture: ComponentFixture<BuildSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuildSectionComponent]
    });
    fixture = TestBed.createComponent(BuildSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
