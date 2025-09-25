<template>
  <div>
    <h1>Meeting Dashboard</h1>

    <div class="SortByDate">
      <div>Auto Date Range</div>
      <VueDatePicker
        v-model="selectedDateRange"
        range
        :format="'YYYY-MM-DD'"
      />
    </div>

    <div class="card">
      <div>Total Client: {{ selectedDateRange }}</div>
      <div>Total Meeting: </div>
      <div>Total Appointment: </div>
      <div>Total Revenue: </div>
    </div>

    <!-- Pie Chart -->
    <PieChart class="piechart"/>
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import PieChart from '../components/PieChart.vue'

export default {
  components: { VueDatePicker, PieChart },
  data() {
    return {
      selectedDateRange: null 
    }
  },
}
</script>

<style scoped>
.SortByDate {
  width: 200px;
  height: 60px;
  box-shadow: 2px 2px rgba(9, 7, 7, 0.2);
  background-color: rgba(218, 214, 214, 0.2);
  border-radius: 3px;
  padding: 5px 10px;
}

.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
  width: 100%;
  padding: 0px;
}

.card div {
  width: 300px;
  height: 100px;
  box-shadow: 2px 2px rgba(9, 7, 7, 0.2);
  background-color: rgba(218, 214, 214, 0.2);
  border-radius: 3px;
  padding: 5px 10px;
}


.piechart{ 
  margin-top: 50px;
  width: 400px;
  height: 400px;
  box-shadow: 2px 2px rgba(9, 7, 7, 0.2);
  background-color: rgba(218, 214, 214, 0.2);
  border-radius: 3px;
  padding: 5px 10px;
  
}

</style>
