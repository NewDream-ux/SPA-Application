import style from "./Loader.module.scss";
const Loader = () => {
    const {loader_wrapper, loader} = style;
    return (
        <div className={loader_wrapper}>
            <span class={loader}></span>
        </div>
    )
}

export default Loader;