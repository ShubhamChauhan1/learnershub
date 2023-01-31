const states = [
    ["Delhi", "capital", 2],
    ["up", "Not capital", 7],
    ["Kashmir", "Paradise", 10],
    ["Bihar", "UPSC", 20]
];
export default function MDA() {
    return (
        <div>
            {states.map((items, i) => {
                return (
                <ul key={i}>
                    {items.map((sItems, sI) => {
                    return <li key={sI}> {sItems} </li>;
                    })}
                </ul>
                );
            })}
        </div>
    );
}