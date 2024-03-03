import style from "./Button.module.scss";

const Button=(props)=>{
    const {title, type, onclick} = props;
    return(
         <button type={type} onClick={()=>onclick()}>{title}</button>
    )
}

export default Button;