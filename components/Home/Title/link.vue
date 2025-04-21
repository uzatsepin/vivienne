<template>
    <NuxtLink
        :to="link"
        class="inline-flex items-center px-4 py-1.5 border border-gray-600 text-gray-700 bg-transparent hover:bg-gray-600 hover:text-white transition-colors duration-300 -full group">
        <span class="mr-2">{{ text }}</span>
        <Icon
            name="heroicons:arrow-right"
            class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
    </NuxtLink>
</template>

<script lang="ts" setup>
import { link } from '#build/ui';

defineProps({
	text: {
		type: String,
	},
	link: {
		type: String,
		default: () => ('/catalog'),
	},
})
</script>

<style></style>
