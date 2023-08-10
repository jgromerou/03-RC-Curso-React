import { useEffect, useState } from 'react';

const GifCard = ({ dataItem }) => {
  //const noImage = import.meta.env.VITE_NO_IMAGE;

  const [like, setLike] = useState([]);
  const sessionFavCart = JSON.parse(sessionStorage.getItem('favCart')) || [];
  const [cart, setCart] = useState(sessionFavCart);

  useEffect(() => {
    sessionStorage.setItem('favCart', JSON.stringify(cart));
  }, [cart]);

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
  };

  const getTotalLikeById = (gifid) => {
    const dataLike = like.find((item) => item.id === gifid);
    return dataLike ? dataLike.point : 0;
  };

  // const getColorFavById = (gifid) => {
  //   const colorFav = cart.find(
  //     (item) => item.id === gifid && item.color === true
  //   );
  //   return colorFav ? 'colored-path' : '';
  // };

  const addFavoriteCart = (gifid) => {
    const existFavoriteCardInCart = cart.find((item) => item.id === gifid);
    if (!existFavoriteCardInCart) {
      const newLikeObj = {
        id: gifid,
        color: true,
      };
      setCart([...cart, newLikeObj]);
    } else {
      const removeItemFav = cart.filter((itemFav) => itemFav.id !== gifid);
      setCart(removeItemFav);
    }
    sessionStorage.setItem('favCart', JSON.stringify(cart));
  };

  const getHeart = (gifId) => {
    const dataHeart = cart.some(
      (item) => item.id == gifId && item.color === true
    );
    return dataHeart ? 'colored-path' : '';
  };

  return (
    <>
      {dataItem.map((gif) => (
        <div key={gif.id} className="col">
          <div className="card shadow-sm">
            <img
              src={gif.images.fixed_width_small.url}
              alt={gif.name}
              width={'100%'}
              height={'230'}
            />
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => onClickLike(gif.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-hand-thumbs-up-fill "
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                    </svg>
                    <div>{getTotalLikeById(gif.id)}</div>
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-secondary"
                    onClick={() => addFavoriteCart(gif.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className={`bi bi-heart-fill ${getHeart(gif.id)}`}
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                    </svg>
                  </button>
                </div>
                <small className="text-body-secondary">cod: 12546</small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default GifCard;
