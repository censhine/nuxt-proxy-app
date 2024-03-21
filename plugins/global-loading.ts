import { createDiscreteApi } from 'naive-ui'
import type { LoadingBarInst } from 'naive-ui/es/loading-bar/src/LoadingBarProvider'

export default defineNuxtPlugin((nuxtApp) => {
    const bar = ref<LoadingBarInst>()
    nuxtApp.hook("app:mounted", (e) => {
        if(!bar.value) {
            const { loadingBar } = createDiscreteApi(['loadingBar'])
            bar.value = loadingBar 
        }
        console.log('mounted')
    })

    nuxtApp.hook("page:start", (e) => {
        bar.value?.start()
        console.log('start')
    })
    nuxtApp.hook("page:finish", (e) => {
        setTimeout(() => {
            bar.value?.finish()
        }, 1500);
        console.log('finish')
    })
    nuxtApp.hook("app:error",(e) => {
        console.log('error')
    })
})