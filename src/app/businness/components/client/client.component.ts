import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataDbService } from '../../service/data-db.service';
import { Router } from '@angular/router';
import { Config } from '../../models/client.interface';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  config: Config;
  clientForm: FormGroup;

  title = 'reto-tech';

  msg: string;
  msgActive: boolean;
  constructor(
    private dbData: DataDbService,
    private router: Router, ) {
    this.clientForm = this.createFormGroup();
  }

  ngOnInit() {
    this.config = new Config();
    this.config.minDate = '1000-01-01';
    this.config.maxDate = '3000-12-31';
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
      date: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  registerForm() {
    if (this.clientForm.valid) {
      this.msg = 'Se registro correctamente al cliente';
      this.msgActive = true;
      this.dbData.saveClient(this.clientForm.value);
      this.router.navigate(['/client-list']);
      this.onResetForm();
    } else {
      this.msg = 'Complete el formulario por favor';
      this.msgActive = true;
    }

  }

  closeAlert() {
    this.msg = '';
    this.msgActive = false;
  }

  back() {
    this.router.navigate(['/']);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  get name() { return this.clientForm.get('name'); }
  get lastName() { return this.clientForm.get('lastName'); }
  get age() { return this.clientForm.get('age'); }
  get date() { return this.clientForm.get('date'); }
}
