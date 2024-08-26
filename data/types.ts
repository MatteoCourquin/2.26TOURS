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
  soundcloud?: string;
  instagram?: string;
  facebook?: string;
  events?: TypeEvent[];
  gallery?: Image[];
}

export interface TypeMix {
  subtitle: string;
  title: string;
  artist: string;
  description: string | null;
  link: string;
  genres: TypeGenre[];
  cover: Image;
}

export interface TypeGenre {
  name: string;
}

export interface TypeEvent {
  illustration: Image;
  name: string;
  date: Date;
  location: string;
  genres?: TypeGenre[];
  shotgun?: string;
  color?: string; // A voir en fonction du genre
}
