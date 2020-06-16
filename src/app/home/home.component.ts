import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { ABBREVIATIONS } from '../constants/app.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lang: string;
  abbreviations = ABBREVIATIONS;
  displayedColumns = ['abbr', 'fullForm'];

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.lang = this.sharedService.getLanguage();
    console.log(this.lang);
  }

}
