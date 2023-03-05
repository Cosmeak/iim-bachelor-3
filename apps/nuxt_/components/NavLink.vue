<script setup lang="ts">
const props = defineProps({
	to: String,
	target: {
		default: null,
		type: String||null,
	},
	active: {
		default: false,
		type: Boolean,
	},
});
</script>

<template>
	<NuxtLink 
		:to="props.to" 
		:target="props.target"
		class="px-2 py-1 rounded hover:bg-light hover:text-secondary duration-200"
		:class="[props.active ? 'bg-light text-secondary' : '']"
	>
		<slot />
	</NuxtLink>
</template>
