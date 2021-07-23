export function getProjects() {
  fetch("http://localhost:8080/projects")
    .then(res => res.json())
    .then((result) => {
      console.log(result)
      return result
    },
    (err) => {
      return []
    })
}

