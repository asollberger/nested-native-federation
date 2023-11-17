import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientNavigationComponent } from './client-navigation.component';

describe('ClientNavigationComponent', () => {
  let component: ClientNavigationComponent;
  let fixture: ComponentFixture<ClientNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
