import slugify from 'slugify';

class StringConverter {
   convertSlugToTitle(slug) {
    console.log('slug converter:', slug)
    var words = slug.split('-');
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
  
    return words.join(' ');
  }

  toSlug(slug) {
    return slugify(slug)
  }

  shortenTitle(title) {
    let tempTitle = title;
    if (title.length > 65) {
      tempTitle = `${title.substring(0, 65).trim()}...`;
    }
    return tempTitle;
  }
}

export default StringConverter;