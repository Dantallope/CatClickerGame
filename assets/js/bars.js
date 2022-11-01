class happinessBar {
    constructor (element, initialValue = 0) {
        this.valueElem = element.querySelector('.happiness-bar-value');
        this.fillElem = element.querySelector('.happiness-bar-fill');

        this.setValue(initialValue);
    }

    setValue(newValue) {
        if (newValue < 0) {
            newValue = 0;
        }

        if (newValue > 100) {
            newValue = 100
        }
        
        happiness = newValue;
        this.value = newValue;
        this.update();
    }

    update () {
        const percentage = this.value + '%' ;

        this.fillElem.style.width = percentage;
        this.valueElem.textContent = percentage;
        saveGame();
    }
    
    happybarUp(){
        this.value = this.value + 10;
        this.setValue(this.value)
        saveGame();
    }

    happybardown(){
        this.value = this.value - 10;
        this.setValue(this.value)
        saveGame();
    }

    
}

const happybar = new happinessBar(document.querySelector('.happiness-bar'), happiness);    
// add the bar value when certain buttons are clicked 
//need event listener, add value to increase by 10
document.querySelector('#playButton').addEventListener('click', function(){
    happybar.happybarUp()
})

//the bar slowly goes down once every 15sec
setInterval(function(){happybar.happybardown()},5000)

//------------------------------------------------------------

class hungernessBar {
    constructor (element, initialValue = 0) {
        this.valueElem = element.querySelector('.hunger-bar-value');
        this.fillElem = element.querySelector('.hunger-bar-fill');

        this.setValue(initialValue);
    }
    setValue(newValue) {
        if (newValue < 0) {
            newValue = 0;
        }
        if (newValue > 100) {
            newValue = 100
        }
        
        hunger = newValue
        this.value = newValue;
        this.update();
    }
    update () {
        const percentage = this.value + '%' ;
        this.fillElem.style.width = percentage;
        this.valueElem.textContent = percentage;
        saveGame();
    }
        
    hungerbarUp(){
        this.value = this.value + 10;
        this.setValue(this.value)
        saveGame();
    }
    hungerbardown(){
        this.value = this.value - 10;
        this.setValue(this.value)
        saveGame();
    }
}

const hungerbar = new hungernessBar(document.querySelector('.hunger-bar'), hunger);    
// add the bar value when certain buttons are clicked 
//need event listener, add value to increase by 10
document.querySelector('#foodButton').addEventListener('click', function(){
    hungerbar.hungerbarUp()
})

//the bar slowly goes down once every 15sec
setInterval(function(){hungerbar.hungerbardown()},5000)

//-----------------------------------------------------------------------
class waternessBar {
    constructor (element, initialValue = 0) {
        this.valueElem = element.querySelector('.thirst-bar-value');
        this.fillElem = element.querySelector('.thirst-bar-fill');

        this.setValue(initialValue);
    }
    setValue(newValue) {
        if (newValue < 0) {
            newValue = 0;
        }
        if (newValue > 100) {
            newValue = 100
        }
        
        water = newValue;
        this.value = newValue;
        this.update();
        saveGame();
    }
    update () {
        const percentage = this.value + '%' ;
        this.fillElem.style.width = percentage;
        this.valueElem.textContent = percentage;
        saveGame();
    }
        
    waterbarUp(){
        this.value = this.value + 10;
        this.setValue(this.value)
        saveGame();
    }
    waterbardown(){
        this.value = this.value - 10;
        this.setValue(this.value)
        saveGame();
    }
}

const waterbar = new waternessBar(document.querySelector('.thirst-bar'), water);    
// add the bar value when certain buttons are clicked 
//need event listener, add value to increase by 10
document.querySelector('#waterButton').addEventListener('click', function(){
    waterbar.waterbarUp();
})

//the bar slowly goes down once every 15sec
setInterval(function(){waterbar.waterbardown()},5000)

