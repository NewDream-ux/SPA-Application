import style from "./Header.module.scss";
import { constants } from "../../Constants/Constant";
const Header=()=>{
    const {header_container, app_title, app_action} = style;
    const {appTitle, appAction} = constants;
    return(
        <div className={header_container}>
            <div className={app_title}>
                 <span>{appTitle}</span>
            </div>

            <div className={app_action}>
                 <span>{appAction}</span>
            </div>
        </div>
    )
}

export default Header;