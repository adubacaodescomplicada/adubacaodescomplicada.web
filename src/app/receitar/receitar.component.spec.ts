import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitarComponent } from './receitar.component';

describe('ReceitarComponent', () => {
  let component: ReceitarComponent;
  let fixture: ComponentFixture<ReceitarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
