global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
  token: 'BQAVA5iiEhPFRykUi2kqXRvglWeU68sVukHN2nQEHQsVfwLy6rwbkj_6diyJbgFaJUQeT2Xs_UL7eD8YAiZ-EIlwWGK7dV7knXaN8SUHioo3dtrWO8XwLWBcz2AM_YrtC927MSh_nm2cxDrSG76Q'
});

const albums = spotify.search.albums('Incubus');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
