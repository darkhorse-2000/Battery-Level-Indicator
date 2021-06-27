const batteryLevel = document.querySelector('.battery-level');

navigator.getBattery().then(function(battery){
    const level = battery.level;
    const status = level * 100 + "%";
    batteryLevel.style.width = status;
    batteryLevel.innerHTML = status;
});