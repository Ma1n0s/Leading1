<template>
    <div
      v-if="isOpen"
      class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
    >
      <div class="bg-white rounded-lg p-4 w-11/12 md:w-1/2 relative">
        <button @click="closeModal" class="absolute top-2 right-2 text-gray-500">
          &times;
        </button>
        <SlickCarousel :dots="true" :infinite="true" :speed="500" :slides-to-show="1">
          <div v-for="(slide, index) in slides" :key="index" class="p-4">
            <img :src="slide.image" :alt="slide.alt" class="w-full rounded-lg" />
          </div>
        </SlickCarousel>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, emit } from 'vue';
  import { SlickCarousel } from 'vue-slick-carousel';
  
  const props = defineProps({
    isOpen: {
      type: Boolean,
      required: true,
    },
    slides: {
      type: Array,
      required: true,
    },
  });
  
  const emitClose = () => {
    emit('close');
  };
  
</script>



<!-- <template>
    <div class="flex flex-col items-center justify-center h-screen">
      <button @click="openModal" class="bg-blue-500 text-white px-4 py-2 rounded">
        Открыть модалку
      </button>
  
      <Modal v-if="isModalOpen" :isOpen="isModalOpen" :slides="slides" @close="closeModal" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Modal from '@/components/Modal.vue';
  
  const isModalOpen = ref(false);
  const slides = ref([
    { image: 'https://via.placeholder.com/600x400?text=Slide+1', alt: 'Slide 1' },
    { image: 'https://via.placeholder.com/600x400?text=Slide+2', alt: 'Slide 2' },
    { image: 'https://via.placeholder.com/600x400?text=Slide+3', alt: 'Slide 3' },
  ]);
  
  const openModal = () => {
    isModalOpen.value = true;
  };
  
  const closeModal = () => {
    isModalOpen.value = false;
  };
  </script> -->