import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { FormService } from 'src/app/services/service.index';
import { Tributary } from 'src/app/models/tributary.model';
import { Medical } from 'src/app/models/medical.model';
import { Personal } from 'src/app/models/personal.model';
import { Comercial } from 'src/app/models/comercial.model';
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

  dataForm: FormGroup;
  isSubmitted = false;
  taxType: String = '';
  qualifiedCraftman: String = '';
  allergy: String = '';
  consumingMedicine: String = '';
  affiliatedTo: String = '';
  conadisLicense: String = '';
  retirement: String = '';
  fileToUpload: File = null;
  productsBeingSold: String = '';
  productsBeingSoldSec: String = '';
  productsBeingSoldTri: String = '';
  productsBeingSoldCua: String = '';
  numberLocals: String = '';
  retirementDetails: String = '';

  cantones: {};

  public imagePath;
  imgURL: any;

  constructor(public formBuilder: FormBuilder, public _formService: FormService, public _loadingService: LoadingService, public http: HttpClient, public router: Router) { }

  check(e){
    if (e.target.value == "Azuay — 02") {
      this.cantones = [
        {
          name: "Chordelog"
        },
        {
          name: "Cuenca"
        },
        {
          name: "El Pan"
        },
        {
          name: "El Girón"
        },
        {
          name: "Guachapala"
        },
        {
          name: "Gualeco"
        },
        {
          name: "Nabón"
        },
        {
          name: "Oña"
        },
        {
          name: "Paute"
        },
        {
          name: "Ponce Enriquez"
        },
        {
          name: "Pucará"
        },
        {
          name: "San Fernando"
        },
        {
          name: "Santa Isabel"
        },
        {
          name: "Sevilla de Oro"
        },
        {
          name: "Sígsig"
        }
      ];
    }
    if (e.target.value == "Bolívar — 03") {
      this.cantones = [
        {
          name: "Caluma"
        },
        {
          name: "Chillanes"
        },
        {
          name: "Chimbo"
        },
        {
          name: "Echeandía"
        },
        {
          name: "Guaranda"
        },
        {
          name: "Las Naves"
        },
        {
          name: "San Miguel"
        }
      ];
    }
    if (e.target.value == "Cañar — 07") {
      this.cantones = [
        {
          name: "Azogues"
        },
        {
          name: "Biblián"
        },
        {
          name: "Cañar"
        },
        {
          name: "Déleg"
        },
        {
          name: "El Tambo"
        },
        {
          name: "La Troncal"
        },
        {
          name: "Suscal"
        }
      ];
    }
    if (e.target.value == "Carchi — 06") {
      this.cantones = [
        {
          name: "Bolívar"
        },
        {
          name: "Espejo"
        },
        {
          name: "Mira"
        },
        {
          name: "Montúfar"
        },
        {
          name: "San Pedro de Huaca"
        },
        {
          name: "Tulcán"
        }
      ];
    }
    if (e.target.value == "Chimborazo — 03") {
      this.cantones = [
        {
          name: "Alausí"
        },
        {
          name: "Chambo"
        },
        {
          name: "Chunchi"
        },
        {
          name: "Colta"
        },
        {
          name: "Cumandá"
        },
        {
          name: "Guamote"
        },
        {
          name: "Guano"
        },
        {
          name: "Pallatanga"
        },
        {
          name: "Penipe"
        },
        {
          name: "Riobamba"
        }
      ];
    }
    if (e.target.value == "Cotopaxi — 03") {
      this.cantones = [
        {
          name: "La Maná"
        },
        {
          name: "Latacunga"
        },
        {
          name: "Pangua"
        },
        {
          name: "Pujilí"
        },
        {
          name: "Salcedo"
        },
        {
          name: "Saquisilí"
        },
        {
          name: "Sigchos"
        }
      ];
    }
    if (e.target.value == "El Oro — 07") {
      this.cantones = [
        {
          name: "Arenillas"
        },
        {
          name: "Atahualpa"
        },
        {
          name: "Balsas"
        },
        {
          name: "Chilla"
        },
        {
          name: "El Guabo"
        },
        {
          name: "Huaquillas"
        },
        {
          name: "Las Lajas"
        },
        {
          name: "Machala"
        },
        {
          name: "Marcabelí"
        },
        {
          name: "Pasaje"
        },
        {
          name: "Piñas"
        },
        {
          name: "Portovelo"
        },
        {
          name: "Santa Rosa"
        },
        {
          name: "Zaruma"
        }
      ];
    }
    if (e.target.value == "Esmeraldas — 06") {
      this.cantones = [
        {
          name: "Atacames"
        },
        {
          name: "Eloy Alfaro"
        },
        {
          name: "Esmeraldas"
        },
        {
          name: "Muisne"
        },
        {
          name: "Quinindé"
        },
        {
          name: "Rioverde"
        },
        {
          name: "San Lorenzo"
        }
      ];
    }
    if (e.target.value == "Galápagos — 05") {
      this.cantones = [
        {
          name: "Isabela"
        },
        {
          name: "San Cristóbal"
        },
        {
          name: "Santa Cruz"
        }
      ];
    }
    if (e.target.value == "Guayas — 04") {
      this.cantones = [
        {
          name: "Alfredo Baquerizo Moreno"
        },
        {
          name: "Balao"
        },
        {
          name: "Balzar"
        },
        {
          name: "Colimes"
        },
        {
          name: "Coronel Marcelino Maridueña"
        },
        {
          name: "Daule"
        },
        {
          name: "Durán"
        },
        {
          name: "El Empalme"
        },
        {
          name: "El Triunfo"
        },
        {
          name: "General Antonio Elizalde"
        },
        {
          name: "Guayaquil"
        },
        {
          name: "Isidro Ayora"
        },
        {
          name: "Lomas de Sargentillo"
        },
        {
          name: "Milagro"
        },
        {
          name: "Naranjal"
        },
        {
          name: "Naranjito"
        },
        {
          name: "Nobol"
        },
        {
          name: "Palestina"
        },
        {
          name: "Pedro Carbo"
        },
        {
          name: "Playas"
        },
        {
          name: "Salitre"
        },
        {
          name: "Samborondón"
        },
        {
          name: "Santa Lucía"
        },
        {
          name: "Simón Bolívar"
        },
        {
          name: "Yaguachi"
        }
      ];
    }
    if (e.target.value == "Imbabura — 06") {
      this.cantones = [
        {
          name: "Antonio Ante"
        },
        {
          name: "Cotacachi"
        },
        {
          name: "Ibarra"
        },
        {
          name: "Otavalo"
        },
        {
          name: "Pimampiro"
        },
        {
          name: "San Miguel de Urcuquí"
        }
      ];
    }
    if (e.target.value == "Loja — 07") {
      this.cantones = [
        {
          name: "Calvas"
        },
        {
          name: "Catamayo"
        },
        {
          name: "Celica"
        },
        {
          name: "Chaguarpamba"
        },
        {
          name: "Espíndola"
        },
        {
          name: "Gonzanamá"
        },
        {
          name: "Loja"
        },
        {
          name: "Macará"
        },
        {
          name: "Olmedo"
        },
        {
          name: "Paltas"
        },
        {
          name: "Pindal"
        },
        {
          name: "Puyango"
        },
        {
          name: "Quilanga"
        },
        {
          name: "Saraguro"
        },
        {
          name: "Sozoranga"
        },
        {
          name: "Zapotillo"
        }
      ];
    }
    if (e.target.value == "Los Ríos — 05") {
      this.cantones = [
        {
          name: "Baba"
        },
        {
          name: "Babahoyo"
        },
        {
          name: "Buena Fe"
        },
        {
          name: "Mocache"
        },
        {
          name: "Montalvo"
        },
        {
          name: "Palenque"
        },
        {
          name: "Puebloviejo"
        },
        {
          name: "Quevedo"
        },
        {
          name: "Quinsaloma"
        },
        {
          name: "Urdaneta"
        },
        {
          name: "Valencia"
        },
        {
          name: "Ventanas"
        },
        {
          name: "Vinces"
        }
      ];
    }
    if (e.target.value == "Manabí — 05") {
      this.cantones = [
        {
          name: "Bolívar"
        },
        {
          name: "Chone"
        },
        {
          name: "El Carmen"
        },
        {
          name: "Flavio Alfaro"
        },
        {
          name: "Jama"
        },
        {
          name: "Jaramijó"
        },
        {
          name: "Jipijapa"
        },
        {
          name: "Junín"
        },
        {
          name: "Manta"
        },
        {
          name: "Montecristi"
        },
        {
          name: "Olmedo"
        },
        {
          name: "Paján"
        },
        {
          name: "Pedernales"
        },
        {
          name: "Pichincha"
        },
        {
          name: "Portoviejo"
        },
        {
          name: "Puerto López"
        },
        {
          name: "Rocafuerte"
        },
        {
          name: "San Vicente"
        },
        {
          name: "Santa Ana"
        },
        {
          name: "Sucre"
        },
        {
          name: "Tosagua"
        },
        {
          name: "Veinticuatro de Mayo"
        }
      ];
    }
    if (e.target.value == "Morona Santiago — 07"  ) {
      this.cantones = [
        {
          name: "Gualaquiza"
        },
        {
          name: "Huamboya"
        },
        {
          name: "Logroño"
        },
        {
          name: "Morona"
        },
        {
          name: "Pablo Sexto"
        },
        {
          name: "Palora"
        },
        {
          name: "San Juan Bosco"
        },
        {
          name: "Santiago"
        },
        {
          name: "Sucúa"
        },
        {
          name: "Taisha"
        }
      ];
    }
    if (e.target.value == "Napo — 06") {
      this.cantones = [
        {
          name: "Archidona"
        },
        {
          name: "Carlos Julio Arosemena Tola"
        },
        {
          name: "El Chaco"
        },
        {
          name: "Quijos"
        },
        {
          name: "Tena"
        }
      ];
    }
    if (e.target.value == "Orellana — 06") {
      this.cantones = [
        {
          name: "Aguarico"
        },
        {
          name: "Orellana"
        },
        {
          name: "La Joya de los Sachas"
        },
        {
          name: "Loreto"
        }
      ];
    }
    if (e.target.value == "Pastaza — 03") {
      this.cantones = [
        {
          name: "Arajuno"
        },
        {
          name: "Mera"
        },
        {
          name: "Pastaza"
        },
        {
          name: "Santa Clara"
        }
      ];
    }
    if (e.target.value == "Pichincha — 02") {
      this.cantones = [
        {
          name: "Cayambe"
        },
        {
          name: "Mejía"
        },
        {
          name: "Pedro Moncayo"
        },
        {
          name: "Pedro Vicente Maldonado"
        },
        {
          name: "Puerto Quito"
        },
        {
          name: "Distrito Metropolitano de Quito"
        },
        {
          name: "Rumiñahui"
        },
        {
          name: "San Miguel de Los Bancos"
        }
      ];
    }
    if (e.target.value == "Santa Elena — 04") {
      this.cantones = [
        {
          name: "La Libertad"
        },
        {
          name: "Salinas"
        },
        {
          name: "Santa Elena"
        }
      ];
    }
    if (e.target.value == "Santo Domingo — 02") {
      this.cantones = [
        {
          name: "La Concordia"
        },
        {
          name: "Santo Domingo"
        }
      ];
    }
    if (e.target.value == "Sucumbíos — 06") {
      this.cantones = [
        {
          name: "Cascales"
        },
        {
          name: "Cuyabeno"
        },
        {
          name: "Gonzalo Pizarro"
        },
        {
          name: "Lago Agrio"
        },
        {
          name: "Putumayo"
        },
        {
          name: "Shushufindi"
        },
        {
          name: "Sucumbíos"
        }
      ];
    }
    if (e.target.value == "Tungurahua — 03") {
      this.cantones = [
        {
          name: "Ambato"
        },
        {
          name: "Baños de Agua Santa"
        },
        {
          name: "Cevallos"
        },
        {
          name: "Mocha"
        },
        {
          name: "Patate"
        },
        {
          name: "Pelileo"
        },
        {
          name: "Píllaro"
        },
        {
          name: "Quero"
        },
        {
          name: "Tisaleo"
        }
      ];
    }
    if (e.target.value == "Zamora Chinchipe — 07") {
      this.cantones = [
        {
          name: "Centinela del Cóndor"
        },
        {
          name: "Chinchipe"
        },
        {
          name: "El Pangui"
        },
        {
          name: "Nangaritza"
        },
        {
          name: "Palanda"
        },
        {
          name: "Paquisha"
        },
        {
          name: "Yacuambi"
        },
        {
          name: "Yantzaza"
        },
        {
          name: "Zamora"
        }
      ];
    }
  }

  ngOnInit() {
    this.buildForm();
    this.setlocalsValidator();
    this.setTributaryValidator();
    this.setQualifiedValidator();
    this.setAllergyValidator();
    this.setConsumedValidator();
    this.setRetirementValidator();
    this.setConadisValidator();
    this.setPrivateValidator();
    this.http.get(`${environment.endpoint}covid-poll/done`).subscribe((data: any) => {
      if (data.done) {
        this.router.navigate(['/client/dashboard'])
      }
    });
  }

  buildForm() {
    this.dataForm = this.formBuilder.group({
      avatar: ['', [Validators.required]],

      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      idNumber: ['', [Validators.required, Validators.min(100000000), Validators.max(9999999999), Validators.pattern('^(([0-1][0-9])|([2][0-4])|30)[0-9]*')]],
      phoneNumber: ['', [Validators.required, Validators.min(1000000), Validators.max(9999999999)]],
      cellphoneNumber: ['', [Validators.required, Validators.min(100000000), Validators.max(9999999999)]],
      emergencyPhone: ['', [Validators.required, Validators.min(1000000), Validators.max(9999999999)]],
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
      productsBeingSold: ['', [Validators.required]], productsBeingSoldSec: [''], productsBeingSoldTri: [''], productsBeingSoldCua: [''], productsBeingSoldQui: [''],
      numberLocals: ['', [Validators.required]],
      localNumberOne: ['', [Validators.required]], localNumberTwo: ['', null], localNumberTri: ['', null],
      predioNumberOne: ['', [Validators.required]], predioNumberTwo: [''], predioNumberTri: [''],
      sectorOne: ['', [Validators.required]], sectorTwo: [''], sectorTri: [''],
      floorOne: ['', [Validators.required]], floorTwo: [''], floorTri: [''],
      hallNumberOne: ['', [Validators.required, Validators.pattern('[0-9]{1,2}[a-bA-B]{1}$')]], hallNumberTwo: ['', [Validators.pattern('[0-9]{1,2}[a-bA-B]{1}$')]], hallNumberTri: ['', [Validators.pattern('[0-9]{1,2}[a-bA-B]{1}$')]],
      originOfProducts: ['', [Validators.required]],
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
      affiliatedToPrivate: [''],
      conadisLicense: ['', [Validators.required]],
      disability: [''], 
      disabilityPer: [''],
      retirement: ['', [Validators.required]],
      retirementDetails: ['']
    });
  }

  setlocalsValidator() {
    const localNumberTwoControl = this.dataForm.get('localNumberTwo');
    const localNumberTriControl = this.dataForm.get('localNumberTri');
    const predioNumberTwoControl = this.dataForm.get('predioNumberTwo');
    const predioNumberTriControl = this.dataForm.get('predioNumberTri');
    const sectorTwoControl = this.dataForm.get('sectorTwo');
    const sectorTriControl = this.dataForm.get('sectorTri');
    const floorTwoControl = this.dataForm.get('floorTwo');
    const floorTriControl = this.dataForm.get('floorTri');
    const hallNumberTwoControl = this.dataForm.get('hallNumberTwo');
    const hallNumberTriControl = this.dataForm.get('hallNumberTri');

    this.dataForm.get('numberLocals').valueChanges
      .subscribe(numberLocals => {
        if (numberLocals === '1') {
          localNumberTwoControl.setValidators(null);
          predioNumberTwoControl.setValidators(null);
          sectorTwoControl.setValidators(null);
          floorTwoControl.setValidators(null);
          hallNumberTwoControl.setValidators(null);
          
          localNumberTriControl.setValidators(null);
          predioNumberTriControl.setValidators(null);
          sectorTriControl.setValidators(null);
          floorTriControl.setValidators(null);
          hallNumberTriControl.setValidators(null);
        }
        if (numberLocals === '2') {
          localNumberTwoControl.setValidators([Validators.required]);
          predioNumberTwoControl.setValidators([Validators.required]);
          sectorTwoControl.setValidators([Validators.required]);
          floorTwoControl.setValidators([Validators.required]);
          hallNumberTwoControl.setValidators([Validators.required]);

          localNumberTriControl.setValidators(null);
          predioNumberTriControl.setValidators(null);
          sectorTriControl.setValidators(null);
          floorTriControl.setValidators(null);
          hallNumberTriControl.setValidators(null);
        }
        if (numberLocals === '3' ) {
          localNumberTwoControl.setValidators([Validators.required]);
          predioNumberTwoControl.setValidators([Validators.required]);
          sectorTwoControl.setValidators([Validators.required]);
          floorTwoControl.setValidators([Validators.required]);
          hallNumberTwoControl.setValidators([Validators.required]);
          
          localNumberTriControl.setValidators([Validators.required]);
          predioNumberTriControl.setValidators([Validators.required]);
          sectorTriControl.setValidators([Validators.required]);
          floorTriControl.setValidators([Validators.required]);
          hallNumberTriControl.setValidators([Validators.required]);
        }
        localNumberTwoControl.updateValueAndValidity;
        predioNumberTwoControl.updateValueAndValidity;
        sectorTwoControl.updateValueAndValidity;
        floorTwoControl.updateValueAndValidity;
        hallNumberTwoControl.updateValueAndValidity;
        
        localNumberTriControl.updateValueAndValidity;
        predioNumberTriControl.updateValueAndValidity;
        sectorTriControl.updateValueAndValidity;
        floorTriControl.updateValueAndValidity;
        hallNumberTriControl.updateValueAndValidity;
      })
  }

  setTributaryValidator() {
    const taxRucControl = this.dataForm.get('taxNumberRuc');
    const taxRiseControl = this.dataForm.get('taxNumberRise');
    const keepAccountingControl = this.dataForm.get('keepAccounting');

    this.dataForm.get('taxType').valueChanges
      .subscribe(taxType => {
        if (taxType === 'ruc') {
          taxRucControl.setValidators([Validators.required, Validators.min(100000000000), Validators.max(9999999999999), Validators.pattern('^(([0-1][0-9])|([2][0-4])|30)[0-9]{8}(([0][0][1]))')]);
          taxRiseControl.setValidators(null);
          keepAccountingControl.setValidators([Validators.required]);
        }
        if (taxType === 'rise') {
          taxRucControl.setValidators(null);
          taxRiseControl.setValidators([Validators.required, Validators.min(100000000), Validators.max(9999999999), Validators.pattern('^(([0-1][0-9])|([2][0-4])|30)[0-9]*')]);
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
      })
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
      })
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
      })
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
      })
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
      })
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
      })
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
      })
  }

  fileUpload(files: FileList) {
    this.fileToUpload = files.item(0);
  }


  preview(files: FileList) {
    if (files.length === 0)
      return;
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
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
    var taxNum: String;
    var products: {};
    var locals: { localNumber: String; predioNumber: String; sector: String; floor: String; hallNumber: String; }[];

    if (this.dataForm.value.numberLocals == "1") {
      locals = [
        {
          localNumber: this.dataForm.value.localNumberOne,
          predioNumber: this.dataForm.value.predioNumberOne,
          sector: this.dataForm.value.sectorOne,
          floor: this.dataForm.value.floorOne,
          hallNumber: this.dataForm.value.hallNumberOne.toUpperCase()
        }
      ]
    }
    else if (this.dataForm.value.numberLocals == "2") {
      locals = [
        {
          localNumber: this.dataForm.value.localNumberOne,
          predioNumber: this.dataForm.value.predioNumberOne,
          sector: this.dataForm.value.sectorOne,
          floor: this.dataForm.value.floorOne,
          hallNumber: this.dataForm.value.hallNumberOne.toUpperCase()
        },
        {
          localNumber: this.dataForm.value.localNumberTwo,
          predioNumber: this.dataForm.value.predioNumberTwo,
          sector: this.dataForm.value.sectorTwo,
          floor: this.dataForm.value.floorTwo,
          hallNumber: this.dataForm.value.hallNumberTwo.toUpperCase()
        }
      ]
    }
    else if (this.dataForm.value.numberLocals == "3") {
      locals = [
        {
          localNumber: this.dataForm.value.localNumberOne,
          predioNumber: this.dataForm.value.predioNumberOne,
          sector: this.dataForm.value.sectorOne,
          floor: this.dataForm.value.floorOne,
          hallNumber: this.dataForm.value.hallNumberOne.toUpperCase()
        },
        {
          localNumber: this.dataForm.value.localNumberTwo,
          predioNumber: this.dataForm.value.predioNumberTwo,
          sector: this.dataForm.value.sectorTwo,
          floor: this.dataForm.value.floorTwo,
          hallNumber: this.dataForm.value.hallNumberTwo.toUpperCase()
        },
        {
          localNumber: this.dataForm.value.localNumberTri,
          predioNumber: this.dataForm.value.predioNumberTri,
          sector: this.dataForm.value.sectorTri,
          floor: this.dataForm.value.floorTri,
          hallNumber: this.dataForm.value.hallNumberTri.toUpperCase()
        }
      ]
    }

    if (this.dataForm.value.taxType == "ruc") {
      taxNum = this.dataForm.value.taxNumberRuc;
    }
    else if (this.dataForm.value.taxType == "rise") {
      taxNum = this.dataForm.value.taxNumberRise;
    }
    else {
      taxNum = '';
    } 

    if (!this.dataForm.value.productsBeingSoldSec) {
      products = {
        "1": this.dataForm.value.productsBeingSold
      }
    }
    else if (!this.dataForm.value.productsBeingSoldTri) {
      products = {
        "1": this.dataForm.value.productsBeingSold,
        "2": this.dataForm.value.productsBeingSoldSec
      }
    }
    else if (!this.dataForm.value.productsBeingSoldCua) {
      products = {
        "1": this.dataForm.value.productsBeingSold,
        "2": this.dataForm.value.productsBeingSoldSec,
        "3": this.dataForm.value.productsBeingSoldTri
      }
    }
    else if (!this.dataForm.value.productsBeingSoldQui) {
      products = {
        "1": this.dataForm.value.productsBeingSold,
        "2": this.dataForm.value.productsBeingSoldSec,
        "3": this.dataForm.value.productsBeingSoldTri,
        "4": this.dataForm.value.productsBeingSoldCua
      }
    }
    else if (this.dataForm.value.productsBeingSoldQui) {
      products = {
        "1": this.dataForm.value.productsBeingSold,
        "2": this.dataForm.value.productsBeingSoldSec,
        "3": this.dataForm.value.productsBeingSoldTri,
        "4": this.dataForm.value.productsBeingSoldCua,
        "5": this.dataForm.value.productsBeingSoldQui
      }
    }
    
    let tributary: Tributary = {
      taxType: this.dataForm.value.taxType,
      taxNumber: taxNum,
      keepAccounting: this.dataForm.value.keepAccounting
    };

    let comercial: Comercial = {
     personType: this.dataForm.value.personType,
     businessName: this.dataForm.value.businessName,
     socialReason: this.dataForm.value.socialReason,
     productsBeingSold: JSON.stringify(products),
     numberLocals: this.dataForm.value.numberLocals,
     originOfProducts: this.dataForm.value.originOfProducts,
     qualifiedCraftman: this.dataForm.value.qualifiedCraftman,
     craftmanCalification: this.dataForm.value.craftmanCalification,
     sellerType: this.dataForm.value.sellerType,
     locals: locals 
    };

    let medical: Medical = {
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
     conadisLicenseType: this.dataForm.value.disability,
     retirement: this.dataForm.value.retirement,
     retirementDetails: this.dataForm.value.retirementDetails,
     conadisPercentage: this.dataForm.value.disabilityPer
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

    let avatar = this.fileToUpload;
    
    if (!this.dataForm.valid) {
      Swal.fire({
        title: 'Oh no',
        text: `Parece que algo ha salido mal. Comprueba los datos ingresados e intenta de nuevo.`,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return false;
    } else {
      this._formService.upload(tributary, comercial, medical, personal, avatar);
    }
  }
}
