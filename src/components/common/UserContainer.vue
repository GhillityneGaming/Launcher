<template>
    <div class="box">
        <img v-bind:src="getAvatar()" alt="">
        <h5>Savvy</h5>
    </div>
</template>


<script>
export default {
    props: {
        allowSwitch: Boolean,
        uniqueId: String
    },
    methods: {
        getAvatar: function() {
            return `https://visage.surgeplay.com/head/312/${this.uniqueId}.png`
        }
    }
}
</script>

<style scoped>
.box {
    text-align: center;
    background: rgba(255, 255, 255, 0.18);
    border: 1px solid #fff;
}

.box img {
    pointer-events: none;
}

h5 {
    font-family: 'Lato';
    font-weight: 700;
    font-size: 2.2rem;
    margin: 0 0 25px 0;
    padding: 0;
}
</style>
