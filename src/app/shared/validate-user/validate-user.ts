import { Component, signal, inject } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-validate-user',
  styleUrl: './validate-user.scss',
  templateUrl: './validate-user.html',
})
export class ValidateUser {
  private readonly dialogRef = inject(DialogRef<'ineligible', ValidateUser>);

  readonly selectedRole = signal<'admin' | null>(null);

  selectRole(role: 'admin' | 'other') {
    if (role === 'other') {
      this.dialogRef.close('ineligible');
      return;
    }

    this.selectedRole.set(role);
  }

  close() {
    this.dialogRef.close();
  }
}
