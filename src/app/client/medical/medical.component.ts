import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormService } from 'src/app/services/service.index';
import { Tributary } from 'src/app/models/tributary.model';
import { Medical } from 'src/app/models/medical.model';
import { Personal } from 'src/app/models/personal.model';
import { Comercial } from 'src/app/models/comercial.model';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent implements OnInit {

  dataForm: FormGroup;
  defaultDate = '1987/06/30';
  isSubmitted = false;
  taxType: String = '';
  qualifiedCraftman: String = '';
  allergy: String = '';
  consumingMedicine: String = '';
  conadisLicense: String = '';
  retirement: String = '';

  constructor(public formBuilder: FormBuilder, private router: Router, public _formService: FormService) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      idNumber: ['', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]],
      phoneNumber: ['', [Validators.required, Validators.min(1000000), Validators.max(999999999)]],
      cellphoneNumber: ['', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]],
      emergencyPhone: ['', [Validators.required, Validators.min(1000000), Validators.max(9999999999)]],
      province: ['', [Validators.required]],
      canton: ['', [Validators.required]],
      city: ['', [Validators.required]],
      neighborhood: ['', [Validators.required]],
      mainStreet: ['', [Validators.required]],
      nomenclature: ['', [Validators.required]],
      secondaryStreet: ['', [Validators.required]],

      taxType: ['', [Validators.required]],
      taxNumber: [''],
      keepAccounting: ['', [Validators.required]],

      personType: ['', [Validators.required]],
      businessName: ['', [Validators.required]],
      socialReason: ['', [Validators.required]],
      productsBeingSold: ['', [Validators.required]],
      localNumber: ['', [Validators.required]],
      predioNumber: ['', [Validators.required]],
      sector: ['', [Validators.required]],
      floor: ['', [Validators.required]],
      hallNumber: ['', [Validators.required]],
      originOfProducts: ['', [Validators.required]],
      numberLocals: ['', [Validators.required]],
      qualifiedCraftman: ['', [Validators.required]],
      craftmanCalification: [''],
      sellerType: ['', [Validators.required]] ,

      bloodType: ['', [Validators.required]],
      height: ['', [Validators.required]],
      allergy: ['', [Validators.required]],
      allergicTo: [''],
      consumingMedicine: ['', [Validators.required]],
      medicamentBeingConsumed: [''],
      illness: ['Ninguna', [Validators.required]],
      affiliatedTo: ['', [Validators.required]],
      conadisLicense: ['', [Validators.required]],
      conadisLicenseType: [''],
      retirement: ['', [Validators.required]],
      retirementDetails: ['']
    }); 
  }
  getDate(e) {
    const date = new Date(e.target.value).toISOString().substring(0, 10);
    this.dataForm.get('dateOfBirth').setValue(date, {
      onlyself: true
    });
  }

  get errorControl() {
    return this.dataForm.controls;
  }

  submitForm() {

    this.isSubmitted = true;
    console.log(`${this.dataForm.value.taxType} - ${this.dataForm.value.taxNumber} - ${this.dataForm.value.keepAccounting}`);
    
    let tributary: Tributary = {
      taxType: this.dataForm.value.taxType,
      taxNumber: this.dataForm.value.taxNumber,
      keepAccounting: this.dataForm.value.keepAccounting
    };

     let comercial: Comercial = {
      personType: this.dataForm.value.personType,
      businessName: this.dataForm.value.businessName,
      socialReason: this.dataForm.value.socialReason,
      productsBeingSold: this.dataForm.value.productsBeingSold,
      localNumber: this.dataForm.value.localNumber,
      predioNumber: this.dataForm.value.predioNumber,
      sector: this.dataForm.value.sector,
      floor: this.dataForm.value.floor,
      hallNumber: this.dataForm.value.hallNumber,
      originOfProducts: this.dataForm.value.originOfProducts,
      numberLocals: this.dataForm.value.numberLocals,
      qualifiedCraftman: this.dataForm.value.qualifiedCraftman,
      craftmanCalification: this.dataForm.value.craftmanCalification,
      sellerType: this.dataForm.value.sellerType
     };

     let medical: Medical = {
      bloodType: this.dataForm.value.bloodType,
      height: this.dataForm.value.height,
      allergy: this.dataForm.value.allergy,
      allergicTo: this.dataForm.value.allergicTo,
      consumingMedicine: this.dataForm.value.consumingMedicine,
      medicamentBeingConsumed: this.dataForm.value.medicamentBeingConsumed,
      illness: this.dataForm.value.illness,
      affiliatedTo: this.dataForm.value.affiliatedTo,
      conadisLicense: this.dataForm.value.conadisLicense,
      conadisLicenseType: this.dataForm.value.conadisLicenseType,
      retirement: this.dataForm.value.retirement,
      retirementDetails: this.dataForm.value.retirementDetails
     };

     let personal: Personal = {
      firstName: this.dataForm.value.firstName,
      lastName: this.dataForm.value.lastName,
      gender: this.dataForm.value.gender,
      dateOfBirth: this.dataForm.value.dateOfBirth,
      idNumber: this.dataForm.value.idNumber,
      phoneNumber: this.dataForm.value.phoneNumber,
      cellphoneNumber: this.dataForm.value.cellphoneNumber,
      emergencyPhone: this.dataForm.value.emergencyPhone,
      province: this.dataForm.value.province,
      canton: this.dataForm.value.canton,
      city: this.dataForm.value.city,
      neighborhood: this.dataForm.value.neighborhood,
      mainStreet: this.dataForm.value.mainStreet,
      nomenclature: this.dataForm.value.nomenclature,
      secondaryStreet: this.dataForm.value.secondaryStreet
     };

    const booleans = ['allergy', 'consumingMedicine', 'conadisLicense', 'retirement'];
    for( let booleanParameter of booleans) {
      medical[booleanParameter] = medical[booleanParameter] === 'true';
    };
    
    const booleansComercial = ['qualifiedCraftman'];
    for( let booleanParameter of booleansComercial) {
      comercial[booleanParameter] = comercial[booleanParameter] === 'true';
    };

    const booleansTributary = ['keepAccounting'];
    for( let booleanParameter of booleansTributary) {
      tributary[booleanParameter] = tributary[booleanParameter] === 'true';
    };
     let avatar: any;
    if (!this.dataForm.valid) {
      Swal.fire({
        title: 'Oh no',
        text: `Parece que algo ha salido mal. Comprueba los datos ingresados e intenta de nuevo.`,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      console.log(comercial);
      return false;
    } else {
      console.log(comercial);
      this._formService.upload(tributary, comercial, medical, personal, avatar);
    }
  }
}
