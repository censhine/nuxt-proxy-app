<template>
  <header class="nav-box">
    <div class="container flex">
      <a href="/" class="mr-5"><img class="w-[150px] mt-7" src="@/assets/img/logo.png" /></a>
      <ul class="nav-in">
        <li class="group relative">
          <a href="#">Proxies<n-icon size="20" class="rounded-md py-1 px-1"><ChevronDown class="group-hover:rotate-180"/></n-icon></a>
          <div class="links">
            <a href="/package/1" class=" block px-4 py-2 hover:bg-gray-300">套餐1</a>
            <a href="/package/1" class=" block px-4 py-2 hover:bg-gray-300">套餐2</a>
          </div>
        </li>
        <li class="pricing relative">
          <span class=" absolute text-white">$0.04/IP</span>
          <a href="/package/1">Pricing</a>
        </li>
        <li><a href="/cases">Use Cases</a></li>
        <li><a href="/knowledge">Leran</a></li> 
        <li><a href="/affilate">Affiliate program</a></li>
        <li><a href="/faq">FAQ</a></li>
      </ul>
      <div class="login-box flex items-center ml-4">
          <a href="#" class=" block px-4 py-2 rounded-sm text-blue-600 mr-2" @click="handleAuthration(1)">Login</a>
          <a href="#" class=" block px-4 py-2 rounded-sm bg-blue-600 text-white" @click="handleAuthration(2)">Register</a>
      </div>
      <authration :is-show="isShow" :type="authrationType" @close="handleClose" @loginOrRegister="handleAuthration"/>
    </div>
  </header>
</template>

<script setup>
import { NButton, NIcon } from 'naive-ui';
import { ChevronDown } from '@vicons/ionicons5'

const isShow = ref(false)
const authrationType = ref(1)
const handleAuthration = (type) => {
  authrationType.value = type
  isShow.value = true
}
const handleClose = (e) => {
  isShow.value = e
}
</script>

<style scoped>
.nav-box {
  @apply bg-white h-16 flex text-gray-900 px-5;
  z-index: 9;
}
.nav-in {
  @apply flex items-center;
}
.nav-in a {
  @apply mx-1 px-5 py-4 rounded-lg hover:text-blue-500;
}
.login-box {
  @apply ml-auto flex items-center relative;
}
.links {
  z-index: 10;
  @apply absolute w-48 flex flex-col bg-white text-gray-700 text-sm top-10 right-0 ring-1 ring-black ring-opacity-5 rounded-md scale-0 group-hover:!scale-100 duration-300 origin-top-right shadow-lg;
}

.pricing span{
  top: -20px;
  left: 40px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAAuCAYAAAD5jz22AAAAAXNSR0IArs4c6QAAAepJREFUeAHtnD1Ow0AQhWcsUSClo+IIYDokDoA4Bl2AS0RgGwm4AyIdx0C5AR3hClwgEgUSw6wTKKLYAWcVsS9vpcSx1z/73ueXbIqxyqyZmcr1wZmI9cUk92Xvu4/L/+iATkRlLKJDuXp5UFULo9TwZjeHu/Lx/uifjsM6W2oO6Ei2tk918PyW1ckkzNQIzo3Xg+gMA0u1Kj8X+7yf24OrKTqg2UVW/2amOHiOeYED1s+mE6AFfdyUngM+mQ0J5Ww2PXQNI7aeA2VDcoBAkWi6FgIlUDAHwOQwoQQK5gCYHCaUQMEcAJPDhBIomANgcphQAgVzAEwOE0qgYA6AyWFCCRTMATA5TCiBgjkAJocJJVAwB8DkMKEECuYAmBwmlEDBHACTw4TiAfU6QzYQB3SSTYtGQfRsugwvAPavXK8AZgNxQIdaF/xW+ROrt1Nn6lXcxfgkq2vzvZzbkzpKXdLmjn9Wku/12/UzFoIRfGhGardDy0Mzukixar/0u6DocqyoVlq8lp2O5UGtDvwktHWvhs5OUAmzwc04m1cCGobwJ6iEGYday1lWBvprqITZgiFeVxSgS6ESZjxiS84UDWgjVMJcgiBud1SgU6h7AzEtpf5LpJc+m72LO2Sebe0O2O3RTnit/cK8oHwBDWeC+emMf50AAAAASUVORK5CYII=) no-repeat 50%;
  background-size: contain;
  color: #fff;
  font-size: 16px;
  padding: 2px 5px;
}
</style>