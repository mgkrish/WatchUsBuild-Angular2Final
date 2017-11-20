import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import { Params } from '@angular/router/src/shared';
@Component({
  selector: 'app-race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.css']
})
export class RaceDetailComponent implements OnInit {

  private raceId;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((param: Params) => this.raceId = param['id']);
  }

}
