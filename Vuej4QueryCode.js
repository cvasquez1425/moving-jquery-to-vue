var app = new Vue({
  el: "#w",
  data: {
    userName: "",
    title: "Moving from JQuery to Vue",
    user: null
  },
  methods: {
    onSubmit: function() {
      if (this.userName) {
        //user has put a user name in
        //console.log(`User: $(this.userName)`);
        //URIs
        var requiri = `https://api.github.com/users/${this.userName}`;
        var repouri = `https://api.github.com/users/${this.userName}/repos`;
        $.getJSON(requiri).done(json => {
          //Ensure we have a name
          if (!json.name) json.name = json.login;
          this.user = json; // just bind to the data

          $.getJSON(repouri).done(repos => Vue.set(this.user, "repos", repos));
        });
      }
    }
  }
});
