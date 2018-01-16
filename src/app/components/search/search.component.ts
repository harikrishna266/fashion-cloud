import { Component, EventEmitter, Output,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public flickerSearchForm:FormGroup;
  @Output() search = new EventEmitter();

  constructor(public fb: FormBuilder ) {   
    this.flickerSearchForm = this.fb.group({
      tags: ['', Validators.required],
      userid: ['']
    })
  }

  ngOnInit() {
  }

  makeSearch() {
    this.search.next(this.flickerSearchForm.value);
    this.flickerSearchForm.reset();
  }

  cancelSearch() {

  }

}
