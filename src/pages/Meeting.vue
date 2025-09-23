<template>
  <div>
    <FullCalendar :options="calendarOptions" />

    <!-- Modal for adding a note -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal">
        <h3>Add Note for {{ selectedDate }}</h3>
        <label>Title</label>
        <input v-model="newEvent.title" type="text" />

        <label>Description</label>
        <textarea v-model="newEvent.description"></textarea>

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

const events = ref([
  { title: 'Meeting with client', date: '2025-09-23', description: 'CRM requirements' },
  { title: 'Project Deadline', date: '2025-09-25', description: 'Final report' }
])

const showModal = ref(false)
const selectedDate = ref('')
const newEvent = ref({ title: '', description: '' })

function openModal(dateStr) {
  selectedDate.value = dateStr
  newEvent.value = { title: '', description: '' }
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

function addEvent() {
  if (newEvent.value.title) {
    events.value.push({
      title: newEvent.value.title,
      date: selectedDate.value,
      description: newEvent.value.description
    })
    closeModal()
  } else {
    alert("Title is required!")
  }
}

const calendarOptions = {
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  events: events.value,

  dateClick(info) {
    openModal(info.dateStr)
  },

  eventClick(info) {
    info.jsEvent.preventDefault()
    // navigate to another page with event details
    router.push({
      path: '/meeting-detail',
      query: {
        title: info.event.title,
        date: info.event.startStr,
        description: info.event.extendedProps.description || 'No description'
      }
    })
  }
}
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
  z-index: 9998; /* <-- Higher than FullCalendar */
}

/* Modal content box */
.modal {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  z-index: 9999; /* <-- On top of overlay */
  position: relative;
  color: black;
}

.fc .fc-toolbar-title {
  color: black !important;
}
.fc .fc-col-header-cell-cushion {
  color: black !important;
}
</style>
