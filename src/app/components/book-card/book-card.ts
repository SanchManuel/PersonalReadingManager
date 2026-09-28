import { Component, input, output } from '@angular/core';
import { Book } from '../../../models/Book';

@Component({
  imports: [],
  selector: 'app-book-card',
  styleUrl: './book-card.css',
  templateUrl: './book-card.html',
})
export class BookCard {
  public readonly book = input.required<Book>();
  protected readonly updateStatus = output<number>();

  public onUpdateStatus(): void {
    this.updateStatus.emit(this.book().id);
  }
}
