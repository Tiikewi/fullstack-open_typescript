import { CoursePart } from "./App"

export const Total = ({parts}:{parts: CoursePart[]}) => {
    return(
        <div>
            <p>
                Number of exercises{" "}
                {parts.reduce((carry, part) => carry + part.exerciseCount, 0)}
            </p>
        </div>
    )
}