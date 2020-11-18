import { validateURL } from "./validateURL"

const getData = async (endpoint, data) => {
  const res = await fetch(
    endpoint,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  )

  try {
    console.log(res)
    const result = await res.json()
    console.log(result)
    return result
  }
  catch (error) {
    console.log('error', error)
  }
}


function handleSubmit() {
  const text = document.getElementById('text').value
  const url = document.getElementById('url').value
  const number = document.getElementById('number').value
  const validURL = validateURL(url)
  if (!validURL) {
    error.textContent = "Please enter a valid URL"
    error.style.color = "red"
  } else {
    error.textContent = ""
    getData('/summarization', { number, text, url }).then(
      function (result) {
        document.getElementById('results').innerHTML = result
      }
    )
  }
}

export { handleSubmit, getData }