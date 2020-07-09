import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedService } from '../shared/services/shared.service';
import { template } from '../constants/app.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  languageForm = new FormGroup({
    language: new FormControl('en')
  });

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.languageForm.get('language').valueChanges.subscribe(val => {
      this.sharedService.setLanguage(val);
    })
  }
}

