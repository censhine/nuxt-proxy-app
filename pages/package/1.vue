<template>
    <div class="container package-wrap my-12">
        <h3 class="text-2xl text-center py-12">Residential (Socks5) Proxies</h3>
        <ul class=" w-[900px] m-auto flex items-center justify-between">
            <li>200M+ genuine residential IP addresses</li>
            <li>Avg. 99.95% success rates</li>
            <li>Avg. 0.6s response time</li>
            <li>SOCKS5 supported</li>
        </ul>
        <div class="nav-bar my-12">
            <div class=" nav-wrap flex justify-center my-12">
                <button class=" bg-blue-600 text-white px-4 py-2 ring-1 ring-blue-600 mr-4 rounded-full">Conventional</button>
                <button class=" bg-gray-200 text-black px-4 py-2 rounded-full">Enterprise $0.04 /IP</button>
            </div>
            <div class=" w-[900px] m-auto ">
            <div class=" package-content flex justify-between items-center">
                <dl class=" w-[230px] h-[230px] bg-white shadow-lg px-4 py-4 text-center rounded-xl text-2xl mr-4">
                    <dt>
                        <ul>
                            <li>204 IPs</li>
                            <li>$0.24/IP</li>
                            <li>$ 0.22 /IPs</li>
                            <li>Total: $45</li>
                        </ul>
                    </dt>
                    <dd><hover-btn color="#4164f6">Order Now</hover-btn></dd>
                </dl>
                <dl class=" w-[230px] h-[230px] bg-white shadow-lg px-4 py-4 text-center rounded-xl text-2xl mr-4">
                    <dt>
                        <ul>
                            <li>204 IPs</li>
                            <li>$0.24/IP</li>
                            <li>$ 0.22 /IPs</li>
                            <li>Total: $45</li>
                        </ul>
                    </dt>
                    <dd><hover-btn color="#4164f6">Order Now</hover-btn></dd>
                </dl>
                <dl class="  w-[230px] h-[230px] bg-white shadow-lg px-4 py-4 text-center rounded-xl text-2xl mr-4">
                    <dt>
                        <ul>
                            <li>204 IPs</li>
                            <li>$0.24/IP</li>
                            <li>$ 0.22 /IPs</li>
                            <li>Total: $45</li>
                        </ul>
                    </dt>
                    <dd><hover-btn color="#f34b55">Order Now</hover-btn></dd>
                </dl>
                <dl class="  w-[230px] h-[230px] bg-white shadow-lg px-4 py-4 text-center rounded-xl text-2xl">
                    <dt>
                        <ul>
                            <li>204 IPs</li>
                            <li>$0.24/IP</li>
                            <li>$ 0.22 /IPs</li>
                            <li>Total: $45</li>
                        </ul>
                    </dt>
                    <dd><hover-btn color="#5ce85a">Order Now</hover-btn></dd>
                </dl>
            </div>
            </div>
        </div>

        <div class="features my-12">
            <h3 class="text-2xl text-center py-12">Socks5 Customers Favorite Features</h3>
            <ul class=" features-box w-[900px] m-auto flex flex-wrap">
                <li>Largest Geographic Coverage</li>
                <li>
            Battle-Tested Stability & Speeds</li>
            <li>
            Ethical Compliance</li>
            <li>
            SOCKS5 Protocol with Proxy Manager</li>
            <li>
            200M+ Residential IPs</li>
            <li>
            Easy-to-Use Proxy Manager</li>
            <li>
            User-Friendly Control Panel & API</li>
            <li>
            Dedicated IPs</li>
            <li>
            Country and City level targeting</li>
            <li>
            Extended Session Control</li>
            <li>
            Industry’s Best Customer Support</li>
            <li>
            Real time network status page</li>
            </ul>
        </div>

        <div class="faq">
            <h3 class="text-2xl text-center py-12">ABC S5 Proxy's FAQ</h3>
            <n-collapse @item-header-click="handleItemHeaderClick">
            <n-collapse-item v-for="(item, index) in faq" :name="index" :key="index">
            <template #header>
                {{ item.title }}
            </template>
            <div>{{ item.question }}</div>
            </n-collapse-item>
        </n-collapse>
        </div>
    </div>
</template>

<script setup>
import { NCollapse, NCollapseItem } from 'naive-ui'
const { params } = useRoute()
const currentType = params?.type || 1

const faq = [{
        title: 'What is a residential proxy?',
        question: 'Residential Proxy network is a proxy network that contains real IP addresses provided by Internet Service Providers (ISPs). These IP addresses are attached to physical locations across the globe at a country or a city level. Requests coming from residential proxies stand out for their legitimacy, allowing you to gather public data efficiently.'
    },
    {
        title: 'Do you offer a residential proxy free trial?',
        question: 'No, no trial is provided, you can choose the most suitable package to complete your trial operation, if you have other questions, you can send an email to support@abcproxy.com'
    },
    {
        title: 'Do you offer a residential proxy free trial?',
        question: 'No, no trial is provided, you can choose the most suitable package to complete your trial operation, if you have other questions, you can send an email to support@abcproxy.com'
    },
]

const handleItemHeaderClick = (e) => {
    console.log(e)
}
</script>

<style lang="less" scoped>
.features-box {
    li {
        @apply text-2xl mr-10;
    }
}
.n-collapse {
    background: white;
    :deep(.n-collapse-item__header-main:nth-child(1)) {
        padding-top: 20px;
    }
}
</style>