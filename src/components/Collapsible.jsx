import React, {useState,useRef} from "react";
import "./../Collapsible.css";

function Collapsible(props) {
    const [isOpen,setIsOpen] = useState(false);
    const Toggle = () => setIsOpen(!isOpen);
    // const scrollHeight = docuement.getElementById("parent").scrollHeight;
    const parentRef = useRef();
    // if(parentRef.current) {
    //     console.log(parentRef.current.scrollHeight);
    // }
    return (
        <div className="collapsible">
            <button className="toggle" onClick={Toggle}>
                {props.label}
            </button>
            <div 
                className="content-parent" 
                ref={parentRef} 
                style={
                    isOpen 
                        ? {
                            height:parentRef.current.scrollHeight + "px"
                        } : {
                            height:"0px"
                        }
                }
            >
                <div className="content">{props.children}</div>
            </div>
        </div>
    )
}

export default Collapsible;