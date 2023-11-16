import { Component } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.css']
})
export class LoadMoreComponent {

  currentItem = 4;
  boxes: NodeListOf<Element> = document.querySelectorAll('.box-1');

  loadMore(): void {
    for (let i = this.currentItem; i < this.currentItem + 4; i++) {
      this.boxes[i].classList.add('inline-block');
    }
    this.currentItem += 4;
    if (this.currentItem >= this.boxes.length) {
      // Ocultar el botón cuando no hay más elementos por cargar
      // Puedes usar *ngIf en el template para lograr esto también
      // loadMoreBtn.style.display = 'none';
    }
  }
}
