import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {HomeComponent} from "../pages/home.component";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser'
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        BrowserModule,
        MatButtonModule
    ],
  declarations: [
    HomeComponent
  ],
  exports: [ReactiveFormsModule, MatFormFieldModule, HomeComponent, MatInputModule]
})

export class SharedModule {

}
