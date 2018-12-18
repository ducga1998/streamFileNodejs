const dns = require('dns')
dns.lookup('https://www.interaction-design.org/courses/psychology-of-e-commerce-how-to-sell-online/lessons/1.3' , (err, adddress) => {
    console.log(adddress)
})
dns.resolve('https://www.interaction-design.org/courses/psychology-of-e-commerce-how-to-sell-online/lessons/1.3',(err , adddress) => {
    console.log(adddress)
})
dns.reverse('216.58.199.14' , (err, hostName) => {
    console.log(hostName)
})