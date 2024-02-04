import { Icard } from "./interfaces/Icard";

// export const utilityGetCards = (): Array<Icard> => {
//   return [
//     {

//       url: "https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png",
//       title: "REACT JS",
//       isLike: false,
//     },
//     {
//       url: "https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png",
//       title: "REACT JS 2",
//       isLike: false,
//     },
//     {
//       url: "https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png",
//       title: "REACT JS 3",
//       isLike: true,
//     },
//   ];
// };

export const utiliyGetDataCardFromLS = (): Array<Icard> | null => {
  try {
    return JSON.parse(localStorage.getItem("dataCard") || "");
  } catch (error) {
    return null;
  }
};

export const utilityAddDataCardToLS = ({
  url,
  title,
  isLike,
  description,
}: {
  url: string;
  title: string;
  isLike: boolean;
  description: string;
}): void => {
  const data =
    utiliyGetDataCardFromLS() !== null
      ? Array.from(utiliyGetDataCardFromLS()!)
      : [];
  const newCard: Icard = {
    id: data.length++,
    url: url,
    title: title,
    isLike: isLike,
    description: description,
  };
  const newDataCardList = data.concat(newCard);
  localStorage.setItem("dataCard", JSON.stringify(newDataCardList));
};

export const utilityChangeDataCardLike = (idCard: number): void => {
  console.log(idCard);
  const data =
    utiliyGetDataCardFromLS() !== null
      ? Array.from(utiliyGetDataCardFromLS()!)
      : [];

  const newDataCardList = data.map(({ isLike, id, ...elem }) => {
    if (id === idCard) {
      console.log("@@@@@@@@@@@@@@@@@ò" + id);
      return { ...elem, isLike: !isLike, id: id };
    }
    return { ...elem, isLike: isLike, id: id };
  });
  localStorage.setItem("dataCard", JSON.stringify(newDataCardList));
};
