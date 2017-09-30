
// YOUTUBE Scrape
// =========================================================== //
// This code is meant to be executed within the browsers console
// It will output a giant string of JSON which you can then save

// var url = `https://m.youtube.com/channel/${channel}/videos`;

var lockup, contents, durs, vids, obj, newJSON = { data: [] }
lockup = document.getElementsByClassName('yt-lockup')
contents = document.getElementsByClassName('yt-lockup-content')
durs = document.getElementsByClassName('accessible-description')

for (var i = 0; i < contents.length; i++) {
  obj = {
    id: lockup[i].getAttribute('data-context-item-id'),
    title: contents[i].childNodes[1].firstElementChild.attributes.title.nodeValue,
    href: `https://www.youtube.com` + contents[i].childNodes[1].firstElementChild.attributes.href.nodeValue,
    duration: durs[i].innerHTML,
    views: contents[i].childNodes[3].getElementsByTagName('li')[0].innerHTML
  }

  newJSON.data.push(obj)
}

JSON.stringify(newJSON)
