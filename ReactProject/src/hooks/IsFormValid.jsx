const IsFormValid = (props) => {
    console.log(props);
    return (
        props.name &&
        props.age &&
        props.email &&
        props.phone &&
        props.gender &&
        props.address
    )
}

export default IsFormValid