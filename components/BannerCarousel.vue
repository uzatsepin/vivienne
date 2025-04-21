<template>
  <div class="relative overflow-hidden">
    <div 
      class="flex transition-transform duration-300 ease-in-out"
      :style="{ transform: `translateX(-${activeSlide * 100}%)` }"
    >
      <div v-for="(slide, index) in slides" :key="index" class="w-full flex-shrink-0">
        <div class="relative aspect-[21/9]">
          <img 
            :src="slide.image" 
            :alt="slide.title" 
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center">
            <div class="container-custom">
              <div class="max-w-lg">
                <h2 class="text-white text-3xl font-bold mb-4">{{ slide.title }}</h2>
                <p class="text-white mb-6">{{ slide.description }}</p>
                <NuxtLink :to="slide.link" class="btn btn-primary">
                  {{ slide.buttonText }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Navigation Arrows -->
    <button 
      @click="prevSlide" 
      class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-100 p-2 focus:outline-none"
      aria-label="Previous slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="square">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>
    
    <button 
      @click="nextSlide" 
      class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-100 p-2 focus:outline-none"
      aria-label="Next slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="square">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
    
    <!-- Dots Indicator -->
    <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
      <button 
        v-for="(_, index) in slides" 
        :key="index"
        @click="goToSlide(index)"
        class="w-3 h-3 rounded-sm"
        :class="index === activeSlide ? 'bg-white' : 'bg-white bg-opacity-50'"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
    title: 'Скидки до 30% на серебряные украшения',
    description: 'Только до конца месяца специальные предложения на выборочный ассортимент серебряных украшений.',
    buttonText: 'Смотреть предложения',
    link: '/catalog?discount=true'
  },
  {
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
    title: 'Новая коллекция "Орбит"',
    description: 'Эксклюзивные дизайнерские украшения с орбитальными мотивами, вдохновленные космосом.',
    buttonText: 'Открыть коллекцию',
    link: '/catalog?collection=orbit'
  },
  {
    image: 'https://images.unsplash.com/photo-1615655114865-4cc1bda5901e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
    title: 'Подарочные сертификаты',
    description: 'Идеальный подарок для особого случая. Подарите возможность выбора украшения близкому человеку.',
    buttonText: 'Купить сертификат',
    link: '/gift-cards'
  }
];

const activeSlide = ref(0);
let intervalId = null;

const nextSlide = () => {
  activeSlide.value = (activeSlide.value + 1) % slides.length;
};

const prevSlide = () => {
  activeSlide.value = (activeSlide.value - 1 + slides.length) % slides.length;
};

const goToSlide = (index) => {
  activeSlide.value = index;
};

const startAutoSlide = () => {
  intervalId = setInterval(() => {
    nextSlide();
  }, 5000);
};

onMounted(() => {
  startAutoSlide();
});

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>