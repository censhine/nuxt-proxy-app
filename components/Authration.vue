<template>
    <n-modal v-model:show="props.isShow" preset="dialog" :title="title" @close="handleClose">
        <template #header>
            <div>{{  title }}</div>
        </template>
            <div class="authration-box">
            <n-form ref="formRef" :model="form" :rules="rules">
                <n-form-item path="email" label="Email">
                    <n-input v-model:value="form.email" @keydown.enter.prevent />
                </n-form-item>
                <n-form-item path="password" label="Password">
                    <n-input
                        v-model:value="form.password"
                        type="password"
                        @input="handlePasswordInput"
                        @keydown.enter.prevent
                    />
                </n-form-item>
                <n-form-item path="verifyCode" label="Verification Code" v-if="title != 'Login'">
                    <div class="flex flex-row justify-left items-center">
                        <n-input v-model:value="form.verifyCode" @keydown.enter.prevent />
                        <div class="w-[100px] text-center">1+2=?</div>
                        <div class="mr-auto"><n-icon><Refresh/></n-icon></div>
                    </div>
                </n-form-item>
                <n-form-item path="invitationCode" label="Invitation code(optional)">
                    <n-input v-model:value="form.invitationCode" @keydown.enter.prevent />
                </n-form-item>
                <div class="flex flex-col">
                    <hover-btn className="rounded-full px-4 py-2 text-white bg-blue-500 ">{{ title }}</hover-btn>
                    <div class="flex flex-col">
                        <p>Your personal data shall be processed in accordance with our <a href="#">Privacy Policy</a></p>
                        <p>Already have an account? <a href="#" class=" underline blue-color"  @click="handleSwitch(1)">Sign in</a></p>
                    </div>
                </div>
            </n-form>
        </div>
    </n-modal>
</template>

<script setup>
import { reactive, defineProps, ref, defineEmits } from 'vue'
import { NModal, NForm, NFormItem, NButton, NInput, NIcon } from 'naive-ui'
import { Refresh } from '@vicons/ionicons5'
const form = reactive({
    email: '',
    password: '',
    verifyCode: '',
    invitationCode: ''
})

const rules = reactive({

})

const props = defineProps({
    isShow: {
        type: Boolean,
        default: ()=>false
    },
    type: {
        type: Number,
        default: ()=>1
    }
})

const handlePasswordInput = (e) => {

}

const emits = defineEmits(['close', 'loginOrRegister'])

const handleClose = (e) => {
    console.log(e)
    emits('close', e)
}

const handleSwitch = (type) => {
    emits('loginOrRegister', type)
}

const title = computed(()=> {
    return props.type == 2 ? 'Sign Up' : 'Login'
})
</script>
