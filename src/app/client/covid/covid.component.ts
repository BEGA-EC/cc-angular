import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CovidService } from 'src/app/services/service.index';
import { Covid } from 'src/app/models/covid.model';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  covidForm: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder, public _covidService: CovidService, public _loadingService: LoadingService, public http: HttpClient, public router: Router) { }

  ngOnInit() {
    this.covidForm = this.formBuilder.group({
      cough: ['', [Validators.required]],
      coughComment: [''],
      fever: ['', [Validators.required]],
      feverComment: [''],
      headache: ['', [Validators.required]],
      headacheComment: [''],
      dyspnoea: ['', [Validators.required]],
      dyspnoeaComment: [''],
      diarrheaOrVomiting: ['', [Validators.required]],
      diarrheaOrVomitingComment: [''],
      lossOfSmell: ['', [Validators.required]],
      lossOfSmellComment: [''],
      lossOfTaste: ['', [Validators.required]],
      lossOfTasteComment: [''],
      inContactWithFeverOrCoughSickPeople: ['', [Validators.required]],
      inContactWithFeverOrCoughSickPeopleComment: [''],
      hasTravaledInThePast14Days: ['', [Validators.required]],
      hasTravaledInThePast14DaysComment: [''],
      hasGoneToDoctorDueToRespiratorySymptoms: ['', [Validators.required]],
      hasGoneToDoctorDueToRespiratorySymptomsComment: [''],
      consumedRespiratoryMedicamentInThePast14Days: ['', [Validators.required]],
      consumedRespiratoryMedicamentInThePast14DaysComment: [''],
      withoutFeverLast3DaysWithoutMedicaments: ['', [Validators.required]],
      withoutFeverLast3DaysWithoutMedicamentsComment: [''],
      haveReceivedARelativeWithRiskOfCovidInThePast14Days: ['', [Validators.required]],
      haveReceivedARelativeWithRiskOfCovidInThePast14DaysComment: [''],
      haveLivedWithSomeoneWithRiskOfCovidInThePast14Days: ['', [Validators.required]],
      haveLivedWithSomeoneWithRiskOfCovidInThePast14DaysComment: [''],
      diabetes: ['', [Validators.required]],
      diabetesComment: [''],
      cardiorespiratoryDiseases: ['', [Validators.required]],
      cardiorespiratoryDiseasesComment: [''],
      kidneyDiseases: ['', [Validators.required]],
      kidneyDiseasesComment: [''],
      respiratoryDiseases: ['', [Validators.required]],
      respiratoryDiseasesComment: [''],
      immunodeficiency: ['', [Validators.required]],
      immunodeficiencyComment: [''],
      pregnantOrLactancy: ['', [Validators.required]],
      pregnantOrLactancyComment: [''],
      cancer: ['', [Validators.required]],
      cancerComment: [''],
      over60YearsOld: ['', [Validators.required]],
      over60YearsOldComment: [''],
      allInformationIsTrue: ['', [Validators.required]]
    });
    this.http.get(`${environment.endpoint}covid-poll/done`).subscribe((data: any) => {
      if (data.done) {
        this.router.navigate(['/client/dashboard'])
      }
    });
  }

  get errorControl() {
    return this.covidForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;

    let poll: Covid = {
      cough: this.covidForm.value.cough,
      coughComment: this.covidForm.value.coughComment,
      fever: this.covidForm.value.fever,
      feverComment: this.covidForm.value.feverComment,
      headache: this.covidForm.value.headache,
      headacheComment: this.covidForm.value.headacheComment,
      dyspnoea: this.covidForm.value.dyspnoea,
      dyspnoeaComment: this.covidForm.value.dyspnoeaComment,
      diarrheaOrVomiting: this.covidForm.value.diarrheaOrVomiting,
      diarrheaOrVomitingComment: this.covidForm.value.diarrheaOrVomitingComment,
      lossOfSmell: this.covidForm.value.lossOfSmell,
      lossOfSmellComment: this.covidForm.value.lossOfSmellComment,
      lossOfTaste: this.covidForm.value.lossOfTaste,
      lossOfTasteComment: this.covidForm.value.lossOfTasteComment,
      inContactWithFeverOrCoughSickPeople: this.covidForm.value.inContactWithFeverOrCoughSickPeople,
      inContactWithFeverOrCoughSickPeopleComment: this.covidForm.value.inContactWithFeverOrCoughSickPeopleComment,
      hasTravaledInThePast14Days: this.covidForm.value.hasTravaledInThePast14Days,
      hasTravaledInThePast14DaysComment: this.covidForm.value.hasTravaledInThePast14DaysComment,
      hasGoneToDoctorDueToRespiratorySymptoms: this.covidForm.value.hasGoneToDoctorDueToRespiratorySymptoms,
      hasGoneToDoctorDueToRespiratorySymptomsComment: this.covidForm.value.hasGoneToDoctorDueToRespiratorySymptomsComment,
      consumedRespiratoryMedicamentInThePast14Days: this.covidForm.value.consumedRespiratoryMedicamentInThePast14Days,
      consumedRespiratoryMedicamentInThePast14DaysComment: this.covidForm.value.consumedRespiratoryMedicamentInThePast14DaysComment,
      withoutFeverLast3DaysWithoutMedicaments: this.covidForm.value.withoutFeverLast3DaysWithoutMedicaments,
      withoutFeverLast3DaysWithoutMedicamentsComment: this.covidForm.value.withoutFeverLast3DaysWithoutMedicamentsComment,
      haveReceivedARelativeWithRiskOfCovidInThePast14Days: this.covidForm.value.haveReceivedARelativeWithRiskOfCovidInThePast14Days,
      haveReceivedARelativeWithRiskOfCovidInThePast14DaysComment: this.covidForm.value.haveReceivedARelativeWithRiskOfCovidInThePast14DaysComment,
      haveLivedWithSomeoneWithRiskOfCovidInThePast14Days: this.covidForm.value.haveLivedWithSomeoneWithRiskOfCovidInThePast14Days,
      haveLivedWithSomeoneWithRiskOfCovidInThePast14DaysComment: this.covidForm.value.haveLivedWithSomeoneWithRiskOfCovidInThePast14DaysComment,
      diabetes: this.covidForm.value.diabetes,
      diabetesComment: this.covidForm.value.diabetesComment,
      cardiorespiratoryDiseases: this.covidForm.value.cardiorespiratoryDiseases,
      cardiorespiratoryDiseasesComment: this.covidForm.value.cardiorespiratoryDiseasesComment,
      kidneyDiseases: this.covidForm.value.kidneyDiseases,
      kidneyDiseasesComment: this.covidForm.value.kidneyDiseasesComment,
      respiratoryDiseases: this.covidForm.value.respiratoryDiseases,
      respiratoryDiseasesComment: this.covidForm.value.respiratoryDiseasesComment,
      immunodeficiency: this.covidForm.value.immunodeficiency,
      immunodeficiencyComment: this.covidForm.value.immunodeficiencyComment,
      pregnantOrLactancy: this.covidForm.value.pregnantOrLactancy,
      pregnantOrLactancyComment: this.covidForm.value.pregnantOrLactancyComment,
      cancer: this.covidForm.value.cancer,
      cancerComment: this.covidForm.value.cancerComment,
      over60YearsOld: this.covidForm.value.over60YearsOld,
      over60YearsOldComment: this.covidForm.value.over60YearsOldComment,
      allInformationIsTrue: this.covidForm.value.allInformationIsTrue
    };

    const booleans = [
      'cough',
      'fever',
      'headache',
      'dyspnoea',
      'diarrheaOrVomiting',
      'lossOfSmell',
      'lossOfTaste',
      'inContactWithFeverOrCoughSickPeople',
      'hasTravaledInThePast14Days',
      'hasGoneToDoctorDueToRespiratorySymptoms',
      'consumedRespiratoryMedicamentInThePast14Days',
      'withoutFeverLast3DaysWithoutMedicaments',
      'haveReceivedARelativeWithRiskOfCovidInThePast14Days',
      'haveLivedWithSomeoneWithRiskOfCovidInThePast14Days',
      'diabetes',
      'cardiorespiratoryDiseases',
      'kidneyDiseases',
      'respiratoryDiseases',
      'immunodeficiency',
      'pregnantOrLactancy',
      'cancer',
      'over60YearsOld',
      'allInformationIsTrue',
    ];
    for( let booleanParameter of booleans) {
      poll[booleanParameter] = poll[booleanParameter] === 'true';
    };

    if (!this.covidForm.valid) {
      Swal.fire({
        title: 'Oh no',
        text: `Parece que algo ha salido mal. Comprueba los datos ingresados e intenta de nuevo.`,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return false;
    } else {
      this._covidService.postCode(poll);
    }
  }
}