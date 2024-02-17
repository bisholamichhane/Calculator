function append(value){
    document.getElementById('result').value+=value;
}

function clearResult(){
    document.getElementById('result').value=' ';
}

function operand(op){
    var value1=document.getElementById("result").value;
    var value2=document.getElementById('result').value;
    if (value1==' ') {
        alert("Please enter a number first");
    }
    else{
        if(op=='+'){
            display=value1+value2;
            document.getElementById('result').value+='+';
        }
        else if(op=='-'){
            display=value1-value2;
            document.getElementById('result').value+='-';
        }
        else if(op=='*'){
        display=value1*value2;
        document.getElementById('result').value+='*';
        }
        else if(op=='/'){
            display=value1/value2;
            document.getElementById('result').value+='/';
        }
        else if(op=='%'){
            display=value1%value2;
            document.getElementById('result').value+='%';
        }
       

    }
    
   
}

    function equals() {
        var expression = document.getElementById('result').value;
        
        try {
            var result = eval(expression);
            document.getElementById('result').value = result;
        } catch (error) {
            document.getElementById('result').value = 'Error';
        }
    }
    
    
    document.addEventListener('keydown', function(event) {
        var key = event.key;
    
        // Map keyboard keys to corresponding calculator buttons
        switch(key) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '.':
                append(key);
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                operand(key);
                break;
            case 'Enter':
                equals();
                break;
            case 'Escape':
                clearResult();
                break;
            case '%':
                operand('%');
                break;
            
            default:
                break;
        }
    });
