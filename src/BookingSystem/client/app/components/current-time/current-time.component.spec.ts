import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTimeComponent } from './current-time.component';

describe('CurrentTimeComponent', () => {
  let component: CurrentTimeComponent;
  let fixture: ComponentFixture<CurrentTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentTimeComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
