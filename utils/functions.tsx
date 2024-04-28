export const scroll = () => {
  window.scrollTo({
    top: window.innerHeight - 92,
    behavior: 'smooth',
  });
};

export const formatDate = (date: Date) =>
  new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

export const formatDateDigit = (date: Date) =>
  new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });

export const formatDateWithoutDay = (date: Date) =>
  new Date(date).toLocaleDateString('fr-FR', {
    month: 'short',
    year: 'numeric',
  });

export const formatSlug = (slug: string) => {
  return slug
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};

export const getColorsFromGenre = (genres: string[]): string => {
  const colorGenreMap: { [color: string]: string[] } = {
    '#FF0000': ['hardcore', 'techno', 'hardtechno', 'berlinoise'], // RED
    '#6EC2EA': ['minimal', 'house'], // BLUE
  };

  for (const [color, genreList] of Object.entries(colorGenreMap))
    if (
      genreList.some((g) => genres.join(', ').toLocaleLowerCase().includes(g.toLocaleLowerCase()))
    )
      return color;

  return '#FFFFFF';
};

export const calculateMargin = (i: number) => {
  if (i % 6 === 0) {
    return '40vh';
  } else if (i % 7 === 0) {
    return '20vh';
  } else if (i % 4 === 0) {
    return '35vh';
  } else if (i % 2 === 0) {
    return '60vh';
  } else if (i % 3 === 0) {
    return '30vh';
  } else if (i % 5 === 0) {
    return '60vh';
  } else {
    return '0vh';
  }
};
