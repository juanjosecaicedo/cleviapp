import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rapido',
  templateUrl: './rapido.component.html',
  styleUrls: ['./rapido.component.scss']
})
export class RapidoComponent implements OnInit {

  public indexSlide = 1;
  public animationSlide = false;
  constructor() { }

  ngOnInit(): void {
  }

  public plusSlides(n: number) {
    this.showSlides(this.indexSlide += n);
  }

  private showSlides(numero: number) {
    const slides: NodeListOf<Element> | any = document.querySelectorAll('.slider-container .slider');
    if (numero > slides.length) { this.indexSlide = 1 }
    if (numero < 1) { this.indexSlide = slides.length }
    const slideShow = [...slides].find((el: any): boolean => {
      return el.classList.contains('show');
    });

    (slideShow !== undefined) ? slideShow.classList.remove('show') : null;
    [...slides][this.indexSlide - 1].classList.add('show');
    this.animationSlide = true;
  }


}
