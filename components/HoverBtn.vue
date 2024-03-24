<template>
    <button class="hover-wrap" :class="className">
        <span>
            <slot/>
        </span>
    </button>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: '#3e30ff'
        },
        className: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="less" scoped>
.hover-wrap {
    @color: v-bind(color);
    border: 1px solid @color;
    background-color: @color;
    @apply relative overflow-hidden px-6 py-1 text-white rounded-full mr-2;
    &:hover {
        color: @color !important;
    }
    &::before {
        content: "";
        position: absolute;
        top: 120%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
        pointer-events: none;
        z-index: 1;
        transition: all .35s linear;
    }
    &:hover::before {
        width: 150%;
        height: 400%;
    }
    span {
        position: relative;
        z-index: 9
    }
}
</style>