import { Component, ViewChild } from '@angular/core';

import { jqxExpanderComponent, jqxExpanderModule } from 'jqwidgets-ng/jqxexpander';
import { jqxInputComponent, jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxValidatorComponent, jqxValidatorModule } from 'jqwidgets-ng/jqxvalidator';
import { jqxDropDownListComponent, jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputComponent, jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

import { jqxPasswordInputModule, jqxPasswordInputComponent } from 'jqwidgets-ng/jqxpasswordinput';

@Component({
    selector: 'app-root',
    imports: [jqxPasswordInputModule, jqxButtonModule, jqxExpanderModule, jqxInputModule, jqxDropDownListModule, jqxValidatorModule, jqxDateTimeInputModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    @ViewChild('createAccount') createAccount: jqxExpanderComponent;
    @ViewChild('firstName') firstName: jqxInputComponent;
    @ViewChild('lastName') lastName: jqxInputComponent;
    @ViewChild('userName') userName: jqxInputComponent;
    @ViewChild('password') password: jqxPasswordInputComponent;
    @ViewChild('passwordConfirm') passwordConfirm: jqxPasswordInputComponent;
    @ViewChild('validatorReference') myValidator: jqxValidatorComponent;
    @ViewChild('gender') gender: jqxDropDownListComponent;

    genders: string[] = ["male", "female"];

    rules: any[] = [
        {
            input: ".firstName", message: "First name is required!", action: 'keyup, blur', rule: (input: any, commit: any): boolean => {
                return this.firstName.val() != "" && this.firstName.val() != "First"
            }
        },
        {
            input: ".lastName", message: "Last name is required!", action: 'keyup, blur', rule: (input: any, commit: any): boolean => {
                return this.lastName.val() != "" && this.lastName.val() != "Last";
            }
        },
        { input: ".userName", message: "Username is required!", action: 'keyup, blur', rule: 'required' },
        { input: ".password", message: "Password is required!", action: 'keyup, blur', rule: 'required' },
        { input: ".passwordConfirm", message: "Password is required!", action: 'keyup, blur', rule: 'required' },
        {
            input: ".passwordConfirm", message: "Passwords should match!", action: 'keyup, blur', rule: (input: any, commit: any): boolean => {
                let firstPassword = this.password.val();
                let secondPassword = this.passwordConfirm.val();

                return firstPassword == secondPassword;
            }
        },
        {
            input: ".gender", message: "Gender is required!", action: 'blur', rule: (input: any, commit: any): boolean => {
                let index = this.gender.getSelectedIndex();

                return index != -1;
            }
        }
    ];

    buttonClicked(): void {
        this.myValidator.validate(document.getElementById('form'));
    };

    validationSuccess(event: any): void {
        this.createAccount.setContent('<span style="margin: 10px;">Account created.</span>');
    };
}