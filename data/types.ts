import { Image } from 'sanity';

export interface TypeArtistMix {
  illustration: Image;
  name: string;
  date: Date;
  location: string;
}

export interface TypeArtist {
  portrait: Image;
  name: string;
  description: string;
  genres: TypeGenre[];
  events?: TypeEvents[];
  gallery?: Image[];
}

export interface TypeMixs {
  subtitle: string;
  title: string;
  artist: any;
  description: string | null;
  link: string;
  genres: TypeGenre[];
  cover: Image;
}

export interface TypeGenre {
  name: string;
}

export interface TypeEvents {
  illustration: Image;
  name: string;
  date: Date;
  location: string;
}
