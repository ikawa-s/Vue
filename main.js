const app = Vue.createApp({
    data() {
        return {
            message: 'Hello World!',
            // 三角形の底辺と高さ
            base: 0,
            height: 0,
            radius: 0,
            array: [
                1,2,3,4,5,6,7,8,9
            ],
        }
    },
    computed: {
        // 三角形の面積
        area() {
            return this.base * this.height /2
        },
        circumference() {
            return this.radius * 2 * 3.14
        },
        area2() {
            return this.radius * this.radius * 3.14
        }
    }
})
const vm = app.mount('#app')
