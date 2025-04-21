import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
        isOpen: false,
    }),

    getters: {
        itemCount: (state) => {
            return state.items.reduce((total, item) => total + item.quantity, 0);
        },

        subtotal: (state) => {
            return state.items.reduce((total, item) => {
                const price = item.discountPrice || item.price;
                return total + (price * item.quantity);
            }, 0);
        },

        total: (state) => {
            // С учетом возможных скидок, доставки и пр.
            return state.items.reduce((total, item) => {
                const price = item.discountPrice || item.price;
                return total + (price * item.quantity);
            }, 0);
        }
    },

    actions: {
        addItem(item) {
            const existingItem = this.items.find(i => i.id === item.id && i.variant === item.variant);

            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                this.items.push({ ...item });
            }

            // Автоматически открываем корзину при добавлении товара
            this.isOpen = true;
        },

        removeItem(index) {
            // Удаляем по индексу, который передается из компонента
            this.items.splice(index, 1);
        },

        incrementItem(index) {
            // Теперь используем индекс вместо id
            if (this.items[index]) {
                this.items[index].quantity += 1;
            }
        },

        decrementItem(index) {
            // Теперь используем индекс вместо id
            if (this.items[index] && this.items[index].quantity > 1) {
                this.items[index].quantity -= 1;
            } else if (this.items[index] && this.items[index].quantity === 1) {
                // Если остался 1 товар и юзер нажимает уменьшить, удаляем товар
                this.removeItem(index);
            }
        },

        clearCart() {
            this.items = [];
        },

        toggleCart() {
            this.isOpen = !this.isOpen;
        },

        closeCart() {
            this.isOpen = false;
        },

        openCart() {
            this.isOpen = true;
        }
    }
});