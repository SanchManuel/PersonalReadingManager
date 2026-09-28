export enum ReadingStatus{
    TO_READ = 'TO READ',
    READING ='READING',
    FINISHED = 'FINISHED',
};

export enum GenreAndCategory{
    FICTION = 'Fiction',
    NON_FICTION = 'Non-fiction',
    FANTASY = 'Fantasy',
    SCIENCE_FICTION = 'Science Fiction',
    MYSTERY = 'Mystery',
    ROMANCE = 'Romance',
    HORROR = 'Horror',
    BIOGRAPHY = 'Biography',
    HISTORY = 'History',
    SELF_HELP = 'Self-help',
};
export interface Book{
    id:number;
    title: string;
    author: string;
    isbn: string;
    publisher: string;
    publicationDate: string;
    edition: string;
    genreOrCategory: GenreAndCategory;
    language: string;
    numberOfPages: number;
    synopsis: string;
    coverImage: string;
    readingStatus: ReadingStatus;
    personalRating: number;
}
