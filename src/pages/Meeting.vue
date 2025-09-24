<template>
  <div>
    <div class="filter-bar">
      <label>Filter by User:</label>
      <select v-model="selectedUser" @change="filterEvents">
        <option value="">All Users</option>
        <option value="Ryan">Ryan</option>
        <option value="Michelle">Michelle</option>
        <option value="Angeline">Angeline</option>
      </select>
    </div>

    <FullCalendar :options="calendarOptions" />

    <!-- Modal for adding a note -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal">
        <h3>Add Note for {{ selectedDate }}</h3>

        <label>Customer Name</label>
        <input v-model="newEvent.client_name" type="text" />

        <label>Time</label>
        <input v-model="newEvent.time" type="time" />

        <label>Title</label>
        <input v-model="newEvent.title" type="text" />

        <label>Description</label>
        <textarea v-model="newEvent.description"></textarea>

        <label>Location</label>
        <textarea v-model="newEvent.location"></textarea>

        <div class="modal-actions">
          <button @click="addEvent">Save</button>
          <button @click="closeModal">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { ref } from 'vue'
import { useRouter } from 'vue-router'   // <-- import router hook

const router = useRouter()               // <-- create router instance

const allEvents = ref([
  { client_name: 'czy', title: 'Meeting with client', date: '2025-09-20', description: 'CRM requirements', added_by: 'Ryan' },
  { client_name: 'wjt', title: 'Project Deadline', date: '2025-09-25', description: 'Final report', added_by: 'Michelle' }
])

const events = ref([...allEvents.value])


const showModal = ref(false)
const selectedDate = ref('')
const newEvent = ref({ client_name: '', time: '', title: '', description: '' , location: ''})

const searchQuery = ref('')

function openModal(dateStr) {
  selectedDate.value = dateStr
  newEvent.value = { client_name: '', time: '', title: '', description: '' , location: '' }
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

function addEvent() {
  if (newEvent.value.title) {
    const currentUser = JSON.parse(localStorage.getItem("user"))
    const eventObj = {
      client_name: newEvent.value.client_name,
      time: newEvent.value.time,
      title: newEvent.value.title,
      date: selectedDate.value,
      description: newEvent.value.description,
      location: newEvent.value.location,
      added_by: currentUser?.username || "Unknown"
    }
    events.value.push(eventObj)
    allEvents.value.push(eventObj) 
    closeModal()
  } else {
    alert("Title is required!")
  }
}

const selectedUser = ref('')
function filterEvents() {
  if (selectedUser.value === '') {
    events.value = [...allEvents.value]
  } else {
    events.value = allEvents.value.filter(
      e => e.added_by === selectedUser.value
    )
  }
}

const calendarOptions = ref({
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  events: events,   // bind the ref itself, not its value
  dateClick(info) { openModal(info.dateStr) },
  eventClick(info) {
    info.jsEvent.preventDefault()
    router.push({
      path: '/meeting-detail',
      query: {
        client_name: info.event.extendedProps.client_name || 'No client name',
        time: info.event.extendedProps.time || 'No time selected',
        title: info.event.title,
        date: info.event.startStr,
        description: info.event.extendedProps.description || 'No description',
        location: info.event.extendedProps.location || 'No location',
        added_by: info.event.extendedProps.added_by || 'No user'
      }
    })
  }
})

</script>


<style>
/* Simple modal styling */
.modal-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
}
.modal input, .modal textarea {
  width: 100%;
  margin: 5px 0 15px 0;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: darkgrey;
  color: white;
}
.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
.modal-actions button {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.modal-actions button:first-child {
  background: #42b983;
  color: white;
}
.modal-actions button:last-child {
  background: #ccc;
}

/* Overlay must cover everything */
.modal-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9998; 
}

/* Modal content box */
.modal {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  z-index: 9999; 
  position: relative;
  color: black;
}

.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  gap: 10px;
}

.search-bar input {
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
  color: black;
  background: white;
}

.search-bar button {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: #42b983;
  color: white;
}

.search-bar button:last-child {
  background: #ccc;
  color: black;
}

.filter-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  gap: 10px;
}

.filter-bar select {
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: black;
  background: white;
}



</style>