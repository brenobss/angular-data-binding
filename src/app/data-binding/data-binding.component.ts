import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';

  urlImage: string = 'https://i.picsum.photos/id/76/200/300.jpg?hmac=SWpe2KMM2qFiQ8C8WHIZilaJb7KVkgOVVJPTbasGyUU';

  getValor() {
    return 2;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
