const Header = (props) => {
  console.log("Header:", props)
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  console.log("Part:", props)
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  console.log("Content:", props)
  return (
    <div>
      {props.parts.map(part => <Part key={part.id} part={part} />)}
    </div>
  )
}

const Total = (props) => {
  console.log("Total:", props)
  let total =  props.parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <p>
      <b>total of  {total} exercises</b>
    </p>
  )
}

const Course = (props) => {
  console.log("Course:", props)
  return (
    <div>
      <Header course={props.course} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App
