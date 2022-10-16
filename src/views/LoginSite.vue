<template>
  <div class="login-site">
    <div class="dndive-icon">
      <dn-dive-icon-h-q style="height: 100%"></dn-dive-icon-h-q>
    </div>
    <div class="outer-login-window">
      <div class="welcome-title">
        <p>Welcome to DnDive</p>
      </div>
      <div class="outer-forms-window">
        <div class="">

        </div>
        <input-text-field text="Username"></input-text-field>
        <input-password-field text="Password"></input-password-field>
<!--        <input type="text" value="">-->
<!--        <input type="text" value="">-->
      </div>
      <div class="forgot-password-div">
        <a href="#">Forgot your password? Reset here</a>
      </div>
      <div class="login-register-button-div">
        <input class="login-button logregbutton" type="button" value="Sign in" @click="loginStore.changeStatus()">
        <input class="register-button logregbutton" type="button" value="Sign up">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import DnDiveIconHQ from "../components/General/DnDiveIconHQ.vue";
  import {userLoggedInStore} from "../stores/userLoggedIn";
  import InputTextField from "../components/General/inputTextField.vue";
  import InputPasswordField from "../components/General/inputPasswordField.vue";

  const loginStore = userLoggedInStore();

  console.log(loginStore.userLoggedIn);

</script>

<style scoped>
  .login-site{
    height: calc(100vh - 2rem);
    width: calc(100vw - 2rem);
    border-radius: 2rem;
    background: var(--background-color);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .dndive-icon{
    height: 40rem;
    /*width: 40rem;*/
    /*background: rgba(255, 0, 0, 0.1);*/
    margin-right: 5rem;
  }
  .outer-login-window{
    height: 80vh;
    width: 28rem;
    background: var(--highlight-color2);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .welcome-title{
    width: calc(100% - 4rem);
    height: 4rem;
    background-color: var(--highlight-color4);
    margin-top: 1rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1rem;
  }
  .welcome-title p {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }
  .outer-forms-window{
    height: 60%;
    width: calc(100% - 4rem);
    /*background-color: rgba(255, 0, 0, 0.1);*/
    flex-shrink: 1;
    margin-bottom: 1rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 0;
  }
  .forgot-password-div{
    width: calc(100% - 4rem);
    height: 2rem;
    /*background-color: rgba(0, 0, 255, 0.1);*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0.5rem;
  }
  .forgot-password-div a{
    font-size: 0.8rem;
    align-self: flex-start;
  }
  .login-register-button-div{
    height: 15%;
    width: calc(100% - 4rem);
    /*background-color: rgba(255, 0, 0, 0.1);*/
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
  }
  .login-button{
    height: 5rem;
    width: 12rem;
    background-color: var(--accent-color);
    border: none;
    border-radius: 1rem;
  }
  .register-button{
    height: 5rem;
    width: 12rem;
    background-color: var(--highlight-color6);
    border: none;
    border-radius: 1rem;
  }
  .logregbutton{
    transition: all 0.2s ease-in-out;
    font-size: 2rem;
  }
  .logregbutton:hover{
    cursor: pointer;
    filter: brightness(1.3);
  }

  @media (max-width: 1024px) {
    .dndive-icon{
      height: 25rem;
    }
    .login-site{

    }
  }

</style>