import PocketBase from 'pocketbase';
import type { MoviesResponse } from './pocketbase-types';
import type { BooksResponse } from './pocketbase-types';
import type { PodcastResponse } from './pocketbase-types';
import type { SeriesResponse } from './pocketbase-types';
export const pb = new PocketBase('http://127.0.0.1:8090') ;

export async function RandomMovies() {
    const records = await pb.collection('movies').getList<MoviesResponse>(1, 1, { sort: '@random' })
    return records
}

export async function BooksMovies() {
  const records = await pb.collection('books').getList<BooksResponse>(1, 1, { sort: '@random' })
  return records
}

export async function RandomPodcast() {
  const records = await pb.collection('podcast').getList<PodcastResponse>(1, 1, { sort: '@random' })
  return records
}

export async function RandomSeries() {
  const records = await pb.collection('series').getList<SeriesResponse>(1, 1, { sort: '@random' })
  return records
}

export async function getOneMovies() {
  return await pb.collection('movies').getOne<MoviesResponse>('zpaysz48lnbc1s1')
}

export async function getAllMovies() {
  const records = await pb.collection('movies').getFullList<MoviesResponse>()
  return records
}