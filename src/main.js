const app = document.getElementById('app')

app.addEventListener('bye', console.log)

document.getElementById('name').addEventListener('input', ev => {
  app.name = ev.target.value
})
