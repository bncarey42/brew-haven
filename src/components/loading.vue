<template>
    <div v-if="loading">
        <i id='heartbeat' class="fas fa-beer"></i>
    </div>
</template>

<script>
    import EB from "../EB";

    export default {
        name: "Loading",
        data: function () {
            return {
                loading: false,
                msg:null,
            }
        },
        created: function() {
            EB.$on('toggle-loading', (msg=null) => {
                this.loading = !this.loading;
                this.msg = msg;
            });
        }
    }
</script>

<style scoped>
    @keyframes heartbeat {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(.50)
        }
        100% {
            transform: scale( 1);
        }
    }

    #heart-to-beat {
        position: relative;
        width: 100px;
        height: 90px;
        animation: heartbeat 1s infinite;
    }
</style>