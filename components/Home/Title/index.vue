<template>
    <div
        class="my-12"
        data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-bold mb-3">{{ title }}</h2>
        <p class="text-gray-600 text-lg max-w-2xl">{{ description }}</p>
        <div class="w-48 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 mt-4"></div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
	title: {
		type: String,
	},
	description: {
		type: String,
	}
});
</script>

<style></style>
