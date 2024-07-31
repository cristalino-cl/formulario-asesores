<template>
  <div class="form-container">
    <h2 class="form-title">Reporte de Problemas</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="deviceType">Tipo de dispositivo:</label>
        <select id="deviceType" v-model="form.deviceType" required>
          <option value="">Seleccione una opción</option>
          <option value="PC">PC</option>
          <option value="Mac">Mac</option>
          <option value="iOS">iOS</option>
          <option value="Android">Android</option>
        </select>
      </div>
      <div class="form-group">
        <label for="deviceModel">Modelo del dispositivo:</label>
        <input type="text" id="deviceModel" v-model="form.deviceModel" required />
      </div>
      <div class="form-group">
        <label for="operatingSystem">Sistema operativo:</label>
        <select id="operatingSystem" v-model="form.operatingSystem" @change="checkOtherOS" required>
          <option value="">Seleccione una opción</option>
          <option value="Windows 11">Windows 11</option>
          <option value="macOS Ventura">macOS Ventura</option>
          <option value="iOS 16">iOS 16</option>
          <option value="Android 13">Android 13</option>
          <option value="Other">Otro</option>
        </select>
        <input v-if="isOtherOS" type="text" v-model="form.otherOperatingSystem" placeholder="Ingrese el sistema operativo" required />
      </div>
      <div class="form-group">
        <label for="appVersion">Versión de la aplicación:</label>
        <input type="text" id="appVersion" v-model="form.appVersion" required />
      </div>
      <div class="form-group">
        <label for="incidentDate">Fecha y hora del incidente:</label>
        <input type="datetime-local" id="incidentDate" v-model="form.incidentDate" required />
      </div>
      <div class="form-group">
        <label for="problemDescription">Descripción detallada del problema:</label>
        <textarea id="problemDescription" v-model="form.problemDescription" required></textarea>
      </div>
      <div class="form-group">
        <label for="reproduccionSteps">Pasos para reproducir el problema:</label>
        <textarea id="reproduccionSteps" v-model="form.reproduccionSteps" required></textarea>
      </div>
      <div class="form-group">
        <label for="expectedBehavior">Comportamiento esperado:</label>
        <textarea id="expectedBehavior" v-model="form.expectedBehavior" required></textarea>
      </div>
      <div class="form-group">
        <label for="actualBehavior">Comportamiento actual:</label>
        <textarea id="actualBehavior" v-model="form.actualBehavior" required></textarea>
      </div>
      <div class="form-group">
        <label for="severityLevel">Nivel de severidad:</label>
        <select id="severityLevel" v-model="form.severityLevel" required>
          <option value="">Seleccione una opción</option>
          <option value="low">Bajo</option>
          <option value="medium">Medio</option>
          <option value="high">Alto</option>
          <option value="critical">Crítico</option>
        </select>
      </div>
      <div class="form-group">
        <label for="hasPreviouslyOccurred">¿Ha ocurrido este problema antes?</label>
        <select id="hasPreviouslyOccurred" v-model="form.hasPreviouslyOccurred" required>
          <option value="">Seleccione una opción</option>
          <option value="yes">Sí</option>
          <option value="no">No</option>
        </select>
      </div>
      <div class="form-group">
        <label for="additionalComments">¿Algún otro comentario o información adicional?</label>
        <textarea id="additionalComments" v-model="form.additionalComments"></textarea>
      </div>
      <div class="form-group">
        <label for="screenshots">Capturas de pantalla o videos:</label>
        <input type="file" id="screenshots" multiple @change="handleFileUpload" />
      </div>
      <button type="submit" class="submit-button">Enviar</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';

interface FormData {
  deviceType: string;
  deviceModel: string;
  operatingSystem: string;
  otherOperatingSystem?: string;
  appVersion: string;
  incidentDate: string;
  problemDescription: string;
  reproduccionSteps: string;
  expectedBehavior: string;
  actualBehavior: string;
  severityLevel: string;
  hasPreviouslyOccurred: string;
  additionalComments: string;
  screenshots: File[];
}

export default defineComponent({
  name: 'MyForm',
  setup() {
    const form = reactive<FormData>({
      deviceType: '',
      deviceModel: '',
      operatingSystem: '',
      appVersion: '',
      incidentDate: '',
      problemDescription: '',
      reproduccionSteps: '',
      expectedBehavior: '',
      actualBehavior: '',
      severityLevel: '',
      hasPreviouslyOccurred: '',
      additionalComments: '',
      screenshots: []
    });

    const isOtherOS = ref(false);

    const handleFileUpload = (event: Event) => {
      const files = (event.target as HTMLInputElement).files;
      if (files) {
        form.screenshots = Array.from(files);
      }
    };

    const handleSubmit = () => {
      console.log('Form submitted:', form);
      // Add your form submission logic here
    };

    const checkOtherOS = () => {
      isOtherOS.value = form.operatingSystem === 'Other';
      if (!isOtherOS.value) {
        form.otherOperatingSystem = '';
      }
    };

    return {
      form,
      isOtherOS,
      handleFileUpload,
      handleSubmit,
      checkOtherOS
    };
  }
});
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.submit-button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}

@media (max-width: 600px) {
  .form-container {
    padding: 10px;
  }

  .form-title {
    font-size: 20px;
  }

  .form-group input,
  .form-group textarea,
  .form-group select {
    font-size: 12px;
  }

  .submit-button {
    font-size: 14px;
  }
}
</style>
