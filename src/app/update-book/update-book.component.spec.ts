import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBookComponent } from './update-book.component';

describe('CreateBookComponent', () => {
  let component: UpdateBookComponent;
  let fixture: ComponentFixture<UpdateBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
