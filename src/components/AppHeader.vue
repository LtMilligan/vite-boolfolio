<script>
export default {
    props: {
        menu: Array
    }
}
</script>
<template>
    <header>
        <div class="container-fluid my-3">
            <div class="row">
                <div class="col-6">
                    <img src="" alt="LOGO">
                </div>
                <div class="col-6">
                    <ul class="list-unstyled d-flex justify-content-end">
                        <li class="mx-2" v-for="item, index in menu" :key="index">
                            <router-link :to="{ name: item.name }">{{ item.label }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="">
    
</style>