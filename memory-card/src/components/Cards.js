import '../styles/Cards.css';

const Cards = ({onClickCard}) => {
    const sports = [
        {
            id: 1,
            title: "Table tennis"
        },
        {
            id: 2,
            title: "Tennis"
        },
        {
            id: 3,
            title: "Badminton"
        },
        {
            id: 4,
            title: "Pool"
        },
        {
            id: 5,
            title: "Golf"
        },
        {
            id: 6,
            title: "Basketball"
        },
        {
            id: 7,
            title: "Bowling"
        },
        {
            id: 8,
            title: "Baseball"
        },
        {
            id: 9,
            title: "Volleyball"
        },
        {
            id: 10,
            title: "Weights"
        },
        {
            id: 11,
            title: "Football"
        },
        {
            id: 12,
            title: "American football"
        }
    ];
    const shuffledSports = sports.sort((a, b) => 0.5 - Math.random());

    return (
        <div id="cards">
            {shuffledSports.map((item) => {
                return <div key={item.id} id={"Sport-" + item.id} onClick={e => onClickCard(e.currentTarget)}>
                    <img src={"images/Sport-" + item.id + ".png"} alt={"Sport-" + item.id} />
                    <h4>{item.title}</h4>
                </div>
            })}
        </div>
    );
};

export default Cards;
