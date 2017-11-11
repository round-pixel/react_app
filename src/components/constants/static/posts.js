const posts = [
  {
    id: 1,
    image: {
      src: 'https://reactjs.org/logo-og.png',
      alt: 'Some text'
    },
    message: 'Fisrt message',
    metaInfo: {
      createdAt: new Date(2017, 0, 1, 2, 3, 4),
      createdBy: 'Mary',
      updatedAt: new Date(2017, 0, 4, 3, 2, 1)
    },
    likes: 2
  },
  {
    id: 2,
    image: {
      src: 'https://reactjs.org/logo-og.png'
    },
    message: 'Second message',
    metaInfo: {
      updatedAt: new Date(2017, 0, 1, 2, 3, 4)
    }
  },
  {
    id: 3,
    image: {
      src: 'https://reactjs.org/logo-og.png'
    },
    message: 'Third message',
    metaInfo: {
      createdAt: new Date(2017, 0, 5, 6, 7, 8),
      createdBy: 'Mike',
      updatedAt: new Date(2017, 0, 1, 2, 3, 4)
    },
    likes: 10
  }
];

export default posts;
