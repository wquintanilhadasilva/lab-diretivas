import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentSeletorComponent } from './ng-content-seletor.component';

describe('NgContentSeletorComponent', () => {
  let component: NgContentSeletorComponent;
  let fixture: ComponentFixture<NgContentSeletorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentSeletorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentSeletorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
