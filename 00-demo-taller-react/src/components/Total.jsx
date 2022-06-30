const Total = ({ courseInfo }) => {
    let total = 0;

    courseInfo.map(info => {
        total += excersices;
    })

    return (
        <p>Total: {total}</p>
    )
}

export default Total;