import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import Swal from 'sweetalert2';
import { FormService } from 'src/app/services/service.index';
import { Admin } from 'src/app/models/admin.model';
import { Address }from 'src/app/models/address.model';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent implements OnInit {

  userForm: any;
  dataForm: FormGroup;
  isSubmitted = false;
  taxType = '';
  qualifiedCraftman = '';
  allergy = '';
  consumingMedicine = '';
  affiliatedTo = '';
  conadisLicense = '';
  retirement = '';
  fileToUpload: File = null;
  productsBeingSold = '';
  productsBeingSoldSec = '';
  productsBeingSoldTri = '';
  productsBeingSoldCua = '';
  numberLocals = '';
  retirementDetails = '';

  cantones: {};

  public imagePath: FileList;
  imgURL: any;

  constructor(public formBuilder: FormBuilder,
              public formService: FormService,
              public loadingService: LoadingService,
              public http: HttpClient,
              public router: Router) {}

  check(e: { target: { value: string; }; }){
    if (e.target.value === 'Azuay — 02') {
      this.cantones = [
        {
          name: 'Chordelog'
        },
        {
          name: 'Cuenca'
        },
        {
          name: 'El Pan'
        },
        {
          name: 'El Girón'
        },
        {
          name: 'Guachapala'
        },
        {
          name: 'Gualeco'
        },
        {
          name: 'Nabón'
        },
        {
          name: 'Oña'
        },
        {
          name: 'Paute'
        },
        {
          name: 'Ponce Enriquez'
        },
        {
          name: 'Pucará'
        },
        {
          name: 'San Fernando'
        },
        {
          name: 'Santa Isabel'
        },
        {
          name: 'Sevilla de Oro'
        },
        {
          name: 'Sígsig'
        }
      ];
    }
    if (e.target.value === 'Bolívar — 03') {
      this.cantones = [
        {
          name: 'Caluma'
        },
        {
          name: 'Chillanes'
        },
        {
          name: 'Chimbo'
        },
        {
          name: 'Echeandía'
        },
        {
          name: 'Guaranda'
        },
        {
          name: 'Las Naves'
        },
        {
          name: 'San Miguel'
        }
      ];
    }
    if (e.target.value === 'Cañar — 07') {
      this.cantones = [
        {
          name: 'Azogues'
        },
        {
          name: 'Biblián'
        },
        {
          name: 'Cañar'
        },
        {
          name: 'Déleg'
        },
        {
          name: 'El Tambo'
        },
        {
          name: 'La Troncal'
        },
        {
          name: 'Suscal'
        }
      ];
    }
    if (e.target.value === 'Carchi — 06') {
      this.cantones = [
        {
          name: 'Bolívar'
        },
        {
          name: 'Espejo'
        },
        {
          name: 'Mira'
        },
        {
          name: 'Montúfar'
        },
        {
          name: 'San Pedro de Huaca'
        },
        {
          name: 'Tulcán'
        }
      ];
    }
    if (e.target.value === 'Chimborazo — 03') {
      this.cantones = [
        {
          name: 'Alausí'
        },
        {
          name: 'Chambo'
        },
        {
          name: 'Chunchi'
        },
        {
          name: 'Colta'
        },
        {
          name: 'Cumandá'
        },
        {
          name: 'Guamote'
        },
        {
          name: 'Guano'
        },
        {
          name: 'Pallatanga'
        },
        {
          name: 'Penipe'
        },
        {
          name: 'Riobamba'
        }
      ];
    }
    if (e.target.value === 'Cotopaxi — 03') {
      this.cantones = [
        {
          name: 'La Maná'
        },
        {
          name: 'Latacunga'
        },
        {
          name: 'Pangua'
        },
        {
          name: 'Pujilí'
        },
        {
          name: 'Salcedo'
        },
        {
          name: 'Saquisilí'
        },
        {
          name: 'Sigchos'
        }
      ];
    }
    if (e.target.value === 'El Oro — 07') {
      this.cantones = [
        {
          name: 'Arenillas'
        },
        {
          name: 'Atahualpa'
        },
        {
          name: 'Balsas'
        },
        {
          name: 'Chilla'
        },
        {
          name: 'El Guabo'
        },
        {
          name: 'Huaquillas'
        },
        {
          name: 'Las Lajas'
        },
        {
          name: 'Machala'
        },
        {
          name: 'Marcabelí'
        },
        {
          name: 'Pasaje'
        },
        {
          name: 'Piñas'
        },
        {
          name: 'Portovelo'
        },
        {
          name: 'Santa Rosa'
        },
        {
          name: 'Zaruma'
        }
      ];
    }
    if (e.target.value === 'Esmeraldas — 06') {
      this.cantones = [
        {
          name: 'Atacames'
        },
        {
          name: 'Eloy Alfaro'
        },
        {
          name: 'Esmeraldas'
        },
        {
          name: 'Muisne'
        },
        {
          name: 'Quinindé'
        },
        {
          name: 'Rioverde'
        },
        {
          name: 'San Lorenzo'
        }
      ];
    }
    if (e.target.value === 'Galápagos — 05') {
      this.cantones = [
        {
          name: 'Isabela'
        },
        {
          name: 'San Cristóbal'
        },
        {
          name: 'Santa Cruz'
        }
      ];
    }
    if (e.target.value === 'Guayas — 04') {
      this.cantones = [
        {
          name: 'Alfredo Baquerizo Moreno'
        },
        {
          name: 'Balao'
        },
        {
          name: 'Balzar'
        },
        {
          name: 'Colimes'
        },
        {
          name: 'Coronel Marcelino Maridueña'
        },
        {
          name: 'Daule'
        },
        {
          name: 'Durán'
        },
        {
          name: 'El Empalme'
        },
        {
          name: 'El Triunfo'
        },
        {
          name: 'General Antonio Elizalde'
        },
        {
          name: 'Guayaquil'
        },
        {
          name: 'Isidro Ayora'
        },
        {
          name: 'Lomas de Sargentillo'
        },
        {
          name: 'Milagro'
        },
        {
          name: 'Naranjal'
        },
        {
          name: 'Naranjito'
        },
        {
          name: 'Nobol'
        },
        {
          name: 'Palestina'
        },
        {
          name: 'Pedro Carbo'
        },
        {
          name: 'Playas'
        },
        {
          name: 'Salitre'
        },
        {
          name: 'Samborondón'
        },
        {
          name: 'Santa Lucía'
        },
        {
          name: 'Simón Bolívar'
        },
        {
          name: 'Yaguachi'
        }
      ];
    }
    if (e.target.value === 'Imbabura — 06') {
      this.cantones = [
        {
          name: 'Antonio Ante'
        },
        {
          name: 'Cotacachi'
        },
        {
          name: 'Ibarra'
        },
        {
          name: 'Otavalo'
        },
        {
          name: 'Pimampiro'
        },
        {
          name: 'San Miguel de Urcuquí'
        }
      ];
    }
    if (e.target.value === 'Loja — 07') {
      this.cantones = [
        {
          name: 'Calvas'
        },
        {
          name: 'Catamayo'
        },
        {
          name: 'Celica'
        },
        {
          name: 'Chaguarpamba'
        },
        {
          name: 'Espíndola'
        },
        {
          name: 'Gonzanamá'
        },
        {
          name: 'Loja'
        },
        {
          name: 'Macará'
        },
        {
          name: 'Olmedo'
        },
        {
          name: 'Paltas'
        },
        {
          name: 'Pindal'
        },
        {
          name: 'Puyango'
        },
        {
          name: 'Quilanga'
        },
        {
          name: 'Saraguro'
        },
        {
          name: 'Sozoranga'
        },
        {
          name: 'Zapotillo'
        }
      ];
    }
    if (e.target.value === 'Los Ríos — 05') {
      this.cantones = [
        {
          name: 'Baba'
        },
        {
          name: 'Babahoyo'
        },
        {
          name: 'Buena Fe'
        },
        {
          name: 'Mocache'
        },
        {
          name: 'Montalvo'
        },
        {
          name: 'Palenque'
        },
        {
          name: 'Puebloviejo'
        },
        {
          name: 'Quevedo'
        },
        {
          name: 'Quinsaloma'
        },
        {
          name: 'Urdaneta'
        },
        {
          name: 'Valencia'
        },
        {
          name: 'Ventanas'
        },
        {
          name: 'Vinces'
        }
      ];
    }
    if (e.target.value === 'Manabí — 05') {
      this.cantones = [
        {
          name: 'Bolívar'
        },
        {
          name: 'Chone'
        },
        {
          name: 'El Carmen'
        },
        {
          name: 'Flavio Alfaro'
        },
        {
          name: 'Jama'
        },
        {
          name: 'Jaramijó'
        },
        {
          name: 'Jipijapa'
        },
        {
          name: 'Junín'
        },
        {
          name: 'Manta'
        },
        {
          name: 'Montecristi'
        },
        {
          name: 'Olmedo'
        },
        {
          name: 'Paján'
        },
        {
          name: 'Pedernales'
        },
        {
          name: 'Pichincha'
        },
        {
          name: 'Portoviejo'
        },
        {
          name: 'Puerto López'
        },
        {
          name: 'Rocafuerte'
        },
        {
          name: 'San Vicente'
        },
        {
          name: 'Santa Ana'
        },
        {
          name: 'Sucre'
        },
        {
          name: 'Tosagua'
        },
        {
          name: 'Veinticuatro de Mayo'
        }
      ];
    }
    if (e.target.value === 'Morona Santiago — 07'  ) {
      this.cantones = [
        {
          name: 'Gualaquiza'
        },
        {
          name: 'Huamboya'
        },
        {
          name: 'Logroño'
        },
        {
          name: 'Morona'
        },
        {
          name: 'Pablo Sexto'
        },
        {
          name: 'Palora'
        },
        {
          name: 'San Juan Bosco'
        },
        {
          name: 'Santiago'
        },
        {
          name: 'Sucúa'
        },
        {
          name: 'Taisha'
        }
      ];
    }
    if (e.target.value === 'Napo — 06') {
      this.cantones = [
        {
          name: 'Archidona'
        },
        {
          name: 'Carlos Julio Arosemena Tola'
        },
        {
          name: 'El Chaco'
        },
        {
          name: 'Quijos'
        },
        {
          name: 'Tena'
        }
      ];
    }
    if (e.target.value === 'Orellana — 06') {
      this.cantones = [
        {
          name: 'Aguarico'
        },
        {
          name: 'Orellana'
        },
        {
          name: 'La Joya de los Sachas'
        },
        {
          name: 'Loreto'
        }
      ];
    }
    if (e.target.value === 'Pastaza — 03') {
      this.cantones = [
        {
          name: 'Arajuno'
        },
        {
          name: 'Mera'
        },
        {
          name: 'Pastaza'
        },
        {
          name: 'Santa Clara'
        }
      ];
    }
    if (e.target.value === 'Pichincha — 02') {
      this.cantones = [
        {
          name: 'Cayambe'
        },
        {
          name: 'Mejía'
        },
        {
          name: 'Pedro Moncayo'
        },
        {
          name: 'Pedro Vicente Maldonado'
        },
        {
          name: 'Puerto Quito'
        },
        {
          name: 'Distrito Metropolitano de Quito'
        },
        {
          name: 'Rumiñahui'
        },
        {
          name: 'San Miguel de Los Bancos'
        }
      ];
    }
    if (e.target.value === 'Santa Elena — 04') {
      this.cantones = [
        {
          name: 'La Libertad'
        },
        {
          name: 'Salinas'
        },
        {
          name: 'Santa Elena'
        }
      ];
    }
    if (e.target.value === 'Santo Domingo — 02') {
      this.cantones = [
        {
          name: 'La Concordia'
        },
        {
          name: 'Santo Domingo'
        }
      ];
    }
    if (e.target.value === 'Sucumbíos — 06') {
      this.cantones = [
        {
          name: 'Cascales'
        },
        {
          name: 'Cuyabeno'
        },
        {
          name: 'Gonzalo Pizarro'
        },
        {
          name: 'Lago Agrio'
        },
        {
          name: 'Putumayo'
        },
        {
          name: 'Shushufindi'
        },
        {
          name: 'Sucumbíos'
        }
      ];
    }
    if (e.target.value === 'Tungurahua — 03') {
      this.cantones = [
        {
          name: 'Ambato'
        },
        {
          name: 'Baños de Agua Santa'
        },
        {
          name: 'Cevallos'
        },
        {
          name: 'Mocha'
        },
        {
          name: 'Patate'
        },
        {
          name: 'Pelileo'
        },
        {
          name: 'Píllaro'
        },
        {
          name: 'Quero'
        },
        {
          name: 'Tisaleo'
        }
      ];
    }
    if (e.target.value === 'Zamora Chinchipe — 07') {
      this.cantones = [
        {
          name: 'Centinela del Cóndor'
        },
        {
          name: 'Chinchipe'
        },
        {
          name: 'El Pangui'
        },
        {
          name: 'Nangaritza'
        },
        {
          name: 'Palanda'
        },
        {
          name: 'Paquisha'
        },
        {
          name: 'Yacuambi'
        },
        {
          name: 'Yantzaza'
        },
        {
          name: 'Zamora'
        }
      ];
    }
  }

  ngOnInit() {
    this.buildForm();
    this.setTributaryValidator();
    this.setQualifiedValidator();
    this.setAllergyValidator();
    this.setConsumedValidator();
    this.setRetirementValidator();
    this.setConadisValidator();
    this.setPrivateValidator();
  }

  buildForm() {
    this.dataForm = this.formBuilder.group({
      avatar: ['', [Validators.required]],

      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      idNumber: ['', [Validators.required, Validators.minLength(10), Validators.max(9999999999), Validators.pattern('^(([0-1][0-9])|([2][0-4])|30)[0-9]*')]],
      phoneNumber: ['', [Validators.required, Validators.minLength(7), Validators.max(9999999999)]],
      cellphoneNumber: ['', [Validators.required, Validators.minLength(8), Validators.max(9999999999)]],
      emergencyPhone: ['', [Validators.required, Validators.minLength(7), Validators.max(9999999999)]],
      province: ['', [Validators.required]],
      canton: ['', [Validators.required]],
      city: ['', [Validators.required]],
      neighborhood: ['', [Validators.required]],
      mainStreet: ['', [Validators.required]],
      nomenclature: ['', [Validators.required]],
      secondaryStreet: ['', [Validators.required]],

      taxType: ['', [Validators.required]],
      taxNumberRuc: [''],
      taxNumberRise: [''],
      keepAccounting: [false],

      personType: ['', [Validators.required]],
      businessName: ['', [Validators.required]],
      socialReason: ['', [Validators.required]],
      productsBeingSold: ['', [Validators.required]], productsBeingSoldSec: [''], productsBeingSoldTri: [''],
      productsBeingSoldCua: [''], productsBeingSoldQui: [''],
      // localNumber: this.formBuilder.array([this.formBuilder.group({localNumberAdd: ''})]),
      // predioNumber: this.formBuilder.array([this.formBuilder.group({predioNumberAdd: ''})]),
      // sector: this.formBuilder.array([this.formBuilder.group({sectorAdd: ''})]),
      // floor: this.formBuilder.array([this.formBuilder.group({floorAdd: ''})]),
      // hallNumber: this.formBuilder.array([this.formBuilder.group({hallNumberAdd: ''})]),
      // [Validators.required, Validators.pattern('[0-9]{1,2}[a-bA-B]{1}$')]],
      locals: this.formBuilder.array([]),
      originOfProducts: ['', [Validators.required]],
      qualifiedCraftman: ['', [Validators.required]],
      craftmanCalification: [''],
      sellerType: ['', [Validators.required]],

      bloodType: ['', [Validators.required]],
      height: ['', [Validators.required]],
      allergy: ['', [Validators.required]],
      allergicTo: [''],
      consumingMedicine: ['', [Validators.required]],
      medicamentBeingConsumed: [''],
      illness: ['Ninguna', [Validators.required]],
      affiliatedTo: ['', [Validators.required]],
      affiliatedToPrivate: [''],
      conadisLicense: ['', [Validators.required]],
      disability: [''],
      disabilityPer: [''],
      retirement: ['', [Validators.required]],
      retirementDetails: ['']
    });
  }

  locals(): FormArray {
    return this.dataForm.get('locals') as FormArray;
  }

  newLocal(): FormGroup {
    return this.formBuilder.group({
      localNumber: ['', [Validators.required]],
      predioNumber: ['', [Validators.required]],
      sector: ['', [Validators.required]],
      floor: ['', [Validators.required]],
      hallNumber: ['', [Validators.required]]
    });
  }

  public addLocal() {
    this.locals().push(this.newLocal());
  }

  public deleteLocal(index: number) {
    this.locals().removeAt(index);
  }

  setTributaryValidator() {
    const taxRucControl = this.dataForm.get('taxNumberRuc');
    const taxRiseControl = this.dataForm.get('taxNumberRise');
    const keepAccountingControl = this.dataForm.get('keepAccounting');

    this.dataForm.get('taxType').valueChanges
      .subscribe(taxType => {
        if (taxType === 'ruc') {
          taxRucControl.setValidators([Validators.required, Validators.minLength(13), Validators.max(9999999999999), Validators.pattern('^(([0-1][0-9])|([2][0-4])|30)[0-9]{8}(([0][0][1]))')]);
          taxRiseControl.setValidators(null);
          keepAccountingControl.setValidators([Validators.required]);
        }
        if (taxType === 'rise') {
          taxRucControl.setValidators(null);
          taxRiseControl.setValidators([Validators.required, Validators.minLength(10), Validators.max(9999999999), Validators.pattern('^(([0-1][0-9])|([2][0-4])|30)[0-9]*')]);
          keepAccountingControl.setValidators(null);
        }
        if (taxType === 'none') {
          taxRucControl.setValidators(null);
          taxRiseControl.setValidators(null);
          keepAccountingControl.setValidators(null);
        }
        taxRiseControl.updateValueAndValidity();
        taxRucControl.updateValueAndValidity();
        keepAccountingControl.updateValueAndValidity();
      });
  }

  setQualifiedValidator() {
    const calificationControl = this.dataForm.get('craftmanCalification');

    this.dataForm.get('qualifiedCraftman').valueChanges
      .subscribe(qualifiedCraftman => {
        if (qualifiedCraftman === 'true') {
          calificationControl.setValidators([Validators.required]);
        }
        if (qualifiedCraftman === 'false') {
          calificationControl.setValidators(null);
        }
        calificationControl.updateValueAndValidity();
      });
  }

  setAllergyValidator() {
    const allergicToControl = this.dataForm.get('allergicTo');

    this.dataForm.get('allergy').valueChanges
      .subscribe(allergy => {
        if (allergy === 'true') {
          allergicToControl.setValidators([Validators.required]);
        }
        if (allergy === 'false') {
          allergicToControl.setValidators(null);
        }
        allergicToControl.updateValueAndValidity();
      });
  }

  setConsumedValidator() {
    const medicamentBeingConsumedControl = this.dataForm.get('medicamentBeingConsumed');

    this.dataForm.get('consumingMedicine').valueChanges
      .subscribe(consumingMedicine => {
        if (consumingMedicine === 'true') {
          medicamentBeingConsumedControl.setValidators([Validators.required]);
        }
        if (consumingMedicine === 'false') {
          medicamentBeingConsumedControl.setValidators(null);
        }
        medicamentBeingConsumedControl.updateValueAndValidity();
      });
  }

  setRetirementValidator() {
    const retirementDetailsControl = this.dataForm.get('retirementDetails');

    this.dataForm.get('retirement').valueChanges
      .subscribe(retirement => {
        if (retirement === 'true') {
          retirementDetailsControl.setValidators([Validators.required]);
        }
        if (retirement === 'false') {
          retirementDetailsControl.setValidators(null);
        }
        retirementDetailsControl.updateValueAndValidity();
      });
  }

  setConadisValidator() {
    const disabilityControl = this.dataForm.get('disability');
    const disabilityPerControl = this.dataForm.get('disabilityPer');

    this.dataForm.get('conadisLicense').valueChanges
      .subscribe(conadisLicense => {
        if (conadisLicense === 'true') {
          disabilityControl.setValidators([Validators.required]);
          disabilityPerControl.setValidators([Validators.required, Validators.pattern('^(([1-9])|([1-9][0-9]))')]);
        }
        if (conadisLicense === 'false') {
          disabilityControl.setValidators(null);
          disabilityPerControl.setValidators(null);
        }
        disabilityControl.updateValueAndValidity();
        disabilityPerControl.updateValueAndValidity();
      });
  }

  setPrivateValidator() {
    const affiliatedToPrivateControl = this.dataForm.get('affiliatedToPrivate');

    this.dataForm.get('affiliatedTo').valueChanges
      .subscribe(affiliatedTo => {
        if (affiliatedTo === 'true') {
          affiliatedToPrivateControl.setValidators([Validators.required]);
        }
        if (affiliatedTo === 'false') {
          affiliatedToPrivateControl.setValidators(null);
        }
        affiliatedToPrivateControl.updateValueAndValidity();
      });
  }

  fileUpload(files: FileList) {
    this.fileToUpload = files.item(0);
  }


  preview(files: FileList) {
    if (files.length === 0) {
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }

  getDate(e: any) {
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
    let taxNum: string;
    let products: { productName: string }[];

    if (this.dataForm.value.taxType === 'ruc') {
      taxNum = this.dataForm.value.taxNumberRuc;
    }
    else if (this.dataForm.value.taxType === 'rise') {
      taxNum = this.dataForm.value.taxNumberRise;
    }
    else {
      taxNum = '';
    }

    if (!this.dataForm.value.productsBeingSoldSec) {
      products = [
        {productName: this.dataForm.value.productsBeingSold}
      ];
    }
    else if (!this.dataForm.value.productsBeingSoldTri) {
      products = [
        {productName: this.dataForm.value.productsBeingSold},
        {productName: this.dataForm.value.productsBeingSoldSec}
      ];
    }
    else if (!this.dataForm.value.productsBeingSoldCua) {
      products = [
        {productName: this.dataForm.value.productsBeingSold},
        {productName: this.dataForm.value.productsBeingSoldSec},
        {productName: this.dataForm.value.productsBeingSoldTri}
      ];
    }
    else if (!this.dataForm.value.productsBeingSoldQui) {
      products = [
        {productName: this.dataForm.value.productsBeingSold},
        {productName: this.dataForm.value.productsBeingSoldSec},
        {productName: this.dataForm.value.productsBeingSoldTri},
        {productName: this.dataForm.value.productsBeingSoldCua}
      ];
    }
    else if (this.dataForm.value.productsBeingSoldQui) {
      products = [
        {productName: this.dataForm.value.productsBeingSold},
        {productName: this.dataForm.value.productsBeingSoldSec},
        {productName: this.dataForm.value.productsBeingSoldTri},
        {productName: this.dataForm.value.productsBeingSoldCua},
        {productName: this.dataForm.value.productsBeingSoldQui}
      ];
    }

    const address: Address = {
      firstname: this.dataForm.value.firstName,
      lastname: this.dataForm.value.lastName,
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

    const admin: Admin = {
      taxType: this.dataForm.value.taxType,
      taxNumber: taxNum,
      keepAccounting: this.dataForm.value.keepAccounting,
      personType: this.dataForm.value.personType,
      businessName: this.dataForm.value.businessName,
      socialReason: this.dataForm.value.socialReason,
      productsBeingSold: products,
      numberLocals: this.dataForm.value.numberLocals,
      originOfProducts: this.dataForm.value.originOfProducts,
      qualifiedCraftman: this.dataForm.value.qualifiedCraftman,
      craftmanCalification: this.dataForm.value.craftmanCalification,
      sellerType: this.dataForm.value.sellerType,
      locals: this.dataForm.value.locals,
      bloodType: this.dataForm.value.bloodType,
      height: this.dataForm.value.height,
      allergy: this.dataForm.value.allergy,
      allergicTo: this.dataForm.value.allergicTo,
      consumingMedicine: this.dataForm.value.consumingMedicine,
      medicamentBeingConsumed: this.dataForm.value.medicamentBeingConsumed,
      illness: this.dataForm.value.illness,
      affiliatedToPrivate: this.dataForm.value.affiliatedToPrivate,
      affiliatedTo: this.dataForm.value.affiliatedTo,
      conadisLicense: this.dataForm.value.conadisLicense,
      disability: this.dataForm.value.disability,
      disabilityPer: this.dataForm.value.disabilityPer,
      retirement: this.dataForm.value.retirement,
      retirementDetails: this.dataForm.value.retirementDetails
    };

    const booleans = ['allergy', 'consumingMedicine', 'conadisLicense', 'retirement', 'qualifiedCraftman', 'keepAccounting'];
    for ( const booleanParameter of booleans) {
      admin[booleanParameter] = admin[booleanParameter] === 'true';
    }

    const avatar = this.fileToUpload;

    if (!this.dataForm.valid) {
      Swal.fire({
        title: 'Oh no',
        text: `Parece que algo ha salido mal. Comprueba los datos ingresados e intenta de nuevo.`,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      console.log(admin);
      return false;
    } else {
      console.log(admin);
      this.formService.upload(admin, address, avatar, this.dataForm.value.locals); // debug fix xdxd
    }
  }
}
