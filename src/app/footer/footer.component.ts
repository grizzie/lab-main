import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  anio: number = new Date().getFullYear();
  logo: string = "assets/images/AIoT-logo.png" ;

  constructor() { }

  ngOnInit(): void {
  }

}
