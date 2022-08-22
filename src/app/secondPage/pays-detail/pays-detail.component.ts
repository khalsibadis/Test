import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/service/shared-service.service';

@Component({
  selector: 'app-pays-detail',
  templateUrl: './pays-detail.component.html',
  styleUrls: ['./pays-detail.component.css'],
})
export class PaysDetailComponent implements OnInit {
  constructor(
    private sharedService: SharedServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sharedService.sharedPaysDetail.subscribe((pays: any) => {
      this.pays = pays;
    });
  }

  pays: any;
}
