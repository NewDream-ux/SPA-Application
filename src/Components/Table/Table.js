import Button from "../Button/Button";
import style from "./Table.module.scss";
import Loader from "../Loader/Loader";
const Table = (props) => {
    const { thumbnail_image } = style;
    const { tableData, coloums, actionButtonTitle, actionButtonType, actionButtonEvent } = props;
    return (
        <>
            <table>
                <tr>
                    {coloums && coloums.map((item, index) => {
                        return (
                            <th key={index}>{item}</th>
                        )
                    })}
                </tr>


                {tableData.length > 0 ? tableData.map((item) => {
                    const { id, title, thumbnailUrl } = item;
                    return (
                        <tr>
                            <td>{id}</td>
                            <td><img className={thumbnail_image} src={thumbnailUrl} /></td>
                            <td>{title}</td>
                            <td><Button title={actionButtonTitle} type={actionButtonType} onclick={()=>actionButtonEvent(item)} /></td>
                        </tr>
                    )
                }) : <Loader />}



            </table>
        </>
    )
}

export default Table;