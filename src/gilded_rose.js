class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name == 'Aged Brie' ) {
        increaseItemQuality(this.items[i])
      }
      else if ( this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        increaseItemQuality(this.items[i])
        if (this.items[i].sellIn < 11) {
          increaseItemQuality(this.items[i])
        }
        if (this.items[i].sellIn < 6) {
          increaseItemQuality(this.items[i])
        }
       
      }      
      else if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
          decreaseItemQuality(this.items[i]);
        }

      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      
      if (this.items[i].sellIn < 0) {

        if (this.items[i].name == 'Aged Brie') {
          increaseItemQuality(this.items[i])
        }

        else if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert'){
          this.items[i].quality = 0;
        }

        else if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {

          decreaseItemQuality(this.items[i]);
        }
        
      }
    }

    return this.items;
  }

  
}
function increaseItemQuality(item) {
  if (item.quality < 50) {
    item.quality = item.quality + 1;
  }
}
function decreaseItemQuality(item) {
  if (item.quality > 0) {
    item.quality = item.quality - 1;
  }
}

module.exports = {
  Item,
  Shop
}
