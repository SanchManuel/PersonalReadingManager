import { Component, signal } from '@angular/core';
import { BookList } from './components/book-list/book-list';
import { Header } from './components/header/header';
import {Footer} from './components/footer/footer';

@Component({
  imports: [BookList, Header, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
