const helloBtn = document.querySelector('#ctn-btn');
const startBtn = document.querySelector('#start-btn');
const stopBtn = document.querySelector('#stop-btn');
const resetBtn = document.querySelector('#reset-btn');
const faqsBtn = document.querySelector('#display-faqs');
const submitBtn = document.querySelector('#submit');
const showFormBtn = document.querySelector('#show-form-btn');
const inputParams = document.querySelectorAll('.input-params');

let count = 0;
let counter = false;
let showfqs = false;

// part1 funtion that takes user input and displays a hello message on the browser
function sayHello(name) {
  document.querySelector('.hello-msg').textContent = `Hello, ${name}`;
  document.querySelector('.hello-msg').style.display = 'block';
  document.querySelector('#name').value = '';
}

// interval to start a counter function when called
let counterTimer = setInterval(() => {
  if (counter) {
    count += 1;
    document.querySelector('.display-count').textContent = count;
  }
}, 1000);

// function to check state of counter and stop or continue counting
function stopCounter() {
  if (counter && count > 0) {
    counter = false;
    stopBtn.textContent = 'Continue';
  }
  else if (!counter && count > 0) {
    counter = true;
    stopBtn.textContent = 'Stop';
  }
}

// function to show or hide the faqs section. This function also add style to the button for a more interactive format
function showQweries() {
  if (!showfqs) {
    showfqs = true;
    document.querySelector('.faqs-body').style.height = 100 + 'px';
    faqsBtn.style.transform = 'rotateZ(90deg)';
  } else {
    showfqs = false;
    document.querySelector('.faqs-body').style.height = 0;
    faqsBtn.style.transform = 'rotateZ(0deg)';
  }
}

// event listener to check on click functions and checks if user typed a name
helloBtn.addEventListener('click', () => {
  const name = document.querySelector('#name').value;
  if (name) sayHello(name);
  else {
    alert("Please provide a name");
  }
});

// event listeners for the start, stop and reset buttons of the counter
// listener on start button starts the count by calling the countertimer and setting counter state to true
startBtn.addEventListener('click', () => {
  counter = true;
  counterTimer;
});

// sets counter state to fals and pauses the counting andwith the stopCounter function adds 'Continue' on the button for user to continue counting
stopBtn.addEventListener('click', stopCounter);

// resets the count back to zero and sets counter to false
resetBtn.addEventListener('click', () => {
  counter = false;
  count = 0;
  document.querySelector('.display-count').textContent = count;
});

// calls the showQueries function
faqsBtn.addEventListener('click', showQweries);

// this event listener listens for 'click' events on the submit button and check whether all input fields have been filled.
submitBtn.addEventListener('click', () => {
  inputParams.forEach(param => {
    if (param.value === '') {
      document.querySelector('.input-error').style.display = 'block';
      document.querySelector('.form-wrapper').style.display = 'none';
    } else {
      document.querySelector('.input-error').style.display = 'block';
      document.querySelector('.form-wrapper').style.display = 'none';
      document.querySelector('.input-error').innerHTML = "Success!";
      document.querySelector('.input-error').classList.add('form-success');
    }
  });
})

// in the case user did not provide certain input, this listener ensures they can go back to the form
showFormBtn.addEventListener('click', () => {
  document.querySelector('.input-error').style.display = 'none';
  document.querySelector('.form-wrapper').style.display = 'block';
})