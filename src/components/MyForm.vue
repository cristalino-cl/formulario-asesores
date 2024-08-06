<template>
  <div
    class="flex w-full flex-col items-center gap-5 rounded-[3.5px] bg-black bg-opacity-25 p-5 text-sm text-white md:w-10/12 lg:w-8/12"
  >
    <h2 class="text-2xl">Reporte de Problemas</h2>
    <form class="w-full space-y-8" @submit.prevent="handleSubmit">
      <div class="flex flex-col">
        <label class="mb-2" for="deviceType">Tipo de dispositivo</label>
        <select
          id="deviceType"
          class="w-full rounded-[3.5px] px-[10.5px] py-[5.25px] text-gray-900"
          v-model="form.deviceType"
          required
        >
          <option value="">Seleccione una opción</option>
          <option value="PC">PC</option>
          <option value="Mac">Mac</option>
          <option value="iOS">iOS</option>
          <option value="Android">Android</option>
        </select>
      </div>
      <div class="flex flex-col">
        <label class="mb-2" for="deviceModel">Modelo del dispositivo</label>
        <input
          class="rounded-[3.5px] px-[10.5px] py-[5.25px] text-gray-900"
          type="text"
          id="deviceModel"
          v-model="form.deviceModel"
          required
        />
      </div>
      <div class="flex flex-col">
        <label class="mb-2" for="operatingSystem">Sistema operativo</label>
        <select
          id="operatingSystem"
          class="w-full rounded-[3.5px] px-[10.5px] py-[5.25px] text-gray-900"
          v-model="form.operatingSystem"
          @change="checkOtherOS"
          required
        >
          <option value="">Seleccione una opción</option>
          <option value="Windows 11">Windows 11</option>
          <option value="macOS Ventura">macOS Ventura</option>
          <option value="iOS 16">iOS 16</option>
          <option value="Android 13">Android 13</option>
          <option value="Other">Otro</option>
        </select>
        <input
          class="mt-2 rounded-[3.5px] px-[10.5px] py-[5.25px] text-gray-900"
          v-if="isOtherOS"
          type="text"
          v-model="form.otherOperatingSystem"
          placeholder="Ingrese el sistema operativo"
          required
        />
      </div>
      <div class="flex flex-col">
        <label class="mb-2" for="appVersion">Versión de la aplicación</label>
        <input
          class="rounded-[3.5px] px-[10.5px] py-[5.25px] text-gray-900"
          type="text"
          id="appVersion"
          v-model="form.appVersion"
          required
        />
      </div>
      <div class="flex flex-col">
        <label class="mb-2" for="incidentDate">Fecha y hora del incidente</label>
        <input
          class="rounded-[3.5px] px-[10.5px] py-[5.25px] text-gray-900"
          type="datetime-local"
          id="incidentDate"
          v-model="form.incidentDate"
          required
        />
      </div>
      <div class="flex flex-col">
        <label class="mb-2" for="problemDescription">Descripción detallada del problema</label>
        <textarea
          class="min-h-20 rounded-[3.5px] px-[10.5px] py-[5.25px] text-gray-900"
          id="problemDescription"
          v-model="form.problemDescription"
          required
        ></textarea>
      </div>
      <div class="flex flex-col">
        <label class="mb-2" for="reproduccionSteps">Pasos para reproducir el problema</label>
        <textarea
          class="min-h-20 rounded-[3.5px] px-[10.5px] py-[5.25px] text-gray-900"
          id="reproduccionSteps"
          v-model="form.reproduccionSteps"
          required
        ></textarea>
      </div>
      <div class="flex flex-col">
        <label class="mb-2" for="expectedBehavior">Comportamiento esperado</label>
        <textarea
          class="min-h-20 rounded-[3.5px] px-[10.5px] py-[5.25px] text-gray-900"
          id="expectedBehavior"
          v-model="form.expectedBehavior"
          required
        ></textarea>
      </div>
      <div class="flex flex-col">
        <label class="mb-2" for="actualBehavior">Comportamiento actual</label>
        <textarea
          class="min-h-20 rounded-[3.5px] px-[10.5px] py-[5.25px] text-gray-900"
          id="actualBehavior"
          v-model="form.actualBehavior"
          required
        ></textarea>
      </div>
      <div class="flex flex-col">
        <label class="mb-2" for="severityLevel">Nivel de severidad</label>
        <select
          id="severityLevel"
          class="w-full rounded-[3.5px] px-[10.5px] py-[5.25px] text-gray-900"
          v-model="form.severityLevel"
          required
        >
          <option value="">Seleccione una opción</option>
          <option value="low">Bajo</option>
          <option value="medium">Medio</option>
          <option value="high">Alto</option>
          <option value="critical">Crítico</option>
        </select>
      </div>
      <div class="flex flex-col">
        <label class="mb-2" for="hasPreviouslyOccurred">¿Ha ocurrido este problema antes?</label>
        <select
          id="hasPreviouslyOccurred"
          class="w-full rounded-[3.5px] px-[10.5px] py-[5.25px] text-gray-900"
          v-model="form.hasPreviouslyOccurred"
          required
        >
          <option value="">Seleccione una opción</option>
          <option value="yes">Sí</option>
          <option value="no">No</option>
        </select>
      </div>
      <div class="flex flex-col">
        <label class="mb-2" for="additionalComments"
          >¿Algún otro comentario o información adicional?</label
        >
        <textarea
          class="min-h-20 rounded-[3.5px] px-[10.5px] py-[5.25px] text-gray-900"
          id="additionalComments"
          v-model="form.additionalComments"
        ></textarea>
      </div>
      <div class="flex flex-col">
        <label class="mb-2" for="screenshots">Capturas de pantalla o videos</label>
        <input
          class="rounded-[3.5px] px-[10.5px] py-[5.25px] text-gray-900"
          type="file"
          id="screenshots"
          multiple
          @change="handleFileUpload"
        />
      </div>
      <div class="flex w-full justify-center">
        <button
          type="submit"
          class="duration-400 min-w-32 rounded-[3.5px] bg-[#6c757d] px-[10.5px] py-[5.25px] transition-colors hover:bg-[#5a6268]"
        >
          Enviar
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

interface FormData {
  deviceType: string
  deviceModel: string
  operatingSystem: string
  otherOperatingSystem?: string
  appVersion: string
  incidentDate: string
  problemDescription: string
  reproduccionSteps: string
  expectedBehavior: string
  actualBehavior: string
  severityLevel: string
  hasPreviouslyOccurred: string
  additionalComments: string
  screenshots: File[]
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
    })

    const isOtherOS = ref(false)

    const handleFileUpload = (event: Event) => {
      const files = (event.target as HTMLInputElement).files
      if (files) {
        form.screenshots = Array.from(files)
      }
    }

    const handleSubmit = () => {
      console.log('Form submitted:', form)
      // Add your form submission logic here
    }

    const checkOtherOS = () => {
      isOtherOS.value = form.operatingSystem === 'Other'
      if (!isOtherOS.value) {
        form.otherOperatingSystem = ''
      }
    }

    return {
      form,
      isOtherOS,
      handleFileUpload,
      handleSubmit,
      checkOtherOS
    }
  }
})
</script>
