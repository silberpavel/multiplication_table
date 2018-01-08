window.onload = function () {


function MultiTable(x,y) {

    this.init_ = function() {

        this.table = document.createElement('table'); // create table element
    
        for (var i = 1; i <= x; i++) {
            
            var tr = document.createElement('tr')  // create text node tr 1,2,3...
    
            for (var j = 1; j <= y; j++) {
    
                var td = document.createTextNode(`${i} x ${j} = ${i * j}\t`); // create text node td  1,2,3...
                tr.appendChild(td);   // appent td inside tr
            }
    
            this.table.appendChild(tr);
        }
    }

    this.show = function() {
        document.body.appendChild(this.table);
    }

    this.init_();

}


// MultiTable(50,50);
// MultiTable(2,5);
// MultiTable(5,5);

//  var tab1 = new MultiTable(5,5);

(new MultiTable(5,5)).show();









};