const INITIAL_STATE = {
    sections: [
        {
          title: 'livadski',
          imageUrl: 'https://i.etsystatic.com/16717838/r/il/0ce25e/1433373025/il_570xN.1433373025_639k.jpg',
          id: 1,
          linkUrl: 'shop/livadski'
        },
        {
          title: 'šumski',
          imageUrl: 'https://www.carterspackaging.com/media/3_2529_Original_1lb_Honey_Jar_with_Gold_Screw_Lid_2d6d4f.jpg',
          id: 2,
          linkUrl: 'shop/sumski'
        },
        {
          title: 'bagremov',
          imageUrl: 'https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/g_south,l_text:style_gothic2:%C2%A9%20Image%20Professionals%20GmbH,o_20,y_10/g_center,l_watermark4,o_25,y_50/v1501543513/awrnxdljxtwiuxc9oxxr.jpg',
          id: 3,
          linkUrl: 'shop/bagremov'
        },
        {
          title: 'sa saćem',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81w70bVvRbL._SL1500_.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/sace'
        },
        {
          title: 'rtanjski',
          imageUrl: 'https://www.shoppe33.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/c/acacia_honey.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/rtanjski'
        }
      ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer;