function responsiveNavbarAnimation(){

  let menuBar = document.querySelector("#responsive_navbar")
  let flag = false
  document.querySelector(".nav_menu_icon i").addEventListener("click", ()=>{
    if (!flag){
      menuBar.style.transform = "translateX(0%)"
      flag = true
    } else {
      menuBar.style.transform = "translateX(110%)"
      flag = false
    }
  })

}
responsiveNavbarAnimation()

const tabLogin = document.getElementById('tab-login');
const tabSignup = document.getElementById('tab-signup');
const paneLogin = document.getElementById('pane-login');
const paneSignup = document.getElementById('pane-signup');
const switchLogin = document.getElementById('switch-login');
const toast = document.getElementById('toast');

function setActiveTab(active) {
    if (active === 'login') {
        tabLogin.classList.add('active');
        tabSignup.classList.remove('active');
        paneLogin.classList.remove('hidden');
        paneSignup.classList.add('hidden');
        switchLogin.textContent = 'Sign Up';
    } else {
        tabSignup.classList.add('active');
        tabLogin.classList.remove('active');
        paneSignup.classList.remove('hidden');
        paneLogin.classList.add('hidden');
        switchLogin.textContent = 'Login';
    }
}

[tabLogin, tabSignup].forEach(btn => btn.addEventListener('click', () => setActiveTab(btn.id === 'tab-login' ? 'login' : 'signup')));

switchLogin.addEventListener('click', () => {
    setActiveTab(tabLogin.classList.contains('active') ? 'signup' : 'login');
});

function togglePasswordButtons() {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach((eye) => {
        eye.addEventListener('click', () => {
            const target = document.getElementById(eye.dataset.target);
            if (!target) return;
            target.type = target.type === 'password' ? 'text' : 'password';
            eye.textContent = target.type === 'password' ? '👁' : '🙈';
        });
    });
}

togglePasswordButtons();

function showToast(message, ms = 2000) {
    toast.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, ms);
}

function handleFakeSubmit(formType, event) {
    event.preventDefault();

    showToast(`${formType === 'login' ? 'Logging in' : 'Signing up'}...`, 2500);

    setTimeout(() => {
        const form = document.getElementById(`${formType}-form`);
        const formData = new FormData(form);

        const name = formData.get('username') || formData.get('email') || 'User';

        showToast(`You are successfully ${formType === 'login' ? 'logged in' : 'signed up'} as ${name}!`, 2000);
        alert(`You are successfully ${formType === 'login' ? 'logged in' : 'signed up'}!`);

        form.reset();
        setActiveTab(formType);
    }, 2500);
}

const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginForm.addEventListener('submit', (e) => handleFakeSubmit('login', e));
signupForm.addEventListener('submit', (e) => handleFakeSubmit('signup', e));
