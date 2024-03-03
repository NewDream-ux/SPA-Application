import style from "./Card.module.scss";

const Card = (props) => {
    const {thumbnailUrl, title} = props.cardDetails;
    const {card} = style;
    return (
        <>
            <div className={card}>
                <img src={thumbnailUrl} alt="Denim Jeans" />
                <p>{title}</p>
            </div>
        </>
    )
}

export default Card;