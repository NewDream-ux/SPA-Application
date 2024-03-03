import { constants } from "../../Constants/Constant";
import Button from "../../Components/Button/Button";
import style from "./ItemList.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Table from "../../Components/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, favouriteData } from "../../Redux/Action/GetUserDetailsAction";

const ItemList = () => {
    const { userListTitle, back, buttonType, userListColoums, buttonAddFavouriteText } = constants;
    const { titleBackButtonContent, wrap_button } = style;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const data = selector.UserDetailReducer;

    useEffect(() => {
        dispatch(getUserDetails());
    }, []);


    const homeNavigate = () => {
        navigate("/")
    }

    const handleAddFavourite = (favItem) => {
        dispatch(favouriteData(favItem));
        setTimeout(() => {
            alert("Item has been added to Favourite List")
        }, 1000);
    }

    return (
        <>
            <div className={titleBackButtonContent}>
                <span>{userListTitle}</span>
                <div className={wrap_button}>
                    <Button title={back} type={buttonType} onclick={homeNavigate} />
                </div>
                <Table tableData={data} coloums={userListColoums} actionButtonTitle={buttonAddFavouriteText} actionButtonType={buttonType} actionButtonEvent={handleAddFavourite} />
            </div>
        </>
    )
}

export default ItemList;