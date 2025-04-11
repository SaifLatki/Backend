const os = require('os');

const totalMemory = os.totalmem(); // Total system memory in bytes
const freeMemory = os.freemem(); // Free system memory in bytes

const cpuInfo = os.cpus(); // Information about the CPU cores
const networkInterfaces = os.networkInterfaces(); // Network interfaces information

console.log('Total Memory:', totalMemory); // Log the total memory
console.log('Free Memory:', freeMemory); // Log the free memory
console.log('CPU Info:', cpuInfo); // Log the CPU information
console.log('Network Interfaces:', networkInterfaces); // Log the network interfaces information
