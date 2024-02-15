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
export const base: string = '/portfolio'
export const assets: string = `${base}/assets`
export const email: string = 's.bautista.sepulveda+portfolio@gmail.com'
export const urls: { [key: string]: string } = {
  404: `${base}/404/`,
  about: `${base}/about/`,
  home: `${base}/`,
  work: `${base}/work/`,
}
export const username: string = 'Sofia'
