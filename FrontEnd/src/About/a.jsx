import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
    //   sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'public/IMG_4054.jpg',
    title: '1',
    rows: 2,
    cols: 2,
  },
  {
    img: 'public/IMG_4055.jpg',
    title: '2',
    rows: 2,
    cols: 2,
  },
  {
    img: 'public/IMG_4056.jpg',
    title: '3',
    rows: 2,
    cols: 2,
  },
  
  {
    img: 'public/IMG_4058.jpg',
    title: '5',
    rows: 2,
    cols: 2,
  },
  {
    img: 'public/IMG_4059.jpg',
    title: '6',
    
    rows: 2,
    cols: 2,
  },
  {
    img: 'public/IMG_4060.jpg',
    title: '7',
    rows: 2,
    cols: 2,
  },
  {
    img: 'public/IMG_4057.jpg',
    title: '4',
    rows: 2,
    cols: 2,
  },
  
  {
    img: 'public/IMG_4061.jpg',
    title: '8',
    rows: 2,
    cols: 2,
  },
  
];
