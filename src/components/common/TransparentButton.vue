<template>
    <button class="btn"><img v-bind:src="image" alt=""> {{ text }} <span><font-awesome-icon v-bind:icon="faIcon" /></span></button>
</template>


<script>
export default {
    props: {
        image: String,
        text: String,
        icon: String
    },
    data: function() {
        return {
            faIcon: this.icon
        }
    }
}
</script>

<style scoped>
.btn {
    position: relative;
    display: block;
    font-family: 'Lato';
    font-weight: 500;
    text-transform: uppercase;
    box-sizing: border-box;
    padding: 1rem 0;
    width: 100%;
    /* padding: 1rem 6rem !important; */
    background: transparent;
    color: #fff;
    font-size: 1rem;
    opacity: 0.8;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.18);
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border: 1px solid #fff;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.btn:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    opacity: 1;
}

.btn img {
    width: 32px;
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
    left: 8%;
}

.btn span {
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
    right: 2%;
}
</style>
