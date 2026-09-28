import { Component, signal,computed } from '@angular/core';
import { Book, GenreAndCategory, ReadingStatus } from '../../../models/Book';
import {BookCard} from '../book-card/book-card';
import { BookSearch } from '../book-search/book-search';

@Component({
  imports: [BookCard, BookSearch],
  selector: 'app-book-list',
  styleUrl: './book-list.css',
  templateUrl: './book-list.html',
})
export class BookList {
  protected readonly searchQuery = signal<string>('');
  protected readonly  books= signal<Book[]>(
  [
  {
    id: 1,
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    isbn: '9780307474728',
    publisher: 'Vintage Español',
    publicationDate: '1967-06-05',
    edition: 'First Edition',
    genreOrCategory: GenreAndCategory.FICTION,
    language: 'Spanish',
    numberOfPages: 417,
    synopsis: 'The story of the Buendía family across several generations.',
    coverImage: 'img/images.jpeg',
    readingStatus: ReadingStatus.FINISHED,
    personalRating: 5,
  },
  {
    id: 2,
    title: 'The Hobbit',
    author: 'J. R. R. Tolkien',
    isbn: '9780547928227',
    publisher: 'Houghton Mifflin Harcourt',
    publicationDate: '1937-09-21',
    edition: 'First Edition',
    genreOrCategory: GenreAndCategory.FANTASY,
    language: 'English',
    numberOfPages: 310,
    synopsis: 'Bilbo Baggins embarks on an unexpected adventure.',
    coverImage: 'img/TheHobbit.jpeg',
    readingStatus: ReadingStatus.READING,
    personalRating: 4,
  },
  {
    id: 3,
    title: 'Atomic Habits',
    author: 'James Clear',
    isbn: '9780735211292',
    publisher: 'Avery',
    publicationDate: '2018-10-16',
    edition: 'First Edition',
    genreOrCategory: GenreAndCategory.SELF_HELP,
    language: 'English',
    numberOfPages: 320,
    synopsis: 'A guide to building good habits and breaking bad ones.',
    coverImage: 'img/s1739362252112_atomic-habits.png',
    readingStatus: ReadingStatus.TO_READ,
    personalRating: 0,
  },
  {
    id: 4,
    title: '1984',
    author: 'George Orwell',
    isbn: '9780451524935',
    publisher: 'Signet Classics',
    publicationDate: '1949-06-08',
    edition: 'First Edition',
    genreOrCategory: GenreAndCategory.SCIENCE_FICTION,
    language: 'English',
    numberOfPages: 328,
    synopsis: 'A dystopian novel about surveillance and totalitarianism.',
    coverImage: 'img/1984.jpeg',
    readingStatus: ReadingStatus.FINISHED,
    personalRating: 5,
  },
  {
    id: 5,
    title: 'The Shining',
    author: 'Stephen King',
    isbn: '9780307743657',
    publisher: 'Anchor Books',
    publicationDate: '1977-01-28',
    edition: 'First Edition',
    genreOrCategory: GenreAndCategory.HORROR,
    language: 'English',
    numberOfPages: 688,
    synopsis: 'A family faces supernatural forces inside an isolated hotel.',
    coverImage: 'img/TheShining.jpg',
    readingStatus: ReadingStatus.TO_READ,
    personalRating: 0,
  },
  {
    id: 6,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    isbn: '9780141439518',
    publisher: 'Penguin Classics',
    publicationDate: '1813-01-28',
    edition: 'First Edition',
    genreOrCategory: GenreAndCategory.ROMANCE,
    language: 'English',
    numberOfPages: 432,
    synopsis: 'Elizabeth Bennet confronts social expectations and love.',
    coverImage: 'img/pride-and-prejudice-216.jpg',
    readingStatus: ReadingStatus.READING,
    personalRating: 4,
  },
  {
    id: 7,
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    isbn: '9781451648539',
    publisher: 'Simon & Schuster',
    publicationDate: '2011-10-24',
    edition: 'First Edition',
    genreOrCategory: GenreAndCategory.BIOGRAPHY,
    language: 'English',
    numberOfPages: 656,
    synopsis: 'A biography of Apple co-founder Steve Jobs.',
    coverImage: 'img/WalterIsaacson.jpg',
    readingStatus: ReadingStatus.FINISHED,
    personalRating: 4,
  },
  {
    id: 8,
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    isbn: '9780307474278',
    publisher: 'Anchor Books',
    publicationDate: '2003-03-18',
    edition: 'First Edition',
    genreOrCategory: GenreAndCategory.MYSTERY,
    language: 'English',
    numberOfPages: 489,
    synopsis: 'A professor investigates a mysterious murder and hidden clues.',
    coverImage: 'img/DaVinciCode.jpg',
    readingStatus: ReadingStatus.TO_READ,
    personalRating: 0,
  },
  {
    id: 9,
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    isbn: '9780062316097',
    publisher: 'Harper',
    publicationDate: '2015-02-10',
    edition: 'First Edition',
    genreOrCategory: GenreAndCategory.HISTORY,
    language: 'English',
    numberOfPages: 464,
    synopsis: 'An exploration of the history and evolution of humankind.',
    coverImage: 'img/Sapiens.webp',
    readingStatus: ReadingStatus.READING,
    personalRating: 5,
  },
  {
    id: 10,
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupéry',
    isbn: '9780156012195',
    publisher: 'Mariner Books',
    publicationDate: '1943-04-06',
    edition: 'First Edition',
    genreOrCategory: GenreAndCategory.FICTION,
    language: 'English',
    numberOfPages: 96,
    synopsis: 'A young prince travels between planets and learns about life.',
    coverImage: 'img/the-little-prince-16.jpg',
    readingStatus: ReadingStatus.FINISHED,
    personalRating: 5,
  },
]);

protected updateBookStatus(bookId: number): void {
  const updatedBooks = this.books().map((book) => {
    if (book.id === bookId) {
      return { ...book, readingStatus: this.getNextStatus(book.readingStatus) };
    }
    return book;
  });
  this.books.set(updatedBooks);
}

private getNextStatus(currentStatus: ReadingStatus): ReadingStatus {
    if (currentStatus === ReadingStatus.TO_READ) {
      return ReadingStatus.READING;
    }
    if (currentStatus === ReadingStatus.READING) {
      return ReadingStatus.FINISHED;
    }
    return ReadingStatus.TO_READ;
}

protected readonly filteredBooks = computed(() => {
  const searchQuery = this.searchQuery().toLowerCase();
  return this.books().filter((book) => {
    return (
      book.title.toLowerCase().includes(searchQuery) ||
      book.author.toLowerCase().includes(searchQuery)
    );
  });
});
}
