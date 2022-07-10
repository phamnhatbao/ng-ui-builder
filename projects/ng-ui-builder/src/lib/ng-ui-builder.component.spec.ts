import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgUiBuilderComponent } from './ng-ui-builder.component';

describe('NgUiBuilderComponent', () => {
  let component: NgUiBuilderComponent;
  let fixture: ComponentFixture<NgUiBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgUiBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgUiBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
