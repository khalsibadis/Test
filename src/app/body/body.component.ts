import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder,FormGroup,  FormControl,  Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { Pays } from '../Model/pays';
import { SharedServiceService } from '../service/shared-service.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  updateForm: FormGroup;
  pays:Pays



  constructor(
    private sharedService: SharedServiceService,
    private router: Router,
    private fb: FormBuilder,
    private http : HttpClient


  ) {



    let formControls = {
      nom: new FormControl('', [Validators.required]),
      superficie: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]'),
      ]),
      contient: new FormControl('', [Validators.required]),
      produit: new FormControl('', [Validators.required]),
      population: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),

    };

    this.updateForm = this.fb.group(formControls);
  }
  get nom() {
    return this.updateForm.get('nom');
  }
  get superficie() {
    return this.updateForm.get('superficie');
  }
  get contient() {
    return this.updateForm.get('contient');
  }
  get produit() {
    return this.updateForm.get('produit');
  }
  get population() {
    return this.updateForm.get('population');
  }


  ngOnInit(): void {
    this.sharedService.sharedPays.subscribe((listPays: any) => {
      this.listPays = listPays;
    });






  }

  /////Modal
  @ViewChild('largeModal') public largeModal: ModalDirective;
  searchText: any;

  listPays : Pays[];



  /////////////Tri
  triNom() {
    this.listPays.sort((a, b) => +(a.nom > b.nom) || -(a.nom < b.nom))
  }

  triPop() {
    this.listPays.sort((a, b) => {
      return a.population - b.population;
    });
  }

  triSuper() {
    this.listPays.sort((a, b) => {
      return a.superficie - b.superficie;
    });
  }

  triProd() {
    this.listPays.sort((a, b) => {
      return a.produit - b.produit;
    });
  }
  triCont() {
    this.listPays.sort((a, b) => +(a.contient> b.contient) || -(a.contient < b.contient))

    };


  ev: any;
  upData(pays: any) {
    // this.ev=localStorage.setItem("paysDetails",JSON.stringify(pays))
    this.sharedService.nextPaysDetail(pays);
    this.router.navigate(['pays']);
  }





  updatePays(pays1:Pays){


    let pays=new Pays()
    pays.id=pays1.id
    pays.nom=this.nom.value
    pays.superficie=this.superficie.value
    pays.contient=this.contient.value
    pays.produit=this.produit.value
    pays.population=this.population.value
    pays.image=pays1.image

      this.sharedService.updatePays(pays).subscribe(
        res=>{
          window.location.reload();;

        },
        err=>{
          console.log("erreur")
        }
      );
  }

  update(pays:Pays){
      this.updateForm.patchValue({
        nom: pays.nom,
        superficie:pays.superficie,
        contient: pays.contient,
        produit: pays.produit,
        population: pays.population

      })
      this.pays=pays

  }







  filterNom = false
  filterPopulation = false
  filterSuperficie = false
  filterContinent = false
  filterProdBrut = false


  nameFilter=''
  populationFilter=''
  superficieFilter=''
  continentFilter=''
  prodBrutFilter=''

  filtrer=()=>{
    this.sharedService.getPaysList(this.nameFilter,this.populationFilter,this.continentFilter,this.superficieFilter,this.prodBrutFilter).subscribe(
      (listPays: any) =>
        this.listPays = listPays
    )

  }
}









