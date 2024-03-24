<template>
    <div class="footer">
        <div class="container py-10 !px-20 flex justify-between">
        <dl><dt>CONTACT US</dt>
            <dd>Support: support@abcproxy.com</dd>
            <dd class=" text-pretty">100% Stable & Genuine Residential Proxies</dd>
            <dd>
                <ul>
                <li><icon name="CheckmarkCircle"/>Invalid IPs are not billed</li>
                <li><icon name="CheckmarkCircle"/>Highly reliable with 99.9% uptime</li>
                <li><icon name="CheckmarkCircle"/>Support HTTP(S)/Socks5 protocol</li>
                <li><icon name="CheckmarkCircle"/>200M+ residential IPs live online in over 190 countries worldwide</li>
            </ul>
        </dd>
        </dl>

        <dl>
            <dt>COMPANY</dt>
            <dd>About Us</dd>
            <dd>Affiliate program</dd>
            <dd>Partner Program</dd>
        </dl>
        
        <dl>
            <dt>PROXY SERVICES</dt>
            <dd>Residential (Socks5) Proxies</dd>
            <dd>Residential Proxies</dd>
            <dd>Static Residential Proxies</dd>
            <dd>Proxy IP Locations</dd>
        </dl>

        <dl>
            <dt>RESOURCES</dt>
            <dd>FAQ</dd>
            <dd>Documentation</dd>
            <dd>Download for Window</dd>
        </dl>
        
        </div>
    </div>
</template>

<style lang="less" scoped>
.footer {
    @apply bg-[#152047] text-white h-[300px];
    dl {
        @apply flex flex-col;
        dt {
            @apply text-2xl;
        }
        dd {
            @apply text-xl text-gray-500;
        }
    }
}
</style>
