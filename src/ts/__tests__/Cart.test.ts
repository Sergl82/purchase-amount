import Book from '../domain/Book';
import Movie from '../domain/Films';
import MusicAlbum from '../domain/MusicAlbum';
import Cart from '../service/cart';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('card should return items', () => {
  const cart = new Cart();

  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const movie = new Movie(
    128,
    'Avergens',
    700,
    'Мстители',
    2012,
    'USA',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    '137 мин./02:17'
  );

  cart.add(book);
  cart.add(musicAlbum);
  cart.add(movie);

  expect(cart.items).toEqual([book, musicAlbum, movie]);
});

test('card should return delete item', () => {
  const cart = new Cart();

  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const movie = new Movie(
    128,
    'Avergens',
    700,
    'Мстители',
    2012,
    'USA',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    '137 мин./02:17'
  );

  cart.add(book);
  cart.add(musicAlbum);
  cart.add(movie);

  cart.deleteItem(1001);

  expect(cart.items).toEqual([musicAlbum, movie]);
});

test('card should return discounted total', () => {
  const cart = new Cart();

  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const movie = new Movie(
    128,
    'Avergens',
    700,
    'Мстители',
    2012,
    'USA',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    '137 мин./02:17'
  );

  cart.add(book);
  cart.add(musicAlbum);
  cart.add(movie);

  expect(cart.getSumPricesDiscount(5)).toEqual(3420);
});
