<script setup>
import { reactive, watch } from 'vue'

const props = defineProps({
  contact: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['save', 'delete'])

const createEmptyContact = () => ({
  id: null,
  name: '',
  work: '',
  mobile: '',
  email: '',
  address: '',
})

const form = reactive(createEmptyContact())

const syncForm = (contact) => {
  Object.assign(form, createEmptyContact(), contact || {})
}

watch(
  () => props.contact,
  (newContact) => {
    syncForm(newContact)
  },
  { immediate: true, deep: true },
)

const saveContact = () => {
  emit('save', { ...form })
}

const deleteContact = () => {
  emit('delete', { ...form })
}
</script>

<template>
  <div class="contact-form">
    <div class="panel-title">
      <div>
        <h2>{{ form.id ? 'Editar contacto' : 'Nuevo contacto' }}</h2>
        <p>Completa los campos y guarda los cambios.</p>
      </div>
    </div>

    <form class="form-grid" @submit.prevent="saveContact">
      <label>
        <span>Nombre</span>
        <input v-model="form.name" type="text" placeholder="Nombre completo" />
      </label>

      <label>
        <span>Trabajo</span>
        <input v-model="form.work" type="text" placeholder="Puesto o profesión" />
      </label>

      <label>
        <span>Celular</span>
        <input v-model="form.mobile" type="text" placeholder="Número de teléfono" />
      </label>

      <label>
        <span>Correo</span>
        <input v-model="form.email" type="email" placeholder="correo@ejemplo.com" />
      </label>

      <label class="full-width">
        <span>Dirección</span>
        <textarea v-model="form.address" rows="4" placeholder="Dirección completa"></textarea>
      </label>

      <div class="form-actions full-width">
        <button type="submit" class="primary-button">Guardar</button>
        <button type="button" class="danger-button" @click="deleteContact">Eliminar</button>
      </div>
    </form>
  </div>
</template>
