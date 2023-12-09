<template>
  <NuxtLink :to="props.to" :class="linkClasses">
    {{ props.label }}
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import clsx from 'clsx';
interface PrimaryLinkProps {
  label?: string
  to?: string
  white?: boolean
  primary?: boolean
  border?: boolean
  block?: boolean
  class?: string
}

const props = defineProps<PrimaryLinkProps>();

const linkClasses = clsx(
  'text-title-black font-bold py-4 px-6 cursor-pointer transition-colors duration-300 hover:bg-first-light inline-flex justify-center items-center gap-x-2 group',
  props.class,
  props.white && 'bg-title',
  props.primary && 'bg-first',
  props.border && 'border-2 border-first-light',
  props.block && 'w-full'
)
</script>
