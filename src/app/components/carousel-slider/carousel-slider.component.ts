import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousel-slider',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.scss'],
})
export class CarouselSliderComponent implements OnInit {

@Input() template: ElementRef;
@Input() callback: any;

  private indexSlide = 1;
  constructor() { }

  ngOnInit(): void {
    document.querySelector('.slider-container .slider').classList.add('show');

    console.log(this.template);
    console.log(this.callback);
  }

  public next(): void {
    const n = 1;
    this.showSlide(this.indexSlide += n);
  }

  public prev(): void {
    const n = -1;
    this.showSlide(this.indexSlide += n);
  }

  private showSlide(numero: number) {
    const slides: NodeListOf<Element> | any = document.querySelectorAll('.slider-container .slider');
    if (numero > slides.length) { this.indexSlide = 1 }
    if (numero < 1) { this.indexSlide = slides.length }
    const slideShow = [...slides].find((el: any): boolean => {
      return el.classList.contains('show');
    });

    (slideShow !== undefined) ? slideShow.classList.remove('show') : null;
    [...slides][this.indexSlide - 1].classList.add('show');
  }

}
