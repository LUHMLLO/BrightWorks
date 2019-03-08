<template>
  <div id="cover">






    <div id="cover-header">
      <div id="cover-header-content">
        <h1>Bright Works</h1>

        <p>A work and bussiness promoting platform with powerful tools to adquire clients and manage your work all in one place;
          <br>A better way to connect people with the fittest and most qualified for work they might need them.
        </p>

        <router-link to="/login">
          <button class="mdl-button">Sign in</button>
        </router-link>

        <router-link to="/signup">
          <button class="mdl-button">Sign up</button>
        </router-link>
      </div>
    </div>
    <!--cover header ends herer--->
















    <div id="cover-tabs" class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">


      <div class="mdl-tabs__tab-bar">
        <a href="#How-it-works" class="mdl-tabs__tab is-active">How it Works</a>
        <a href="#Services" class="mdl-tabs__tab">Services</a>
        <a href="#Features" class="mdl-tabs__tab">Features</a>
      </div>

      <div class="mdl-tabs__panel is-active" id="How-it-works">


         


        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam expedita maxime, eius non possimus adipisci fugit ipsum amet laboriosam eum autem, quas dolores magnam blanditiis consequuntur consequatur sit, iusto dolorem?</p>
      </div><!--tab ends here-->
      <div class="mdl-tabs__panel" id="Services">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fugit mollitia dolores, vitae neque laboriosam! Blanditiis, harum at suscipit quae sapiente aliquam temporibus inventore ipsa porro id? Placeat, a neque.</p>
      </div><!--tab ends here-->
      <div class="mdl-tabs__panel" id="Features">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur porro ducimus repellat laudantium esse ipsam reiciendis quae alias, distinctio perferendis consectetur inventore quisquam recusandae quaerat consequuntur, ex impedit sint!</p>
      </div><!--tab ends here-->



    </div><!-- cover tabs ends here -->


















  </div>
</template>

<script>
export default {
  name: "Cover",
  data() {
    return {};
  }
};
</script>

<style scoped>
#cover-header {
  background: url("https://images.unsplash.com/photo-1551864605-74764bd3d836?ixlib=rb-1.2.1&auto");
  background-size: cover;
  padding: 100px 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  box-shadow: inset 0 0 100px 900px rgba(0, 0, 0, 0.5);
  align-content: middle;
  display: flex;
  justify-content: center;
}
#cover-header-content {
  margin: 100px auto 130px auto;
  align-self: middle;
  color: white;
}
#cover-header-content button {
  color: white;
  border-radius: 100px;
  margin: 10px 10px;
}
</style>
