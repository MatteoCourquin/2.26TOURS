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

const red = ['hardcore', 'techno', 'hardtechno'];
const blue = ['house', 'minimal', 'tech house'];
const yellow = ['psytrance', 'trance'];
const green = ['latino', 'trance'];
export const getColorsFromGenre = (genres: string[]) => {
  genres.forEach((genre: string) => {
    if (red.join(', ').toLocaleLowerCase().includes(genre.toLocaleLowerCase())) {
      console.log('red');
      // return 'ff0000';
      return 'red';
    }
    if (blue.join(', ').toLocaleLowerCase().includes(genre.toLocaleLowerCase())) {
      console.log('blue');
      // return '0000ff';
      return 'blue';
    }
    if (yellow.join(', ').toLocaleLowerCase().includes(genre.toLocaleLowerCase())) {
      console.log('yellow');
      // return 'ffff00';
      return 'yellow';
    }
    if (green.join(', ').toLocaleLowerCase().includes(genre.toLocaleLowerCase())) {
      console.log('008000');
      // return '008000';
      return 'green';
    }
  });
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
