import { useState } from 'react';

export const useLike = () => {
  const sessionLikeCart = JSON.parse(sessionStorage.getItem('likeCart')) || [];
  const [like, setLike] = useState(sessionLikeCart);

  const onClickLike = (gifid) => {
    const gifExist = like.some((item) => item.id === gifid);
    if (!gifExist) {
      const newLikeObj = {
        id: gifid,
        point: 1,
      };
      setLike([...like, newLikeObj]);
    } else {
      const updateLikes = like.map((item) => {
        if (item.id === gifid) {
          return {
            ...item,
            point: item.point + 1,
          };
        }
        return item;
      });
      setLike(updateLikes);
    }
    sessionStorage.setItem('likeCart', JSON.stringify(like));
  };

  const totalLikes = (gifid) => {
    const dataLike = like.find((item) => item.id === gifid);
    return dataLike ? dataLike.point : 0;
  };

  return {
    like,
    onClickLike: (value) => onClickLike(value),
    totalLikes: (value) => totalLikes(value),
  };
};
