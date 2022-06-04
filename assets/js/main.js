// FACTORY FUNCTION \\

/*function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia() {
            this.cliqueBtn();
            this.pressEnter();
        },

        pressEnter(){
            document.addEventListener('keyup', e =>{
                if(e.key === 'Enter'){
                    this.result();
                }
            })
        },

        result() {
            let conta = this.display.value;
            
            try {
                conta = eval(conta);

                if(!conta){
                    alert('Conta Inválida!');
                    return;
                }

                this.display.value = conta;
            } catch (e) {
                alert('Conta Inválida!');
                return;
            }
        },

        cliqueBtn() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.delNum();
                }

                if (el.classList.contains('btn-eq')) {
                    this.result();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        clearDisplay() {
            this.display.value = '';
        },

        delNum() {
            this.display.value = this.display.value.slice(0, -1);
        },
    }
};

const calc = criaCalculadora();
calc.inicia();*/

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= CONSTRUCTOR FUNCTION =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\\

/*function Calculadora(display, btnClear) {
    this.display = display;
    this.btnClear = btnClear;
    display.setAttribute("disabled", "disabled");

    this.inicia = function () {
        btnClick();
        pressEnter();
    };

    const pressEnter = function () {
        document.addEventListener('keyup', e => {
            if (e.key === 'Enter') {
                this.result();
            }
        })
    };

    const btnClick = function () {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                btnParaDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                clearDisplay();
            }

            if (el.classList.contains('btn-del')) {
                delNum();
            }

            if (el.classList.contains('btn-eq')) {
                result();
            }
        });
    };

    const result = function() {
        let conta = display.value;
        
        try {
            conta = eval(conta);

            if(!conta){
                alert('Conta Inválida!');
                return;
            }

            display.value = conta;
        } catch (e) {
            alert('Conta Inválida!');
            return;
        }
    };

    const btnParaDisplay = function (valor) {
        display.value += valor;
    };

    const clearDisplay = function () {
        display.value = '';
    };
    const delNum= function () {
        display.value = display.value.slice(0, -1);
    }
}

const calc = new Calculadora(document.querySelector('.display'), document.querySelector('.btn-clear'));
calc.inicia(); */

// WITH ARROW FUNCTIONS \\

function Calculadora() {
    this.display = document.querySelector('.display');
    this.display.setAttribute("disabled", "disabled");

    this.init = () => {
        this.btnClick();
        this.pressEnter();
    };

    this.pressEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.key === 'Enter') {
                this.result();
            }
        })
    };

    this.btnClick = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if (el.classList.contains('btn-num')) this.addNumDisplay(el.innerText);

            if (el.classList.contains('btn-clear')) this.clearDisplay();

            if (el.classList.contains('btn-del')) this.delNum();

            if (el.classList.contains('btn-eq')) this.result();
        });
    };

    this.result = () => {
        let count = this.display.value;
        
        try {
            count = eval(count);

            if(!count){
                alert('Conta Inválida!');
                return;
            }

            this.display.value = count;
        } catch (e) {
            alert('Conta Inválida!');
            return;
        }
    };

    this.addNumDisplay = (value) => {
        this.display.value += value;
        this.display.focus();
    };

    this.clearDisplay = () => this.display.value = '';
    this.delNum = () => this.display.value = this.display.value.slice(0, -1);
}

let calc = new Calculadora();
calc.init(); 
