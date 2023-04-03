import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavComponentComponent } from './top-nav-component.component';

describe('TopNavComponentComponent', () => {
  let component: TopNavComponentComponent;
  let fixture: ComponentFixture<TopNavComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNavComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
