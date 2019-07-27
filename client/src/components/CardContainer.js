import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CardContainer(props) {
    const authors = (props.author) ?  props.author.join(", ") :"";
    return (
        <Card>
          <h4>{props.title}</h4>
          <p>Written by: {authors}</p>
          <div className="cardDiv">
            <img src={props.image} alt={props.title}></img>
            <p className="pDescription">{props.description}</p>
          </div>
          <div className="btnContainer">
          <Button href={props.link}>Link</Button>
          <Button variant="success">Save</Button>
          </div>
        </Card>
    );
}

export default CardContainer;