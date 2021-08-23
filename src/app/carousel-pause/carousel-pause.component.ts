import { Component, OnInit , ViewChild} from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  

@Component({
  selector: 'app-carousel-pause',
  templateUrl: './carousel-pause.component.html',
  styleUrls: ['./carousel-pause.component.css']
})
export class CarouselPauseComponent implements OnInit {
  constructor() { }
  goToLink(url: string){
    window.open(url, "https://smiletaiwan.cw.com.tw/article/3982");
}
  // constructor(config: NgbCarouselConfig) {  
  //   config.interval = 2000;  
  //   config.wrap = true;  
  //   config.keyboard = false;  
  //   config.pauseOnHover = false;  
  // }  
  myimage: string = "assets/images/img1.jpg" ;
  pic1: string = "assets/images/pic1.png" ;
  pic2: string = "assets/images/pic2.png" ;
  myVar: string = 'https://smiletaiwan.cw.com.tw/article/3982';

  ngOnInit(): void {
  }
  // images = [
  //   {path: 'assets/images/pic1.jpg'},
  //   {path: 'assets/images/pic2.jpg'},

  // ]
  // paused = false;
  // unpauseOnArrow = false;
  // pauseOnIndicator = false;
  // pauseOnHover = true;
  // pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  // togglePaused() {
  //   if (this.paused) {
  //     this.carousel.cycle();
  //   } else {
  //     this.carousel.pause();
  //   }
  //   this.paused = !this.paused;
  // }

  // onSlide(slideEvent: NgbSlideEvent) {
  //   if (this.unpauseOnArrow && slideEvent.paused &&
  //     (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
  //     this.togglePaused();
  //   }
  //   if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
  //     this.togglePaused();
  //   }
  // }
}

