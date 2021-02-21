// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= require semantic-ui
//= require active_storage_drag_drop
//= require jquery

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

require("semantic-ui-sass")
$(function(){
    $('.ui.dropdown').dropdown();
  })
Rails.start()
Turbolinks.start()
ActiveStorage.start()
