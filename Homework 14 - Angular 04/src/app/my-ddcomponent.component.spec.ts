import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDDComponentComponent } from './my-ddcomponent.component';

describe('MyDDComponentComponent', () => {
  let component: MyDDComponentComponent;
  let fixture: ComponentFixture<MyDDComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDDComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDDComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
