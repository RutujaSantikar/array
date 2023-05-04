import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'array';

  ngOnInit(): void {
    this.displayName();
  }

  data = [
    {
      data1: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
      ],
    },
  ];

  data2 = [
    {
      id: 5,
      name: 'Rutuja Santikar',
    },
  ];

  displayName() {
    for (let i = 0; i < this.data.length; i++) {
      for (let j = 0; j < this.data[i].data1.length; j++) {
        for (let k = 0; k < this.data2.length; k++) {
          if (this.data[i].data1[j].id == this.data2[k].id) {
            console.log('hello');
            console.log(this.data2[k].name);
          }
        }
      }
    }
  }
}
