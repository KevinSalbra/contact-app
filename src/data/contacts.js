import { reactive } from 'vue'

export const contacts = reactive([
  {
    id: 1,
    name: 'Ana Morales',
    work: 'Diseñadora UX',
    mobile: '+506 8888 1111',
    email: 'ana.morales@example.com',
    address: 'San José, Costa Rica',
  },
  {
    id: 2,
    name: 'Luis Ramírez',
    work: 'Desarrollador Frontend',
    mobile: '+506 8888 2222',
    email: 'luis.ramirez@example.com',
    address: 'Heredia, Costa Rica',
  },
  {
    id: 3,
    name: 'María Fernández',
    work: 'Contadora',
    mobile: '+506 8888 3333',
    email: 'maria.fernandez@example.com',
    address: 'Alajuela, Costa Rica',
  },
])
