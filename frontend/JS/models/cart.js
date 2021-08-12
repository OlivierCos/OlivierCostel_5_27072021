export class cart {
    constructor (varnish, _id, name, price, description, imageUrl){
      this.varnish=varnish;
      this._id=_id;
      this.name=name;
      this.price=price;
      this.description=description;
      this.imageUrl=imageUrl;
    }
}