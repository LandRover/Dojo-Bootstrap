var dojoConfig = {
  async: true,
  baseUrl: './',
  packages: [
    {name: 'dcl', location: 'vendors/dcl', main: 'dcl'},
    {name: 'dojo', location: 'vendors/dojo'},
    {name: 'lodash', location: 'vendors/lodash/dist', main: 'lodash'},
    {name: 'bootstrap', location: './src', main: 'core'}
  ]
};