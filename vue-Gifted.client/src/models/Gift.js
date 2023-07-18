export class Gift {
  constructor(data) {
    this.id = data.id
    this.opened = data.opened
    this.tag = data.tag
    this.url = data.url || 'https://static.vecteezy.com/system/resources/previews/005/439/408/original/design-red-gift-box-icon-with-yellow-ribbon-free-vector.jpg'
  }
}

// let gift = {
//   createdAt:
//     "2023-06-30T05:31:43.226Z",
//   creatorId:
//     "649b60c67a109e4dabc10711",
//   updatedAt:
//     "2023-06-30T14:53:31.427Z",
//   __v:
//     0,
//   _id:
//     "649e68bf20ddc6d8901077c4",
// }