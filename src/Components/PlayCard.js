function PlayCard(cardData) {
    let value = cardData.cardData.Value;
    let suit = cardData.cardData.Suit;
    return (
        <div>
            <p>{value}</p>
            <p>{suit}</p>
        </div>
    );
}

export default PlayCard;