const CardsCounter = (cardsArray, currentLength, moreBtn) => {
    let moreCards = 0;
    if (window.innerWidth > 768) {
        currentLength = currentLength < 12 ? 12 : currentLength;
        moreCards = moreBtn ? 3 : 0;
    } else if (window.innerWidth > 460) {
        currentLength = currentLength < 8 ? 8 : currentLength;
        moreCards = moreBtn ? 2 : 0;
    } else {
        currentLength = currentLength < 5 ? 5 : currentLength;
        moreCards = moreBtn ? 2 : 0;
    }
    return  cardsArray.slice(0, currentLength+moreCards);
}

export default CardsCounter;
