<template>
    <div class="static-wrap text-center">
        <label class=" text-blue-500 text-2xl">{{ label }}</label>
        <p class=" text-gray-500 text-xl">
            <slot/>
        </p>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: ''
        }
    }
}
</script>