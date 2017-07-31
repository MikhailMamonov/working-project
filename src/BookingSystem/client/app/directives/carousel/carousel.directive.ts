import { Directive, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

import 'hammerjs';

@Directive({
  selector: '[bsCarousel]'
})
export class CarouselDirective implements OnInit, AfterViewInit {
  private readonly _carouselClass = 'bs-carousel';
  private readonly _carouselContainerClass = 'bs-carousel__container';
  private readonly _carouselContainerItemClass = 'bs-carousel__container-item';
  private readonly _carouselContainerAnimatingClass = `${this._carouselContainerClass}_animating`;

  private readonly _sensitivity = 25;

  private _containerQuery: string;
  private _panesQuery: string;

  private _container: Element;
  private _panes: NodeList;

  private _panesCount: number;
  private _currentPane = 0;

  private _hammerManager: HammerManager;
  private _timer: any;

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this._containerQuery = `#${this._elementRef.nativeElement.id}.${this._carouselClass} > .${this._carouselContainerClass}`;
    this._panesQuery = `${this._containerQuery} > .${this._carouselContainerItemClass}`;
  }

  ngAfterViewInit(): void {
    this._container = this._elementRef.nativeElement.querySelector(this._containerQuery);
    this._panes = this._elementRef.nativeElement.querySelectorAll(this._panesQuery);
    this._panesCount = this._panes.length;

    this._hammerManager = new Hammer.Manager(this._container);
    this._hammerManager.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));
    this._hammerManager.on('pan', event => {
      console.log(event);

      const percentage = 100 / this._panesCount * event.deltaX / window.innerWidth;
      const transformPercentage = percentage - 100 / this._panesCount * this._currentPane;

      this._renderer.setStyle(this._container, 'transform', `translateX(${transformPercentage}%)`);

      if (event.isFinal) {
        if (event.velocityX > 1) {
          this._goToPane(this._currentPane - 1);
        } else if (event.velocityX < -1) {
          this._goToPane(this._currentPane + 1);
        } else {
          if (percentage <= -(this._sensitivity / this._panesCount )) {
            this._goToPane(this._currentPane + 1);
          } else if (percentage >= (this._sensitivity / this._panesCount)) {
            this._goToPane(this._currentPane - 1);
          } else {
            this._goToPane(this._currentPane);
          }
        }
      }
    });
  }

  private _goToPane(index: number): void {
    if (index < 0) {
      this._currentPane = 0;
    } else if (index > (this._panesCount - 1)) {
      this._currentPane = this._panesCount - 1;
    } else {
      this._currentPane = index;
    }

    this._renderer.addClass(this._container, this._carouselContainerAnimatingClass);
    const percentage = -(100 / this._panesCount) * this._currentPane;
    this._renderer.setStyle(this._container, 'transform', `translateX(${percentage}%)`);
    clearTimeout(this._timer);
    this._timer = setTimeout( () => {
      this._renderer.removeClass(this._container, this._carouselContainerAnimatingClass);
    }, 300);
  }
}
