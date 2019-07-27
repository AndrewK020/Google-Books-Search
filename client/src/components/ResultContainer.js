import React from "react";
import CardContainer from "./CardContainer";

function ResultCointainer(props) {
    if (props.result.length > 0) {
        let resultList = props.result.map(res => {
            return (<CardContainer
            title={res.title}
            author={res.author}
            image={res.image}
            link={res.link}
            description={res.description}
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