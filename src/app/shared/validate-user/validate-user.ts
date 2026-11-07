import { Component, signal, inject } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatError } from '@angular/material/form-field';

@Component({
  selector: 'app-validate-user',
  imports: [ReactiveFormsModule, MatError],
  styleUrl: './validate-user.scss',
  templateUrl: './validate-user.html',
})
export class ValidateUser {
  private readonly dialogRef = inject(DialogRef<'ineligible', ValidateUser>);

  readonly securityKey = signal<string>('vds!@$uskvhdb)*');

  verifyRole = new FormGroup({
    role: new FormControl('', {
      nonNullable: true
    }),
    securityKey: new FormControl('', {
      nonNullable: true
    }),
  });

  selectRole() {
    let role = this.verifyRole.get('role')?.value
    if (role === 'other') {
      this.verifyRole.get('securityKey')?.clearValidators();
      this.dialogRef.close('ineligible');
      this.verifyRole.get('securityKey')?.updateValueAndValidity();
      return;
    } else {
      this.verifyRole.get('securityKey')?.setValidators([Validators.required]);
      this.verifyRole.get('securityKey')?.updateValueAndValidity();
    }
  }

  submit() {
    this.verifyRole.markAllAsTouched();
    let isValidAdmin = this.verifyRole.get('securityKey')?.value === this.securityKey()
    console.log('Form submitted with values:', this.verifyRole, this.verifyRole.value, isValidAdmin);
    if (this.verifyRole.valid && isValidAdmin) {
      this.verifyRole.setErrors(null);
      this.dialogRef.close();
    } else {
      this.verifyRole.get('securityKey')?.setErrors({ invalidKey: true });
    }
  }

  close() {
    this.dialogRef.close();
  }
}
