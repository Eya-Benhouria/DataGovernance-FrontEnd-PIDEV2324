import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineageComponent } from './lineage.component';

describe('LineageComponent', () => {
  let component: LineageComponent;
  let fixture: ComponentFixture<LineageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LineageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
