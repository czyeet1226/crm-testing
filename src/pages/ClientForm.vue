<template>
  <div>
    <h1>KYC Form</h1>

    <form @submit.prevent="submitForm" class="kyc-form">
      <!-- Company Details -->
      <h3>Company Details</h3>
      
      <div class="form-group">
        <label>Company Name</label>
        <input v-model="form.companyName" type="text" required />
      </div>

      <div class="form-group">
        <label>Client Name</label>
        <input v-model="form.clientName" type="text" required />
      </div>

      <div class="form-group">
        <label>Email Address</label>
        <input v-model="form.email" type="email" required />
      </div>

      <div class="form-group">
        <label>Contact Number</label>
        <input v-model="form.contactNumber" type="text" />
      </div>

      <div class="form-group">
        <label>Number of Partners/Shareholders</label>
        <input v-model="form.numPartners" type="number" />
      </div>

      <div class="form-group">
        <label>Nature of Business</label>
        <input v-model="form.natureOfBusiness" type="text" />
      </div>

      <div class="form-group">
        <label>Year of Formation (Biz)</label>
        <input v-model="form.yearFormation" type="text" />
      </div>

      <div class="form-group">
        <label>Company Address</label>
        <textarea v-model="form.companyAddress" rows="3"></textarea>
      </div>

      <div class="section-divider"></div>

      <!-- Type of Business -->
      <h3>Type of Business</h3>
      <div class="options">
        <label><input type="radio" value="Sole Prop" v-model="form.businessType" /> Sole Prop</label>
        <label><input type="radio" value="Partnership" v-model="form.businessType" /> Partnership</label>
        <label><input type="radio" value="LLP" v-model="form.businessType" /> LLP</label>
        <label><input type="radio" value="Sdn. Bhd" v-model="form.businessType" /> Sdn. Bhd</label>
        <label><input type="radio" value="New Startup" v-model="form.businessType" /> New Startup</label>
      </div>

      <div class="section-divider"></div>

      <!-- Annual Revenue -->
      <h3>Annual Revenue Range</h3>
      <div class="options">
        <label><input type="radio" value="<300K" v-model="form.revenue" /> &lt; 300K</label>
        <label><input type="radio" value="300K-3M" v-model="form.revenue" /> 300K - 3M</label>
        <label><input type="radio" value=">3M" v-model="form.revenue" /> &gt; 3M</label>
      </div>

      <div class="section-divider"></div>

      <!-- Employees -->
      <h3>Number of Employees</h3>
      <div class="options">
        <label><input type="radio" value="<5" v-model="form.employees" /> &lt; 5</label>
        <label><input type="radio" value="<10" v-model="form.employees" /> &lt; 10</label>
        <label><input type="radio" value="10-50" v-model="form.employees" /> 10-50</label>
        <label><input type="radio" value=">50" v-model="form.employees" /> &gt; 50</label>
      </div>

      <div class="section-divider"></div>

      <!-- Book Keeping -->
      <h3>Book Keeping Done?</h3>
      <div class="options">
        <label><input type="radio" value="Yes" v-model="form.bookKeeping" /> Yes</label>
        <label><input type="radio" value="No" v-model="form.bookKeeping" /> No</label>
      </div>

      <div class="section-divider"></div>

      <!-- Additional Info -->
      <h3>Additional Information</h3>
      
      <div class="form-group">
        <label>Any Asset Held Under Company</label>
        <input v-model="form.assets" type="text" />
      </div>

      <div class="form-group">
        <label>Any Loan / HP that is still active</label>
        <input v-model="form.loans" type="text" />
      </div>

      <div class="form-group">
        <label>Any Subsidiary</label>
        <input v-model="form.subsidiary" type="text" />
      </div>

      <div class="form-group">
        <label>Any Assets Digital Assets / Website / Apps</label>
        <input v-model="form.digitalAssets" type="text" />
      </div>

      <div class="section-divider"></div>

      <!-- Agreements -->
      <h3>Agreements / Protections</h3>
      <div class="checkboxes">
        <label><input type="checkbox" value="Shareholder Agreement" v-model="form.agreements" /> Shareholder Agreement</label>
        <label><input type="checkbox" value="Partnership Agreement" v-model="form.agreements" /> Partnership Agreement</label>
        <label><input type="checkbox" value="Non Disclosure Agreement" v-model="form.agreements" /> Non Disclosure Agreement</label>
        <label><input type="checkbox" value="Buy-Sell Agreement" v-model="form.agreements" /> Buy-Sell Agreement</label>
        <label><input type="checkbox" value="Keyman Insurance" v-model="form.agreements" /> Keyman Insurance Protections</label>
        <label><input type="checkbox" value="E-invoicing" v-model="form.agreements" /> E-Invoicing Preparation</label>
        <label><input type="checkbox" value="Trust" v-model="form.agreements" /> Trust</label>
        <label><input type="checkbox" value="Will" v-model="form.agreements" /> Will</label>
        <label><input type="checkbox" value="Business Succession" v-model="form.agreements" /> Business Succession Plan</label>
        <label><input type="checkbox" value="Business Insurance" v-model="form.agreements" /> Business Insurance/Autobuddy</label>
        <label><input type="checkbox" value="Personal Risk" v-model="form.agreements" /> Personal Risk Assessment</label>
        <label><input type="checkbox" value="Holding Company" v-model="form.agreements" /> Holding Company Structure</label>
      </div>

      <div class="section-divider"></div>

      <!-- Business Advisory -->
      <h3>Do you need business advisory services?</h3>
      <div class="options">
        <label><input type="radio" value="Yes" v-model="form.businessAdvisory" /> Yes</label>
        <label><input type="radio" value="No" v-model="form.businessAdvisory" /> No</label>
      </div>

      <div class="form-group">
        <label>What kind of service are you looking into other than the above?</label>
        <textarea v-model="form.otherServices" rows="3"></textarea>
      </div>

      <button type="submit">Submit KYC Form</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  companyName: '',
  clientName: '',
  email: '',
  contactNumber: '',
  numPartners: '',
  natureOfBusiness: '',
  yearFormation: '',
  companyAddress: '',
  businessType: '',
  revenue: '',
  employees: '',
  bookKeeping: '',
  assets: '',
  loans: '',
  subsidiary: '',
  digitalAssets: '',
  agreements: [],
  businessAdvisory: '',
  otherServices: ''
})

function submitForm() {
  console.log("KYC Data:", form)
  alert("KYC Form submitted! Check console for details.")
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
  border-bottom: 2px solid #FF8D08;
  padding-bottom: 10px;
}

h3 {
  color: #2c3e50;
  margin-top: 25px;
  margin-bottom: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid #eaeaea;
}

.kyc-form {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.form-group label {
  font-weight: 600;
  margin-bottom: 8px;
  color: #2c3e50;
}

.form-group input, 
.form-group textarea {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  transition: border 0.3s;
}

.form-group input:focus, 
.form-group textarea:focus {
  outline: none;
  border-color: #FF8D08;
  box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
}

.options, .checkboxes {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 10px 0;
}

.options label, .checkboxes label {
  display: flex;
  align-items: center;
  font-weight: normal;
  margin: 5px 0;
  color: black;
}

.options input[type="radio"], 
.checkboxes input[type="checkbox"] {
  margin-right: 8px;
}

button {
  margin-top: 30px;
  padding: 14px;
  background: #42b983;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 600;
  transition: background 0.3s;
}

button:hover {
  background: #369870;
}

.section-divider {
  height: 1px;
  background: #eaeaea;
  margin: 25px 0;
}

@media (max-width: 600px) {
  .options, .checkboxes {
    flex-direction: column;
  }
}
</style>