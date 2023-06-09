/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Books = "books",
	Movies = "movies",
	Podcast = "podcast",
	Series = "series",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type BooksRecord = {
	title?: string
	authors?: string
	average_rating?: number
	isbn?: number
	isbn13?: number
	language_code?: string
	num_pages?: number
	ratings_count?: number
	text_reviews_count?: number
	publication_date?: IsoDateString
	publisher?: string
	field13?: string
}

export type MoviesRecord = {
	title?: string
	time?: number
	trailer?: string
	release_year?: number
	genre?: string
	filmer?: string
	synopsis?: string
	note?: number
	attach?: string
}

export type PodcastRecord = {
	name?: string
	synopsis?: string
	attach?: string
}

export type SeriesRecord = {
	name?: string
	synopsis?: string
	realisator?: string
	seasons?: number
	episodes?: number
	rating?: number
	attach?: string
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type BooksResponse = Required<BooksRecord> & BaseSystemFields
export type MoviesResponse = Required<MoviesRecord> & BaseSystemFields
export type PodcastResponse = Required<PodcastRecord> & BaseSystemFields
export type SeriesResponse = Required<SeriesRecord> & BaseSystemFields
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	books: BooksRecord
	movies: MoviesRecord
	podcast: PodcastRecord
	series: SeriesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	books: BooksResponse
	movies: MoviesResponse
	podcast: PodcastResponse
	series: SeriesResponse
	users: UsersResponse
}