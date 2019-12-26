import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataDbService } from '../../service/data-db.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  clientForm: FormGroup;

  title = 'reto-tech';

  msg: string;
  msgActive: boolean;
  constructor(private dbData: DataDbService) {
    this.clientForm = this.createFormGroup();
  }

  ngOnInit() {
    this.msg = '';
    this.msgActive = false;
  }

  onResetForm() {
    this.clientForm.reset();
  }

  createFormGroup() {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      age: new FormControl('', [Validators.required]),
      Date: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  registerForm() {
    if (this.clientForm.valid) {
      this.msg = 'Se registro correctamente al cliente';
      this.msgActive = true;
      this.dbData.saveMessage(this.clientForm.value);
      this.onResetForm();
    } else {
      console.log('No valid');
    }

  }

  closeAlert() {
    this.msg = '';
    this.msgActive = false;
  }

  get name() { return this.clientForm.get('name'); }
  get lastName() { return this.clientForm.get('lastName'); }
  get age() { return this.clientForm.get('age'); }
  get Date() { return this.clientForm.get('Date'); }
}
