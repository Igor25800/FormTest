import {Component, OnInit} from '@angular/core';
import {framework, frameworkVersion} from "../until/app.init";
import {FormArray, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {emailValidationService} from "../shared/services/emailValidation.service";
import {Observable} from "rxjs";
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  providers: [emailValidationService],
})
export class HomeComponent implements OnInit {
  title = 'AngularTest';
  framework = framework;
  arrayFrameworkVersions: Array<string> = [];
  isAngularVersion = false;
  formUser!: FormGroup;
  textJson: any;

  constructor(
    private emailValidationService: emailValidationService,
  ) {
  }

  ngOnInit(): void {
    this.getFormUser();
  }

  getFormUser(): void {
    this.formUser = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      framework: new FormControl('', Validators.required),
      frameworkVersion: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required], [this.nameAsyncValidator.bind(this)]),
      hobby: new FormArray([this.createItem()])
    })
  }

  createItem(): FormGroup {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      duration: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d*$/)])
    });
  }

  addHobby(): void {
    (this.formUser.get('hobby') as FormArray).push(this.createItem());
  }

  get userFormGroups() {
    return this.formUser.get('hobby') as FormArray
  }

  frameworkVersionS(value: string): void {
    if (value) {
      this.isAngularVersion = true;
      this.arrayFrameworkVersions = frameworkVersion[value];
    }
  }

  nameAsyncValidator(control: FormControl | any): Observable<ValidationErrors> {
    return this.emailValidationService.validateEmail(control.value)
  }

  get validatorEmail(): boolean {
    return this.formUser.controls['email']?.errors?.['nameError']
  }

  saveUser(): void {
    const data = this.formUser.get('dateOfBirth')?.value
    const datePipe = new DatePipe("en-US")
    this.formUser.patchValue({dateOfBirth: datePipe.transform(data, 'dd-MM-yyyy')})
    this.textJson = this.formUser.value;
  }
}
