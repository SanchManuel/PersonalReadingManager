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
    // Implement the logic to update the reading status of the book
    console.log(`Updating status for book: ${this.book().title}`);
    this.updateStatus.emit(this.book().id);
  }
}
