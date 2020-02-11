/* eslint-disable sort-keys */
module.exports = {
  customProperties: {
    '--black': '#000',
    '--dark-grey': '#323232',
    '--light-grey': '#f0f0f0',
    '--white': '#fff',

    get '--primary'() {
      return this['--midnight'];
    },
    get '--secondary'() {
      return this['--cyan'];
    },
    get '--tertiary'() {
      return this['--slate-blue'];
    },

    /* Brand Colors */
    '--cyan': '#00cfb6',
    '--magenta': '#ca54ab',
    '--midnight': '#1b1636',
    '--slate-blue': '#2D245D',
    '--dark-blue': '#0C0918',

    /* Supplementary Colors */
    '--aqua': '#39a9d3',
    '--earth': '#8b572a',
    '--grass': '#88ba4e',
    '--lavender': '#9177d5',
    '--rose': '#d44250',
    '--sun': '#eeb541',

    /* Shadow Colors */
    '--box-shadow-default': '0 2px 1px -1px rgba(0,0,0,0.2)',
    '--box-shadow-focus': '0 0 0 0.2rem rgba(0,123,255,.25)',

    '--border-radius-default': '2px',
  },
};
