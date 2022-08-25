import {
  HttpClient,

} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pays } from '../Model/pays';

@Injectable({
  providedIn: 'root',
})
export class SharedServiceService {
  listPays = [];

  constructor(private http: HttpClient) {
    this.getPaysList().subscribe((res: any) => {
      this.listPays = res;
      this.listPaysS.next([...this.listPays]);
    });
  }



  ////////////////
  private listPaysS = new BehaviorSubject([]);
  sharedPays = this.listPaysS.asObservable();

/////////////////////


private PaysDetail = new BehaviorSubject({});
sharedPaysDetail = this.PaysDetail.asObservable();

////////////mise a jour shared service SharedPays
  nextPays(newPays) {
    this.addPays({ id: this.listPays.length + 1, ...newPays }).subscribe(
      (res) => this.updatePaysList()
    );
  }


  nextPaysDetail(PaysDetail) {
    this.PaysDetail.next(PaysDetail);
    console.log(this.PaysDetail);
  }

  addPays(newPays) {
    return this.http.post('http://localhost:3000/listPays', newPays);
  }

  getPaysList(nom='',population='',continent='',superficie='',produit='') {
    return this.http.get('http://localhost:3000/listPays?nom_like='+nom+'&contient_like='+ continent+'&superficie_gte='+superficie+'&population_gte='+population+'&produit_like='+produit);
  }


  updatePaysList() {
    this.getPaysList().subscribe((res: any) => {
      console.log(res);

      this.listPays = res;
      this.listPaysS.next([...this.listPays]);
    });
  }

  updatePays(pays: Pays) {
    return this.http.put('http://localhost:3000/listPays/' + pays.id, pays);
  }
}
