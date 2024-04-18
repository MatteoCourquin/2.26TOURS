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
  lastMixs?: TypeArtistMix[];
  gallery?: Image[];
}

export interface TypeMixs {
  subtitle: string;
  title: string;
  artist: TypeArtist;
  description: string;
  link: string;
  genres: TypeGenre[];
  cover: Image;
}

export interface TypeGenre {
  name: string;
}
