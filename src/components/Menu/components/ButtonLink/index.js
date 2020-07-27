import React from  'react';


function ButtonLink (props){
    //props{}
    console.log(props)
    return (
        <nav href={props.href} className={props.className}                                                                                                                                                                                                   >
            {props.children}
        </nav>
    );
}

export default ButtonLink;