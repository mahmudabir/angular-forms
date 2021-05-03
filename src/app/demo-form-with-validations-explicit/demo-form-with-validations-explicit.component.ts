import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-validations-explicit',
  templateUrl: './demo-form-with-validations-explicit.component.html',
  styleUrls: []
})
export class DemoFormWithValidationsExplicitComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku:  ['Dummy Value', Validators.required]
    });

    this.sku = this.myForm.controls.sku;
  }

  ngOnInit(): void {
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
