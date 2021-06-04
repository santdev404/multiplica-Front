import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorNewComponent } from './color-new.component';

describe('ColorNewComponent', () => {
  let component: ColorNewComponent;
  let fixture: ComponentFixture<ColorNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
