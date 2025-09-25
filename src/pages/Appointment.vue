<template>
  <div class="mom-form">
    <h2>Client Minutes of Meetings</h2>

    <label>Date & Time</label>
    <input type="datetime-local" v-model="form.dateTime" />

    <label>Company Name</label>
    <input type="text" v-model="form.company" />

    <label>Client Name</label>
    <input type="text" v-model="form.client" />

    <label>Advisor</label>
    <input type="text" v-model="form.advisor" />

    <table>
      <tr>
        <th>No</th>
        <th>Discussion Matters</th>
        <th>Follow Up</th>
      </tr>
      <tr v-for="(row, index) in form.discussions" :key="index">
        <td>{{ index + 1 }}</td>
        <td><textarea v-model="row.matter" rows="2"></textarea></td>
        <td><textarea v-model="row.followUp" rows="2"></textarea></td>
      </tr>
    </table>

    <button @click="addRow">+ Add Row</button>

    <label>Advisor's Comment / Remarks</label>
    <textarea v-model="form.remarks" rows="4"></textarea>

    <button class="submit-btn" @click="saveMinutes">Save Minutes</button>
  </div>
</template>

<script>
export default {
  name: "MinutesOfMeeting",
  data() {
    return {
      form: {
        dateTime: "",
        company: "",
        client: "",
        advisor: "",
        discussions: [
          { matter: "", followUp: "" },
          { matter: "", followUp: "" }
        ],
        remarks: ""
      }
    };
  },
  methods: {
    addRow() {
      this.form.discussions.push({ matter: "", followUp: "" });
    },
    saveMinutes() {
      console.log("Meeting Minutes:", this.form);
      alert("Minutes saved in console (you can connect to backend)");
    }
  }
};
</script>

<style scoped>
*{
  color: black ;
  font-family: 'Nunito', sans-serif;
}

.mom-form {
  max-width: 800px;
  margin: auto;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
h2 {
  text-align: center;
  margin-bottom: 20px;
}
label {
  font-weight: bold;
  display: block;
  margin-top: 15px;
}
input, textarea {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
th {
  background: #f2f2f2;
}
button {
  margin-top: 15px;
  padding: 10px;
  background: #0284C7;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background: #0369A1;
}
</style>