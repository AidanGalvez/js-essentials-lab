import { Link } from "react-router-dom";
const ADVENTURES = [
    {id: "1", title: "Hiking Ben Lomond"},
    {id: "2", title: "Jogging at Antelope Island"},
    {id: "3", title: "Bird Watching at Weber State"},
]

function AdventuresPage(){
    return (
        <>
        <h1>Adventures Page</h1>
        <ul>
            {ADVENTURES.map((adventure) => (
                <li key={adventure.id}>
                    <Link to={`/adventures/${adventure.id}`}>{adventure.title}</Link>
                </li>
            ))}
        </ul>
        </>
    )
}

export default AdventuresPage;