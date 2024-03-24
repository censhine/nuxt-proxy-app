<template>
    <div>
        <section class="banner-bg">
            <div class="banner-wrap container">
                <div class="banner">
                    <h2 class=" text-white text-4xl pt-[150px] w-[650px] pb-10">High quality overseas residential proxy<br>
Global IP resource provider</h2>
                    <button class=" bg-white text-[#295eff] mr-2 ring-1 ring-white px-5 py-2 rounded">
                        <n-icon><Cart/></n-icon>Order Now
                    </button>
                    
                    <button class="ring-1 ring-cyan-50 text-cyan-50 px-5 py-2 rounded">
                        Contact us<n-icon class="pl-2"><ChevronDown class="mt-1"/></n-icon>
                    </button>
                </div>

                <div class="special bg-white h-[130px] flex justify-between items-center mt-20 rounded-sm" style="background: hsla(0,0%,100%,.7); backdrop-filter: blur(12px) ">
                    <dl class="flex flex-row pl-20">
                        <dt><n-icon size="48" color="#295eff"><EarthOutline/></n-icon></dt>
                        <div>
                            <dd class="font-bold">Global IP pools</dd>
                            <dd>Wide IP coverage</dd>
                        </div>
                    </dl>
                    
                    <dl class="flex flex-row">
                        <dt><n-icon size="48" color="#295eff"><ApertureSharp/></n-icon></dt>
                        <div>
                            <dd class="font-bold">Stable and secure</dd>
                            <dd>Highly anonymous protection of privacy</dd>
                        </div>
                    </dl>

                    <dl class="flex flex-row">
                        <dt><n-icon size="48" color="#295eff"><DiamondOutline/></n-icon></dt>
                        <div>
                            <dd class="font-bold">High quality IP pool</dd>
                            <dd>Dynamic Pure IP Resources</dd>
                        </div>
                    </dl>

                    <dl class="flex flex-row pr-20">
                        <dt><n-icon size="48" color="#295eff"><FlashSharp/></n-icon></dt>
                        <div>
                        <dd class="font-bold">In time services</dd>
                        <dd>24/7 real-time assistance</dd>
                        </div>
                    </dl>
 
                </div>
            </div>
        </section>

        <div class="skills">
            <div class="skills-in container">
                
                    <title-page title="Core strength" small-title="Integrating technology to build more stronger experience"></title-page>

                    <div class="box flex justify-between items-center mt-20 mb-20">
                        <dl>
                            <dt><icon name="FlashSharp" color="#3e30ff" :size="48"/></dt>
                            <dd>Proxy Networks solutions powering
projects of any scale</dd>
                            <dd>Join thousands of companies from startups to large corporations who trust
us with all their proxies needs.</dd>
                        </dl>

                        <dl>
                            <dt><icon name="FlashSharp" color="#3e30ff" :size="48"/></dt>
                            <dd>Global proxy pool for easy public data access</dd>
                            <dd>Utilize one of the most reliable and largest proxy services in the market with 200M+ IPs, covering 195 countries worldwide.</dd>
                        </dl>

                        <dl>
                            <dt><icon name="FlashSharp" color="#3e30ff" :size="48"/></dt>
                            <dd>200M+ ethically sourced Residential Proxy pool</dd>
                            <dd>Quality Proxy Infrastructure Improves Proxy Network Speed in 190+ Countries, 200 Million+ Real Residential IP Addresses Compliant with GDPR & CCPA</dd>
                        </dl>

                        <dl>
                            <dt><icon name="FlashSharp" color="#3e30ff" :size="48"/></dt>
                            <dd>Easily integrate our solutions to your projects</dd>
                            <dd>We make sure that incorporating our products into your web scraping framework is as simple as can be. we assure you a fast and straightforward initiation for your web scraping endeavors.</dd>
                        </dl>
                    </div>
                </div>
        </div>

        <div class="packages container">
            <h3 class="text-center text-2xl py-10">Get High Performance Private IP with ABC S5 Proxy,Fast Response Times.</h3>
            <ul class="tab-nav flex items-center">
                <li :class="{active: currentIndex == 1}"  @click="currentIndex = 1">Residential (Socks5) Proxies</li>
                <li :class="{active: currentIndex == 2}" @click="currentIndex = 2">Residential Proxies</li>
                <li :class="{active: currentIndex == 3}" @click="currentIndex = 3">Static Residential Proxies</li>
                <li :class="{active: currentIndex == 4}" @click="currentIndex = 4">Rotating ISP Proxies</li>
                <li :class="{active: currentIndex == 5}" @click="currentIndex = 5">Dedicated Datacenter Proxies</li>
            </ul>
            <div class="tab-content w-[1280px] m-auto">
                <div class="flex justify-between" v-if="currentIndex == 1">
                    <div class="left-box pr-10 pt-10">
                        <h4 class="text-2xl font-bold ">Residential (Socks5) Proxies ($0.04/IP)</h4>
                        <p class=" text-pretty text-xl text-gray-600">ABC S5 Proxy Covers 190+ Locations, Powerful Socks5 Proxy Manager is Easy to Integrate, Works with Any Fingerprint Browser , Proxy Tool, etc. Anonymously Access Data, 100% Compatibility
                        </p>
                        <ul class="block py-5">
                            <li><icon name="CaretForwardCircleOutline" color="#3e30ff"/>IP Balance Never Expires</li>
                            <li><icon name="CaretForwardCircleOutline" color="#3e30ff"/>Invalid IP Returns</li>
                            <li><icon name="CaretForwardCircleOutline" color="#3e30ff"/>Unlimited Bandwidth</li>
                            <li><icon name="CaretForwardCircleOutline" color="#3e30ff"/>Enterprise Plan Cheapest $0.04 = 1 IPs</li>
                        </ul>
                        <hover-btn class="mr-2"><span>Order now</span></hover-btn>
                        <button class=" ring-1 ring-black px-6 py-1 text-black rounded-full">Download</button>
                    </div>
                    <img class="my-10 h-60" src="@/assets/img/pack_1.png" />
                </div>
                <div class="flex justify-between" v-if="currentIndex == 2">
                    <div class="left-box pr-10 pt-10">
                        <h4 class="text-2xl font-bold ">Residential Proxies ($0.7/GB)</h4>
                        <p class=" text-pretty text-xl text-gray-600">
                            200M+ IP Numbers Continue to Grow, Support SOCKS5 and HTTP(s), IP Availability > 99% , Unlimited Concurrent Conversations, API & Account Secret Authentication, Less Bans
                        </p>
                        <ul class="block py-5">
                            <li><icon name="CaretForwardCircleOutline" color="#3e30ff"/>Response Speed in Milliseconds</li>
                            <li><icon name="CaretForwardCircleOutline" color="#3e30ff"/>Personalized Proxy List</li>
                            <li><icon name="CaretForwardCircleOutline" color="#3e30ff"/>Custom Rotation Proxy Network</li>
                            <li><icon name="CaretForwardCircleOutline" color="#3e30ff"/>Enterprise Plan Cheapest $0.7 = 1GB & 90Days</li>
                        </ul>
                        <button class="order-btn relative overflow-hidden bg-blue-600 ring-blue-600 ring-1 px-6 py-1 text-white rounded-full mr-2"><span>Order now</span></button>
                        <button class=" ring-1 ring-black px-6 py-1 text-black rounded-full">Get Proxy</button>
                    </div>
                    <img class="my-10 h-60" src="@/assets/img/pack_2.png" />
                </div>
                <div class="flex justify-between" v-if="currentIndex == 3">
                    <div class="left-box pr-10 pt-10">
                        <h4 class="text-2xl font-bold ">Static Residential Proxies</h4>
                        <p class=" text-pretty text-xl text-gray-600">
                            200M+ IP Numbers Continue to Grow, Support SOCKS5 and HTTP(s), IP Availability > 99% , Unlimited Concurrent Conversations, API & Account Secret Authentication, Less Bans
                        </p>
                        <ul class="block py-5">
                            <li><icon name="CaretForwardCircleOutline" color="#3e30ff"/>Response Speed in Milliseconds</li>
                            <li><icon name="CaretForwardCircleOutline" color="#3e30ff"/>Personalized Proxy List</li>
                            <li><icon name="CaretForwardCircleOutline" color="#3e30ff"/>Custom Rotation Proxy Network</li>
                            <li><icon name="CaretForwardCircleOutline" color="#3e30ff"/>Enterprise Plan Cheapest $0.7 = 1GB & 90Days</li>
                        </ul>
                        <button class="order-btn relative overflow-hidden bg-blue-600 ring-blue-600 ring-1 px-6 py-1 text-white rounded-full mr-2"><span>Order now</span></button>
                        <button class=" ring-1 ring-black px-6 py-1 text-black rounded-full">Get Proxy</button>
                    </div>
                    <img class="my-10 h-60" src="@/assets/img/pack_3.png" />
                </div>
                <div class="flex justify-between" v-if="currentIndex == 4">
                    <div class="left-box pr-10 pt-10">
                        <h4 class="text-2xl font-bold ">Rotating ISP Proxies</h4>
                        <p class=" text-pretty text-xl text-gray-600">
                            200M+ IP Numbers Continue to Grow, Support SOCKS5 and HTTP(s), IP Availability > 99% , Unlimited Concurrent Conversations, API & Account Secret Authentication, Less Bans
                        </p>
                        <ul class="block py-5">
                            <li><icon name="CaretForwardCircleOutline" color="#3e30ff"/>Response Speed in Milliseconds</li>
                            <li><icon name="CaretForwardCircleOutline" color="#3e30ff"/>Personalized Proxy List</li>
                            <li><icon name="CaretForwardCircleOutline" color="#3e30ff"/>Custom Rotation Proxy Network</li>
                            <li><icon name="CaretForwardCircleOutline" color="#3e30ff"/>Enterprise Plan Cheapest $0.7 = 1GB & 90Days</li>
                        </ul>
                        <button class="order-btn relative overflow-hidden bg-blue-600 ring-blue-600 ring-1 px-6 py-1 text-white rounded-full mr-2"><span>Order now</span></button>
                        <button class=" ring-1 ring-black px-6 py-1 text-black rounded-full">Get Proxy</button>
                    </div>
                    <img class="my-10 h-60" src="@/assets/img/pack_4.png" />
                </div>
                <div class="flex justify-between" v-if="currentIndex == 5">
                    <div class="left-box pr-10 pt-10">
                        <h4 class="text-2xl font-bold ">Dedicated Datacenter Proxies</h4>
                        <p class=" text-pretty text-xl text-gray-600">
                            200M+ IP Numbers Continue to Grow, Support SOCKS5 and HTTP(s), IP Availability > 99% , Unlimited Concurrent Conversations, API & Account Secret Authentication, Less Bans
                        </p>
                        <ul class="block py-5">
                            <li><icon name="CaretForwardCircleOutline" color="#3e30ff"/>Response Speed in Milliseconds</li>
                            <li><icon name="CaretForwardCircleOutline" color="#3e30ff"/>Personalized Proxy List</li>
                            <li><icon name="CaretForwardCircleOutline" color="#3e30ff"/>Custom Rotation Proxy Network</li>
                            <li><icon name="CaretForwardCircleOutline" color="#3e30ff"/>Enterprise Plan Cheapest $0.7 = 1GB & 90Days</li>
                        </ul>
                        <button class="order-btn relative overflow-hidden bg-blue-600 ring-blue-600 ring-1 px-6 py-1 text-white rounded-full mr-2"><span>Order now</span></button>
                        <button class=" ring-1 ring-black px-6 py-1 text-black rounded-full">Get Proxy</button>
                    </div>
                    <img class="my-10 h-60" src="@/assets/img/pack_5.png" />
                </div>
            </div>
        </div>
        <title-page title="Global proxy pool for easy public data access" small-title="Utilize one of the most reliable and largest proxy services in the market with 200M+ IPs, covering 195 countries worldwide."></title-page>
        <div class="container flex justify-between my-20">
            <statistic label="1,234,123">
                global IP pools
            </statistic>
            <statistic label="234,123">
                Today's update quantity
            </statistic>
            <statistic label="95.67%">
                Global IP success rate
            </statistic>
            <statistic label="195+">
                Global HTTP lines
            </statistic>
        </div>
    </div>
</template>

<script setup>
import { NCard, NButton, NIcon, NStatistic } from 'naive-ui'
import { Cart, ChevronDown, FlashSharp, DiamondOutline, ApertureSharp, EarthOutline, CaretForwardCircleOutline } from '@vicons/ionicons5'
const goodsList = ref([])
const currentIndex = ref(1)
useHead({
    title: 'Home page'
})
</script>

<style lang="less" scoped>
.banner-bg {
    background: url('@/assets/img/banner.png') 50%/cover no-repeat,linear-gradient(90deg,#428bff,#3e30ff);
    height: 650px;
    width: 100%;
    background-size: cover;
    margin-left: auto;
    margin-right: auto;
    position: relative;
}
.skills dl {
    @apply  flex flex-col text-center ring-1 ring-transparent shadow-lg px-4 py-4 rounded-lg justify-center mr-20 bg-white cursor-pointer hover:scale-125 duration-200;
}
.skills dl dd:nth-child(1) {
    @apply text-2xl text-black;
}
.skills dl dd:nth-child(2) {
    @apply text-xl text-gray-500;
}
.skills-in {
    dl {
        width: 300px;
        height: 320px;
    }
}
.packages .tab-nav {
    justify-content: center;
}
.packages .tab-nav li {
    @apply cursor-pointer rounded-full px-5 py-2 mr-4 bg-gray-300 text-gray-600 leading-5;
}
.packages .tab-nav li.active {
    @apply bg-[#3e30ff] text-white;
}

.left-box p {
    max-width: 500px;
}

.tips-scale {
    position: relative;
    width: 100%;
    height: 500px;
}
.tips-scale b {
        position: absolute;
        top: 30px;
        left: 30px;
        display: block;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: rgba(41,94,255,.7)
    }

.tips-scale b:nth-of-type(2) {
    -webkit-animation: clickscale 1s linear infinite;
    animation: clickscale 1s linear infinite
}

@keyframes clickscale {
    0% {
        opacity: .8;
        -webkit-transform: scale(1);
        transform: scale(1)
    }

    to {
        opacity: 0;
        -webkit-transform: scale(3);
        transform: scale(3)
    }
}

.a {
    .b {
        background: yellow;
    }
}

</style>