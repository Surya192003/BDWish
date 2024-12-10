import { Component, ElementRef, HostListener, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements AfterViewInit {
  @ViewChild('neonLight') neonLightElement!: ElementRef<SVGGraphicsElement>;
  @ViewChild('svg') svgElement!: ElementRef<SVGSVGElement>;

  private mouse = { x: 0, y: 0 };
  private mouseStored = { x: 0, y: 0 };
  private screen = { w: window.innerWidth, h: window.innerHeight };
  private canvas = { w: 0, h: 0 };
  private dot = { w: 0, h: 0 };

  ngAfterViewInit(): void {
    const element = this.neonLightElement.nativeElement;
    const svg = this.svgElement.nativeElement;

    // Initialize variables
    this.updateVariables();

    // Set initial GSAP properties
    gsap.set(element, { transformOrigin: '50% 50%' });

    // Add GSAP animation
    gsap.to(element, {
      duration: 1,
      delay: 1,
      scale: 1,
      opacity: 1,
      ease: 'Power3.easeInOut',
    });

    // Add GSAP ticker for animation
    gsap.ticker.add(() => this.animateElement());

    // Update variables on resize
    window.addEventListener('resize', () => this.updateVariables());
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;
  }

  private updateVariables(): void {
    const svg = this.svgElement.nativeElement;
    const element = this.neonLightElement.nativeElement;

    this.screen = {
      w: window.innerWidth,
      h: window.innerHeight,
    };

    this.canvas = {
      w: svg.getBBox().width,
      h: svg.getBBox().height,
    };

    this.dot = {
      w: element.getBBox().width,
      h: element.getBBox().height,
    };
  }

  private animateElement(): void {
    if (this.mouseStored.x === this.mouse.x && this.mouseStored.y === this.mouse.y) return;

    const element = this.neonLightElement.nativeElement;

    const x = (this.mouse.x / this.screen.w) * (this.canvas.w - this.dot.w / 2);
    const y = (this.mouse.y / this.screen.h) * (this.canvas.h - this.dot.h / 2);

    gsap.to(element, {
      x,
      y,
      ease: 'Power4.easeOut',
      duration: 1,
    });

    this.mouseStored = { ...this.mouse };
  }
}
