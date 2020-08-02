import { Component, OnInit } from '@angular/core';

import { adMime } from '../comum/ferramenta/ferramenta-comum';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.css']
})
export class CasaComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

  public adMime(foto) {
    return adMime(foto);
  }

}
