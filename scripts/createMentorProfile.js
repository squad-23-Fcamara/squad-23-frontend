const mentorUUID = location.search.split('=')[1]
const testerUUID = 'df6dafd4-42fe-4d55-bd72-934c6a602c89'
const container = document.getElementById('dates')
const form = document.getElementById('schedule-form')
let selectedDate
let mentor

function createMentorProfile(mentor) {
  const profile = document.getElementById('profile')
  const profileImage = document.createElement('div')
  const mentorName = document.createElement('h2')
  const mentorRole = document.createElement('h3')
  const divider = document.createElement('hr')
  const mentorQualification = document.createElement('h3')
  const socialMediaList = document.createElement('ul')

  profileImage.className = 'mentor-profile-image'
  mentorName.className = 'mentor-profile-name font22'
  mentorRole.className = 'mentor-profile-job-role font16'
  divider.className = 'divider'
  mentorQualification.className = 'mentor-profile-qualification font16'
  socialMediaList.className = 'mentor-profile-social-media'

  mentorName.textContent = mentor.name
  mentorRole.textContent = mentor.role
  mentorQualification.textContent = mentor.graduations

  profile.appendChild(profileImage)
  profile.appendChild(mentorName)
  profile.appendChild(mentorRole)
  profile.appendChild(divider)
  profile.appendChild(mentorQualification)
  profile.appendChild(divider)
  profile.appendChild(socialMediaList)

  if (mentor.behance) {
    const socialMediaItem = document.createElement('li')
    socialMediaItem.className = 'menor-profile-social-media-icon'
    socialMediaItem.textContent = mentor.behance
    socialMediaList.appendChild(socialMediaItem)
  }

  if (mentor.github) {
    const socialMediaItem = document.createElement('li')
    socialMediaItem.className = 'menor-profile-social-media-icon'
    socialMediaItem.textContent = mentor.github
    socialMediaList.appendChild(socialMediaItem)
  }

  if (mentor.linkedin) {
    const socialMediaItem = document.createElement('li')
    socialMediaItem.className = 'menor-profile-social-media-icon'
    socialMediaItem.textContent = mentor.linkedin
    socialMediaList.appendChild(socialMediaItem)
  }

  if (mentor.medium) {
    const socialMediaItem = document.createElement('li')
    socialMediaItem.className = 'menor-profile-social-media-icon'
    socialMediaItem.textContent = mentor.medium
    socialMediaList.appendChild(socialMediaItem)
  }

  if (mentor.twitter) {
    const socialMediaItem = document.createElement('li')
    socialMediaItem.className = 'menor-profile-social-media-icon'
    socialMediaItem.textContent = mentor.twitter
    socialMediaList.appendChild(socialMediaItem)
  }
}

function createSkillsLi(parent, text) {
  const li = document.createElement('li')
  li.className = 'skills-list-topic font14'
  li.textContent = text

  parent.appendChild(li)
}

function createDateInputs(date) {
  const radio = document.createElement('input')
  radio.type = 'radio'
  radio.value = date
  radio.id = date
  radio.name = 'date-option'

  mentor.mentorings.map(mentoring => {
    mentoring.schedule_to === date
      ? (radio.disabled = true)
      : (radio.disabled = false)
  })

  const label = document.createElement('label')
  label.textContent = new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    weekday: 'long',
    timeZone: 'UTC'
  }).format(new Date(date))
  label.htmlFor = date

  form.appendChild(radio)
  form.appendChild(label)

  radio.onclick = e => (selectedDate = e.target.value)
}

const button = document.getElementById('btn')
button.onclick = () => {
  handleSchedule(mentor)
}

function createMentorAboutSection(mentor) {
  const about = document.getElementById('about')
  const biography = document.createElement('p')
  const skillsList = document.createElement('ul')
  const habilities = document.createElement('h2')

  biography.className = 'about-biografy font16'
  skillsList.className = 'skills-list'
  habilities.className = 'skills-list-title font18'

  biography.textContent = mentor.biography
  habilities.textContent = 'Habilidades'

  about.appendChild(biography)
  about.appendChild(skillsList)
  skillsList.appendChild(habilities)
  mentor.skills.map(skill => createSkillsLi(skillsList, skill))
}

async function handleSchedule() {
  const mentoring = {
    schedule_to: selectedDate,
    mentor_id: mentorUUID,
    mentored_id: testerUUID,
    platform: 'Teams',
    theme: mentor.skills
  }

  const response = await axios.post(
    `https://squad23-api.herokuapp.com/schedule/create`,
    mentoring
  )

  return response.data
}

async function fetchMentor() {
  const response = await axios.get(
    `https://squad23-api.herokuapp.com/users/${mentorUUID}`
  )

  mentor = response.data

  createMentorProfile(mentor)
  createMentorAboutSection(mentor)
  mentor.availableDates.map(date => createDateInputs(date))
}

fetchMentor()
