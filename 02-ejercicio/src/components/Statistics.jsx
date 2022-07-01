const Statistics = (props) => {



    return (
        <div>
            <h1>{props.title}</h1>
            <p>Good: {props.good}</p>
            <p>Neutral: {props.neutral}</p>
            <p>Bad: {props.bad}</p>
            <p>All: {props.all}</p>
            <p>Average: {Number(props.average.toFixed(5))}</p>
            <p>Positive: {Number(props.positive.toFixed(2))}%</p>
        </div>
    )
}

export default Statistics;