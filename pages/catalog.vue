<template>
  <NuxtLayout name="container" class="py-10">
    <h1 class="text-3xl font-bold mb-8">Каталог</h1>
    
    <!-- Mobile Filter Button -->
    <div class="md:hidden mb-4">
      <button 
        @click="showMobileFilter = !showMobileFilter" 
        class="w-full py-2 px-4 border border-black flex justify-between items-center"
      >
        <span>Фильтры</span>
        <span v-if="!showMobileFilter">▼</span>
        <span v-else>▲</span>
      </button>
    </div>
    
    <div class="flex flex-col md:flex-row">
      <!-- Filters Sidebar - Mobile -->
      <div 
        v-if="showMobileFilter" 
        class="md:hidden w-full mb-6"
      >
        <FilterSidebar 
          :initial-filters="filters"
          @filter-change="applyFilters"
        />
      </div>
      
      <!-- Filters Sidebar - Desktop -->
      <div class="hidden md:block md:w-1/4 lg:w-1/5 pr-6">
        <FilterSidebar 
          :initial-filters="filters"
          @filter-change="applyFilters"
        />
      </div>
      
      <!-- Products Grid -->
      <div class="md:w-3/4 lg:w-4/5">
        <!-- Sort Controls -->
        <div class="flex justify-between items-center mb-6">
          <p class="text-sm text-gray-600">Найдено товаров: {{ filteredProducts.length }}</p>
          
          <div class="flex items-center">
            <label for="sort" class="mr-2 text-sm">Сортировать:</label>
            <select 
              id="sort" 
              v-model="sortBy" 
              class="border border-gray-300 p-1 text-sm"
            >
              <option value="default">По умолчанию</option>
              <option value="price-asc">По цене (возр.)</option>
              <option value="price-desc">По цене (убыв.)</option>
              <option value="name-asc">По названию (А-Я)</option>
              <option value="name-desc">По названию (Я-А)</option>
            </select>
          </div>
        </div>
        
        <!-- Product Grid -->
        <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          <ProductCard 
            v-for="product in sortedProducts"
            :key="product.id"
            :product="product"
          />
        </div>
        
        <!-- Empty State -->
        <div v-else class="text-center py-10">
          <p class="text-gray-600 mb-4">По вашему запросу ничего не найдено.</p>
          <button @click="resetFilters" class="btn btn-primary">
            Сбросить фильтры
          </button>
        </div>
        
        <!-- Pagination -->
        <div v-if="filteredProducts.length > 0" class="mt-10 flex justify-center">
          <nav class="flex items-center space-x-1">
            <button 
              @click="prevPage" 
              :disabled="currentPage === 1"
              class="px-3 py-1 border border-gray-300"
              :class="currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''"
            >
              &#8592;
            </button>
            <button 
              v-for="page in totalPages" 
              :key="page" 
              @click="goToPage(page)"
              
              class="px-3 py-1 border border-gray-300"
              :class="currentPage === page ? 'bg-black text-white' : ''"
            >
              {{ page }}
            </button>
            <button 
              @click="nextPage" 
              :disabled="currentPage === totalPages"
              class="px-3 py-1 border border-gray-300"
              :class="currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''"
            >
              &#8594;
            </button>
          </nav>
        </div>
        
        <!-- SEO Text -->
        <div class="mt-16 prose max-w-none">
          <h2 class="text-2xl font-bold mb-4">Ювелирные украшения VIVIENNE</h2>
          <p class="mb-4">
            В каталоге VIVIENNE представлены эксклюзивные ювелирные украшения, созданные с вдохновением от неповторимого стиля Вивьен Вествуд. Каждое изделие — это уникальное сочетание классического дизайна и современных тенденций, воплощенное в драгоценных металлах и камнях высочайшего качества.
          </p>
          
          <h3 class="text-xl font-bold mb-3">Широкий выбор украшений</h3>
          <p class="mb-4">
            В нашем каталоге вы найдете:
          </p>
          <ul class="list-disc pl-5 mb-4">
            <li>Изящные колье и подвески</li>
            <li>Оригинальные серьги</li>
            <li>Стильные браслеты</li>
            <li>Эксклюзивные кольца</li>
            <li>Дизайнерские броши</li>
          </ul>
          
          <h3 class="text-xl font-bold mb-3">Качество и гарантии</h3>
          <p class="mb-4">
            Все украшения VIVIENNE изготавливаются из серебра 925 пробы и золота 585 пробы, имеют сертификаты качества и пробирные клейма. Мы предоставляем гарантию на все изделия и обеспечиваем постпродажное обслуживание.
          </p>
          
          <h3 class="text-xl font-bold mb-3">Уход за украшениями</h3>
          <p class="mb-4">
            Для сохранения первоначального вида украшений рекомендуется:
          </p>
          <ul class="list-disc pl-5 mb-4">
            <li>Хранить изделия в отдельных футлярах или мешочках</li>
            <li>Избегать контакта с водой и химическими веществами</li>
            <li>Снимать украшения перед сном и занятиями спортом</li>
            <li>Регулярно чистить мягкой тканью</li>
            <li>Использовать специальные средства для чистки ювелирных изделий</li>
          </ul>
          
          <p>
            Выбирайте украшения VIVIENNE — подчеркните свою индивидуальность и стиль с помощью эксклюзивных ювелирных изделий, созданных с любовью к деталям и уважением к традициям.
          </p>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

definePageMeta({
  layout: 'default'
});

const route = useRoute();
const router = useRouter();

const products = ref([
  // Sample data - would come from API in a real app
  ...Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: ['Колье "Орбита"', 'Браслет "Луна"', 'Серьги "Звезда"', 'Кольцо "Галактика"', 'Брошь "Комета"'][i % 5] + (i > 4 ? ` ${Math.floor(i/5) + 1}` : ''),
    price: (Math.floor(Math.random() * 10) + 5) * 1000,
    discountPrice: Math.random() > 0.7 ? ((Math.floor(Math.random() * 10) + 5) * 1000) * 0.7 : null,
    image: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1611591437268-1b845b1884ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1603561596112-0a132b757442?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80'
    ][i % 4],
    isNew: Math.random() > 0.8,
    discount: Math.random() > 0.7 ? Math.floor(Math.random() * 30) + 10 : null,
    category: ['necklaces', 'bracelets', 'earrings', 'rings', 'brooches'][i % 5],
    material: ['silver', 'gold', 'pearl', 'crystal'][i % 4],
    collection: ['orbit', 'crown'][i % 2]
  }))
]);

// Filtering
const filters = ref({
  categories: [],
  priceMin: '',
  priceMax: '',
  materials: [],
  saleOnly: false,
  collection: ''
});

const showMobileFilter = ref(false);
const sortBy = ref('default');
const currentPage = ref(1);
const itemsPerPage = 12;

// Parse URL query params on mount
onMounted(() => {
  if (route.query) {
    if (route.query.categories) {
      filters.value.categories = Array.isArray(route.query.categories) 
        ? route.query.categories 
        : [route.query.categories];
    }
    
    if (route.query.materials) {
      filters.value.materials = Array.isArray(route.query.materials) 
        ? route.query.materials 
        : [route.query.materials];
    }
    
    if (route.query.priceMin) {
      filters.value.priceMin = route.query.priceMin;
    }
    
    if (route.query.priceMax) {
      filters.value.priceMax = route.query.priceMax;
    }
    
    if (route.query.saleOnly) {
      filters.value.saleOnly = route.query.saleOnly === 'true';
    }
    
    if (route.query.collection) {
      filters.value.collection = route.query.collection;
    }
    
    if (route.query.page) {
      currentPage.value = parseInt(route.query.page) || 1;
    }
    
    if (route.query.sort) {
      sortBy.value = route.query.sort;
    }
  }
});

// Apply filters
const applyFilters = (newFilters) => {
  filters.value = { ...newFilters };
  currentPage.value = 1; // Reset to first page when filters change
  
  // Update URL with new filter params
  router.push({
    query: {
      ...newFilters.categories.length ? { categories: newFilters.categories } : {},
      ...newFilters.materials.length ? { materials: newFilters.materials } : {},
      ...newFilters.priceMin ? { priceMin: newFilters.priceMin } : {},
      ...newFilters.priceMax ? { priceMax: newFilters.priceMax } : {},
      ...newFilters.saleOnly ? { saleOnly: newFilters.saleOnly } : {},
      ...sortBy.value !== 'default' ? { sort: sortBy.value } : {},
      ...currentPage.value > 1 ? { page: currentPage.value } : {},
      ...newFilters.collection ? { collection: newFilters.collection } : {}
    }
  });
};

// Reset all filters
const resetFilters = () => {
  filters.value = {
    categories: [],
    priceMin: '',
    priceMax: '',
    materials: [],
    saleOnly: false,
    collection: ''
  };
  
  currentPage.value = 1;
  sortBy.value = 'default';
  
  router.push({ query: {} });
};

// Computed: Filtered products
const filteredProducts = computed(() => {
  return products.value.filter(product => {
    // Filter by category
    if (filters.value.categories.length > 0 && !filters.value.categories.includes(product.category)) {
      return false;
    }
    
    // Filter by material
    if (filters.value.materials.length > 0 && !filters.value.materials.includes(product.material)) {
      return false;
    }
    
    // Filter by collection
    if (filters.value.collection && product.collection !== filters.value.collection) {
      return false;
    }
    
    // Filter by price range
    if (filters.value.priceMin && (product.discountPrice || product.price) < parseFloat(filters.value.priceMin)) {
      return false;
    }
    
    if (filters.value.priceMax && (product.discountPrice || product.price) > parseFloat(filters.value.priceMax)) {
      return false;
    }
    
    // Filter sale items only
    if (filters.value.saleOnly && !product.discount) {
      return false;
    }
    
    return true;
  });
});

// Computed: Sorted products
const sortedProducts = computed(() => {
  let sorted = [...filteredProducts.value];
  
  switch (sortBy.value) {
    case 'price-asc':
      sorted.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
      break;
    case 'price-desc':
      sorted.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
      break;
    case 'name-asc':
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      sorted.sort((a, b) => b.name.localeCompare(a.name));
      break;
  }
  
  // Pagination
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  return sorted.slice(startIndex, startIndex + itemsPerPage);
});

// Computed: Total pages
const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / itemsPerPage);
});

// Pagination methods
const goToPage = (page) => {
  currentPage.value = page;
  
  // Update URL with page parameter
  router.push({
    query: {
      ...route.query,
      page: page > 1 ? page : undefined
    }
  });
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    goToPage(currentPage.value + 1);
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    goToPage(currentPage.value - 1);
  }
};

// Watch for sort change
watch(sortBy, (newValue) => {
  router.push({
    query: {
      ...route.query,
      sort: newValue !== 'default' ? newValue : undefined
    }
  });
});
</script>