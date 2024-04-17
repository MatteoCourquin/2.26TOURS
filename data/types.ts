import { Image } from "sanity";

export interface TypeArtistMix {
  illustration: Image;
  name: string;
  date: string;
  location: string;
}

export interface TypeArtist {
  portrait: Image;
  name: string;
  description: string;
  genres: string[];
  lastMixs?: TypeArtistMix[];
  gallery?: Image[];
}

export interface TypeMixs {
  subtitle: string;
  title: string;
  artist: string;
  description: string;
  link: string;
  genres: string[];
  cover: string;
}
