import React from 'react'


export default function Card(props) {
  var type = props.type;
    return (

        <div className={"col-4 pad-3em " + type}>
        <img className="icon" width="100% "src ={props.icon} alt="This is geeby."/>
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        </div>

    )
}
