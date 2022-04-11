import {HomeComponent} from "./home.component";
import {emailValidationService} from "../shared/services/emailValidation.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {ReactiveFormsModule} from "@angular/forms";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {SharedModule} from "../module/shared.module";

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: emailValidationService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [ReactiveFormsModule, BrowserAnimationsModule, SharedModule],
      providers: [emailValidationService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
  })


  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = TestBed.get(emailValidationService);
    fixture.detectChanges()
  })

  it('should create HomeComponent', () => {
    expect(component).toBeTruthy();
  })

  it('should getFormUser',  () => {
    component.getFormUser();
    expect(component.formUser.value).toEqual({firstName: '', lastName: '', dateOfBirth: '', framework: '', frameworkVersion: '', email: '', hobby: [{name: '', duration: ''}]})
  });

  it('should frameworkVersionS',  () => {
    component.isAngularVersion = false;
    component.arrayFrameworkVersions = [];
    component.frameworkVersionS('angular');
    expect(component.isAngularVersion).toBeTruthy();
    expect(component.arrayFrameworkVersions).toEqual(['1.1.1', '1.2.1', '1.3.3'])
  });
})
