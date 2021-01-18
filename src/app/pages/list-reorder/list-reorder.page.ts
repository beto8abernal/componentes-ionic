import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ['Luffy', 'Zoro', 'Nami', 'Usopp', 'Franky', 'Robin', 'Jimbe', 'Sanji', 'Brook'];

  reoderDisabled :boolean = true;

  constructor() { }

  ngOnInit() {
  }

  doReorder(event: any) {
    console.log(event);

    const itemMovido = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMovido);

    event.detail.complete();

    console.log(this.personajes);
  }

}
