import "../styles/Die.css"
export default function Die(props){

    const dieStyle = {
        backgroundColor: props.obj.isHeld ? "lightGreen" : "white"
    }

    return(
        <button
            style={dieStyle}
            onClick={() => props.hold(props.id)}
        >
            {props.obj.value}
        </button>
    )
}