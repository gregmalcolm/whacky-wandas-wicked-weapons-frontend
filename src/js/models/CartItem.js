import Model from './Model.js'

export default class CartItem extends Model {
    constructor(attr) {
        super(attr);
        this._weaponid = attr.weaponId;
        this._name = attr.name;
        this._imageUrl = attr.imageUrl;
        this._baseCost = attr.baseCost;
        this._quantity = attr.quantity || 1;
    }

    get weaponId() {
        return this._weaponId;
    }
    set weaponId(weaponId) {
        this._weaponId = weaponId;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }

    get imageUrl() {
        return this._imageUrl;
    }
    set imageUrl(imageUrl) {
        this._imageUrl = imageUrl;
    }

    get baseCost() {
        return this._baseCost;
    }
    set baseCost(baseCost) {
        this._baseCost = baseCost;
    }

    get quantity() {
        return this._quantity;
    }
    set quantity(quantity) {
        this._quantity = quantity;
    }

    calculateCost() {
        return this.baseCost * this.quantity;
    }

    costInCoins() {
        const cost = this.calculateCost();
        if (cost >= 100) {
            return cost/100;
        } else if (cost >= 10){
            return cost/10;
        } else {
            return cost;
        }
    }

    costCurrency() {
        const cost = this.calculateCost();
        if (cost >= 100) {
            return "gp";
        } else if (cost >= 10){
            return "sp";
        } else {
            return "cp";
        }
    }

    save() {
        this.calculateCost();
        return true;
    }
}