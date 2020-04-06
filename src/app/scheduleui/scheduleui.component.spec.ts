import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleuiComponent } from './scheduleui.component';

describe('ScheduleuiComponent', () => {
  let component: ScheduleuiComponent;
  let fixture: ComponentFixture<ScheduleuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
