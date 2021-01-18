import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infiniti',
  templateUrl: './infiniti.page.html',
  styleUrls: ['./infiniti.page.scss'],
})
export class InfinitiPage implements OnInit {

  data: any[] = Array(20);

  @ViewChild( IonInfiniteScroll ) infinitiScroll : IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData(event){
  //  console.log(event);

  if( this.data.length > 50){
    this.infinitiScroll.complete();
    this.infinitiScroll.disabled = true;
    return;
  }
   
  setTimeout(() => {

      const nuevoArr = Array(20);
      this.data.push( ...nuevoArr);

      this.infinitiScroll.complete();
    }, 1500);
  
  }

}
