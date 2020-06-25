import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges
} from '@angular/core';

const SVG_LOADING = `
    <svg class="spinner" viewBox="0 0 50 50">
      <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
    </svg>`;

@Directive({
  selector: '[custom-button]',
})
export class ButtonDirective implements OnChanges, OnInit {
  @Input() status: boolean;
  @Input() loadingText = 'Loading';
  @Input() color: 'primary' | 'secondary' | 'danger' | 'light' | 'dark' | 'medium' | 'link' = 'primary';
  @Input() expand: 'block' | 'none';
  @Input() shape: 'round' | 'none';
  @Input() iconButton: boolean;
  @Input() fill: 'raised' | 'text'| 'outline' | 'flat' | 'none' = 'raised';
  @Input() size: 'small'| 'default'| 'large' = 'default';

  private target: HTMLButtonElement;
  private innerHTML: string;
  private divElement: any = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.target = this.el.nativeElement;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.status) {
      this.loadingState(changes.status.currentValue);
    }

    this.target.classList.add('btn');
    this.size && this.target.classList.add(this.size);
    this.fill && this.target.classList.add(this.fill);

    this.target.classList.add(`${this.getColorType()}-${this.color}`);
    this.expand && this.target.classList.add(this.expand);
    this.shape && this.target.classList.add(this.shape);
    this.iconButton && this.target.classList.add('icon');
  }

  ngOnInit(): void {
    this.target.classList.add('btn');

  }

  private loadingState(status: boolean) {
    if (status) {
      this.innerHTML = this.target.innerHTML;
      this.target.innerHTML = '';
      this.createLoader(this.target);
    } else {
      this.removeLoader();
    }
    if (this.target) {
      this.target.disabled = this.target ? status : null;
    }
  }

  private createLoader(wrapperElement: HTMLElement): void {
    this.divElement = this.renderer.createElement('div');
    this.renderer.addClass(this.divElement, 'btn-loader');
    this.divElement.innerHTML = `${this.loadingText} ${SVG_LOADING}`;
    this.renderer.insertBefore(wrapperElement, this.divElement, null);
  }

  private removeLoader(): any {
    if (this.divElement) {
      this.renderer.removeChild(this.target, this.divElement);
      this.target.innerHTML = this.innerHTML;
    }
  }

  private getColorType() {
    let colorStr;
    switch (this.fill) {
      case 'text':
        colorStr = 'text';
        break;
      case 'outline':
        colorStr = 'border';
        break;
      case 'none':
        colorStr = '';
        break;
      default:
        colorStr = 'bg-contrast';
        break;
    }
    return colorStr;
  }
}
