
enum types_doc {
    Passport = "Паспорт",
    driver_license = "Водительское удостоверение"
}

enum types_car {
    hetch = "хетчбэк",
    universal = "универсал"
}

enum clases_car {
   start = "start",
   standart = "стандарт",
   premium = "премиум",
   luxary = "лухари",
   ultimate_plus_3000_gt_extra_sport = "Ултимейт плюс 300 джити ехтра спорт"
}

interface IOwner {
    name: string;
    surname: string;
    birthDate: Date;
    type_doc: types_doc;
    series_doc: string;
    number_doc: string;
    ownerInfo: () => string;
}

interface Ivehicle {
    marka: string;
    model: string;
    years: string;
    vin_num: string;
    reg_num: string;
    vehicleInfo: () => string;
    owner: IOwner;
    get_not_full_info:() => string;
}

interface car extends Vehicle {
    types: types_car;
    class: clases_car;
}



class Vehicle implements Ivehicle {
    private _owner!: IOwner;
    get owner(): IOwner {
        return this._owner;
    }
    set owner(value: IOwner) {
        this._owner = value;
    }
    get marka(): string {
        return this._marka;
    }
    set marka(value: string) {
        this._marka = value
    }
    get model(): string {
        return this._model;
    }
    set model(value: string) {
        this._model = value;
    }
    get years(): string {
        return this._years;
    }
    set years(value: string) {
        this._years = value
    }
    get vin_num(): string {
        return this._vin_num;
    }
    set vin_num(value: string) {
        this._vin_num = value
    }
    get reg_num(): string {
        return this._reg_num;
    }
    set reg_num(value: string) {
        this._reg_num = value;
    }
    constructor(private _marka: string, private _model: string, private _years: string, private _vin_num: string, private _reg_num: string) {}
    vehicleInfo(): string {
        return 'марка - ' + this._marka + '\n модель - ' + this._model + '\nгод выпуска - ' +  this._years + '\nВин номер - ' + this._vin_num + '\nРегистрационный номер' + this._reg_num;
    }

    get_not_full_info(): string {
        return '\nВин номер - ' + this._vin_num + '\nИмя - ' + owner.name + ' ' + owner.surname + '\nРегистрационный номер - ' + this._reg_num;
    }
}

class Car extends Vehicle implements car {
    private _types!: types_car;
    private _class!: clases_car;
    get types(): types_car {
        return this._types;
    }
    set types(value: types_car) {
        this._types = value;
    }
    get class(): clases_car {
        return this._class;
    }
    set class(value: clases_car) {
        this.class = value;
    }
    constructor(marka: string, model: string, years: string, vin_num: string, reg_num: string) {
        super(marka, model, years, vin_num, reg_num);
   }
}

interface motorbike extends Vehicle {
    type_ram: string;
    for_sport: boolean;
}

class Motorbike extends Vehicle implements motorbike {
    private _type_ram!: string;
    private _for_sport!: boolean;
    get type_ram(): string {
        return this.type_ram;
    }
    set type_ram(value: string) {
        this.type_ram = value;
    }
    get for_sport(): boolean {
        return this.for_sport;
    }
    set for_sport(value: boolean) {
        this.for_sport = value;
    }
    constructor(marka: string, model: string, years: string, vin_num: string, reg_num: string){
        super(marka, model, years, vin_num, reg_num);
    }
}


class Owner implements IOwner {
    private _birthDate: Date;
    private _name: string;
    private _surname: string;
    private _type_doc: types_doc;
    private _series_doc: string;
    private _number_doc: string;
    get birthDate(): Date {
        return this._birthDate;
    }
    set birthDate(value: Date) {
        this._birthDate = value;
    }
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
    get surname(): string {
        return this._surname;
    }
    set surname(value: string) {
        this._surname = value;
    }
    get type_doc(): types_doc {
        return this._type_doc;
    }
    set type_doc(value: types_doc) {
        this._type_doc = value;
    }
    get series_doc():string {
        return this._series_doc;
    }
    set series_doc(value: string) {
        this._series_doc = value;
    }
    get number_doc(): string {
        return this._number_doc;
    }
    set number_doc(value: string) {
        this._number_doc = value
    }
    constructor(birthDate: Date, name: string, surname: string, type_doc: types_doc, series_doc: string, number_doc: string){
        this._birthDate = birthDate;
        this._name = name;
        this._series_doc = series_doc;
        this._number_doc = number_doc;
        this._surname = surname;
        this._type_doc = type_doc;
    }
    ownerInfo(): string {
        return 'name: ' + this._name + '\n surname: ' + this._surname + '\n день рождения: ' + this.birthDate.toString() + '\nтип документа' + this._type_doc + '\nсерия документа' + this._series_doc + '\nНомер документа' + this._number_doc;
    }
}


interface IVehicleStorage<T extends Ivehicle> {
    created: Date;
    data: T[];
    getAll: () => T[];

    save(data: T): void;
    sortByModel(): T[];
    remove(index: number): void;
    get_by_name(name: string): T[];
}

class VehicleStorage<T extends Ivehicle> implements IVehicleStorage<T> {
    private readonly _created: Date;
    private _data: T[];

    get created(): Date {
        return this._created;
    }

    get data(): T[] {
        return this._data;
    }

    constructor() {
        this._created = new Date();
        this._data = [];
    }

    getAll(): T[] {
        return this.data;
    }

    remove(index: number): void {
         this.data.splice(index, 1);
    }

    save(data: T): void {
        this._data.push(data);
    }
    
    sortByModel(): T[] {
        let array = Array.from(this._data);
        array.sort((a,b)=>a.model.localeCompare(b.model));
        console.log(array);
        return array
    }

    get_by_name(name: string): T[] {
        let array: T[] = [];
        for(let vehicle in this._data)
        {   
            if(this._data[vehicle].owner.name.toUpperCase().localeCompare(name.toUpperCase()) == 0)
            array.push(this._data[vehicle])
        }
        return array;
    }
}


const dodg: car = new Car('Dodge', 'Н', '1974', '1HGCM82633A123456', 'У821НН');
const camry: car = new Car('Toyota', 'О', '2023', ' 2C4RDGBG5KR123789 ', 'К530КА');

const owner: IOwner = new Owner(new Date(), 'Денис', 'Анатольевич', types_doc.Passport, '6322', '563823');
const owner2: IOwner = new Owner(new Date(), 'ДЕНИС', 'Анатольевич', types_doc.Passport, '6322', '563823');
const owner3: IOwner = new Owner(new Date(), 'ДенИс', 'Анатольевич', types_doc.Passport, '6322', '563823');
const owner4: IOwner = new Owner(new Date(), 'Максим', 'Анатольевич', types_doc.Passport, '6322', '563823');
const owner5: IOwner = new Owner(new Date(), 'ИВАН', 'Анатольевич', types_doc.Passport, '6322', '563823');
const owner6: IOwner = new Owner(new Date(), 'Влад', 'Анатольевич', types_doc.Passport, '6322', '563823');

dodg.owner = owner;
camry.owner = owner2;
const ural: motorbike = new Motorbike('Ural', 'А', '1965', 'JH2SC5900DK100264', 'ABC123');
const IW: motorbike = new Motorbike('ИЖ', 'Б', '1989', 'JH2SC5900DK100264', 'СИВ472');

ural.owner = owner;
IW.owner = owner3;
const kia: Ivehicle = new Vehicle('киа', 'С', '2015', 'JH2SC5900DK100264', 'У821НН');
const hunday: Ivehicle = new Vehicle('Хендай', 'Д', '2014' , '2C4RDGBG5KR123789', 'A001ПР');

kia.owner = owner4;
hunday.owner = owner5;
const carStorage: IVehicleStorage<car> = new VehicleStorage();
carStorage.save(dodg);
carStorage.save(camry);

const motoStorage: IVehicleStorage<motorbike> = new VehicleStorage();
motoStorage.save(IW);
motoStorage.save(ural);

const vehicleStorage: IVehicleStorage<Ivehicle> = new VehicleStorage();
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




