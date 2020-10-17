import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DntCoreComponent } from './dnt-core.component';

describe('DntCoreComponent', () => {
  let component: DntCoreComponent;
  let fixture: ComponentFixture<DntCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DntCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DntCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
