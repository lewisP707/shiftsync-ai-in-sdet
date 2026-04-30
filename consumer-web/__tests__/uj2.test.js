import { getMovie } from '../api/getText';
import nock from 'nock';

const scope = nock('http://localhost:5000')
  .get('/movie/100')
  .reply(200, {
    id: 100,
    name: 'James Bond',
    date: '2021'
  });

test('get movie', async () => {
  const movie = await getMovie('http://localhost:5000/movie/100');
  expect(movie).not.toBeNull();
});