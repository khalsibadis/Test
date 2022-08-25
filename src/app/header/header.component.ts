import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ngxCsv } from 'ngx-csv/ngx-csv';

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { SharedServiceService } from '../service/shared-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  addForm: FormGroup;
  list: any;

  constructor(
    private fb: FormBuilder,
    private sharedService: SharedServiceService
  ) {
    let formControls = {
      nom: new FormControl('', [Validators.required]),
      superficie: new FormControl('', [Validators.required, Validators.min(0)]),
      contient: new FormControl('', [Validators.required]),
      produit: new FormControl('', [Validators.required, Validators.min(0)]),
      population: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    };

    this.addForm = this.fb.group(formControls);
  }


  ngOnInit(): void {
    console.log(this.addForm.value);
    this.getList();
  }
  savePays() {
    this.sharedService.nextPays(this.addForm.value);
  }


  get nom() {
    return this.addForm.get('nom');
  }
  get superficie() {
    return this.addForm.get('superficie');
  }
  get contient() {
    return this.addForm.get('contient');
  }
  get produit() {
    return this.addForm.get('produit');
  }
  get population() {
    return this.addForm.get('population');
  }
  get image() {
    return this.addForm.get('image');
  }


  @ViewChild('largeModal') public largeModal: ModalDirective;

  updateTable() {
    this.sharedService.updatePaysList();
  }

  getList() {
    this.sharedService.getPaysList().subscribe(
      (res) => {
        this.list = res;
        console.log(res);

      },
      (err) => {
        console.log(err);
      }
    );
  }

  ///////Download File CSV
  fileDownload() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'report',
      useBom: true,
      noDownload: false,
      headers: [
        'nom',
        'Populatuin',
        'Superficie',
        'contient',
        'produit',
        'image',
      ],
    };

    new ngxCsv(this.list, 'report', options);
  }
  reset() {
    this.addForm.reset();
  }




  selectedFile: File = null;


  onFileSelected(event){
console.log(event.target.files[0]);

    this.selectedFile =<File> event.target.files[0]
console.log(event);
  }


}
