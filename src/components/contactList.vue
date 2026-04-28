<script setup>
import ContactItem from './contactItem.vue'

defineProps({
  contacts: {
    type: Array,
    required: true,
  },
  selectedId: {
    type: [Number, String],
    default: null,
  },
})

defineEmits(['select', 'add'])
</script>

<template>
  <div class="contact-list">
    <div class="panel-title">
      <div>
        <h2>Contactos</h2>
        <p>Selecciona uno para editarlo.</p>
      </div>

      <button type="button" class="primary-button" @click="$emit('add')">
        Agregar
      </button>
    </div>

    <div v-if="contacts.length" class="contact-list-items">
      <ContactItem
        v-for="contact in contacts"
        :key="contact.id"
        :contact="contact"
        :selected="contact.id === selectedId"
        @click="$emit('select', contact)"
      />
    </div>

    <p v-else class="empty-state">
      Aún no hay contactos guardados.
    </p>
  </div>
</template>
