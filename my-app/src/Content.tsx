import { CoursePart } from "./App"
import { Part } from "./Part"

export const Content = ({parts}: {parts: CoursePart[]}) => {
    return (
        <div>
            {parts.map(part => (
                <Part key={part.name} part={part}></Part>
            ))}
        </div>
    )
}