import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { faker } from "@faker-js/faker";

export interface Todo {
  id: number;
  userId: number;
  title: string;
  description?: string;
  completed: boolean;
};


export interface Payment {
  id: number;
  payer: number;
  payerName: string,
  reciever: number;
  recieverName: string,
  sum: number;
  currency: string;
  datetime: Date;
};


export interface User {
  id: number,
  name: string,
  email: string,
  phone: string
};

const todoList: Todo[] = Array.from({ length: 150 }, (_, index) => index + 1).map((id) => ({
  id,
  userId: faker.datatype.number({ min: 1, max: 30 }),
  title: faker.lorem.words(faker.datatype.number({ min: 2, max: 5 })),
  description: faker.lorem.sentences(faker.datatype.number({ min: 1, max: 3 })),
  completed: faker.datatype.boolean()
}));

const usersList: User[] = Array.from({ length: 30 }, (_, index) => index + 1).map((id) => ({
  id,
  name: faker.name.firstName(),
  email: faker.internet.email(),
  phone: faker.phone.number('+1 ### ### ####')
}));

const paymentsList: Payment[] = Array.from({ length: usersList.length }, (_, index) => index + 1).map((id) => 
{
  const [firstUserId, secondUserId] = [faker.datatype.number({ min: 1, max: usersList.length }), faker.datatype.number({ min: 1, max: usersList.length })];
  
  const payer =  usersList.find(user => user.id === firstUserId) as User;
  const reciever = usersList.find(user => user.id === secondUserId) as User;
  
return {
  id,
  payer: payer.id,
  payerName: payer.name,
  reciever: reciever.id,
  recieverName: reciever.name,
  sum: faker.datatype.number({ min: 500, max: 10000 }),
  currency: faker.finance.currencyCode(),
  datetime: faker.date.recent()
}});

type ModalType = 'Todo List' | 'User Editing' | 'Payment Info';

export const useAppStore = defineStore("app", () => {
  const modalIsActive = ref<boolean>(false);
  const modalType = ref<ModalType>('Todo List');
  const users = ref<User[]>(usersList);
  const payments = ref<Payment[]>(paymentsList);
  const selectedUser = ref<User | null>(null);
  const selectedPayment = ref<Payment | null>(null)
  const todos = ref<Todo[]>(todoList);

  const userTodos = computed(() => {
    if (selectedUser.value) {
      return todos.value.filter(todo => todo.userId === selectedUser.value?.id);
    } else {
      return [];
    }
  });

  function openModal() {
    modalIsActive.value = true;
  }
  function closeModal() {
    modalIsActive.value = false;
  }

  function setModalType(type: ModalType) {
    modalType.value = type;
  }

  function selectUser(id: number) {
    const newSelectedUser = users.value.find(user => user.id === id);
    newSelectedUser && (selectedUser.value = newSelectedUser)
  }

  function saveUser(userData: User) {
    const userIndex = users.value.findIndex(user => user.id === userData.id);
    userIndex !== -1 && (users.value[userIndex] = { ...userData });
  }

  function selectPayment(payment: Payment) {
    selectedPayment.value = payment;
  }

  return {
    users, payments, selectedUser,
    todos, modalIsActive, openModal,
    closeModal, modalType, setModalType,
    selectUser, userTodos, saveUser, selectPayment, selectedPayment
  };
});
