<template>
	<div class="relative">
    <!-- Products Slider -->
    <div class="overflow-hidden">
      <div 
        class="flex gap-6 transition-transform duration-300 ease-in-out"
        :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }"
      >
        <div 
          v-for="product in products" 
          :key="product.id"
          class="flex-shrink-0"
          :style="{ width: `${slideWidth}px` }"
        >
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
    
    <!-- Navigation Buttons -->
    <button 
      @click="prevSlide" 
      class="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white shadow-md p-2 hover:bg-gray-100"
      :disabled="currentSlide === 0"
      :class="{ 'opacity-50 cursor-not-allowed': currentSlide === 0 }"
    >
      ←
    </button>
    
    <button 
      @click="nextSlide" 
      class="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white shadow-md p-2 hover:bg-gray-100"
      :disabled="currentSlide >= maxSlide"
      :class="{ 'opacity-50 cursor-not-allowed': currentSlide >= maxSlide }"
    >
      →
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
});

const currentSlide = ref(0);
const containerWidth = ref(0);
const slideWidth = ref(300); // Default width for mobile

const updateContainerWidth = () => {
  const container = document.querySelector('.container-custom');
  if (container) {
    containerWidth.value = container.offsetWidth;
    // Update slide width based on screen size
    if (window.innerWidth < 640) {
      slideWidth.value = containerWidth.value - 32; // Full width - padding
    } else if (window.innerWidth < 1024) {
      slideWidth.value = (containerWidth.value - 48) / 2; // Half width - gap
    } else {
      slideWidth.value = (containerWidth.value - 72) / 4; // Quarter width - gap
    }
  }
};

const maxSlide = computed(() => {
  const visibleSlides = Math.floor(containerWidth.value / slideWidth.value);
  return Math.max(0, props.products.length - visibleSlides);
});

const nextSlide = () => {
  if (currentSlide.value < maxSlide.value) {
    currentSlide.value++;
  }
};

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  }
};

onMounted(() => {
  updateContainerWidth();
  window.addEventListener('resize', updateContainerWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateContainerWidth);
});
</script>