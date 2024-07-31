<template>
  <div class="form-container">
    <h2 class="form-title">Reporte de Problemas</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="deviceType">Tipo de dispositivo:</label>
        <input type="text" id="deviceType" v-model="form.deviceType" required />
      </div>
      <div>
        <label for="deviceModel">Modelo del dispositivo:</label>
        <input type="text" id="deviceModel" v-model="form.deviceModel" required />
      </div>
      <div>
        <label for="operatingSystem">Sistema operativo:</label>
        <input type="text" id="operatingSystem" v-model="form.operatingSystem" required />
      </div>
      <div>
        <label for="appVersion">Versión de la aplicación:</label>
        <input type="text" id="appVersion" v-model="form.appVersion" required />
      </div>
      <div>
        <label for="incidentDate">Fecha y hora del incidente:</label>
        <input type="datetime-local" id="incidentDate" v-model="form.incidentDate" required />
      </div>
      <div>
        <label for="problemDescription">Descripción detallada del problema:</label>
        <textarea id="problemDescription" v-model="form.problemDescription" required></textarea>
      </div>
      <div>
        <label for="reproduccionSteps">Pasos para reproducir el problema:</label>
        <textarea id="reproduccionSteps" v-model="form.reproduccionSteps" required></textarea>
      </div>
      <div>
        <label for="expectedBehavior">Comportamiento esperado:</label>
        <textarea id="expectedBehavior" v-model="form.expectedBehavior" required></textarea>
      </div>
      <div>
        <label for="actualBehavior">Comportamiento actual:</label>
        <textarea id="actualBehavior" v-model="form.actualBehavior" required></textarea>
      </div>
      <div>
        <label for="severityLevel">Nivel de severidad:</label>
        <select id="severityLevel" v-model="form.severityLevel" required>
          <option value="">Seleccione una opción</option>
          <option value="low">Bajo</option>
          <option value="medium">Medio</option>
          <option value="high">Alto</option>
          <option value="critical">Crítico</option>
        </select>
      </div>
      <div>
        <label for="hasPreviouslyOccurred">¿Ha ocurrido este problema antes?</label>
        <select id="hasPreviouslyOccurred" v-model="form.hasPreviouslyOccurred" required>
          <option value="">Seleccione una opción</option>
          <option value="yes">Sí</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <label for="additionalComments">¿Algún otro comentario o información adicional?</label>
        <textarea id="additionalComments" v-model="form.additionalComments"></textarea>
      </div>
      <div>
        <label for="screenshots">Capturas de pantalla o videos:</label>
        <input type="file" id="screenshots" multiple @change="handleFileUpload" />
      </div>
      <button type="submit">Enviar</button>
    </form>
      <button type="submit" class="submit-button">Enviar</button>
  </div>

</template>


<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { ElInput, ElSelect, ElOption, ElDatePicker, ElButton, ElUpload } from 'element-plus';
import 'element-plus/dist/index.css';

interface FormData {
  deviceType: string;
  deviceModel: string;
  operatingSystem: string;
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
  components: {
    ElInput,
    ElSelect,
    ElOption,
    ElDatePicker,
    ElButton,
    ElUpload
  },
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

    return {
      form,
      handleFileUpload,
      handleSubmit
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
}

.form-title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.el-form-item {
  margin-bottom: 20px;
}

.el-input,
.el-select,
.el-date-editor {
  width: 100%;
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
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>

