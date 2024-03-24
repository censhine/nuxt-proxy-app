<template>
    <div class="common-page my-10">
            <div class="title text-center">
                <p class="big-title text-black font-medium text-2xl">{{ title }}</p>
                <small class=" text-gray-500 text-xl">{{ smallTitle }}</small>
            </div>
            <div class="content">
                <slot/>
            </div>
        </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        smallTitle: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="less" scoped>

</style>