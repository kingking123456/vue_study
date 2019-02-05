
    // new做几件事情
    // 1.创建一个新的空对象
    // 2.让this指向这个新的空对象
    // 3.执行这个函数中代码
    // 4.返回这个对象
    // 5.这个对象中有一个_proto_指向构造函数中原型
     
   
    var promise = new Promise((resolve, reject) => {
        var flag = false
        if (flag) return resolve()
        reject()
    })
