new Vue({
    el: '#app',
    data () {
        return {
            output: '',
            tmpl: `&lt;div&gt;
    {{ teste }}
&lt;/div&gt;`,
            js: `{
    data () {
        return {
            teste: 1
        }
    }
}`,
            css: `body {
    background: magenta
}`,
        }
    },
    methods: {
        updateIframe() {
            const { tmpl, js, css } = this.$refs;


            this.output = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>${this.decodeHtml(css.textContent.replace(/\n/g, ''))}</style>
</head>
<body>
    <div id="app"></div>

    <script src="/js/vue.js"></script>
    <script>
        var a = new Vue({
            template: '${this.decodeHtml(tmpl.textContent.replace(/\n/g, ''))}',
            ...${this.decodeHtml(js.textContent.replace(/\n/g, ''))}
        })

        a.$mount('#app');
    </script>
</body>
</html>
`;

        },
        decodeHtml(html) {
            var txt = document.createElement("textarea");
            txt.innerHTML = html;
            return txt.value;
        }
    }
})

