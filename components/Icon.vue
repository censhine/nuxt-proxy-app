<template>
    <n-icon :size="props.size" :color="props.color" class=" align-middle mr-2 mt-1" :class="className">
        <Component :is="models[props.name]" />
    </n-icon>
</template>

<script setup>
import { NIcon } from 'naive-ui';
import { Cart, ChevronDown, FlashSharp, DiamondOutline, ApertureSharp, EarthOutline, CaretForwardCircleOutline, CheckmarkCircle } from '@vicons/ionicons5'

const models = {
    Cart, ChevronDown, FlashSharp, DiamondOutline, ApertureSharp, EarthOutline, CaretForwardCircleOutline, ChevronDown, CheckmarkCircle
}

const props = defineProps({
    name: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: '#fff'
    },
    size: {
        type: Number,
        default: 20
    },
    className: {
        type: String,
        default: ''
    }
})
</script>
