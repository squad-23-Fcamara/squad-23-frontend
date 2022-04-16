const testerUUID = 'df6dafd4-42fe-4d55-bd72-934c6a602c89'

let user

function userInfo() {
  const container = document.getElementById('user-info')
  const wrapper = document.createElement('div')
  const userName = document.createElement('h2')
  const userRole = document.createElement('h4')

  userName.textContent = user.name
  userRole.textContent = user.role

  wrapper.appendChild(userName)
  wrapper.appendChild(userRole)

  container.appendChild(wrapper)
}

async function handleCancelMentoring(id) {
  const response = await axios.delete(
    `https://squad23-api.herokuapp.com/schedule/delete/${id}`
  )

  console.log(response.data)

  window.alert('Mentoria excluída')
  window.location.reload()
}

function userMentorings(schedule, id) {
  const mentoringId = id
  const mentoringsInfo = document.getElementById('mentorings')
  const wrapper = document.createElement('div')
  const date = document.createElement('p')
  const hour = document.createElement('p')

  date.textContent = new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date(schedule))

  hour.textContent = new Intl.DateTimeFormat('pt-BR', {
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'UTC'
  }).format(new Date(schedule))

  wrapper.appendChild(date)
  wrapper.appendChild(hour)
  mentoringsInfo.appendChild(wrapper)
  wrapper.className = 'date-time-wrapper'

  const buttonWrapper = document.createElement('div')
  const cancelButton = document.createElement('button')
  const messageButton = document.createElement('button')
  buttonWrapper.className = 'cancel-send-buttons'
  cancelButton.id = 'cancel-button'
  messageButton.id = 'send-button'

  cancelButton.textContent = 'Cancelar mentoria'
  messageButton.textContent = 'Enviar mensagem'

  cancelButton.onclick = () => {
    handleCancelMentoring(mentoringId)
  }

  buttonWrapper.appendChild(cancelButton)
  buttonWrapper.appendChild(messageButton)

  wrapper.appendChild(buttonWrapper)
}

async function fetchUser() {
  const response = await axios.get(
    `https://squad23-api.herokuapp.com/users/${testerUUID}`
  )

  user = response.data

  userInfo()
  user.mentorings.map(mentoring =>
    userMentorings(mentoring.schedule_to, mentoring.id)
  )
}

fetchUser()
