const Input = (props) => {
    return (
        <input type={props.type} onChange={props.onChange} ref={props.propsRef} placeholder={props.placeholder} />
    )
}

export default Input