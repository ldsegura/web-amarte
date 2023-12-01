
const ContainerCustom = (props) => {
    const {children, className, ...rest} = props;

    return ( <div className={`container-custom container ${className}`}
    {...rest}>
        {children}
    </div> );
}

export default ContainerCustom;