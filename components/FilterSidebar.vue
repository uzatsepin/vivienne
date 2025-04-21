<template>
  <div class="border-r border-gray-200 pr-4">
    <h2 class="text-lg font-semibold mb-4">Фильтры</h2>
    
    <!-- Categories -->
    <div class="mb-6">
      <h3 class="text-md font-medium mb-2">Категории</h3>
      <div class="space-y-2">
        <div v-for="category in categories" :key="category.id" class="flex items-center">
          <input 
            :id="`category-${category.id}`" 
            type="checkbox" 
            :value="category.id" 
            v-model="selectedCategories"
            class="h-4 w-4 border-gray-300 focus:ring-black"
          />
          <label :for="`category-${category.id}`" class="ml-2 text-sm text-gray-700">
            {{ category.name }}
          </label>
        </div>
      </div>
    </div>
    
    <!-- Price Range -->
    <div class="mb-6">
      <h3 class="text-md font-medium mb-2">Цена</h3>
      <div class="grid grid-cols-2 gap-2">
        <div>
          <label for="price-min" class="sr-only">Минимальная цена</label>
          <input 
            id="price-min" 
            type="number" 
            v-model="priceMin" 
            placeholder="От" 
            class="w-full border border-gray-300 p-2 text-sm"
          />
        </div>
        <div>
          <label for="price-max" class="sr-only">Максимальная цена</label>
          <input 
            id="price-max" 
            type="number" 
            v-model="priceMax" 
            placeholder="До" 
            class="w-full border border-gray-300 p-2 text-sm"
          />
        </div>
      </div>
    </div>
    
    <!-- Materials -->
    <div class="mb-6">
      <h3 class="text-md font-medium mb-2">Материал</h3>
      <div class="space-y-2">
        <div v-for="material in materials" :key="material.id" class="flex items-center">
          <input 
            :id="`material-${material.id}`" 
            type="checkbox" 
            :value="material.id" 
            v-model="selectedMaterials"
            class="h-4 w-4 border-gray-300 focus:ring-black"
          />
          <label :for="`material-${material.id}`" class="ml-2 text-sm text-gray-700">
            {{ material.name }}
          </label>
        </div>
      </div>
    </div>
    
    <!-- Only Sale Items -->
    <div class="mb-6">
      <div class="flex items-center">
        <input 
          id="sale-only" 
          type="checkbox" 
          v-model="saleOnly"
          class="h-4 w-4 border-gray-300 focus:ring-black"
        />
        <label for="sale-only" class="ml-2 text-sm text-gray-700">
          Только со скидкой
        </label>
      </div>
    </div>
    
    <!-- Apply / Reset Buttons -->
    <div class="flex space-x-2">
      <button @click="applyFilters" class="btn btn-primary py-2 px-4 text-sm">
        Применить
      </button>
      <button @click="resetFilters" class="btn btn-outline py-2 px-4 text-sm">
        Сбросить
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  initialFilters: {
    type: Object,
    default: () => ({})
  }
});

const emit = defineEmits(['filter-change']);

// Filter state
const selectedCategories = ref(props.initialFilters.categories || []);
const priceMin = ref(props.initialFilters.priceMin || '');
const priceMax = ref(props.initialFilters.priceMax || '');
const selectedMaterials = ref(props.initialFilters.materials || []);
const saleOnly = ref(props.initialFilters.saleOnly || false);

// Categories data (would come from API/stores in real app)
const categories = [
  { id: 'necklaces', name: 'Колье и ожерелья' },
  { id: 'earrings', name: 'Серьги' },
  { id: 'rings', name: 'Кольца' },
  { id: 'bracelets', name: 'Браслеты' },
  { id: 'brooches', name: 'Броши' },
];

// Materials data (would come from API/stores in real app)
const materials = [
  { id: 'silver', name: 'Серебро' },
  { id: 'gold', name: 'Золото' },
  { id: 'pearl', name: 'Жемчуг' },
  { id: 'crystal', name: 'Кристаллы' },
];

const applyFilters = () => {
  emit('filter-change', {
    categories: selectedCategories.value,
    priceMin: priceMin.value,
    priceMax: priceMax.value,
    materials: selectedMaterials.value,
    saleOnly: saleOnly.value
  });
};

const resetFilters = () => {
  selectedCategories.value = [];
  priceMin.value = '';
  priceMax.value = '';
  selectedMaterials.value = [];
  saleOnly.value = false;
  
  applyFilters();
};

// Watch for external filter changes
watch(() => props.initialFilters, (newFilters) => {
  if (newFilters) {
    selectedCategories.value = newFilters.categories || [];
    priceMin.value = newFilters.priceMin || '';
    priceMax.value = newFilters.priceMax || '';
    selectedMaterials.value = newFilters.materials || [];
    saleOnly.value = newFilters.saleOnly || false;
  }
}, { deep: true });
</script>