import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Item_E_Component } from './item.component';
import { AuthService } from '../service/auth.service';

describe('Item_E_Component', () => {
  let component: Item_E_Component;
  let fixture: ComponentFixture<Item_E_Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item_E_Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item_E_Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
