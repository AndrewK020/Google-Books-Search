import React from "react";
import CardContainer from "./CardContainer";

function ResultCointainer(props) {
    if (props.result.length > 0) {
        let resultList = props.result.map((res, index) => {
            return (<CardContainer
            key={index}
            title={res.title}
            author={res.author}
            image={res.image}
            link={res.link}
            description={res.description}
            saved={props.saved}
            />);
        });
        return (
            <div>
                {resultList}
            </div>
        );
    } else {
        return (<div></div>);
    }
}
export default ResultCointainer;