const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://www.insidehook.com/wp-content/uploads/2021/03/hats.jpg?fit=1200%2C800",
      id: 100,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl:
        "https://www.insidehook.com/wp-content/uploads/2021/10/Jacket-Feature.jpg?fit=1200%2C800",
      id: 200,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl:
        "https://static.highsnobiety.com/thumbor/UP8gnQkV3QUwSBeAN7OacDRICto=/1000x600/static.highsnobiety.com/wp-content/uploads/2018/01/16122920/Sneaker-Feature-.jpg",
      id: 300,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl:
        "http://www.contemporist.com/wp-content/uploads/2017/01/modern-womens-fashion-160117-356-01-800x410.jpg",
      size: "large",
      id: 400,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl:
        "https://images.indianexpress.com/2018/01/men-fashion-759-filephoto.jpg",
      size: "large",
      id: 500,
      linkUrl: "shop/mens",
    },
  ],
};
const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default directoryReducer;
