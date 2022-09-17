import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { faker } from "@faker-js/faker";


export interface Todo {
  id: number;
  usedId: number;
  title: string;
  description?: string;
  completed: boolean;
};


export interface Payment {
  id: number;
  payer: number;
  reciever: number;
  sum: number;
  currency: string;
  datetime: Date;
};

export interface User {
  id: number,
  name: string,
  email: string,
  phone: string,
  todos: Todo []
};



// interface Payment{
//   id: number
// }

const todos: Todo[] = Array.from({ length: 150 }, (_, index) => index + 1).map((id) => ({
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
  phone: faker.phone.number('+1 ### ### ####'),
  todos: todos.filter(todo => todo.userId === id)
}));

const paymentsList: Payment[] = Array.from({ length: usersList.length }, (_, index) => index + 1).map((id) => ({
  id,
  payer: faker.datatype.number({ min: 1, max: usersList.length }),
  reciever: faker.datatype.number({ min: 1, max: usersList.length }),
  sum: faker.datatype.number({ min: 500, max: 10000 }),
  currency: faker.finance.currencyCode(),
  datetime: faker.date.recent()
}));





export const useAppStore = defineStore("app", () => {
  const users = ref<User[]>(usersList);
  const payments = ref<Payment[]>(paymentsList);

  // const users = computed(() => users)
  // const doubleCount = computed(() => count.value * 2);
  // function increment() {
  //   count.value++;
  // }

  return { users, payments };
});
