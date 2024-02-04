import { Icard } from "./interfaces/Icard";

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
  description,
}: {
  url: string;
  title: string;
  description: string;
}): void => {
  // const existingData = utiliyGetDataCardFromLS();
  // const data: Array<Icard> =
  //   existingData !== null ? Array.from(existingData) : [];
  // console.log(data);
  // const newCard: Icard = {
  //   id: data.length++,
  //   url: url,
  //   title: title,
  //   isLike: false,
  //   description: description,
  // };
  // data.push(newCard);
  // console.log(data);
  const existingData = utiliyGetDataCardFromLS();
  const data: Array<Icard> =
    existingData !== null ? Array.from(existingData) : [];
  const newData = [
    ...data,
    {
      id: data.length++,
      url: url,
      title: title,
      isLike: false,
      description: description,
    },
  ];
  localStorage.setItem("dataCard", JSON.stringify(newData));
};

export const utilityChangeDataCardLike = (idCard: number): void => {
  const data =
    utiliyGetDataCardFromLS() !== null
      ? Array.from(utiliyGetDataCardFromLS()!)
      : [];

  const newDataCardList = data.map(({ isLike, id, ...elem }) => {
    if (id === idCard) {
      return { ...elem, isLike: !isLike, id: id };
    }
    return { ...elem, isLike: isLike, id: id };
  });
  localStorage.setItem("dataCard", JSON.stringify(newDataCardList));
};
