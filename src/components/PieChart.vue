<template>
  <div>
    <!-- Correct prop name -->
    <Pie :data="chartData" :options="chartOptions" class="pie"/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Pie } from 'vue-chartjs';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

export default defineComponent({
  name: 'PieChart',
  components: { Pie },
  data() {
    return {
      chartData: {
        labels: ['Clients', 'Meetings', 'Appointments'],
        datasets: [
          {
            label: 'Statistics',
            data: [10, 5, 7],
            backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom' },
        },
      },
    };
  },
});
</script>
<style scoped>
div{
  margin-top: 50px;
  width: 400px;
  height: 400px;
}

</style>
