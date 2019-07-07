<template>
    <div class="box">
        <img v-bind:src="getAvatar()" alt="">
        <h5>Savvy</h5>
        <div class="overlay" v-if="allowSwitch">
            <span>Edit</span>
        </div>
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
    position: relative;
}

.box img {
    pointer-events: none;
    max-width: 100%;
    height: auto;
}

h5 {
    font-family: 'Lato';
    font-weight: 700;
    font-size: 2.2rem;
    margin: 0 0 25px 0;
    padding: 0;
}

.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .3s ease;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.box:hover .overlay {
    opacity: 1;
}

.overlay span {
    font-family: 'Lato', sans-serif;
    font-weight: 100;
    background-color: #212121;
    padding: 8px 35px;
    /* width: 100%; */
}
</style>
