import { Component, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.el.nativeElement.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement;

      if (target.classList.contains('tab')) {
        this.radioClass(target, 'active');

        const linkedTab = document.querySelector('.' + target.id);
        if (linkedTab) {
          this.radioClass(linkedTab as HTMLElement, 'visible');
        }
      }
    });

    const activeTab = document.querySelector('.tab.active');
    if (activeTab) {
      this.radioClass(document.querySelector('.' + activeTab!.id) as HTMLElement, 'visible');
    }
  }

  private radioClass(element: HTMLElement, className: string): void {
    const elements = document.querySelectorAll('.' + className);
    elements.forEach(elem => elem.classList.remove(className));
    element.classList.toggle(className);
  }
}
