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
  events?: TypeEvent[];
  gallery?: Image[];
}

export interface TypeMix {
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

export interface TypeEvent {
  illustration: Image | string; // Remove string
  name: string;
  date: Date;
  location: string;
  genres?: string[];
  shotgun?: string;
  color?: string // A voir en fonction du genre
}
