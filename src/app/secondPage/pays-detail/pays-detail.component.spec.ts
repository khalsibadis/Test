import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysDetailComponent } from './pays-detail.component';

describe('PaysDetailComponent', () => {
  let component: PaysDetailComponent;
  let fixture: ComponentFixture<PaysDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
