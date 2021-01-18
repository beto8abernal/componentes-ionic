import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNacimiento: Date = new Date();

  customYearValues = [2025, 2016, 2008, 2004, 2002, 2000, 1990, 1985];

  customPickerOptions = {
    buttons: [{
      text: 'Hola',
      handler: (event) => {
        console.log(event);
      }
    },
    {
      text: 'Mundo',
      handler: () => {
        console.log('Bye bye');
      }
    }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(fecha: any) {
    console.log(fecha);
    console.log(new Date(fecha.detail.value));
  }

}
