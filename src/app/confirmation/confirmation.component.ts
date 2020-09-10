import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService, CodeService } from '../services/service.index';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  codeForm: FormGroup;
  isSubmitted = false;
  code: string;

  constructor(
    public formBuilder: FormBuilder,
    public _userService: UserService,
    public _codeService: CodeService,
    public router: Router,
    public activatedRoute: ActivatedRoute) { 
      this.activatedRoute.queryParams.subscribe(params => {
      this.code = params['code'];
      this._codeService.postCode(this.code);
    });
    }

  ngOnInit() {
  }
}