<template>
  <NuxtLayout name="container" class="py-16">
    <div v-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Product Images -->
      <div>
        <div class="mb-4 border border-gray-200">
          <img :src="product.image" :alt="product.name" class="w-full h-auto object-cover aspect-square" />
        </div>
        <div class="grid grid-cols-4 gap-2">
          <button 
            v-for="n in 4" 
            :key="n" 
            class="border border-gray-200 hover:border-black transition-colors duration-200 aspect-square"
          >
            <img :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
          </button>
        </div>
      </div>
      
      <!-- Product Details -->
      <div>
        <h1 class="text-2xl md:text-3xl font-bold mb-2">{{ product.name }}</h1>
        
        <div class="flex items-center mt-4 mb-6">
          <span class="text-2xl font-bold mr-3">
            {{ formatPrice(product.discountPrice || product.price) }} ₴
          </span>
          <span v-if="product.discountPrice" class="text-gray-500 line-through">
            {{ formatPrice(product.price) }} ₴
          </span>
          <span v-if="product.discount" class="ml-3 bg-accent text-white text-xs px-2 py-1">
            -{{ product.discount }}%
          </span>
        </div>
        
        <div class="mb-6">
          <p class="text-gray-700 mb-4">
            Элегантное украшение, вдохновленное знаковым стилем Vivienne Westwood. Подчеркнет индивидуальность и станет изюминкой вашего образа. Создано вручную из высококачественных материалов.
          </p>
          
          <ul class="space-y-2 mb-4">
            <li><span class="font-semibold">Материал:</span> Серебро 925 пробы</li>
            <li><span class="font-semibold">Коллекция:</span> {{ product.collection === 'orbit' ? 'Орбит' : 'Корона' }}</li>
            <li><span class="font-semibold">Размер:</span> Регулируемый</li>
          </ul>
        </div>
        
        <!-- Variants -->
        <!-- <div class="mb-6">
          <h3 class="text-sm font-semibold mb-2">Размер</h3>
          <div class="flex space-x-2 mb-4">
            <button 
              v-for="size in ['S', 'M', 'L']" 
              :key="size"
              @click="selectedSize = size"
              class="w-10 h-10 flex items-center justify-center border-2 transition-colors duration-200"
              :class="selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-300 hover:border-black'"
            >
              {{ size }}
            </button>
          </div>
          
          <div v-if="selectedSize === 'S'" class="text-sm text-gray-600 mb-4">
            Маленький размер, подходит для запястья 15-17 см
          </div>
          <div v-else-if="selectedSize === 'M'" class="text-sm text-gray-600 mb-4">
            Средний размер, подходит для запястья 17-19 см
          </div>
          <div v-else-if="selectedSize === 'L'" class="text-sm text-gray-600 mb-4">
            Большой размер, подходит для запястья 19-21 см
          </div>
        </div> -->
        
        <!-- Quantity -->
        <div class="mb-6">
          <h3 class="text-sm font-semibold mb-2">Количество</h3>
          <div class="flex items-center border border-gray-300 w-32">
            <button 
              @click="quantity > 1 ? quantity-- : null"
              class="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-100"
              :disabled="quantity <= 1"
            >
              -
            </button>
            <span class="w-12 h-10 flex items-center justify-center font-semibold">
              {{ quantity }}
            </span>
            <button 
              @click="quantity++"
              class="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-100"
            >
              +
            </button>
          </div>
        </div>
        
        <!-- Add to Cart Button -->
        <ButtonsPrimary 
          @click="addToCart" 
          class="w-full btn btn-primary mb-4"
        >
          В корзину
        </ButtonsPrimary>
        
        <!-- Additional Actions -->
        <div class="flex justify-between mb-6">
          <button class="text-sm text-gray-700 hover:text-black flex items-center">
            <Icon name="lucide:heart" class="text-gray-500 mr-2 group-hover:text-accent-hover" size="24" /> В избранное
          </button>
        </div>
        
        <!-- Accordion Sections -->
        <div class="border-t border-gray-200">
          <div
            class="py-4 border-b border-gray-200 cursor-pointer"
            @click="toggleAccordion('description')"
          >
            <div class="flex justify-between items-center">
              <h3 class="font-semibold">Описание</h3>
              <span>{{ accordions.description ? '−' : '+' }}</span>
            </div>
            <div v-if="accordions.description" class="pt-2 text-gray-700">
              <p>
                Уникальное украшение, сочетающее элегантный дизайн и качественные материалы.
                Разработано с вдохновением от стиля Vivienne Westwood – дерзкого, эклектичного и неповторимого.
                Каждое изделие проходит тщательный контроль качества и имеет гарантию производителя.
              </p>
            </div>
          </div>
          
          <div
            class="py-4 border-b border-gray-200 cursor-pointer"
            @click="toggleAccordion('delivery')"
          >
            <div class="flex justify-between items-center">
              <h3 class="font-semibold">Доставка и возврат</h3>
              <span>{{ accordions.delivery ? '−' : '+' }}</span>
            </div>
            <div v-if="accordions.delivery" class="pt-2 text-gray-700">
              <p>
                Доставка осуществляется по всей России. Срок доставки от 1 до 7 дней в зависимости от региона.
                Возврат товара надлежащего качества возможен в течение 14 дней с момента получения.
              </p>
            </div>
          </div>
          
          <div
            class="py-4 border-b border-gray-200 cursor-pointer"
            @click="toggleAccordion('care')"
          >
            <div class="flex justify-between items-center">
              <h3 class="font-semibold">Уход за изделием</h3>
              <span>{{ accordions.care ? '−' : '+' }}</span>
            </div>
            <div v-if="accordions.care" class="pt-2 text-gray-700">
              <p>
                Для сохранения первоначального вида изделия рекомендуется:
              </p>
              <ul class="list-disc pl-5 mt-2">
                <li>Избегать контакта с водой, парфюмерией и косметикой</li>
                <li>Снимать украшение перед сном и физическими нагрузками</li>
                <li>Хранить в сухом месте, отдельно от других украшений</li>
                <li>Регулярно протирать мягкой тканью</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Similar Products -->
    <section class="mt-16">
      <h2 class="text-2xl font-bold mb-6">Вам может понравиться</h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ProductCard 
          v-for="similarProduct in similarProducts" 
          :key="similarProduct.id" 
          :product="similarProduct" 
        />
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useCartStore } from '~~/stores/cart';

definePageMeta({
  layout: 'default'
});

const route = useRoute();
const cartStore = useCartStore();

// State
const quantity = ref(1);
const selectedSize = ref('M');
const accordions = ref({
  description: false,
  delivery: false,
  care: false
});

// Mock data - would be fetched from API based on ID in real app
const product = computed(() => {
  const productId = parseInt(route.params.id);
  
  // Mock product data
  const productsData = [
    {
      id: 1,
      name: 'Колье "Орбита"',
      price: 12500,
      discountPrice: null,
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
      isNew: true,
      discount: null,
      category: 'necklaces',
      material: 'silver',
      collection: 'orbit'
    },
    {
      id: 2,
      name: 'Серьги "Созвездие"',
      price: 8900,
      discountPrice: 6900,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
      isNew: false,
      discount: 20,
      category: 'earrings',
      material: 'gold',
      collection: 'orbit'
    },
    {
      id: 3,
      name: 'Кольцо "Сатурн"',
      price: 7500,
      discountPrice: null,
      image: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
      isNew: true,
      discount: null,
      category: 'rings',
      material: 'silver',
      collection: 'orbit'
    },
    {
      id: 4,
      name: 'Браслет "Галактика"',
      price: 9500,
      discountPrice: null,
      image: 'https://images.unsplash.com/photo-1611591437268-1b845b1884ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
      isNew: false,
      discount: null,
      category: 'bracelets',
      material: 'gold',
      collection: 'crown'
    }
  ];
  
  return productsData.find(p => p.id === productId) || productsData[0];
});

// Similar products (would be fetched from API in real app)
const similarProducts = computed(() => {
  if (!product.value) return [];
  
  // Mock similar products
  return [
    {
      id: Math.max(1, product.value.id - 1),
      name: 'Колье "Астра"',
      price: 10500,
      discountPrice: null,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
      isNew: false,
      discount: null
    },
    {
      id: Math.max(2, product.value.id - 2),
      name: 'Кольцо "Венера"',
      price: 7800,
      discountPrice: 5900,
      image: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
      isNew: false,
      discount: 25
    },
    {
      id: Math.min(product.value.id + 1, 10),
      name: 'Серьги "Нептун"',
      price: 9200,
      discountPrice: null,
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
      isNew: true,
      discount: null
    },
    {
      id: Math.min(product.value.id + 2, 11),
      name: 'Браслет "Плутон"',
      price: 8500,
      discountPrice: null,
      image: 'https://images.unsplash.com/photo-1611591437268-1b845b1884ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
      isNew: false,
      discount: null
    }
  ];
});

// Format price with separator
const formatPrice = (price) => {
  return new Intl.NumberFormat('ru-RU').format(price);
};

// Add current product to cart
const addToCart = () => {
  if (product.value) {
    cartStore.addItem({
      ...product.value,
      quantity: quantity.value,
      variant: `Размер ${selectedSize.value}`
    });
    
    // Show confirmation and open cart
    setTimeout(() => {
      cartStore.toggleCart();
    }, 300);
  }
};

// Toggle accordion sections
const toggleAccordion = (section) => {
  accordions.value[section] = !accordions.value[section];
};
</script>