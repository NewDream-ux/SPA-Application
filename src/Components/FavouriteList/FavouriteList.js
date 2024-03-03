import style from "./Favourite.module.scss";
import { constants } from "../../Constants/Constant";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const FavouriteList = () => {
    const { titleButtonContent, favouriteCard, emplty_list, wrap_button } = style;
    const { favouriteTitle, buttonListNavigateText, buttonType, emptyFavouriteListText } = constants;
    const navigate = useNavigate();
    const selector = useSelector((state)=>state);
    let favList = selector.FavDetailReducer;

    const listNavigate = () => {
        navigate("/item-list")
    }

    return (
        <>
            <div className={titleButtonContent}>
                <span>{favouriteTitle}</span>
                <div className={wrap_button}>
                <Button title={buttonListNavigateText} type={buttonType} onclick={listNavigate} />
                </div>
                <div className={favouriteCard}>
                    {favList.length > 0 ? favList.map((item)=>{
                        return(
                            <Card cardDetails={item} />
                        )
                    }) : <h3 className={emplty_list}>{emptyFavouriteListText}</h3>}
                </div>
            </div>
        </>
    )
}

export default FavouriteList;