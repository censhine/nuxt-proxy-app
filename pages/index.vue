<template>
    <div>
        <section class="w-[100%] h-[500px] bg-blue-600">
            <div class="banner-wrap w-[1020px] px-5 py-5 ml-auto mr-auto">
                <div class="banner">
                <h2>优质海外住宅代理全球IP资源提供商</h2>
                    <button>立即购买</button>
                    <button>咨询客服</button>
                </div>

                <div class="special">
                    smartproxy
遍布全球
IP覆盖率广
smartproxy
稳定安全
高度匿名 保护隐私
smartproxy
高质量IP池
动态纯净IP资源
smartproxy
即时帮助
24/7全天候实时帮助
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { NCard } from 'naive-ui'

const goodsList = ref([])
async function getData() {
    const { data, pending, error, refresh } = await useFetch('/api/category',{
        key: 'indexApi',
        headers: {
            token: '1111111111111111111111111'
        },
        baseURL: '',
        cache: false,
        lazy: true
    })
    goodsList.value = data.value
    console.log(data.value)
}

useHead({
    title: '首页'
})
</script>