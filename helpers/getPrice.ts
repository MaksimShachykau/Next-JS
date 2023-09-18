const getPrice = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/gm, ' ').concat('€');

export default getPrice;
