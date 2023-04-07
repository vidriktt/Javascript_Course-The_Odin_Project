const Overview = (props) => {
    const { listItems } = props;

    return (
        <ul>
            {listItems.map((item) => {
                return <li key={item.id}>{item.text}</li>;
            })}
        </ul>
    );
};

export default Overview;