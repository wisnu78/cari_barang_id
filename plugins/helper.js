export default (context, inject) => {
    const hello = (msg) => console.log(`Hello ${msg}!`)
    const test = () => console.log("wisnu");
    // const formatIdr = (nominal) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(parseFloat(parseFloat(nominal.toString().split(".")[0]))).toString().replace('.',',').replace(' ','');
    const formatIdr = (nominal) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(Math.round(parseFloat(nominal.toString()).toFixed(2))).toString().replace('.',',').replace(' ','');
    // Inject $hello(msg) in Vue, context and store.
    inject('hello', hello)
    inject('test', test)
    inject('formatIdr', formatIdr)
    // For Nuxt <= 2.12, also add 👇
    context.$hello      = hello
    context.$test       = test
    context.$formatIdr  = formatIdr
}