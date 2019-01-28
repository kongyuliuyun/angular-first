import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})


export class StartComponent implements OnInit ,OnChanges{
  @Input()
  private rating:number=0;
  @Input()
  private readonly:boolean =true;
  @Output()
  private ratingChange:EventEmitter<number>=new EventEmitter();
  private stars:boolean[];
  constructor() {

  }
  ngOnInit() {
    this.stars=[];
    for  (let i=1;i<=5;i++) {
      this.stars.push(i>this.rating);
    }

}
  clickStar(index:number){
    if(!this.readonly){
      this.rating =index+1;
      this.ngOnInit();
      this.ratingChange.emit(this.rating)
    }

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit()
  }
}
