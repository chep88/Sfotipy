//Objeto literal para poder acceder a backbone desde la consola 
Sfotipy = {};
//Modelos
Sfotipy.Song = Backbone.Model.extend({});
Sfotipy.Album = Backbone.Model.extend({});
//Vistas
Sfotipy.SongView = Backbone.View.extend({
	tagName: 'li',
	className: 'items',
	//funcion que obtiene información del modelo
	render: function(){
		var song=this.model;
		var name=song.get("name");
		var author=song.get("author");

		this.$el.html("<span>"+author+"</span>-<span>"+name+"</span>");
	}
});
window.Sfotipy=Sfotipy;