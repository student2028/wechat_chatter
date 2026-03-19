var baseAddr = ptr(0);
Process.enumerateModules().forEach(function (m) {
    if (m.name.toLowerCase().includes("wechat.dylib")) {
        baseAddr = m.base;
    }
});
console.log("Base address of wechat.dylib: " + baseAddr);