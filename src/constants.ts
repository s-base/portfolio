interface Social {
  name: string;
  url: string;
}

export const socials: { [key: string]: Social } = {
  instagram: {
    name: 'Instagram',
    url: 'https://www.instagram.com/sofiabs/',
  },
  linkedin: {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/sofiabs/',
  }
}

export const username: string = 'Sofia'
