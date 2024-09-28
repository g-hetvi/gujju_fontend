  // src/data/combinedCardsData.jsx
  import { cardsData as breakfastCards } from './breakfast';
  import { cardsData as sweetCards } from './Sweet';
  import { cardData as thaliCards } from './Thali';
  
  export const combinedCardsData = [
    ...breakfastCards,
    ...sweetCards,
    ...thaliCards,
  ];
  
  export default combinedCardsData;
  