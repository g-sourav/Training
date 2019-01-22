import { FormGroup } from '@angular/forms';

export class PasswordValidator {
    static validate(changepasswordFormGroup: FormGroup) {
        let password = changepasswordFormGroup.controls.password.value;
        let repeatPassword = changepasswordFormGroup.controls.repeatPassword.value;

        if (repeatPassword.length <= 0) {
            return null;
        }

        if (repeatPassword !== password) {
            return {
                doesMatchPassword: true
            };
        }

        return null;

    }
}