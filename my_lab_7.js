"use strict";
var types_doc;
(function (types_doc) {
    types_doc["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
    types_doc["driver_license"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
})(types_doc || (types_doc = {}));
var types_car;
(function (types_car) {
    types_car["hetch"] = "\u0445\u0435\u0442\u0447\u0431\u044D\u043A";
    types_car["universal"] = "\u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B";
})(types_car || (types_car = {}));
var clases_car;
(function (clases_car) {
    clases_car["start"] = "start";
    clases_car["standart"] = "\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442";
    clases_car["premium"] = "\u043F\u0440\u0435\u043C\u0438\u0443\u043C";
    clases_car["luxary"] = "\u043B\u0443\u0445\u0430\u0440\u0438";
    clases_car["ultimate_plus_3000_gt_extra_sport"] = "\u0423\u043B\u0442\u0438\u043C\u0435\u0439\u0442 \u043F\u043B\u044E\u0441 300 \u0434\u0436\u0438\u0442\u0438 \u0435\u0445\u0442\u0440\u0430 \u0441\u043F\u043E\u0440\u0442";
})(clases_car || (clases_car = {}));
class Vehicle {
    get owner() {
        return this._owner;
    }
    set owner(value) {
        this._owner = value;
    }
    get marka() {
        return this._marka;
    }
    set marka(value) {
        this._marka = value;
    }
    get model() {
        return this._model;
    }
    set model(value) {
        this._model = value;
    }
    get years() {
        return this._years;
    }
    set years(value) {
        this._years = value;
    }
    get vin_num() {
        return this._vin_num;
    }
    set vin_num(value) {
        this._vin_num = value;
    }
    get reg_num() {
        return this._reg_num;
    }
    set reg_num(value) {
        this._reg_num = value;
    }
    constructor(_marka, _model, _years, _vin_num, _reg_num) {
        this._marka = _marka;
        this._model = _model;
        this._years = _years;
        this._vin_num = _vin_num;
        this._reg_num = _reg_num;
    }
    vehicleInfo() {
        return 'марка - ' + this._marka + '\n модель - ' + this._model + '\nгод выпуска - ' + this._years + '\nВин номер - ' + this._vin_num + '\nРегистрационный номер' + this._reg_num;
    }
    get_not_full_info() {
        return '\nВин номер - ' + this._vin_num + '\nИмя - ' + owner.name + ' ' + owner.surname + '\nРегистрационный номер - ' + this._reg_num;
    }
}
class Car extends Vehicle {
    get types() {
        return this._types;
    }
    set types(value) {
        this._types = value;
    }
    get class() {
        return this._class;
    }
    set class(value) {
        this.class = value;
    }
    constructor(marka, model, years, vin_num, reg_num) {
        super(marka, model, years, vin_num, reg_num);
    }
}
class Motorbike extends Vehicle {
    get type_ram() {
        return this.type_ram;
    }
    set type_ram(value) {
        this.type_ram = value;
    }
    get for_sport() {
        return this.for_sport;
    }
    set for_sport(value) {
        this.for_sport = value;
    }
    constructor(marka, model, years, vin_num, reg_num) {
        super(marka, model, years, vin_num, reg_num);
    }
}
class Owner {
    get birthDate() {
        return this._birthDate;
    }
    set birthDate(value) {
        this._birthDate = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get surname() {
        return this._surname;
    }
    set surname(value) {
        this._surname = value;
    }
    get type_doc() {
        return this._type_doc;
    }
    set type_doc(value) {
        this._type_doc = value;
    }
    get series_doc() {
        return this._series_doc;
    }
    set series_doc(value) {
        this._series_doc = value;
    }
    get number_doc() {
        return this._number_doc;
    }
    set number_doc(value) {
        this._number_doc = value;
    }
    constructor(birthDate, name, surname, type_doc, series_doc, number_doc) {
        this._birthDate = birthDate;
        this._name = name;
        this._series_doc = series_doc;
        this._number_doc = number_doc;
        this._surname = surname;
        this._type_doc = type_doc;
    }
    ownerInfo() {
        return 'name: ' + this._name + '\n surname: ' + this._surname + '\n день рождения: ' + this.birthDate.toString() + '\nтип документа' + this._type_doc + '\nсерия документа' + this._series_doc + '\nНомер документа' + this._number_doc;
    }
}
class VehicleStorage {
    get created() {
        return this._created;
    }
    get data() {
        return this._data;
    }
    constructor() {
        this._created = new Date();
        this._data = [];
    }
    getAll() {
        return this.data;
    }
    remove(index) {
        this.data.splice(index, 1);
    }
    save(data) {
        this._data.push(data);
    }
    sortByModel() {
        let array = Array.from(this._data);
        array.sort((a, b) => a.model.localeCompare(b.model));
        console.log(array);
        return array;
    }
    get_by_name(name) {
        let array = [];
        for (let vehicle in this._data) {
            if (this._data[vehicle].owner.name.toUpperCase().localeCompare(name.toUpperCase()) == 0)
                array.push(this._data[vehicle]);
        }
        return array;
    }
}
const dodg = new Car('Dodge', 'Н', '1974', '1HGCM82633A123456', 'У821НН');
const camry = new Car('Toyota', 'О', '2023', ' 2C4RDGBG5KR123789 ', 'К530КА');
const owner = new Owner(new Date(), 'Денис', 'Анатольевич', types_doc.Passport, '6322', '563823');
const owner2 = new Owner(new Date(), 'ДЕНИС', 'Анатольевич', types_doc.Passport, '6322', '563823');
const owner3 = new Owner(new Date(), 'ДенИс', 'Анатольевич', types_doc.Passport, '6322', '563823');
const owner4 = new Owner(new Date(), 'Максим', 'Анатольевич', types_doc.Passport, '6322', '563823');
const owner5 = new Owner(new Date(), 'ИВАН', 'Анатольевич', types_doc.Passport, '6322', '563823');
const owner6 = new Owner(new Date(), 'Влад', 'Анатольевич', types_doc.Passport, '6322', '563823');
dodg.owner = owner;
camry.owner = owner2;
const ural = new Motorbike('Ural', 'А', '1965', 'JH2SC5900DK100264', 'ABC123');
const IW = new Motorbike('ИЖ', 'Б', '1989', 'JH2SC5900DK100264', 'СИВ472');
ural.owner = owner;
IW.owner = owner3;
const kia = new Vehicle('киа', 'С', '2015', 'JH2SC5900DK100264', 'У821НН');
const hunday = new Vehicle('Хендай', 'Д', '2014', '2C4RDGBG5KR123789', 'A001ПР');
kia.owner = owner4;
hunday.owner = owner5;
const carStorage = new VehicleStorage();
carStorage.save(dodg);
carStorage.save(camry);
const motoStorage = new VehicleStorage();
motoStorage.save(IW);
motoStorage.save(ural);
const vehicleStorage = new VehicleStorage();
vehicleStorage.save(dodg);
vehicleStorage.save(camry);
vehicleStorage.save(ural);
vehicleStorage.save(IW);
vehicleStorage.save(kia);
vehicleStorage.save(hunday);
console.log("=========================");
console.log(vehicleStorage.sortByModel());
console.log("=========================");
console.log(vehicleStorage.getAll());
console.log(vehicleStorage.get_by_name('Денис'));
console.log(dodg.get_not_full_info());
// vehicleStorage.remove(0);
// console.log(carStorage.getAll());
// console.log(motoStorage.getAll());
// console.log(vehicleStorage.getAll());
