import { Component,model } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-book-search',
  styleUrl: './book-search.css',
  templateUrl: './book-search.html',
})
export class BookSearch {
  public searchQuery = model<string>('');
}
