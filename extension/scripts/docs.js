// Add a button to open a link to the docs repo: https://github.com/airbytehq/airbyte/tree/master/docs/

console.log('welcome to docs!')

addButton()

function addButton() {
  const button = document.createElement('button')
  button.innerText = 'Go to Github'

  button.addEventListener('click', openTab)

  document.body.appendChild(button)
}

function openTab() {
  let path = window.location.pathname.toString()

  // remove trailing slashes
  path = path.endsWith('/') ? path.slice(0, -1) : path

  window.open(
    `https://github.com/airbytehq/airbyte/tree/master/docs${path}.md`,
    '_blank'
  )
}
