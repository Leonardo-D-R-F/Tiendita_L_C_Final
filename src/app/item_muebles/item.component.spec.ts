
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item_M_Component } from './item.component';
import { AuthService } from '../service/auth.service';

describe('Item_M_Component', () => {
  let component: Item_M_Component;
  let fixture: ComponentFixture<Item_M_Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item_M_Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item_M_Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
