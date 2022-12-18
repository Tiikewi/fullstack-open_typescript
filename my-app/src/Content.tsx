import { CoursePart } from "./App"

export const Content = ({parts}: {parts: CoursePart[]}) => {
    return (
        <div>
            {parts.map(part => (
                <p key={part.name}>{part.name} {part.exerciseCount}</p>
            ))}
        </div>
    )
}