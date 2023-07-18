export class Giphy {
  constructor(data) {
    this.url = data.url
    this.title = data.title
    this.id = data.id
  }
}

// let giphy = {
//   bitly_gif_url: "https://gph.is/g/4A3rAX7",
//   bitly_url: "https://gph.is/g/4A3rAX7",
//   content_url: "",
//   embed_url: "https://giphy.com/embed/n8rTLLINBycMxi73lQ",
//   id: "n8rTLLINBycMxi73lQ",
//   images: { original: {… }, downsized: {… }, downsized_large: {… }, downsized_medium: {… }, downsized_small: {… }, … },
//   title: "Football Club Soccer GIF by EA SPORTS FC",
//   url: "https://giphy.com/gifs/easportsfifa-ea-sports-easports-fc-n8rTLLINBycMxi73lQ",
// }