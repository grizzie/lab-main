import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-behind-the-scene',
  templateUrl: './behind-the-scene.component.html',
  styleUrls: ['./behind-the-scene.component.css']
})
export class BehindTheSceneComponent implements OnInit {

  constructor() { }
  gat1: string = "assets/images/gathering-1.jpg" ;
  gat2: string = "assets/images/gathering-2.jpg" ;
  gat3: string = "assets/images/gathering-3.jpg" ;
  gat4: string = "assets/images/gathering-4.jpg" ;

  pic1: string = "assets/images/pic-1.jpg" ;
  pic2: string = "assets/images/pic-2.jpg" ;
  pic3: string = "assets/images/pic-3.jpg" ;
  pic4: string = "assets/images/pic-4.jpg" ;

  contest1: string = "assets/images/contest-1.jpg" ;
  conference1: string = "assets/images/conference-1.jpg" ;

  ngOnInit(): void {
  }

}
