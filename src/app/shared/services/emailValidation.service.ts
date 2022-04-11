import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ValidationErrors} from "@angular/forms";
import {delay} from "rxjs/operators";

@Injectable()

export class emailValidationService {
  private arrayEmail: string[];

  constructor() {
    this.arrayEmail = ['igor.25800@gmail.com', 'dashaHara@com.ua', 'test@test.test'];
  }

  validateEmail(emailForm: string): Observable<ValidationErrors> {
    return new Observable<ValidationErrors>(observer => {
      const email = this.arrayEmail.find(email => email === emailForm);
      if (email) {
        observer.next({
          nameError: 'email с таким именем уже существует'
        });
        observer.complete();
      }
      observer.next({
        nameError: false
      });
      observer.complete();
    }).pipe(
      delay(2000)
    )
  }
}
