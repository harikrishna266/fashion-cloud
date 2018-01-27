import { Component, Input, Output, OnChanges, EventEmitter, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit, OnChanges {

  @Input() totalRecords;
  @Input() currentPage;
  @Input() recordPerPage;
  @Output() goToPage: EventEmitter<number> = new EventEmitter();

  public buttons: any[] = [];

  constructor() { }

  ngOnInit() { }

  renderPaginator() {
    this.buttons = [];
    this.buttons = ['First'];
    const buttonCount = Math.round(this.totalRecords / this.recordPerPage);
    const startPage = (this.currentPage < 5) ? 1 : this.currentPage - 5;
    const margin = (this.currentPage < 5) ? 5 - this.currentPage :     0 ;
    const endPage = ((this.currentPage + 5) < buttonCount) ? this.currentPage + 5 + margin  : buttonCount;
    for (let i = startPage; i <= endPage; i++) {
      this.buttons = [...this.buttons, i];
    }
    this.buttons = [...this.buttons, 'last'];
  }

  ngOnChanges(changes: SimpleChanges): void {
   this.renderPaginator();
  }

  goTo(number): void {
    if (number === 'last') {
     this.goToPage.next(Math.round(this.totalRecords / this.recordPerPage)) ;
    } else if (number === 'First') {
      this.goToPage.next(1) ;
    } else {
        this.goToPage.next(number) ;
    }
  }
}
