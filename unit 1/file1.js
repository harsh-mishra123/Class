function age(){
    this.years = 25;
    setTimeout(() => {
        console.log(this.years);
    }, 1000);
}

age();





