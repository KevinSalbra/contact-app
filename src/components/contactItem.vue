<script setup>
defineProps({
  contact: {
    type: Object,
    required: true,
  },
  selected: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button type="button" class="contact-item" :class="{ selected }">
    <span class="contact-name">{{ contact.name || 'Contacto sin nombre' }}</span>
    <span class="contact-meta">{{ contact.work || 'Sin ocupación' }}</span>
  </button>
</template>
