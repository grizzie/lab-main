import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {

  constructor() { }
  pic1: string = "assets/images/awards-1.jpg" ;
  ngOnInit(): void {
  }

}
