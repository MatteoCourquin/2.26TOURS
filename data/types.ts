export interface TypeArtistMix {
  illustration: string;
  name: string;
  date: string;
  location: string;
}

export interface TypeArtist {
  portrait: string;
  name: string;
  description: string;
  genres: string[];
  lastMixs?: TypeArtistMix[];
  gallery?: string[];
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
