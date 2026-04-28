<script setup>
import { ref } from 'vue'
import { contacts } from './data/contacts'
import ContactForm from './components/contactForm.vue'
import ContactList from './components/contactList.vue'

const createEmptyContact = () => ({
  id: null,
  name: '',
  work: '',
  mobile: '',
  email: '',
  address: '',
})

const cloneContact = (contact) => ({ ...createEmptyContact(), ...contact })

const contactList = contacts
const selectedContact = ref(createEmptyContact())

const agregarContacto = () => {
  selectedContact.value = createEmptyContact()
}

const seleccionarContacto = (contact) => {
  selectedContact.value = cloneContact(contact)
}

const guardarContacto = (contact) => {
  const contactToSave = cloneContact(contact)

  if (contactToSave.id !== null && contactToSave.id !== undefined) {
    const index = contactList.findIndex((item) => item.id === contactToSave.id)

    if (index !== -1) {
      contactList[index] = contactToSave
    } else {
      contactList.push(contactToSave)
    }
  } else {
    contactToSave.id = Date.now()
    contactList.push(contactToSave)
  }

  selectedContact.value = cloneContact(contactToSave)
}

const eliminarContacto = (contact) => {
  if (!contact.id) {
    selectedContact.value = createEmptyContact()
    return
  }

  const index = contactList.findIndex((item) => item.id === contact.id)

  if (index !== -1) {
    contactList.splice(index, 1)
  }

  selectedContact.value = createEmptyContact()
}
</script>

<template>
  <main class="app-shell">
    <section class="app-header">
      <h1>Gestión de contactos</h1>
      <p>Aplicación en Vue 3 con estado en memoria y Composition API.</p>
    </section>

    <section class="workspace">
      <aside class="panel contacts-panel">
        <ContactList
          :contacts="contactList"
          :selected-id="selectedContact.id"
          @select="seleccionarContacto"
          @add="agregarContacto"
        />
      </aside>

      <section class="panel form-panel">
        <ContactForm
          :contact="selectedContact"
          @save="guardarContacto"
          @delete="eliminarContacto"
        />
      </section>
    </section>
  </main>
</template>
