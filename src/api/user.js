const backendServer = process.env.REACT_APP_BACKEND_SERVER

const signIn = async (user) => {
  const request = await fetch(`${backendServer}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
  const response = await request.json()
  pictureSignIn(response.id, user.picture)
}

const pictureSignIn = async (id, picture) => {
  const formdata = new FormData()
  formdata.append("picture", picture)
  const request = await fetch(`${backendServer}/user/${id}/upload`, {
    method: "POST",
    body: formdata,
  })
  const response = await request.json()
  return response
}

export { signIn }
