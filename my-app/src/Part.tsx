import { CoursePart } from "./App";


const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

export const Part = ({ part }: { part: CoursePart }) => {
  switch (part.type) {
    case "normal":
      return (
        <div>
            <h3>{part.name} {part.exerciseCount}</h3>
            <p>{part.description}</p>
        </div>
      );
    case "groupProject":
      return <div>
            <h3>{part.name} {part.exerciseCount}</h3>
            <p>Project exercises: {part.groupProjectCount}</p>
        </div>;
    case "submission":
      return (
        <div>
            <h3>{part.name} {part.exerciseCount}</h3>
            <p>{part.description}</p>
            <p>Submit to: {part.exerciseSubmissionLink}</p>
        </div>
      );
    case "special":
      return (
        <div>
            <h3>{part.name} {part.exerciseCount}</h3>
            <p>{part.description}</p>

            <div>
                Required skills: {" "} 
                {part.requirements.map((req) => req).join(", ")}
            </div>
        </div>
      );
    default:
      return assertNever(part);
  }
};