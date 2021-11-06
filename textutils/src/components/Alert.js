import React from 'react'

export default function Alert(props) {
    const captilize= (string) =>{
        const lower = string.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1)
    }
    return (
        props.alert &&  <div>


           <div className={`alert alert-${props.alert.type}`} role="alert" id="liveAlert">
            <strong>{captilize(props.alert.type)}</strong> {props.alert.msg}
            </div>
        </div>
    )
}
