var ids = {
    0:   'index',
    16:  'posts/2017-12-20_welcome',
    57:  'tos',
    24:  'connecting',
    84:  'channels',
    36:  'staff',
    34:  'services',
    41:  'notable-channels',
    122: 'credits',
};

if (window.location.search.startsWith('?page_id=')) {
    window.stop();
    id = Number(window.location.search.substr(9).split('&')[0]);
    if (! ids[id]) {
        ids[id] = '404';
    }
    window.location.href = '{{ site.baseurl }}/' + ids[id];
}
