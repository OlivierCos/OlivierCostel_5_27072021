///Création de la classe object pour récupérer chaque élément des objects de l'API///

export class object {
  constructor (varnish, _id, name, price, description, imageUrl){
    this.varnish=varnish;
    this._id=_id;
    this.name=name;
    this.price=price;
    this.description=description;
    this.imageUrl=imageUrl;
  }
}