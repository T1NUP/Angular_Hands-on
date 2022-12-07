import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiclistComponent } from './dynamiclist.component';

describe('DynamiclistComponent', () => {
  let component: DynamiclistComponent;
  let fixture: ComponentFixture<DynamiclistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamiclistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamiclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
