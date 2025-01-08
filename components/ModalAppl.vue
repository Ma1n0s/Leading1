<script setup>
import { ref } from "vue";

const name = ref("");
const phone = ref("");
const responseMessage = ref("");

const sendData = async () => {
  try {
    const response = await fetch("https://np.nikita.sms19.ru/api/lead/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name.value, phone: phone.value }),
    });

    if (!response.ok) {
      throw new Error("Ошибка при отправке данных");
    }

    const data = await response.json();
    responseMessage.value = data.message || "Данные успешно отправлены!";
    name.value = "";
    phone.value = "";
  } catch (error) {
    responseMessage.value = `Ошибка: ${error.message}`;
  }
};
</script>

<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 text-black"
  >
    <div class="bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-96">
      <h1 class="text-xl font-semibold mb-4">Оставить заявку</h1>
      <form @submit.prevent="sendData">
        <div class="mb-4">
          <img
            src="~/public/2004i305008_office_s.jpg"
            alt="img"
            class="w-full h-auto rounded-lg mb-2"
          />
        </div>
        <div class="mb-4 text-gray-700">
          Наш эксперт свяжется с вами для более детального изучения проекта и
          подготовки коммерческого предложения.
        </div>
        <div>
          Ваше Имя:
          <input
            v-model="name"
            placeholder="Ваше имя:"
            required
            class="border border-gray-300 rounded-lg p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            v-model="phone"
            placeholder="Телефон"
            required
            class="border border-gray-300 rounded-lg p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        Телефон:
        <button
          type="submit"
          class="bg-blue-500 text-white rounded-lg p-2 w-full hover:bg-blue-600 transition duration-200"
        >
          Оставить заявку
        </button>
      </form>
      <div v-if="responseMessage" class="mt-4 text-green-500">
        {{ responseMessage }}
      </div>
    </div>
  </div>
</template>
